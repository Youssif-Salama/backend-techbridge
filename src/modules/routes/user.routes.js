import {Router} from "express";
import { getQueryMiddleware } from "../../middlewares/query.middlewares.js";
import { filterQueryUponRelationByIdMiddleware, paginationFeatureMiddleware, populateMiddleware, searchMiddleware, sortingFeatureMiddlware } from "../../middlewares/features.middlewares.js";
import userModel from "../models/user.model.js";
import { executionMiddleware, validatorMiddleware } from "../../middlewares/common.middlewares.js";
import { addASkill, changeImage, deleteASkill, getMyData, updateMyData, updateSkillsAndLanguages, userMetaData } from "../controllers/user.controllers.js";
import { authentication } from "../../middlewares/auth.middleware.js";
import experienceModel from "../models/experience.model.js";
import projectModel from "../models/project.model.js";
import educationModel from "../models/education.model.js";
import applicationModel from "../models/application.model.js";
import { myAppliedJobs } from "../middlewares/user.middlewares.js";
import { upload } from "../../services/multer.services.js";
import { addSkillValidationSchema, updateMyDataValidationSchema, updateMySkillsValidationSchema } from "../../validators/user.validators.js";

const userRouter=Router();
const usersSearchKeys=["Fname","Lname","Email","Address.country","Address.city","Address.state","Address.street","Address.zipCode","Address.countryCode","skills","Languages"];

userRouter.get("/",authentication,getQueryMiddleware(userModel),searchMiddleware(usersSearchKeys),sortingFeatureMiddlware("createdAt","asc"),paginationFeatureMiddleware(20,0),executionMiddleware({
  success:{
    message:"users fetched successfully",
    statusCode:200
  },
  fail:{
    message:"users not found",
    statusCode:404
  }
}));

userRouter.get("/meta-data",authentication,userMetaData);
userRouter.get("/my-data",authentication,getMyData);

userRouter.put("/my-data",authentication,validatorMiddleware(updateMyDataValidationSchema),updateMyData);
userRouter.put("/my-skills-languages",authentication,validatorMiddleware(updateMySkillsValidationSchema),updateSkillsAndLanguages);
userRouter.put("/change-image",authentication,upload.array("files"),changeImage);

userRouter.post("/add-skill",authentication,validatorMiddleware(addSkillValidationSchema),addASkill);
userRouter.delete("/delete-skill",authentication,deleteASkill);

userRouter.get("/my-experience",authentication,getQueryMiddleware(experienceModel),filterQueryUponRelationByIdMiddleware("makerId"),sortingFeatureMiddlware("createdAt","asc"),paginationFeatureMiddleware(20,0),executionMiddleware({
  success:{
    message:"user experience fetched successfully",
    statusCode:200
  },
  fail:{
    message:"user experience not found",
    statusCode:404
  }
}))

userRouter.get("/my-project",authentication,getQueryMiddleware(projectModel),filterQueryUponRelationByIdMiddleware("makerId"),sortingFeatureMiddlware("createdAt","asc"),paginationFeatureMiddleware(20,0),executionMiddleware({
  success:{
    message:"user project fetched successfully",
    statusCode:200
  },
  fail:{
    message:"user project not found",
    statusCode:404
  }
}))

userRouter.get("/my-education",authentication,getQueryMiddleware(educationModel),filterQueryUponRelationByIdMiddleware("makerId"),sortingFeatureMiddlware("createdAt","asc"),paginationFeatureMiddleware(20,0),executionMiddleware({
  success:{
    message:"user project fetched successfully",
    statusCode:200
  },
  fail:{
    message:"user project not found",
    statusCode:404
  }
}))


userRouter.get("/my-applications",authentication,getQueryMiddleware(applicationModel),filterQueryUponRelationByIdMiddleware("userId"),executionMiddleware({
  success:{
    message:"applications fetched successfully",
    statusCode:200
  },
  fail:{
    message:"failed to fetch applications",
    statusCode:404
  }
}));

userRouter.get("/job-applied",authentication,getQueryMiddleware(applicationModel),myAppliedJobs,populateMiddleware({path:"makerId",select:"-Password -Email -__v -createdAt -updatedAt -Employees -Banner -Description -Phone  -Type -Followers"}),executionMiddleware({
  success:{
    message:"applications fetched successfully",
    statusCode:200
  },
  fail:{
    message:"failed to fetch applications",
    statusCode:404
  }
}));


export default userRouter;