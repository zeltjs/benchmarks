# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v24.15.0`
* __Run:__ Tue May 05 2026 11:29:30 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

## Single Route Startup

| Framework | startup(ms) | listen(ms) |
|-----------|-------------|------------|
| Hono | 34.55 | 36.73 |
| Zeltjs | 57.50 | 63.64 |
| Fastify (original) | 89.79 | 100.86 |
| NestJS (Express) | 169.95 | 268.70 |

## Many Routes Startup

| Framework | startup(ms) | listen(ms) |
|-----------|-------------|------------|
| Hono (1 routes) | 34.69 | 36.88 |
| Hono (10 routes) | 34.65 | 36.88 |
| Hono (100 routes) | 34.87 | 37.07 |
| Hono (1000 routes) | 35.71 | 37.95 |
| Hono (10000 routes) | 41.46 | 44.37 |
| Zeltjs (100 routes) | 52.51 | 62.36 |
| Zeltjs (10 routes) | 53.71 | 62.45 |
| Zeltjs (1 routes) | 54.49 | 62.50 |
| Zeltjs (1000 routes) | 53.18 | 79.89 |
| Fastify (1 routes) | 88.67 | 99.11 |
| Fastify (10 routes) | 90.84 | 102.43 |
| Fastify (100 routes) | 100.27 | 119.98 |
| Fastify (1 routes + schema) | 89.14 | 121.32 |
| Fastify (10 routes + schema) | 89.98 | 122.44 |
| Fastify (100 routes + schema) | 99.19 | 135.16 |
| Zeltjs (10000 routes) | 54.95 | 189.13 |
| Fastify (1000 routes) | 185.10 | 241.18 |
| Fastify (1000 routes + schema) | 191.27 | 253.07 |
| NestJS (1 routes) | 166.75 | 265.44 |
| NestJS (10 routes) | 169.23 | 274.65 |
| NestJS (100 routes) | 171.40 | 286.78 |
| Fastify (10000 routes + schema) | 3453.59 | 3657.62 |
| Fastify (10000 routes) | 3271.02 | 4594.78 |
