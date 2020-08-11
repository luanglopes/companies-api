import { createServer } from 'http'
import { injectable, inject } from 'tsyringe'

import { IHttpApplication } from './IHttpApplication'

export interface IStartServerOptions {
  port: number
}

@injectable()
export class HttpServer {
  constructor (
    @inject('HttpApplication')
    private httpApplication: IHttpApplication,
  ) { }

  public async start ({ port }: IStartServerOptions): Promise<void> {
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
