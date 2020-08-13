import { ICompany } from '@domain/entities/ICompany'
import { IPagedResult } from '@domain/database/IPagedResult'

export interface ICompaniesRepository {
  create(companyData: Omit<ICompany, 'id'>): Promise<ICompany>
  findByCnpj(cnpj: string): Promise<ICompany | undefined>
  list(): Promise<IPagedResult<ICompany>>
}
