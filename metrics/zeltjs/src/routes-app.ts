import { serve } from '@zeltjs/adapter-node'
import { createHttpApp, Controller, Get } from '@zeltjs/core'

const createController = (index: number) => {
  @Controller(`/${index}`)
  class DynamicController {
    @Get('/')
    handle() {
      return {}
    }
  }
  return DynamicController
}

export const run = (routeCount: number, onReady: () => void) => {
  const controllers = []
  for (let i = 0; i < routeCount; i++) {
    controllers.push(createController(i))
  }
  const app = createHttpApp({ controllers })
  return serve(app, { port: 0 }, onReady)
}
