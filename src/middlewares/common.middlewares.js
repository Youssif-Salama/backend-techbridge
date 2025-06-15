import userModel from "../modules/models/user.model.js";
import ErrorHandlerService, { AppError } from "../services/error.services.js";

export const validatorMiddleware = (schema) => {
  return async (req, res, next) => {
    try {
      await schema.validateAsync(req.body, { abortEarly: false });
      next();
    } catch (error) {
      const errors = error.details.map((err) => err.message.split("\"").join(""));
      res.status(400).json({ message: "validation failed", errors });
    }
  };
};



export const executionMiddleware = (responseObj) => ErrorHandlerService(async(req,res)=>{
  const result=await req.dbQuery;
  if(!result) throw new AppError(responseObj?.fail?.message,responseObj?.fail?.statusCode);
  let reqResult={
    message:responseObj?.success?.message,
    data:result,
    search:res.locals.searchResults,
    meta:res.meta
  };
  res.status(responseObj?.success?.statusCode || 200).json(reqResult);
})


export const findUserMiddleware=(whay)=>ErrorHandlerService(async(req,res,next)=>{
  const {Email,id,Phone}=req.body;
  if(!Email && !id && !Phone) throw new AppError(`please pass a field called ${whay} to perform this action`,404);
  let findObj={};
  if(Email && whay=="Email") findObj.Email=Email;
  if(id && whay=="id") findObj._id=id;
  if(Phone && whay=="Phone") findObj.Phone=Phone;
  const findUser=await userModel.findOne(findObj);
  if(!findUser) throw new AppError("user not found",404);
  req.findUser=findUser;
  next();
})


export const combineFilesWithBodyMiddleware=ErrorHandlerService(async(req,res,next)=>{
  const files=req.files;
  let arrangedFiles=[];
  if(req.body.oldFiles){
    let parsedOldFiles=JSON.parse(req.body.oldFiles);
    arrangedFiles=parsedOldFiles;
  }
  for(const file of files){
    arrangedFiles.push({
      name:file.originalname,
      url:file.path,
      type:file.mimetype
    })
  }
  req.body.files=arrangedFiles;
  delete req.body.oldFiles;
  next();
})

export const addMakerIdToBodyMiddleware=ErrorHandlerService(async(req,res,next)=>{
  const {id}=req.user;
  const isItUser=await userModel.findById(id);
  req.body.makerId=id;
  req.body.makerModel=isItUser ? "user" : "company";
  next();
})