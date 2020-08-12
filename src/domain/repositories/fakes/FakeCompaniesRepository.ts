import { ICompany } from '@domain/entities/ICompany'
import { ICompaniesRepository } from '../ICompaniesRepository'

export class FakeCompaniesRepository implements ICompaniesRepository {
  private companies: Array<ICompany> = []

  async create (companyData: Omit<ICompany, 'id'>): Promise<ICompany> {
    const newCompany = { ...companyData, id: `${this.companies.length}` }

    this.companies.push(newCompany)

    return newCompany
  }

  async findByCnpj (cnpj: string): Promise<ICompany> {
    return this.companies.find(company => company.cnpj === cnpj)
  }
}
