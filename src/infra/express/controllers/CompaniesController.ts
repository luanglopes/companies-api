import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { CreateCompanyService } from '@app/services/CreateCompanyService'
import { CompaniesRepository } from '@infra/typeorm/repositories/CompaniesRepository'

export class CompaniesController {
  public async create (request: Request, response: Response): Promise<Response> {
    const data = request.body

    const createCompanyService = container.resolve(CreateCompanyService)

    const company = await createCompanyService.execute({ data })

    return response.status(201).json(company)
  }

  public async list (request: Request, response: Response): Promise<Response> {
    const companiesRepository = new CompaniesRepository()

    const result = await companiesRepository.list()

    return response.json(result)
  }
}
