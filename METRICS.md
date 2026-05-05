# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v24.15.0`
* __Run:__ Tue May 05 2026 11:27:19 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

## Single Route Startup

| Framework | startup(ms) | listen(ms) |
|-----------|-------------|------------|
| Hono | 27.03 | 28.75 |
| Zeltjs | 42.18 | 47.08 |
| Fastify (original) | 67.02 | 75.28 |
| NestJS (Express) | 124.82 | 198.20 |

## Many Routes Startup

| Framework | startup(ms) | listen(ms) |
|-----------|-------------|------------|
| Hono (1 routes) | 25.54 | 27.11 |
| Hono (10 routes) | 25.82 | 27.41 |
| Hono (100 routes) | 25.83 | 27.44 |
| Hono (1000 routes) | 26.47 | 28.10 |
| Hono (10000 routes) | 30.32 | 32.15 |
| Zeltjs (1 routes) | 40.28 | 46.60 |
| Zeltjs (100 routes) | 39.06 | 46.65 |
| Zeltjs (10 routes) | 41.52 | 48.03 |
| Zeltjs (1000 routes) | 39.85 | 58.55 |
| Fastify (1 routes) | 66.34 | 74.23 |
| Fastify (10 routes) | 67.96 | 76.65 |
| Fastify (100 routes) | 71.52 | 86.02 |
| Fastify (10 routes + schema) | 65.93 | 88.85 |
| Fastify (1 routes + schema) | 66.46 | 88.97 |
| Fastify (100 routes + schema) | 71.56 | 96.73 |
| Zeltjs (10000 routes) | 40.76 | 145.37 |
| Fastify (1000 routes + schema) | 121.67 | 170.16 |
| Fastify (1000 routes) | 131.37 | 173.28 |
| Fastify (10000 routes + schema) | 2888.34 | 3057.84 |
| Fastify (10000 routes) | 2632.71 | 3657.89 |
