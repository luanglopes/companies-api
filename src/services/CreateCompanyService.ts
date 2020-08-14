import { injectable, inject } from 'tsyringe'

import { ICompany } from '@database/entities/ICompany'
import { ICompaniesRepository } from '@repositories/ICompaniesRepository'
import { AppError } from '@interfaces/http/errors/AppError'

interface IRequest {
  data: Omit<ICompany, 'id'>
}

@injectable()
export class CreateCompanyService {
  constructor (
    @inject('CompaniesRepository')
    private companiesRepository: ICompaniesRepository,
  ) {}

  public async execute ({ data }: IRequest): Promise<ICompany> {
    const companyWithCnpj = await this.companiesRepository.findByCnpj(data.cnpj)

    if (companyWithCnpj) {
      throw new AppError('CNPJ already in use', 'CNPJ_ALREADY_IN_USE')
    }

    const company = await this.companiesRepository.create(data)

    return company
  }
}
