import { FakeCompaniesRepository } from '@repositories/fakes/FakeCompaniesRepository'
import { ICompany } from '@database/entities/ICompany'
import { AppError } from '@interfaces/http/errors/AppError'
import { CreateCompanyService } from './CreateCompanyService'

describe('CreateCompanyService', () => {
  let fakeCompaniesRepository: FakeCompaniesRepository
  let createCompanyService: CreateCompanyService

  beforeEach(() => {
    fakeCompaniesRepository = new FakeCompaniesRepository()

    createCompanyService = new CreateCompanyService(
      fakeCompaniesRepository,
    )
  })

  it('should create a company with provided data', async () => {
    const companyData: Omit<ICompany, 'id'> = {
      cnpj: 'some-cnpj',
      name: 'Awesome Company LTDA',
      openingDate: new Date(),
      fancyName: 'Awesome Company',
    }

    const createSpy = jest.spyOn(fakeCompaniesRepository, 'create')
    const findByCnpjSpy = jest.spyOn(fakeCompaniesRepository, 'findByCnpj')

    await createCompanyService.execute({ data: companyData })

    expect(createSpy).toHaveBeenCalledWith(companyData)
    expect(findByCnpjSpy).toHaveBeenCalledWith(companyData.cnpj)
  })

  it('should not create a company with duplicated CNPJ', async () => {
    const companyData: Omit<ICompany, 'id'> = {
      cnpj: 'some-cnpj',
      name: 'Awesome Company LTDA',
      openingDate: new Date(),
      fancyName: 'Awesome Company',
    }

    await fakeCompaniesRepository.create(companyData)

    const createSpy = jest.spyOn(fakeCompaniesRepository, 'create')
    const findByCnpjSpy = jest.spyOn(fakeCompaniesRepository, 'findByCnpj')

    await expect(createCompanyService.execute({ data: companyData })).rejects.toBeInstanceOf(AppError)
    expect(findByCnpjSpy).toHaveBeenCalledWith(companyData.cnpj)
    expect(createSpy).not.toHaveBeenCalled()
  })
})
