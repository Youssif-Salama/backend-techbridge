import ErrorHandlerService, { AppError } from "../../services/error.services.js";
import jobModel from "../models/job.model.js";

export const myAppliedJobs=ErrorHandlerService(async(req,res,next)=>{
  const myApplications=await req.dbQuery;
  if(!myApplications) throw new AppError("no applications found",404);
  const allMyApplicationsJobIds=[];
  for(const application of myApplications){
    allMyApplicationsJobIds.push(application.jobId);
  }
  const findAppliedJobs=jobModel.find({ _id: { $in: allMyApplicationsJobIds } });
  req.dbQuery=findAppliedJobs;
  next();
})