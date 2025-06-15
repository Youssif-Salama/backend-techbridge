import mongoose from "mongoose";
import ErrorHandlerService, { AppError } from "../../services/error.services.js";
import commentModel from "../models/comment.model.js";

export const postCommentOnComment = ErrorHandlerService(async (req, res) => {
  const { commentId } = req.params;
  const { comment, makerId, makerModel } = req.body;

  if (!comment || !makerId || !makerModel) {
    throw new AppError("Missing required fields: comment, makerId, makerModel", 400);
  }

  const commentDocument = await commentModel.findOne({ _id: commentId });
  if (!commentDocument) throw new AppError("Comment not found", 404);

  commentDocument.comments.push({
    comment,
    makerId,
    makerModel
  });

  await commentDocument.save();

  res.status(200).json({ message: "Comment added" });
});


export const getCommentReplies = ErrorHandlerService(async (req, res) => {
  const { commentId } = req.params;

  const comment = await commentModel.findById(commentId).lean();

  if (!comment) throw new AppError("Comment not found", 404);

  const populatedReplies = await Promise.all(
    comment.comments.map(async (reply) => {
      if (!reply.makerId || !reply.makerModel) return reply;

      const model = mongoose.model(reply.makerModel);
      const makerData = await model.findById(reply.makerId).select(
        "-Password -__v -createdAt -updatedAt -Employees -Banner -Description -Phone -Address -Type -Followers"
      );

      return {
        ...reply,
        makerId: makerData,
      };
    })
  );

  comment.comments = populatedReplies;


  res.status(200).json({
    message: "Comment replies fetched",
    data: comment.comments,
  });
});
