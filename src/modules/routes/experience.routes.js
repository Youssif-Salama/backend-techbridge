import { Router } from "express";
import { upload } from "../../services/multer.services.js";
import { addAnExperience } from "../controllers/experience.controllers.js";
import { authentication } from "../../middlewares/auth.middleware.js";
import { deleteQueryMiddleware, getQueryMiddleware, updateQueryMiddleware } from "../../middlewares/query.middlewares.js";
import experienceModel from "../models/experience.model.js";
import { filterFeatureMiddleware, paginationFeatureMiddleware, sortingFeatureMiddlware } from "../../middlewares/features.middlewares.js";
import { combineFilesWithBodyMiddleware, executionMiddleware } from "../../middlewares/common.middlewares.js";

const experienceRouter=Router();

experienceRouter.post("/",authentication,upload.array("files"),addAnExperience);
experienceRouter.get("/",authentication,getQueryMiddleware(experienceModel),sortingFeatureMiddlware("createdAt","asc"),paginationFeatureMiddleware(20,0),executionMiddleware({
  success:{
    message:"experiences fetched successfully",
    statusCode:200
  },
  fail:{
    message:"failed to fetch experiences",
    statusCode:404
  }
}))

experienceRouter.delete("/:id",authentication,deleteQueryMiddleware(experienceModel),filterFeatureMiddleware("_id","id"),executionMiddleware({
  success:{
    message:"user experience deleted successfully",
    statusCode:200
  },
  fail:{
    message:"user experience not found",
    statusCode:404
  }
}));

experienceRouter.put("/:id",authentication,upload.array("files"),combineFilesWithBodyMiddleware,updateQueryMiddleware(experienceModel),filterFeatureMiddleware("_id","id"),executionMiddleware({
  success:{
    message:"user experience updated successfully",
    statusCode:200
  },
  fail:{
    message:"user experience not found",
    statusCode:404
  }
}));

experienceRouter.get("/:id",authentication,getQueryMiddleware(experienceModel),filterFeatureMiddleware("_id","id"),executionMiddleware({
  success:{
    message:"user experience fetched successfully",
    statusCode:200
  },
  fail:{
    message:"user experience not found",
    statusCode:404
  }
}));



export default experienceRouter;