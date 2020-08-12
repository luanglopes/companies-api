import { ICompany } from '@domain/entities/ICompany'

export interface ICompaniesRepository {
  create(companyData: Omit<ICompany, 'id'>): Promise<ICompany>
  findByCnpj(cnpj: string): Promise<ICompany | undefined>
}
