import { writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const routes = parseInt(process.env.routes || '0', 10)

const start = process.hrtime()

const { run } = await import('./routes-app.js')
const loadingTime = process.hrtime(start)

const server = await run(routes, () => {
  const listenTime = process.hrtime(start)
  writeFileSync(
    join(__dirname, '..', '..', `${routes}-startup-routes-zeltjs.txt`),
    `${loadingTime} | ${listenTime}\n`,
    { encoding: 'utf-8', flag: 'a' }
  )
  server.close()
})
