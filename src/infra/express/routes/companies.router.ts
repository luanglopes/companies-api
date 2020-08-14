import { Router } from 'express'

import { CompaniesController } from '../controllers/CompaniesController'
import { handlerFactory } from '../handlerFactory'
import { container } from 'tsyringe'

export default {
  getRoutes (): Router {
    const companiesRouter = Router()

    const companiesController = container.resolve(CompaniesController)

    companiesRouter.post('/', handlerFactory(companiesController, 'create'))
    companiesRouter.get('/', handlerFactory(companiesController, 'list'))
    companiesRouter.delete('/:id', handlerFactory(companiesController, 'delete'))

    return companiesRouter
  },
}
