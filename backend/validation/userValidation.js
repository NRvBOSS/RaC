const Joi = require('@hapi/joi');

const registerValidationSchema = Joi.object({
  email: Joi.string().email().required(),
  name: Joi.string().min(2).max(50).required(),
  password: Joi.string().min(6).required(),
  phone: Joi.number().required()
});

const loginValidationSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
});

module.exports = {
  registerValidationSchema,
  loginValidationSchema
};
