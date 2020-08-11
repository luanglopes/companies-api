import { container } from 'tsyringe'

import { IHttpApplication } from '@interfaces/http/IHttpApplication'
import { HttpApplication as ExpressHttpApplication } from '@infra/express'
import { IDatabase } from '@domain/database/IDatabase'
import { Database as TypeOrmDatabase } from '@infra/typeorm'

container.registerSingleton<IDatabase>('Database', TypeOrmDatabase)

container.registerSingleton<IHttpApplication>('HttpApplication', ExpressHttpApplication)
