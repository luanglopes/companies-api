import 'reflect-metadata'
import './container'

import { container } from 'tsyringe'

import { HttpServer } from '@interfaces/http/server'

const port = process.env.PORT ? +process.env.PORT : 3000

const server = container.resolve(HttpServer)

server.start({ port })
