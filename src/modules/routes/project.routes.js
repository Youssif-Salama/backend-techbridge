import { Router } from "express";
import { upload } from "../../services/multer.services.js";
import { addAProject } from "../controllers/project.controllers.js";
import { authentication } from "../../middlewares/auth.middleware.js";
import { deleteQueryMiddleware, getQueryMiddleware, updateQueryMiddleware } from "../../middlewares/query.middlewares.js";
import projectModel from "../models/project.model.js";
import { filterFeatureMiddleware, paginationFeatureMiddleware, sortingFeatureMiddlware } from "../../middlewares/features.middlewares.js";
import { combineFilesWithBodyMiddleware, executionMiddleware } from "../../middlewares/common.middlewares.js";

const projectRouter=Router();

projectRouter.post("/",authentication,upload.array("files"),addAProject);
projectRouter.get("/",authentication,getQueryMiddleware(projectModel),sortingFeatureMiddlware("createdAt","asc"),paginationFeatureMiddleware(20,0),executionMiddleware({
  success:{
    message:"experiences fetched successfully",
    statusCode:200
  },
  fail:{
    message:"failed to fetch experiences",
    statusCode:404
  }
}))

projectRouter.delete("/:id",authentication,deleteQueryMiddleware(projectModel),filterFeatureMiddleware("_id","id"),executionMiddleware({
  success:{
    message:"user experience deleted successfully",
    statusCode:200
  },
  fail:{
    message:"user experience not found",
    statusCode:404
  }
}));

projectRouter.put("/:id",authentication,upload.array("files"),combineFilesWithBodyMiddleware,updateQueryMiddleware(projectModel),filterFeatureMiddleware("_id","id"),executionMiddleware({
  success:{
    message:"user experience updated successfully",
    statusCode:200
  },
  fail:{
    message:"user experience not found",
    statusCode:404
  }
}));

projectRouter.get("/:id",authentication,getQueryMiddleware(projectModel),filterFeatureMiddleware("_id","id"),executionMiddleware({
  success:{
    message:"user experience fetched successfully",
    statusCode:200
  },
  fail:{
    message:"user experience not found",
    statusCode:404
  }
}));



export default projectRouter;