import {Router} from "express";
import { login, resetPasswordDo, resetPasswordReq, signup, verifyEmail } from "../controllers/auth.controllers.js";
import { findUserMiddleware, validatorMiddleware } from "../../middlewares/common.middlewares.js";
import { loginValidationSchema, signupValidationSchema } from "../../validators/auth.validators.js";
import { authLimiter } from "../../services/rateLimiter.services.js";


const authRouter=Router();

authRouter.post("/signup",authLimiter,validatorMiddleware(signupValidationSchema),signup);
authRouter.post("/login",authLimiter,validatorMiddleware(loginValidationSchema),login);
authRouter.post("/reset-password-req",authLimiter,findUserMiddleware("Email"),resetPasswordReq);
authRouter.put("/reset-password-do",authLimiter,resetPasswordDo);
authRouter.get("/verify/:token",authLimiter,verifyEmail);

export default authRouter;