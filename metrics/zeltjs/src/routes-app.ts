import { onNode } from '@zeltjs/adapter-node'
import { createApp, Controller, Get } from '@zeltjs/core'

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

export const run = async (routeCount: number, onReady: () => void) => {
  const controllers = []
  for (let i = 0; i < routeCount; i++) {
    controllers.push(createController(i))
  }
  const app = createApp({ http: { controllers } })
  const node = await onNode(app)
  const handle = await node.listen(0)
  onReady()
  return handle
}
