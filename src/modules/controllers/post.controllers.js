import ErrorHandlerService, { AppError } from "../../services/error.services.js";
import commentModel from "../models/comment.model.js";
import postModel from "../models/post.model.js";

export const likePost=ErrorHandlerService(async(req,res)=>{
  const {id}=req.user;
  const {id:postId}=req.params;
  const findPost=await postModel.findById(postId);
  if(!findPost) throw new AppError("post not found",404);
  if(findPost.likes.includes(id)) {
    findPost.likes.splice(findPost.likes.indexOf(id),1);
    await findPost.save();
    return res.status(200).json({message:"post unliked",data:findPost})
  }
  findPost.likes.push(id);
  await findPost.save();
  res.status(200).json({message:"post liked",data:findPost})
})


export const commentPost=ErrorHandlerService(async(req,res)=>{

  const {id:postId}=req.params;
  const {comment}=req.body;
  const makeComment=await commentModel.create({
    comment,
    postId,
    makerId:req.body.makerId,
    makerModel:req.body.makerModel
  })
  console.log(req.body);
  if(!makeComment) throw new AppError("comment not created",400);
  res.status(200).json({message:"comment added",data:makeComment})
})