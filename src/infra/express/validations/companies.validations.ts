import { Segments, Joi } from 'celebrate'

export const companiesValidators = {
  create: {
    [Segments.BODY]: {
      name: Joi.string().required(),
      fancyName: Joi.string(),
      cnpj: Joi.string().required(),
      openingDate: Joi.date().required(),
    },
  },
}
