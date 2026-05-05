import { serve } from '@zeltjs/adapter-node'
import { createHttpApp, Controller, Get } from '@zeltjs/core'

@Controller('/')
class AppController {
  @Get('/')
  hello() {
    return { hello: 'world' }
  }
}

const app = createHttpApp({ controllers: [AppController] })

export const run = (onReady: () => void) => serve(app, { port: 0 }, onReady)
