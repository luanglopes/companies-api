import { RequestHandler } from 'express'

export function handlerFactory<T> (controller: T, method: keyof T): RequestHandler {
  controller[method] = ((controller[method] as unknown) as RequestHandler).bind(controller)

  return controller[method] as unknown as RequestHandler
}
