import ErrorHandlerService, { AppError } from "../../services/error.services.js";
import educationModel from "../models/education.model.js";

export const addAnEducation=ErrorHandlerService(async(req,res)=>{
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
  const education=await educationModel.create(req.body);
  if(!education) throw new AppError("education not created",400);
  res.status(200).json({message:"education added successfully",data:education})
})