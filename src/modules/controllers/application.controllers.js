import ErrorHandlerService, {
  AppError,
} from "../../services/error.services.js";
import applicationModel from "../models/application.model.js";
import jobModel from "../models/job.model.js";

export const applyJob = ErrorHandlerService(async (req, res) => {
  const {cover,userId,jobId,files}=req.body;

  const applyJob = await applicationModel.create({
    cover,
    userId,
    jobId,
    resume:files[0]
  });
  if (!applyJob) throw new AppError("application not created", 400);
  // update job
  const desiredJob = await jobModel.findOne({ _id: jobId });
  if(!desiredJob) {
    await applicationModel.deleteOne({ _id: applyJob._id });
    throw new AppError("job not found, application failed", 404);
  }
  if(desiredJob.appliers.includes(userId)){
    await applicationModel.deleteOne({ _id: applyJob._id });
    throw new AppError("you have already applied for this job", 400);
  }
  desiredJob.appliers.push(userId);
  await desiredJob.save();
  res.status(200).json({ message: "applied successfully", data: applyJob });
});
