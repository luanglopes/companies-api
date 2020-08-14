import { container } from 'tsyringe'
import { Router } from 'express'

import { CompaniesController } from '../controllers/CompaniesController'
import { handlerFactory } from '../handlerFactory'
import ensureValidation from '../middlewares/ensureValidation'
import { companiesValidators } from '../validations/companies.validations'

export default {
  getRoutes (): Router {
    const companiesRouter = Router()

    const companiesController = container.resolve(CompaniesController)

    companiesRouter.post('/', ensureValidation(companiesValidators.create), handlerFactory(companiesController, 'create'))
    companiesRouter.get('/', handlerFactory(companiesController, 'list'))
    companiesRouter.delete('/:id', handlerFactory(companiesController, 'delete'))

    return companiesRouter
  },
}
