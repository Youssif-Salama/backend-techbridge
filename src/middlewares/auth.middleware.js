import mongoose from "mongoose";
import ErrorHandlerService, { AppError } from "../services/error.services.js";
import jwt from "jsonwebtoken";

export const authentication = ErrorHandlerService(async (req, res, next) => {
  const token = req.header("token");
  if (!token) throw new AppError("token not found", 401);
  try {
    const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);
    req.user = decodedToken;
    next();
  } catch (error) {
    throw new AppError(error.message, 401);
  }
});

export const authorization = (allowedModels) =>
  ErrorHandlerService(async (req, res, next) => {
    const { user } = req;
    if (!user || !user.id) {
      throw new AppError("User not authenticated or ID missing for authorization", 401);
    }
    const entityId = user.id;

    const entityIsUser = allowedModels.userModel ? !!(await allowedModels.userModel.findById(entityId)) : false;
    const entityIsCompany = allowedModels.companyModel ? !!(await allowedModels.companyModel.findById(entityId)) : false;

    const userModelAllowed = !!allowedModels.userModel;
    const companyModelAllowed = !!allowedModels.companyModel;

    if (userModelAllowed && companyModelAllowed) { // Both types are permissible
      if (!entityIsUser && !entityIsCompany) {
        throw new AppError("Authorization failed: Entity must be a user or a company.", 401);
      }
    } else if (userModelAllowed) { // Only user type is permissible
      if (!entityIsUser) {
        throw new AppError("Authorization failed: Entity must be a user.", 401);
      }
    } else if (companyModelAllowed) { // Only company type is permissible
      if (!entityIsCompany) {
        throw new AppError("Authorization failed: Entity must be a company.", 401);
      }
    } else {
      throw new AppError("Authorization misconfigured: No valid allowed model types specified.", 500);
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
