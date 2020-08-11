import { RequestListener } from 'http'

export interface IHttpApplication {
  setup(): Promise<void>
  getHandler(): RequestListener
}
