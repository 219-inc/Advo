import joi from "joi";

export const signUpValidation = (data: any) => {
  const schema = joi.object({
    name: joi.string().min(6).required().label("Name"),
    email: joi.string().min(6).required().email().label("Email"),
    password: joi
      .string()
      .min(6)
      .max(30)
      .pattern(new RegExp("^[a-zA-Z0-9]{6,30}$"))
      .required()
      .label("Password"),
  });
  return schema.validate(data);
};

export const loginValidation = (data: any) => {
  const schema = joi.object({
    email: joi.string().required().email().label("Email"),
    password: joi
      .string()
      .min(6)
      .max(30)
      .pattern(new RegExp("^[a-zA-Z0-9]{6,30}$"))
      .required()
      .label("Password"),
  });
  return schema.validate(data);
};
