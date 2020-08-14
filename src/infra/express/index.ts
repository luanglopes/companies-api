import { injectable, inject } from 'tsyringe'
import { RequestListener } from 'http'
import express, { Application } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import 'express-async-errors'

import { IHttpApplication } from '@interfaces/http/IHttpApplication'
import { IDatabase } from 'database/IDatabase'
import appRouter from './routes'

@injectable()
export class HttpApplication implements IHttpApplication {
  private application: Application

  constructor (
    @inject('Database')
    private database: IDatabase,
  ) {
    this.application = express()
  }

  public async setup (): Promise<void> {
    await this.setupDatabase()
    this.setupMiddlewares()
    this.setupRoutes()
  }

  public getHandler (): RequestListener {
    return this.application
  }

  private async setupDatabase (): Promise<void> {
    await this.database.connect()
  }

  private setupMiddlewares (): void {
    this.application.use(cors())
    this.application.use(helmet())
    this.application.use(express.json())
  }

  private setupRoutes (): void {
    this.application.get('/health', (request, response) => {
      return response.json({ status: 'Running' })
    })

    this.application.use(appRouter.getRoutes())
  }
}
