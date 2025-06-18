import Joi from "joi";

export const createPostValidationSchema=Joi.object({
  title: Joi.string().optional(),
  description: Joi.string().required(),
  hashtags: Joi.number().optional(),
  files: Joi.array().optional(),
  makerId: Joi.string().required(),
  makerModel: Joi.string().required()
});


export const updatePostValidationSchema=Joi.object({
  title: Joi.string().optional(),
  description: Joi.string().optional(),
  hashtags: Joi.number().optional(),
});
