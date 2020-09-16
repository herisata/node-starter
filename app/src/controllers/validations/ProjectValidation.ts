import { Joi } from 'express-validation';

const archive = {
  body: Joi.object({
    id: Joi.string().required(),
  }),
};

export default { archive };
