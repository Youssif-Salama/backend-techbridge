import {Router} from "express";
import { authentication } from "../../middlewares/auth.middleware.js";
import { addEmployees, changeBanner, changeImage, deleteEmployee } from "../controllers/company.controllers.js";
import { getQueryMiddleware } from "../../middlewares/query.middlewares.js";
import { lowSearchMiddleware, paginationFeatureMiddleware, sortingFeatureMiddlware } from "../../middlewares/features.middlewares.js";
import { executionMiddleware } from "../../middlewares/common.middlewares.js";
import companyModel from "../models/company.model.js";

const companyRouter = Router();

companyRouter.put("/add-employees",authentication,addEmployees);
companyRouter.delete("/delete-employee",authentication,deleteEmployee);

companyRouter.put("/change-image",authentication,changeImage);
companyRouter.put("/change-banner",authentication,changeBanner);
companyRouter.get("/",authentication,getQueryMiddleware(companyModel),lowSearchMiddleware(["Title","Description","Phone","Address.country","Address.city","Address.description","Type"]),sortingFeatureMiddlware("createdAt","asc"),paginationFeatureMiddleware(20,0),executionMiddleware({
  success:{
    message:"companies fetched successfully",
    statusCode:200
  },
  fail:{
    message:"companies not found",
    statusCode:404
  }
}));
export default companyRouter;