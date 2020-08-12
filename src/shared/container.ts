import { container } from 'tsyringe'

import { IHttpApplication } from '@interfaces/http/IHttpApplication'
import { HttpApplication as ExpressHttpApplication } from '@infra/express'

import { IDatabase } from '@domain/database/IDatabase'
import { Database as TypeOrmDatabase } from '@infra/typeorm'

import { ICompaniesRepository } from '@domain/repositories/ICompaniesRepository'
import { CompaniesRepository } from '@infra/typeorm/repositories/CompaniesRepository'

container.registerSingleton<IDatabase>('Database', TypeOrmDatabase)

container.registerSingleton<IHttpApplication>('HttpApplication', ExpressHttpApplication)

container.registerSingleton<ICompaniesRepository>('CompaniesRepository', CompaniesRepository)
