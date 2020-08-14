import { Router } from 'express'

import companiesRouter from './companies.router'

export default {
  getRoutes (): Router {
    const router = Router()

    router.get('/health', (request, response) => {
      return response.json({ status: 'Running' })
    })

    router.use('/companies', companiesRouter.getRoutes())

    return router
  },
}
