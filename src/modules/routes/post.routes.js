import {Router} from "express";
import { authentication, authorizationMine } from "../../middlewares/auth.middleware.js";
import { deleteQueryMiddleware, getQueryMiddleware, postQueryMiddleware, updateQueryMiddleware } from "../../middlewares/query.middlewares.js";
import postModel from "../models/post.model.js";
import { addMakerIdToBodyMiddleware, combineFilesWithBodyMiddleware, executionMiddleware, validatorMiddleware } from "../../middlewares/common.middlewares.js";
import { upload } from "../../services/multer.services.js";
import { filterFeatureMiddleware, filterQueryUponRelationByIdMiddleware, lowSearchMiddleware, paginationFeatureMiddleware, populateMiddleware, searchMiddleware, selectorMiddleware, sortingFeatureMiddlware } from "../../middlewares/features.middlewares.js";
import { commentPost, likePost } from "../controllers/post.controllers.js";
import commentModel from "../models/comment.model.js";
import { createPostValidationSchema, updatePostValidationSchema } from "../../validators/post.validators.js";

const postRouter=Router();

postRouter.post("/",authentication,upload.array("files"),addMakerIdToBodyMiddleware,combineFilesWithBodyMiddleware,validatorMiddleware(createPostValidationSchema),postQueryMiddleware(postModel),executionMiddleware({
  success:{
    message:"post added successfully",
    statusCode:200
  },
  fail:{
    message:"failed to add post",
    statusCode:404
  }
}));

postRouter.get("/",authentication,getQueryMiddleware(postModel),sortingFeatureMiddlware("createdAt","asc"),lowSearchMiddleware([""],"post"),paginationFeatureMiddleware(20,0),populateMiddleware({path:"makerId",select:"-Password -Email -__v -createdAt -updatedAt -Employees -Banner -Description -Phone -Address -Type -Followers"}),executionMiddleware({
  success:{
    message:"posts fetched successfully",
    statusCode:200
  },
  fail:{
    message:"posts not found",
    statusCode:404
  }
}));

// get one post
postRouter.get("/one/:id",authentication,getQueryMiddleware(postModel),filterFeatureMiddleware("_id","id"),populateMiddleware({path:"makerId",select:"-Password -Email -__v -createdAt -updatedAt -Employees -Banner -Description -Phone -Address -Type -Followers"}),executionMiddleware({
  success:{
    message:"posts fetched successfully",
    statusCode:200
  },
  fail:{
    message:"posts not found",
    statusCode:404
  }
}))


postRouter.get("/myposts",authentication,getQueryMiddleware(postModel),filterQueryUponRelationByIdMiddleware("makerId"),sortingFeatureMiddlware("createdAt","asc"),paginationFeatureMiddleware(20,0),populateMiddleware({path:"makerId",select:"-Password -Email -__v -createdAt -updatedAt -Employees -Banner -Description -Phone -Address -Type -Followers"}),executionMiddleware({
  success:{
    message:"posts fetched successfully",
    statusCode:200
  },
  fail:{
    message:"posts not found",
    statusCode:404
  }
}))

postRouter.get("/specificOne/:id",authentication,getQueryMiddleware(postModel),filterFeatureMiddleware("makerId","id"),sortingFeatureMiddlware("createdAt","asc"),paginationFeatureMiddleware(20,0),populateMiddleware({path:"makerId",select:"-Password -Email -__v -createdAt -updatedAt -Employees -Banner -Description -Phone -Address -Type -Followers"}),executionMiddleware({
  success:{
    message:"posts fetched successfully",
    statusCode:200
  },
  fail:{
    message:"posts not found",
    statusCode:404
  }
}))


postRouter.get("/user/:id",authentication,getQueryMiddleware(postModel),filterFeatureMiddleware("makerId","id"),sortingFeatureMiddlware("createdAt","asc"),paginationFeatureMiddleware(20,0),executionMiddleware({
  success:{
    message:"posts fetched successfully",
    statusCode:200
  },
  fail:{
    message:"posts not found",
    statusCode:404
  }
}))


postRouter.get("/:id/comments",authentication,getQueryMiddleware(commentModel),filterFeatureMiddleware("postId","id"),
paginationFeatureMiddleware(20,0),sortingFeatureMiddlware("createdAt","desc"),selectorMiddleware("-comments"),populateMiddleware({path:"makerId",select:"-Password -__v -createdAt -updatedAt -Employees -Banner -Description -Phone -Address -Type -Followers"}),executionMiddleware({
  success:{
    message:"post comments fetched successfully",
    statusCode:200
  },
  fail:{
    message:"post comments not found",
    statusCode:404
  }
}))


postRouter.delete("/:id",authentication,authorizationMine(postModel),deleteQueryMiddleware(postModel),filterFeatureMiddleware("_id","id"),executionMiddleware({
  success:{
    message:"post deleted successfully",
    statusCode:200
  },
  fail:{
    message:"post not found",
    statusCode:404
  }
}));

postRouter.put("/:id",authentication,authorizationMine(postModel),validatorMiddleware(updatePostValidationSchema),upload.array("files"),combineFilesWithBodyMiddleware,updateQueryMiddleware(postModel),
filterFeatureMiddleware("_id","id"),executionMiddleware({
  success:{
    message:"post updated successfully",
    statusCode:200
  },
  fail:{
    message:"post not found",
    statusCode:404
  }
}));

postRouter.delete("/:id/comment/:commentId",authentication,authorizationMine(commentModel,"commentId"),deleteQueryMiddleware(commentModel),filterFeatureMiddleware("_id","commentId"),
filterFeatureMiddleware("postId","id"),executionMiddleware({
  success:{
    message:"comment deleted successfully",
    statusCode:200
  },
  fail:{
    message:"comment not found",
    statusCode:404
  }
}))


postRouter.patch("/:id/like",authentication,likePost);
postRouter.post("/:id/comment",authentication,addMakerIdToBodyMiddleware,commentPost);
export default postRouter;