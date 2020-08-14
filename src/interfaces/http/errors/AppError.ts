interface IDetails {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

export class AppError {
  public readonly message: string

  public readonly code: string

  public readonly statusCode: number

  public readonly details?: IDetails

  constructor (message: string, code: string, statusCode = 400, details?: IDetails) {
    this.message = message
    this.code = code
    this.statusCode = statusCode
    this.details = details
  }
}
