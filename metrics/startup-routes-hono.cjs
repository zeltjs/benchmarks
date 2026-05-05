'use strict'
const start = process.hrtime()

const { serve } = require('@hono/node-server')
const { Hono } = require('hono')

const routes = process.env.routes || 0
const app = new Hono()

for (let i = 0; i < routes; ++i) {
  app.get(`/${i}`, (c) => c.json({}))
}
const loadingTime = process.hrtime(start)

const server = serve({ fetch: app.fetch, port: 0 }, () => {
  const listenTime = process.hrtime(start)
  const path = require('node:path')
  require('node:fs').writeFileSync(path.join(__dirname, `${routes}-startup-routes-hono.cjs.txt`), `${loadingTime} | ${listenTime}\n`, { encoding: 'utf-8', flag: 'a' })
  server.close()
})
