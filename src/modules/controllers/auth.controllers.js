import bcryptHashingService, { bcryptCompareService } from "../../services/bcrypt.services.js";
import ErrorHandlerService, { AppError } from "../../services/error.services.js";
import jwtEncodingService, { jwtDecodingService } from "../../services/jwt.services.js";
import { sendEmailService } from "../../services/nodemailer.services.js";
import otpGeneratorService from "../../services/otp.services.js";
import companyModel from "../models/company.model.js";
import userModel from "../models/user.model.js";

export const signup = ErrorHandlerService(async (req, res) => {
  const { Password,Name,Email,Phone,IsUser } = req.body;
  if(IsUser) req.body={
    Fname:Name.split(" ")[0],
    Lname:Name.split(" ")[1],
    Email:Email,
    Phone:Phone,
    Password:Password
  };
  else req.body={
    Title:Name,
    Email:Email,
    Phone:Phone,
    Password:Password
  };
  let model=IsUser?userModel:companyModel;
  const hashedPassword = await bcryptHashingService(Password);
  const createUser = await model.create({
    ...req.body,
    Password: hashedPassword,
  });
  if(!createUser) throw new AppError("user not created",400);
  sendEmailService({
    to: createUser.Email,
    subject: "signup verification email",
    fun: "verifyTemplate",
    funParams: { link: `http://localhost:3000/api/v1/auth/verify/${jwtEncodingService({ _id: createUser._id })}`,name:createUser.Fname || createUser.Title },
  });
  res.status(201).json({
    message: "user created successfully, check your email",
    data: createUser,
  });
});

export const verifyEmail = ErrorHandlerService(async (req, res) => {
  const { token } = req.params;
  const decodedToken = jwtDecodingService(token);
  const user = await userModel.findOne({ _id: decodedToken._id });
  if (!user) {
    throw new AppError("invalid token",498);
  }
  user.Verified = true;
  await user.save();
  res.redirect("http://localhost:3000/login");
});


export const login = ErrorHandlerService(async (req, res) => {
  const { Email, Password, Remember } = req.body;
  const user = await userModel.findOne({ Email });
  const company = await companyModel.findOne({ Email });
  if (!user && !company) throw new AppError("User not found", 404);
  let result = user ? user : company;
  const isPasswordMatch = await bcryptCompareService(Password, result.Password);
  if (!isPasswordMatch) throw new AppError("Password does not match", 401);
  const expiresIn = Remember ? '30d' : '1h';
  const token = jwtEncodingService({ id: result._id, email: result.Email,type:result.Type?"company":"user" }, expiresIn);
  res.status(200).json({
    message: "Login successful",
    data: { token }
  });
});

export const resetPasswordReq=ErrorHandlerService(async(req,res)=>{
  const user=req.findUser;
  const otp=otpGeneratorService(6);
  let exp=Remember?"30d":"1d";
  const token=jwtEncodingService({id:user._id,Email:user.Email,otp},exp);
  sendEmailService({
    to:user.Email,
    subject:"reset password",
    fun:"resetPasswordTemplate",
    funParams:{otp,name:user.Fname}
  })
  res.status(200).json({message:"email sent successfully, pls check for otp",resetPasswordToken:token})
})


export const resetPasswordDo=ErrorHandlerService(async(req,res)=>{
  const {otp,newPassword}=req.body;
  const {Email,otp:savedOtp}=jwtDecodingService(req.body.resetPasswordToken);
  const user=await userModel.findOne({Email});
  if(!user) throw new AppError("user not found",404);
  const isOtpMatch=otp.toString()==savedOtp.toString();
  if(!isOtpMatch) throw new AppError("otp not match",401);
  const hashedPassword=await bcryptHashingService(newPassword);
  user.Password=hashedPassword;
  await user.save();
  res.status(200).json({message:"password reset successfully"})
})