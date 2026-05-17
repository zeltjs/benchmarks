import { writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const start = process.hrtime()

const { run } = await import('./listen-app.js')
const loadingTime = process.hrtime(start)

await run((server) => {
  const listenTime = process.hrtime(start)
  writeFileSync(
    join(__dirname, '..', '..', 'startup-listen-adonisjs.txt'),
    `${loadingTime} | ${listenTime}\n`,
    { encoding: 'utf-8', flag: 'a' }
  )
  server.close()
})
