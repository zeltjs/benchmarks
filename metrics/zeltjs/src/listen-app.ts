import { onNode } from '@zeltjs/adapter-node'
import { createApp, Controller, Get } from '@zeltjs/core'

@Controller('/')
class AppController {
  @Get('/')
  hello() {
    return { hello: 'world' }
  }
}

const app = createApp({ http: { controllers: [AppController] } })

export const run = async (onReady: () => void) => {
  const node = await onNode(app)
  const handle = await node.listen(0)
  onReady()
  return handle
}
