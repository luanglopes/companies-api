import { ICompany } from 'database/entities/ICompany'
import { IPagedResult } from 'database/IPagedResult'

export interface ICompaniesRepository {
  create(companyData: Omit<ICompany, 'id'>): Promise<ICompany>
  findByCnpj(cnpj: string): Promise<ICompany | undefined>
  list(): Promise<IPagedResult<ICompany>>
  delete(id: ICompany['id']): Promise<void>
}
