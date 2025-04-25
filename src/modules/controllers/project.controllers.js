import ErrorHandlerService, { AppError } from "../../services/error.services.js";
import projectModel from "../models/project.model.js";

export const addAProject=ErrorHandlerService(async(req,res)=>{
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
  const project=await projectModel.create(req.body);
  if(!project) throw new AppError("project not created",400);
  res.status(200).json({message:"project added successfully",data:project})
})