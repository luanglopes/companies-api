import { Router } from 'express'

import companiesRouter from './companies.router'

export default {
  getRoutes (): Router {
    const router = Router()

    router.use('/companies', companiesRouter.getRoutes())

    return router
  },
}
