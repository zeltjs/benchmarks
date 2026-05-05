'use strict'

const start = process.hrtime()

const { serve } = require('@hono/node-server')
const { Hono } = require('hono')

const app = new Hono()
app.get('/', (c) => c.json({ hello: 'world' }))

const loadingTime = process.hrtime(start)

const server = serve({ fetch: app.fetch, port: 0 }, () => {
  const listenTime = process.hrtime(start)
  const path = require('node:path')
  require('node:fs').writeFileSync(
    path.join(__dirname, `${path.basename(__filename)}.txt`),
    `${loadingTime} | ${listenTime}\n`,
    { encoding: 'utf-8', flag: 'a' }
  )
  server.close()
})
