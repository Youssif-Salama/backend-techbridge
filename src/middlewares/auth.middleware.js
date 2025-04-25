import mongoose from "mongoose";
import ErrorHandlerService, { AppError } from "../services/error.services.js";
import jwt from "jsonwebtoken";

export const authentication = ErrorHandlerService(async (req, res, next) => {
  const token = req.header("token");
  if (!token) throw new AppError("token not found", 401);
  await jwt.verify(token, process.env.JWT_SECRET, async(error, decodedToken) => {
      if (error) throw new AppError(error.message, 401);
      req.user = decodedToken;
      next();
  })
})

export const authorization = (allowedModels) =>
  ErrorHandlerService(async (req, res, next) => {
    const { user } = req;
    const isUser = await allowedModels.userModel.findById(user.id);
    const isCompany = await allowedModels.companyModel.findById(user.id);
    if (!isUser && !isCompany) {
      throw new AppError("authorization failed", 401);
    }
    if (allowedModels?.userModel && isCompany) {
      throw new AppError("authorization failed", 401);
    }
    if (allowedModels?.companyModel && isUser) {
      throw new AppError("authorization failed", 401);
    }
    next();
  });




export const authorizationMine = (model,documentParamId) =>
  ErrorHandlerService(async (req, res, next) => {
    const { id } = req.user;
    let documentId;
    if(documentParamId){
      documentId=req.params[documentParamId];
    }
    else{
      documentId=req.params.id
    }
    const findDocument = await model.findById(documentId);
    if (!findDocument) throw new AppError("invalid document", 404);

    if (!findDocument.makerId.equals(new mongoose.Types.ObjectId(id))) {
      throw new AppError("authorization failed", 401);
    }

    next();
  });
