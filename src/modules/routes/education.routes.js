import { Router } from "express";
import { upload } from "../../services/multer.services.js";
import { authentication } from "../../middlewares/auth.middleware.js";
import { deleteQueryMiddleware, getQueryMiddleware, updateQueryMiddleware } from "../../middlewares/query.middlewares.js";
import educationModel from "../models/education.model.js";
import { filterFeatureMiddleware, paginationFeatureMiddleware, sortingFeatureMiddlware } from "../../middlewares/features.middlewares.js";
import { combineFilesWithBodyMiddleware, executionMiddleware } from "../../middlewares/common.middlewares.js";
import { addAnEducation } from "../controllers/education.controllers.js";

const educationRouter=Router();

educationRouter.post("/",authentication,upload.array("files"),addAnEducation);
educationRouter.get("/",authentication,getQueryMiddleware(educationModel),sortingFeatureMiddlware("createdAt","asc"),paginationFeatureMiddleware(20,0),executionMiddleware({
  success:{
    message:"experiences fetched successfully",
    statusCode:200
  },
  fail:{
    message:"failed to fetch experiences",
    statusCode:404
  }
}))

educationRouter.delete("/:id",authentication,deleteQueryMiddleware(educationModel),filterFeatureMiddleware("_id","id"),executionMiddleware({
  success:{
    message:"user experience deleted successfully",
    statusCode:200
  },
  fail:{
    message:"user experience not found",
    statusCode:404
  }
}));

educationRouter.put("/:id",authentication,upload.array("files"),combineFilesWithBodyMiddleware,updateQueryMiddleware(educationModel),filterFeatureMiddleware("_id","id"),executionMiddleware({
  success:{
    message:"user experience updated successfully",
    statusCode:200
  },
  fail:{
    message:"user experience not found",
    statusCode:404
  }
}));

educationRouter.get("/:id",authentication,getQueryMiddleware(educationModel),filterFeatureMiddleware("_id","id"),executionMiddleware({
  success:{
    message:"user experience fetched successfully",
    statusCode:200
  },
  fail:{
    message:"user experience not found",
    statusCode:404
  }
}));



export default educationRouter;