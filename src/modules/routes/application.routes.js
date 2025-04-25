import {Router} from "express";
import { authentication, authorization } from "../../middlewares/auth.middleware.js";
import userModel from "../models/user.model.js";
import { getQueryMiddleware, postQueryMiddleware } from "../../middlewares/query.middlewares.js";
import { executionMiddleware } from "../../middlewares/common.middlewares.js";
import { upload } from "../../services/multer.services.js";
import { filterFeatureMiddleware, paginationFeatureMiddleware, sortingFeatureMiddlware } from "../../middlewares/features.middlewares";

const applicationRouter=Router();

applicationRouter.post("/",authentication,authorization([userModel]),upload.array("files"),postQueryMiddleware(applicationModel),executionMiddleware({
  success:{
    message:"application added successfully",
    statusCode:200
  },
  fail:{
    message:"failed to add application",
    statusCode:404
  }
}));

applicationRouter.get("/",authentication,authorization([userModel,companyModel]),getQueryMiddleware(applicationModel),sortingFeatureMiddlware("createdAt","asc"),paginationFeatureMiddleware(20,0),executionMiddleware({
  success:{
    message:"applications fetched successfully",
    statusCode:200
  },
  fail:{
    message:"failed to fetch applications",
    statusCode:404
  }
}));

applicationRouter.get("/:id",authentication,authorization([userModel,companyModel]),getQueryMiddleware(applicationModel),filterFeatureMiddleware("_id","id"),executionMiddleware({
  success:{
    message:"application fetched successfully",
    statusCode:200
  },
  fail:{
    message:"application not found",
    statusCode:404
  }
}));

export default applicationRouter;