import {Router} from "express";
import { authentication, authorizationMine } from "../../middlewares/auth.middleware.js";
import commentModel from "../models/comment.model.js";
import { addMakerIdToBodyMiddleware, executionMiddleware } from "../../middlewares/common.middlewares.js";
import { filterFeatureMiddleware } from "../../middlewares/features.middlewares.js";
import { deleteQueryMiddleware, updateQueryMiddleware } from "../../middlewares/query.middlewares.js";
import { getCommentReplies, postCommentOnComment } from "../controllers/comment.controllers.js";

const commentRouter=Router();

commentRouter.delete("/:id",authentication,authorizationMine(commentModel),deleteQueryMiddleware(commentModel),filterFeatureMiddleware("_id","id"),executionMiddleware({
  success:{
    message:"comment deleted successfully",
    statusCode:200
  },
  fail:{
    message:"comment not found",
    statusCode:404
  }
}))

commentRouter.put("/:id",authentication,authorizationMine(commentModel),updateQueryMiddleware(commentModel),filterFeatureMiddleware("_id","id"),executionMiddleware({
  success:{
    message:"comment updated successfully",
    statusCode:200
  },
  fail:{
    message:"comment not found",
    statusCode:404
  }
}))

commentRouter.patch("/on-comment/:commentId",authentication,addMakerIdToBodyMiddleware,postCommentOnComment);

commentRouter.get("/:commentId/replies",authentication,getCommentReplies);


export default commentRouter;