# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v24.15.0`
* __Run:__ Sun May 17 2026 07:49:33 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

## Single Route Startup

| Framework | startup(ms) | listen(ms) |
|-----------|-------------|------------|
| Hono | 34.58 | 36.70 |
| Zeltjs | 60.24 | 68.10 |
| Fastify (original) | 90.37 | 101.17 |
| AdonisJS | 141.63 | 148.60 |
| NestJS (Express) | 169.94 | 268.00 |

## Many Routes Startup

| Framework | startup(ms) | listen(ms) |
|-----------|-------------|------------|
| Hono (10 routes) | 34.53 | 36.70 |
| Hono (100 routes) | 34.69 | 36.83 |
| Hono (1 routes) | 35.16 | 37.31 |
| Hono (1000 routes) | 35.54 | 37.69 |
| Hono (10000 routes) | 40.79 | 43.46 |
| Zeltjs (1 routes) | 57.38 | 67.03 |
| Zeltjs (10 routes) | 59.14 | 70.02 |
| Zeltjs (100 routes) | 58.37 | 72.62 |
| Fastify (1 routes) | 88.18 | 98.28 |
| Fastify (10 routes) | 88.01 | 99.23 |
| Zeltjs (1000 routes) | 58.52 | 106.87 |
| Fastify (100 routes) | 95.99 | 114.88 |
| Fastify (1 routes + schema) | 87.71 | 119.64 |
| Fastify (10 routes + schema) | 89.13 | 121.32 |
| Fastify (100 routes + schema) | 96.16 | 132.26 |
| 1-startup-routes-adonisjs | 140.55 | 147.51 |
| 10-startup-routes-adonisjs | 140.70 | 148.52 |
| 100-startup-routes-adonisjs | 141.07 | 151.25 |
| 1000-startup-routes-adonisjs | 139.72 | 162.45 |
| Fastify (1000 routes) | 182.55 | 238.25 |
| Fastify (1000 routes + schema) | 187.42 | 246.91 |
| NestJS (1 routes) | 166.31 | 264.92 |
| NestJS (10 routes) | 165.93 | 269.98 |
| NestJS (100 routes) | 167.79 | 283.97 |
| Zeltjs (10000 routes) | 58.11 | 354.78 |
| Fastify (10000 routes + schema) | 3401.50 | 3599.03 |
| Fastify (10000 routes) | 3119.64 | 4421.54 |
