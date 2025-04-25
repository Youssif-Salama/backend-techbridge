import {Router} from "express";
import authRouter from "../src/modules/routes/auth.routes.js";
import userRouter from "../src/modules/routes/user.routes.js";
import experienceRouter from "../src/modules/routes/experience.routes.js";
import projectRouter from "../src/modules/routes/project.routes.js";
import educationRouter from "../src/modules/routes/education.routes.js";
import postRouter from "../src/modules/routes/post.routes.js";
import commentRouter from "../src/modules/routes/comment.routes.js";
import aiRouter from "../src/modules/routes/ai.routes.js";
import companyRouter from "../src/modules/routes/company.routes.js";

const v1Router = Router();

v1Router.use("/auth",authRouter);
v1Router.use("/user",userRouter);
v1Router.use("/company",companyRouter);
v1Router.use("/experience",experienceRouter);
v1Router.use("/project",projectRouter);
v1Router.use("/education",educationRouter);
v1Router.use("/post",postRouter);
v1Router.use("/comment",commentRouter);
v1Router.use("/ai",aiRouter);

export default v1Router;