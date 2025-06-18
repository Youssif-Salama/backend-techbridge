import Joi from "joi";

export const updateMyDataValidationSchema = Joi.object({
  Title: Joi.string().required(),
  Phone: Joi.string().required(),
  Type: Joi.string().required(),
  Description: Joi.string().required(),
  Slogan: Joi.string().required(),
});

