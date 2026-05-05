import { serve } from '@zeltjs/adapter-node'
import { createHttpApp, Controller, Get } from '@zeltjs/core'

export const run = (routes: number, onReady: () => void) => {
  const controllers: any[] = []
  for (let i = 0; i < routes; i++) {
    @Controller(`/${i}`)
    class DynamicController {
      @Get('/')
      handler() {
        return {}
      }
    }
    controllers.push(DynamicController)
  }

  const app = createHttpApp({ controllers })
  return serve(app, { port: 0 }, onReady)
}
