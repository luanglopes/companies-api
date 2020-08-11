import 'reflect-metadata'
import { createServer } from 'http'

import { IHttpApplication } from './IHttpApplication'
import { HttpApplication as ExpressHttpApplication } from '@infra/express'

interface IStartServerOptions {
  port: number
}

class HttpServer {
  constructor (private httpApplication: IHttpApplication) { }

  public async start ({ port }: IStartServerOptions) {
    console.log('⚡ Starting http server...')
    try {
      await this.httpApplication.setup()

      const handler = this.httpApplication.getHandler()
      const server = createServer(handler)

      server.listen(port, () => {
        console.log(`🚀 Server started on port ${port}`)
      })
    } catch (error) {
      console.error('❌ Error starting server', error)
      process.exit(-1)
    }
  }
}

const expressHttpApplication = new ExpressHttpApplication()
const server = new HttpServer(expressHttpApplication)

server.start({ port: 3000 })
