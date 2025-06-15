import ErrorHandlerService, { AppError } from "../../services/error.services.js";
import applicationModel from "../models/application.model.js";
import postModel from "../models/post.model.js";
import userModel from "../models/user.model.js";
import companyModel from "../models/company.model.js";

export const followProfile = ErrorHandlerService(async (req, res) => {
  const user = req.user;
  const { id, model } = req.body;
  const whichModel=model=="user"?userModel:companyModel;
  const findModel = await whichModel.findById(id);
  if (!findModel) throw new AppError("Profile not found", 404);
  if (findModel._id.equals(user.id))
    throw new AppError("you can't follow yourself", 400);
  if (findModel.Followers.includes(user.id)) {
    findModel.Followers.splice(findModel.Followers.indexOf(user.id), 1);
    await findModel.save();
    return res
      .status(200)
      .json({ message: "unfollowed successfully", data: findModel });
  }
  findModel.Followers.push(user.id); // Access the correct field 'Followers'
  await findModel.save();
  res.status(200).json({ message: "followed successfully" });
});

export const getProfileAnalytics=ErrorHandlerService(async(req,res)=>{
  const user=req.user;
  const {model,id,forWho}=req.body;
  const _id=forWho=="me"?user?.id:id;
  const whichModel=model=="user"?userModel:companyModel;
  const findModel=await whichModel.findOne({_id});
  const postsCount=await postModel.countDocuments({makerId:_id});
  const countApplications=await applicationModel.countDocuments({userId:_id});
  const countFollowers=findModel?.followers?.length || 0;
  const countVisists=findModel?.Visits?.length || 0;

  res.status(200).json({message:"data fetched successfully",data:{postsCount,countApplications,countFollowers,countVisists}});
});

export const profileView=ErrorHandlerService(async(req,res)=>{
  const user=req.user;
  const {model,profileId}=req.body;
  if(!model) throw new AppError("model not found",404);
  if(!profileId) throw new AppError("profile not found",404);
  const whichModel=model=="user"?userModel:companyModel;
  const findModel=await whichModel.findOne({_id:profileId});
  const findVistsBefore=findModel.Visits.find((visit)=>visit._id.equals(user.id));
  if(findVistsBefore){
    findVistsBefore.no++;
    await findModel.save();
  }
  else{
    findModel.Visits.push({
      _id:user.id,
      no:1
    });
    await findModel.save();
  }
  res.status(200).json({message:"vist added"});
});