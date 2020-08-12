import { Repository, getRepository } from 'typeorm'

import { ICompaniesRepository } from '@domain/repositories/ICompaniesRepository'
import { ICompany } from '@domain/entities/ICompany'
import { Company } from '../entities/Company'

export class CompaniesRepository implements ICompaniesRepository {
  private ormRepository: Repository<Company>

  constructor () {
    this.ormRepository = getRepository(Company)
  }

  public async create (companyData: Omit<ICompany, 'id'>): Promise<ICompany> {
    const company = this.ormRepository.create(companyData)

    await this.ormRepository.save(company)

    return company
  }

  public async findByCnpj (cnpj: string): Promise<ICompany | undefined> {
    const company = await this.ormRepository.findOne({ cnpj })

    return company || undefined
  }
}
