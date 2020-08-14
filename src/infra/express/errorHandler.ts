import { ErrorRequestHandler, Request, Response, NextFunction } from 'express'
import { CelebrateInternalError, isCelebrate } from 'celebrate'

import { AppError } from '@interfaces/http/errors/AppError'

const compileCelebrateErrors = (details: CelebrateInternalError['joi']['details']) => {
  const fieldsObj = {}

  details.forEach((detail) => {
    const { type, context: { key, ...validationCtx } } = detail

    delete validationCtx.label
    delete validationCtx.value

    if (fieldsObj[detail.context.key]) {
      fieldsObj[detail.context.key].errors.push({ type, ...validationCtx })
    } else {
      fieldsObj[detail.context.key] = {
        name: key,
        errors: [{ type, ...validationCtx }],
      }
    }
  })

  return Object.values(fieldsObj)
}

export const errorHandler: ErrorRequestHandler = (error: Error | CelebrateInternalError, request: Request, response: Response, _next: NextFunction) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      error: 'AppError',
      code: error.code,
      message: error.message,
      details: error.details,
    })
  }

  if (isCelebrate(error)) {
    const { joi: { details } } = error as CelebrateInternalError
    const errors = compileCelebrateErrors(details)

    return response.status(400).json({
      status: 'error',
      error: 'ValidationError',
      code: 'VALIDATION_ERROR',
      message: 'Some fields have errors, make sure you are providing valid values',
      fields: errors,
    })
  }

  console.error(error)

  return response.status(500).json({
    status: 'error',
    error: 'UnknownError',
    code: 'UNKNOWN_ERROR',
    message: 'Internal Server Error',
  })
}
