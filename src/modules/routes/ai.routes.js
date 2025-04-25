import {Router} from "express";
import { authentication, authorization } from "../../middlewares/auth.middleware.js";
import companyModel from "../models/company.model.js";
import { useGemini } from "../controllers/gemini.controllers.js";
import userModel from "../models/user.model.js";

const aiRouter=Router();

aiRouter.post("/gemini",useGemini);

export default aiRouter;