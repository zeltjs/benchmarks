# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v24.15.0`
* __Run:__ Sun May 17 2026 07:36:34 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

## Single Route Startup

| Framework | startup(ms) | listen(ms) |
|-----------|-------------|------------|
| Hono | 34.92 | 37.11 |
| Zeltjs | 61.15 | 69.12 |
| Fastify (original) | 90.82 | 101.89 |
| NestJS (Express) | 166.79 | 264.85 |

## Many Routes Startup

| Framework | startup(ms) | listen(ms) |
|-----------|-------------|------------|
| Hono (10 routes) | 33.94 | 36.05 |
| Hono (1 routes) | 34.10 | 36.23 |
| Hono (100 routes) | 34.41 | 36.66 |
| Hono (1000 routes) | 37.52 | 39.69 |
| Hono (10000 routes) | 40.62 | 43.11 |
| Zeltjs (1 routes) | 56.01 | 65.74 |
| Zeltjs (10 routes) | 57.01 | 67.82 |
| Zeltjs (100 routes) | 58.34 | 72.58 |
| Fastify (1 routes) | 88.50 | 98.77 |
| Fastify (10 routes) | 88.38 | 99.74 |
| Zeltjs (1000 routes) | 57.45 | 104.84 |
| Fastify (100 routes) | 95.70 | 115.52 |
| Fastify (1 routes + schema) | 89.82 | 121.79 |
| Fastify (10 routes + schema) | 89.88 | 122.50 |
| Fastify (100 routes + schema) | 96.98 | 133.39 |
| Fastify (1000 routes) | 182.89 | 239.69 |
| Fastify (1000 routes + schema) | 186.28 | 247.29 |
| NestJS (1 routes) | 165.71 | 261.50 |
| NestJS (10 routes) | 164.61 | 265.94 |
| NestJS (100 routes) | 167.92 | 280.87 |
| Zeltjs (10000 routes) | 58.50 | 352.33 |
| Fastify (10000 routes + schema) | 3492.25 | 3693.44 |
| Fastify (10000 routes) | 3189.14 | 4461.34 |
