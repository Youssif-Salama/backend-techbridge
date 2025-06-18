import Joi from "joi";

export const createJobValidationSchema=Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  requirements: Joi.string().optional(),
  level: Joi.string().required(),
  experience: Joi.number().required(),
  salary: Joi.object({
    from: Joi.number().required(),
    to: Joi.number().optional(),
  }).required(),
  makerId: Joi.string().required(),
});


export const updateJobValidationSchema=Joi.object({
  title: Joi.string().optional(),
  description: Joi.string().optional(),
  requirements: Joi.string().optional(),
  level: Joi.string().optional(),
  experience: Joi.number().optional(),
  salary: Joi.object({
    from: Joi.number().optional(),
    to: Joi.number().optional(),
  }).optional(),
});