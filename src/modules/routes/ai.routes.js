import {Router} from "express";
import { authentication } from "../../middlewares/auth.middleware.js";
import { useGemini } from "../controllers/gemini.controllers.js";

const aiRouter=Router();

aiRouter.post("/gemini",authentication,useGemini);

export default aiRouter;