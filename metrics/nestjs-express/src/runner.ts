import { writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const routes = parseInt(process.env.routes || '0', 10)

const start = process.hrtime()

const { run } = await import('./app.js')
const loadingTime = process.hrtime(start)

const app = await run(routes)
await app.listen(0)

const listenTime = process.hrtime(start)
writeFileSync(
  join(__dirname, '..', '..', `${routes}-startup-routes-nestjs-express.txt`),
  `${loadingTime} | ${listenTime}\n`,
  { encoding: 'utf-8', flag: 'a' }
)
await app.close()
process.exit(0)
