import { onNode } from '@zeltjs/adapter-node'
import { createApp, Controller, Get } from '@zeltjs/core'

@Controller('/')
export class AppController {
  @Get('/')
  hello() {
    return { hello: 'world' }
  }
}

const app = createApp({ http: { controllers: [AppController] } })
const node = await onNode(app)
node.listen(3000)
