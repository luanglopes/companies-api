import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { CreateCompanyService } from '@app/services/CreateCompanyService'
import { ICompany } from '@domain/entities/ICompany'

export class CompaniesController {
  public async create (request: Request, response: Response<ICompany>): Promise<Response<ICompany>> {
    const data = request.body

    const createCompanyService = container.resolve(CreateCompanyService)

    const company = await createCompanyService.execute(data)

    return response.status(201).json(company)
  }
}
