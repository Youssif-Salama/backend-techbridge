import ErrorHandlerService, { AppError } from "../../services/error.services.js";
import experienceModel from "../models/experience.model.js";

export const addAnExperience=ErrorHandlerService(async(req,res)=>{
  const files=req.files;
  let arrangedFiles=[];
  for(const file of files){
    arrangedFiles.push({
      name:file.originalname,
      url:file.path
    })
  }
  const {id}=req.user;
  req.body.makerId=id;
  req.body.files=arrangedFiles;
  const experience=await experienceModel.create(req.body);
  if(!experience) throw new AppError("experience not created",400);
  res.status(200).json({message:"experience added successfully",data:experience})
})