import { ICompany } from '@database/entities/ICompany'
import { IPagedResult } from '@database/IPagedResult'
import { ICompaniesRepository } from '../ICompaniesRepository'

export class FakeCompaniesRepository implements ICompaniesRepository {
  private companies: Array<ICompany> = []

  async list (): Promise<IPagedResult<ICompany>> {
    return {
      list: this.companies,
      total: this.companies.length,
    }
  }

  async delete (id: number): Promise<void> {
    this.companies = this.companies.filter(compnay => compnay.id !== id)
  }

  async create (companyData: Omit<ICompany, 'id'>): Promise<ICompany> {
    const newCompany = { ...companyData, id: this.companies.length + 1 }

    this.companies.push(newCompany)

    return newCompany
  }

  async findByCnpj (cnpj: string): Promise<ICompany> {
    return this.companies.find(company => company.cnpj === cnpj)
  }
}
