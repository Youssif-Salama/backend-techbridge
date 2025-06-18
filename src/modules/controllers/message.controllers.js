import ErrorHandlerService, { AppError } from "../../services/error.services.js";

export const sendMessage=ErrorHandlerService(async(req,res)=>{
  const {toId,message,files,makerId:fromId,makerModel}=req.body;
  const messageSent=await messageModel.create({
    fromId,
    toId,
    makerModel,
    message,
    files
  })
  if(!messageSent) throw new AppError("message not sent",400);
  res.status(200).json({message:"message sent successfully",data:messageSent})
})

export const getMessages=ErrorHandlerService(async(req,res)=>{
  const {toId,makerId:fromId}=req.params;
  const messages=await messageModel.find({toId,fromId});
  if(!messages) throw new AppError("messages not found",404);
  res.status(200).json({message:"messages found",data:messages})
})


export const deleteMessage=ErrorHandlerService(async(req,res)=>{
  const {id}=req.params;
  const messageDeleted=await messageModel.findByIdAndDelete(id);
  if(!messageDeleted) throw new AppError("message not deleted",404);
  res.status(200).json({message:"message deleted successfully",data:messageDeleted})
})

export const updateMessage=ErrorHandlerService(async(req,res)=>{
  const {id}=req.params;
  const {message}=req.body;
  const messageUpdated=await messageModel.findByIdAndUpdate(id,{message},{new:true});
  if(!messageUpdated) throw new AppError("message not updated",404);
  res.status(200).json({message:"message updated successfully",data:messageUpdated})
})

export const seenMessage=ErrorHandlerService(async(req,res)=>{
  const {id}=req.params;
  const messageUpdated=await messageModel.findByIdAndUpdate(id,{seen:true},{new:true});
  if(!messageUpdated) throw new AppError("message not updated",404);
  res.status(200).json({message:"message updated successfully",data:messageUpdated})
})