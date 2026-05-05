import { serve } from '@zeltjs/adapter-node'
import { createHttpApp, Controller, Get } from '@zeltjs/core'

@Controller('/')
export class AppController {
  @Get('/')
  hello() {
    return { hello: 'world' }
  }
}

const app = createHttpApp({ controllers: [AppController] })
serve(app)
