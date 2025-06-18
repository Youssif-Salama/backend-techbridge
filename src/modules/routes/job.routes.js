import {Router} from "express";
import { authentication, authorization, authorizationMine } from "../../middlewares/auth.middleware.js";
import { deleteQueryMiddleware, getQueryMiddleware, postQueryMiddleware, updateQueryMiddleware } from "../../middlewares/query.middlewares.js";
import jobModel from "../models/job.model.js";
import { filterFeatureMiddleware, filterQueryUponRelationByIdMiddleware, lowSearchMiddleware, paginationFeatureMiddleware, populateMiddleware, sortingFeatureMiddlware } from "../../middlewares/features.middlewares.js";
import { executionMiddleware, validatorMiddleware } from "../../middlewares/common.middlewares.js";
import companyModel from "../models/company.model.js";
import applicationModel from "../models/application.model.js";
import { createJobValidationSchema, updateJobValidationSchema } from "../../validators/job.validators.js";

const jobRouter=Router();

jobRouter.post("/",authentication,authorization({ companyModel }),validatorMiddleware(createJobValidationSchema),postQueryMiddleware(jobModel),executionMiddleware({
  success:{
    message:"job added successfully",
    statusCode:200
  },
  fail:{
    message:"failed to add job",
    statusCode:404
  }
}));

jobRouter.get("/",authentication,getQueryMiddleware(jobModel),sortingFeatureMiddlware("createdAt","asc"),lowSearchMiddleware(["experience","salary","level","education"]),paginationFeatureMiddleware(20,0),populateMiddleware({path:"makerId",select:"-Password -Email -__v -createdAt -updatedAt -Employees -Banner -Description -Phone  -Type -Followers"}),executionMiddleware({
  success:{
    message:"jobs fetched successfully",
    statusCode:200
  },
  fail:{
    message:"failed to fetch jobs",
    statusCode:404
  }
}));

jobRouter.get("/for-company/:id",authentication,getQueryMiddleware(jobModel),filterFeatureMiddleware("makerId","id"),sortingFeatureMiddlware("createdAt","asc"),paginationFeatureMiddleware(20,0),populateMiddleware({path:"makerId",select:"-Password -Email -__v -createdAt -updatedAt -Employees -Banner -Description -Phone  -Type -Followers"}),executionMiddleware({
  success:{
    message:"jobs fetched successfully",
    statusCode:200
  },
  fail:{
    message:"failed to fetch jobs",
    statusCode:404
  }
}));

jobRouter.get("/mine",authentication,getQueryMiddleware(jobModel),filterQueryUponRelationByIdMiddleware("makerId"),sortingFeatureMiddlware("createdAt","asc"),paginationFeatureMiddleware(20,0),populateMiddleware({path:"makerId",select:"-Password -Email -__v -createdAt -updatedAt -Employees -Banner -Description -Phone  -Type -Followers"}),executionMiddleware({
  success:{
    message:"jobs fetched successfully",
    statusCode:200
  },
  fail:{
    message:"failed to fetch jobs",
    statusCode:404
  }
}))

jobRouter.get("/:id",authentication,getQueryMiddleware(jobModel),filterFeatureMiddleware("_id","id"),populateMiddleware({path:"makerId",select:"-Password  -__v -createdAt -updatedAt -Employees -Banner -Followers"}),executionMiddleware({
  success:{
    message:"job fetched successfully",
    statusCode:200
  },
  fail:{
    message:"job not found",
    statusCode:404
  }
}));

jobRouter.delete("/:id",authentication,authorization({ companyModel }),authorizationMine(jobModel),deleteQueryMiddleware(jobModel),filterFeatureMiddleware("_id","id"),executionMiddleware({
  success:{
    message:"job deleted successfully",
    statusCode:200
  },
  fail:{
    message:"job not found",
    statusCode:404
  }
}));

jobRouter.put("/:id",authentication,authorization({ companyModel }),authorizationMine(jobModel),validatorMiddleware(updateJobValidationSchema),updateQueryMiddleware(jobModel),filterFeatureMiddleware("_id","id"),executionMiddleware({
  success:{
    message:"job updated successfully",
    statusCode:200
  },
  fail:{
    message:"job not found",
    statusCode:404
  }
}));

// applications
jobRouter.get("/:id/applications",authentication,getQueryMiddleware(applicationModel),filterFeatureMiddleware("jobId","id"),
populateMiddleware([
    {
      path: "userId",
      select: "-Password -__v -createdAt -updatedAt -Employees -Banner -Followers",
    },
    {
      path: "jobId",
    },
  ]),executionMiddleware({
  success:{
    message:"applications fetched successfully",
    statusCode:200
  },
  fail:{
    message:"failed to fetch applications",
    statusCode:404
  }
}));

jobRouter.get("/:id/applications/:applicationId",authentication,getQueryMiddleware(applicationModel),filterFeatureMiddleware("_id","applicationId"),executionMiddleware({
  success:{
    message:"application fetched successfully",
    statusCode:200
  },
  fail:{
    message:"application not found",
    statusCode:404
  }
}));

export default jobRouter;