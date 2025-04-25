import {Router} from "express";
import { login, resetPasswordDo, resetPasswordReq, signup, verifyEmail } from "../controllers/auth.controllers.js";
import { findUserMiddleware, validatorMiddleware } from "../../middlewares/common.middlewares.js";
import { loginValidationSchema, signupValidationSchema } from "../../validators/auth.validators.js";

const authRouter=Router();

authRouter.post("/signup",validatorMiddleware(signupValidationSchema),signup);
authRouter.post("/login",validatorMiddleware(loginValidationSchema),login);
authRouter.post("/reset-password-req",findUserMiddleware("Email"),resetPasswordReq);
authRouter.put("/reset-password-do",resetPasswordDo);
authRouter.get("/verify/:token",verifyEmail);

export default authRouter;