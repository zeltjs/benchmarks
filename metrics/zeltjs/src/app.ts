import { onNode } from '@zeltjs/adapter-node'
import { createApp, Controller, Get } from '@zeltjs/core'

export const run = async (routes: number, onReady: () => void) => {
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

  const app = createApp({ http: { controllers } })
  const node = await onNode(app)
  const handle = await node.listen(0)
  onReady()
  return handle
}
