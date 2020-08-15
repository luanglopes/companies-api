import { Request, Response } from 'express'
import { container, injectable, inject } from 'tsyringe'

import { CreateCompanyService } from '@services/CreateCompanyService'
import { ICompaniesRepository } from '@repositories/ICompaniesRepository'

@injectable()
export class CompaniesController {
  constructor (
    @inject('CompaniesRepository')
    private companiesRepository: ICompaniesRepository,
  ) {}

  public async create (request: Request, response: Response): Promise<Response> {
    const data = request.body

    const createCompanyService = container.resolve(CreateCompanyService)

    const company = await createCompanyService.execute({ data })

    return response.status(201).json(company)
  }

  public async list (request: Request, response: Response): Promise<Response> {
    const result = await this.companiesRepository.list()

    return response.json(result)
  }

  public async delete (request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    await this.companiesRepository.delete(+id)

    return response.sendStatus(204)
  }
}
