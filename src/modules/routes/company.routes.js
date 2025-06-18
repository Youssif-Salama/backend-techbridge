import {Router} from "express";
import { authentication } from "../../middlewares/auth.middleware.js";
import { addEmployees, changeBanner, changeImage, companyMetaData, deleteEmployee, updateMyData, updateMyEmployees } from "../controllers/company.controllers.js";
import { getQueryMiddleware } from "../../middlewares/query.middlewares.js";
import { lowSearchMiddleware, paginationFeatureMiddleware, sortingFeatureMiddlware } from "../../middlewares/features.middlewares.js";
import { executionMiddleware, validatorMiddleware } from "../../middlewares/common.middlewares.js";
import companyModel from "../models/company.model.js";
import { upload } from "../../services/multer.services.js";
import { updateMyDataValidationSchema } from "../../validators/company.validators.js";

const companyRouter = Router();

companyRouter.put("/add-employees",authentication,addEmployees);
companyRouter.delete("/delete-employee",authentication,deleteEmployee);

companyRouter.put("/change-image",authentication,upload.array("files"),changeImage);
companyRouter.put("/change-banner",authentication,upload.array("files"),changeBanner);
companyRouter.get("/",authentication,getQueryMiddleware(companyModel),sortingFeatureMiddlware("createdAt","asc"),lowSearchMiddleware(["Type"],"company"),paginationFeatureMiddleware(20,0),executionMiddleware({
  success:{
    message:"companies fetched successfully",
    statusCode:200
  },
  fail:{
    message:"companies not found",
    statusCode:404
  }
}));

companyRouter.get("/meta-data",authentication,companyMetaData);
companyRouter.put("/my-data",authentication,validatorMiddleware(updateMyDataValidationSchema),updateMyData);
companyRouter.put("/my-employees",authentication,updateMyEmployees);
export default companyRouter;