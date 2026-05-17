'use strict'

const fs = require('node:fs')
const path = require('node:path')
const os = require('node:os')

function readableHRTimeMs (diff) {
  return (diff[0] * 1e9 + diff[1]) / 1000000
}

const frameworkNameMap = {
  'startup-listen-hono': 'Hono',
  'startup-listen-fastify': 'Fastify',
  'startup-listen-nestjs-express': 'NestJS (Express)',
  'startup-listen-zeltjs': 'Zeltjs',
  'startup-listen-adonisjs': 'AdonisJS',
  'startup-listen': 'Fastify (original)'
}

const routeFrameworkMap = {
  hono: 'Hono',
  zeltjs: 'Zeltjs',
  nestjs: 'NestJS',
  adonisjs: 'AdonisJS'
}

function getDisplayName (filename) {
  const base = filename.replace('.txt', '').replace('.cjs', '')
  if (frameworkNameMap[base]) {
    return frameworkNameMap[base]
  }
  const routeMatch = base.match(/^(\d+)-startup-routes(-schema)?(-hono|-zeltjs|-nestjs|-adonisjs)?$/)
  if (routeMatch) {
    const count = routeMatch[1]
    const hasSchema = routeMatch[2] ? ' + schema' : ''
    const fwSuffix = routeMatch[3] ? routeMatch[3].slice(1) : null
    const framework = fwSuffix ? routeFrameworkMap[fwSuffix] : 'Fastify'
    return `${framework} (${count} routes${hasSchema})`
  }
  return base
}

function categorizeResult (filename) {
  const base = filename.replace('.txt', '').replace('.cjs', '')
  if (base.startsWith('startup-listen')) {
    return 'single-route'
  }
  if (base.match(/^\d+-startup-routes/)) {
    return 'many-routes'
  }
  return 'other'
}

function updateReadme (singleRouteMd, manyRoutesMd) {
  const machineInfo = `${os.platform()} ${os.arch()} | ${os.cpus().length} vCPUs | ${(os.totalmem() / (1024 ** 3)).toFixed(1)}GB Mem`
  const benchmarkMd = `# Metrics
* __Machine:__ ${machineInfo}
* __Node:__ \`${process.version}\`
* __Run:__ ${new Date()}
* __Method:__ \`npm run metrics\` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

## Single Route Startup
${singleRouteMd}
${manyRoutesMd ? `\n## Many Routes Startup\n${manyRoutesMd}` : ''}
`
  const md = fs.readFileSync('METRICS.md', 'utf8')
  fs.writeFileSync('METRICS.md', md.split('# Metrics', 1)[0] + benchmarkMd, 'utf8')
}

const results = fs.readdirSync(__dirname).filter((x) => x.endsWith('.txt'))

const singleRouteResults = []
const manyRoutesResults = []

for (const r of results) {
  const data = fs.readFileSync(path.join(__dirname, r), { encoding: 'utf-8' })
  const lines = data.split('\n').filter(Boolean)
  const temp = {
    startup: 0,
    listen: 0
  }
  lines.forEach((x) => {
    const [startup, listen] = x.split('|')
    temp.startup += readableHRTimeMs(startup.split(',').map(x => parseInt(x)))
    temp.listen += readableHRTimeMs(listen.split(',').map(x => parseInt(x)))
  })

  const entry = {
    name: getDisplayName(r),
    startup: (temp.startup / lines.length).toFixed(2),
    listen: (temp.listen / lines.length).toFixed(2)
  }

  const category = categorizeResult(r)
  if (category === 'single-route') {
    singleRouteResults.push(entry)
  } else if (category === 'many-routes') {
    manyRoutesResults.push(entry)
  }
}

singleRouteResults.sort((a, b) => parseFloat(a.listen) - parseFloat(b.listen))
manyRoutesResults.sort((a, b) => parseFloat(a.listen) - parseFloat(b.listen))

function buildTable (entries) {
  if (entries.length === 0) return ''
  let md = `
| Framework | startup(ms) | listen(ms) |
|-----------|-------------|------------|`
  for (const e of entries) {
    md += `\n| ${e.name} | ${e.startup} | ${e.listen} |`
  }
  return md
}

const singleRouteMd = buildTable(singleRouteResults)
const manyRoutesMd = buildTable(manyRoutesResults)

if (process.argv.length >= 3 && process.argv[2] === '-u') {
  console.debug('Updating METRICS...')
  updateReadme(singleRouteMd, manyRoutesMd)
}
console.log('=== Single Route Startup ===')
console.log(singleRouteMd)
if (manyRoutesMd) {
  console.log('\n=== Many Routes Startup ===')
  console.log(manyRoutesMd)
}
