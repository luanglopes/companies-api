import { Router } from 'express'

import { CompaniesController } from '../controllers/CompaniesController'

const companiesRouter = Router()

const companiesController = new CompaniesController()

companiesRouter.post('/', companiesController.create)
companiesRouter.get('/', companiesController.list)

export default companiesRouter
