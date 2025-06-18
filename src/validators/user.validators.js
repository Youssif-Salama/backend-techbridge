import Joi from "joi";

export const updateMyDataValidationSchema = Joi.object({
  Fname: Joi.string().required(),
  Lname: Joi.string().required(),
  Gender: Joi.string().required(),
  Address: Joi.string().required(),
  Languages: Joi.string().required(),
  Experience: Joi.string().required(),
  Phone: Joi.string().required(),
  Description: Joi.string().required(),
  Slogan: Joi.string().required(),
});
export const updateMySkillsValidationSchema = Joi.object({
  skills: Joi.array().required(),
  languages: Joi.array().required(),
});

export const addSkillValidationSchema = Joi.object({
  Skill: Joi.string().required(),
});
   