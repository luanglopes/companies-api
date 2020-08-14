import 'reflect-metadata'
import './container'

import { container } from 'tsyringe'

import { HttpServer } from '@interfaces/http/server'

const server = container.resolve(HttpServer)

server.start({ port: 3000 })
