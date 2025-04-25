import {Router} from "express";
import { authentication, authorization, authorizationMine } from "../../middlewares/auth.middleware.js";
import { deleteQueryMiddleware, getQueryMiddleware, postQueryMiddleware } from "../../middlewares/query.middlewares.js";
import jobModel from "../models/job.model.js";
import { filterFeatureMiddleware, filterQueryUponRelationByIdMiddleware, lowSearchMiddleware, paginationFeatureMiddleware, sortingFeatureMiddlware } from "../../middlewares/features.middlewares.js";
import { executionMiddleware } from "../../middlewares/common.middlewares.js";
import companyModel from "../models/company.model.js";
import applicationModel from "../models/application.model.js";

const jobRouter=Router();

jobRouter.post("/",authentication,authorization([companyModel]),postQueryMiddleware(jobModel),executionMiddleware({
  success:{
    message:"job added successfully",
    statusCode:200
  },
  fail:{
    message:"failed to add job",
    statusCode:404
  }
}));

jobRouter.get("/",authentication,getQueryMiddleware(jobModel),lowSearchMiddleware(["title","description","level","experience","education","expiresAt"]),sortingFeatureMiddlware("createdAt","asc"),paginationFeatureMiddleware(20,0),executionMiddleware({
  success:{
    message:"jobs fetched successfully",
    statusCode:200
  },
  fail:{
    message:"failed to fetch jobs",
    statusCode:404
  }
}));

jobRouter.get("/:id",authentication,getQueryMiddleware(jobModel),filterFeatureMiddleware("_id","id"),executionMiddleware({
  success:{
    message:"job fetched successfully",
    statusCode:200
  },
  fail:{
    message:"job not found",
    statusCode:404
  }
}));

jobRouter.get("/mine",authentication,getQueryMiddleware(jobModel),filterQueryUponRelationByIdMiddleware("makerId"),sortingFeatureMiddlware("createdAt","asc"),paginationFeatureMiddleware(20,0),executionMiddleware({
  success:{
    message:"jobs fetched successfully",
    statusCode:200
  },
  fail:{
    message:"failed to fetch jobs",
    statusCode:404
  }
}))

jobRouter.delete("/:id",authentication,authorization([companyModel]),authorizationMine(jobModel),deleteQueryMiddleware(jobModel),filterFeatureMiddleware("_id","id"),executionMiddleware({
  success:{
    message:"job deleted successfully",
    statusCode:200
  },
  fail:{
    message:"job not found",
    statusCode:404
  }
}));

jobRouter.put("/:id",authentication,authorization([companyModel]),authorizationMine(jobModel),postQueryMiddleware(jobModel),filterFeatureMiddleware("_id","id"),executionMiddleware({
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
jobRouter.get("/:id/applications",authentication,getQueryMiddleware(applicationModel),filterFeatureMiddleware("jobId","id"),executionMiddleware({
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