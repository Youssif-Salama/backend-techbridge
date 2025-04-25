import Joi from "joi";

export const signupValidationSchema = Joi.object({
  Name: Joi.string().min(3).required().messages({
    "string.empty": "Name is required",
    "string.min": "Name must be at least 3 characters",
  }),

  Email: Joi.string().email().required().messages({
    "string.empty": "Email is required",
    "string.email": "Invalid email format",
  }),

  Password: Joi.string()
    .min(8)
    .pattern(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    )
    .required()
    .messages({
      "string.empty": "Password is required",
      "string.min": "Password must be at least 8 characters",
      "string.pattern.base":
        "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character",
    }),

  Phone: Joi.string().pattern(/^\d+$/).required().messages({
    "string.empty": "Phone number is required",
    "string.pattern.base": "Phone number must contain only digits",
  }),
  IsUser: Joi.boolean().required().messages({
    "any.required": "IsUser is required",
  }),
});



export const loginValidationSchema = Joi.object({
  Email: Joi.string().email().required().messages({
    "string.empty": "Email is required",
    "string.email": "Invalid email format",
  }),
  Password: Joi.string().required().messages({
    "string.empty": "Password is required",
  }),
});