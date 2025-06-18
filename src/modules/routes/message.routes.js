import {Router } from "express";
import {authentication} from "../../middlewares/auth.middleware.js";
import { addMakerIdToBodyMiddleware, combineFilesWithBodyMiddleware } from "../../middlewares/common.middlewares.js";
import { sendMessage, getMessages, deleteMessage, updateMessage, seenMessage } from "../controllers/message.controllers.js";



const messageRouter=Router();

messageRouter.post("/",authentication,addMakerIdToBodyMiddleware,combineFilesWithBodyMiddleware,sendMessage);
messageRouter.get("/",authentication,addMakerIdToBodyMiddleware,getMessages);
messageRouter.get("/seen/:id",authentication,addMakerIdToBodyMiddleware,seenMessage);
messageRouter.delete("/:id",authentication,addMakerIdToBodyMiddleware,deleteMessage);
messageRouter.put("/:id",authentication,addMakerIdToBodyMiddleware,updateMessage);

export default messageRouter;