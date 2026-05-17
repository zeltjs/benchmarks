'use strict'

const { Worker } = require('node:worker_threads')
const { spawn } = require('node:child_process')
const path = require('node:path')

const minSamples = 5

const runSample = (cb) => {
  return async () => {
    for (let i = 0; i < minSamples; ++i) {
      await cb()
    }
  }
}

const runWorker = (file) => {
  return new Promise((resolve) => {
    new Worker(path.join(__dirname, file)).on('exit', resolve)
  })
}

const runNode = (file, env = {}) => {
  return new Promise((resolve, reject) => {
    const child = spawn('node', [path.join(__dirname, file)], {
      stdio: 'inherit',
      env: { ...process.env, ...env }
    })
    child.on('exit', (code) => code === 0 ? resolve() : reject(new Error(`Exit ${code}`)))
  })
}

const measureStartupListen = runSample(() => runWorker('./startup-listen.cjs'))
const measureStartupListenHono = runSample(() => runWorker('./startup-listen-hono.cjs'))
const measureStartupListenNestjs = runSample(() => runNode('./nestjs-express/dist/listen-runner.js'))
const measureStartupListenZeltjs = runSample(() => runNode('./zeltjs/dist/listen-runner.js'))
const measureStartupListenAdonisjs = runSample(() => runNode('./adonisjs/dist/listen-runner.js'))

const measureStartupNRoutes = runSample(async () => {
  for (let n = 1; n <= 10000; n *= 10) {
    await new Promise((resolve) => {
      new Worker(
        path.join(__dirname, './startup-routes.cjs'),
        { env: { routes: n } }
      ).on('exit', resolve)
    })
  }
})

const measureStartupNSchemaRoutes = runSample(async () => {
  for (let n = 1; n <= 10000; n *= 10) {
    await new Promise((resolve) => {
      new Worker(
        path.join(__dirname, './startup-routes-schema.cjs'),
        { env: { routes: n } }
      ).on('exit', resolve)
    })
  }
})

const measureStartupNRoutesHono = runSample(async () => {
  for (let n = 1; n <= 10000; n *= 10) {
    await new Promise((resolve) => {
      new Worker(
        path.join(__dirname, './startup-routes-hono.cjs'),
        { env: { routes: n } }
      ).on('exit', resolve)
    })
  }
})

const measureStartupNRoutesZeltjs = runSample(async () => {
  for (let n = 1; n <= 10000; n *= 10) {
    await runNode('./zeltjs/dist/routes-runner.js', { routes: n })
  }
})

const measureStartupNRoutesNestjs = runSample(async () => {
  await runNode('./nestjs-express/dist/routes-runner-1.js')
  await runNode('./nestjs-express/dist/routes-runner-10.js')
  await runNode('./nestjs-express/dist/routes-runner-100.js')
})

const measureStartupNRoutesAdonisjs = runSample(async () => {
  for (let n = 1; n <= 1000; n *= 10) {
    await runNode('./adonisjs/dist/routes-runner.js', { routes: n })
  }
})

measureStartupListen()
  .then(measureStartupListenHono)
  .then(measureStartupListenNestjs)
  .then(measureStartupListenZeltjs)
  .then(measureStartupListenAdonisjs)
  .then(measureStartupNRoutes)
  .then(measureStartupNSchemaRoutes)
  .then(measureStartupNRoutesHono)
  .then(measureStartupNRoutesZeltjs)
  .then(measureStartupNRoutesNestjs)
  .then(measureStartupNRoutesAdonisjs)
