import { createServer, Server as HttpServer } from 'node:http'
import { defineConfig, Server } from '@adonisjs/http-server'
import { Logger } from '@adonisjs/logger'
import { Emitter } from '@adonisjs/events'
import { Encryption } from '@adonisjs/encryption'
import { Application } from '@adonisjs/application'

export const run = async (routeCount: number, onReady: (server: HttpServer) => void): Promise<void> => {
  const app = new Application(new URL('./', import.meta.url), {
    environment: 'web',
    importer: () => {}
  })

  await app.init()

  const encryption = new Encryption({ secret: 'averylongrandom32charslongsecret' })

  const server = new Server(
    app,
    encryption,
    new Emitter(app),
    new Logger({ enabled: false }),
    defineConfig({})
  )

  const router = server.getRouter()
  for (let i = 0; i < routeCount; i++) {
    router.get(`/${i}`, (ctx) => {
      return ctx.response.send({})
    })
  }

  await server.boot()

  const httpServer = createServer(server.handle.bind(server))
  httpServer.listen(0, () => {
    onReady(httpServer)
  })
}
