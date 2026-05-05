import { writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const start = process.hrtime()

const { run } = await import('./listen-app.js')
const loadingTime = process.hrtime(start)

const app = await run()
await app.listen(0)

const listenTime = process.hrtime(start)
writeFileSync(
  join(__dirname, '..', '..', 'startup-listen-nestjs-express.cjs.txt'),
  `${loadingTime} | ${listenTime}\n`,
  { encoding: 'utf-8', flag: 'a' }
)
await app.close()
process.exit(0)
