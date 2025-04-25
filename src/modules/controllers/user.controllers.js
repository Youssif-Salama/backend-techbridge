import ErrorHandlerService from "../../services/error.services.js";
import educationModel from "../models/education.model.js";
import employeeModel from "../models/employee.model.js";
import experienceModel from "../models/experience.model.js";
import projectModel from "../models/project.model.js";
import userModel from "../models/user.model.js";

export const getMyData = ErrorHandlerService(async (req, res) => {
  const user = req.user;

  if (!user || !user.id) {
    return res.status(400).json({ message: "User not found" });
  }
  const [findUser, projects, educations, experiences, employee] = await Promise.all([
    userModel.findById(user.id),
    projectModel.find({ makerId: user.id }),
    educationModel.find({ makerId: user.id }),
    experienceModel.find({ makerId: user.id }),
    employeeModel.findOne({ userId: user.id })
  ]);

  res.status(200).json({
    message: "Data fetched successfully",
    data: { user: findUser, projects, educations, experiences, employee },
  });
});


export const addASkill = ErrorHandlerService(async (req, res) => {
  const {Skill}=req.body;
  const user = req.user;
  if (!user || !user.id) {
    return res.status(400).json({ message: "User not found" });
  }
  const findUser = await userModel.findById(user.id);
  if (!findUser) {
    return res.status(400).json({ message: "User not found" });
  }
  // check if skill is already added
  if (findUser.skills.includes(Skill)) {
    return res.status(400).json({ message: "Skill already added" });
  }
  findUser.skills.push(Skill);
  await findUser.save();
  res.status(200).json({ message: "Skill added successfully", data: findUser });
})

export const deleteASkill=ErrorHandlerService(async(req,res)=>{
  const {Skill}=req.body;
  const user=req.user;
  if(!user || !user.id) return res.status(400).json({message:"user not found"});
  const findUser=await userModel.findById(user.id);
  if(!findUser) return res.status(400).json({message:"user not found"});
  findUser.skills.splice(findUser.skills.indexOf(Skill),1);
  await findUser.save();
  res.status(200).json({message:"skill deleted successfully",data:findUser})
})


export const updateMyData=ErrorHandlerService(async(req,res)=>{
  const {Fname,Lname,Gender,Address,Languages,Experience}=req.body;
  const user=req.user;
  if(!user || !user.id) return res.status(400).json({message:"user not found"});
  const findUser=await userModel.findById(user.id);
  if(!findUser) return res.status(400).json({message:"user not found"});
  findUser.Fname=Fname;
  findUser.Lname=Lname;
  findUser.Gender=Gender;
  findUser.Address=Address;
  findUser.Languages=Languages;
  findUser.Experience=Experience;
  await findUser.save();
  res.status(200).json({message:"data updated successfully",data:findUser})
})

export const changeImage=ErrorHandlerService(async(req,res)=>{
  const files=req.files;
  let profileImage={
    name:files[0].originalname,
    url:files[0].path
  };
  const user=req.user;
  if(!user || !user.id) return res.status(400).json({message:"user not found"});
  const findUser=await userModel.findById(user.id);
  if(!findUser) return res.status(400).json({message:"user not found"});
  findUser.Img=profileImage;
  await findUser.save();
  res.status(200).json({message:"image updated successfully",data:findUser})
});