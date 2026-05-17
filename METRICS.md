# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v24.15.0`
* __Run:__ Sun May 17 2026 07:55:44 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

## Single Route Startup

| Framework | startup(ms) | listen(ms) |
|-----------|-------------|------------|
| Hono | 34.26 | 36.46 |
| Zeltjs | 60.08 | 68.24 |
| Fastify (original) | 89.36 | 100.28 |
| AdonisJS | 142.45 | 149.21 |
| NestJS (Express) | 165.51 | 262.81 |

## Many Routes Startup

| Framework | startup(ms) | listen(ms) |
|-----------|-------------|------------|
| Hono (10 routes) | 33.76 | 35.92 |
| Hono (100 routes) | 33.87 | 36.04 |
| Hono (1 routes) | 34.07 | 36.26 |
| Hono (1000 routes) | 34.96 | 37.15 |
| Hono (10000 routes) | 39.68 | 42.02 |
| Zeltjs (1 routes) | 58.44 | 68.23 |
| Zeltjs (10 routes) | 58.63 | 69.34 |
| Zeltjs (100 routes) | 57.00 | 70.79 |
| Fastify (1 routes) | 88.61 | 98.49 |
| Fastify (10 routes) | 90.96 | 102.80 |
| Zeltjs (1000 routes) | 58.72 | 102.90 |
| Fastify (1 routes + schema) | 86.22 | 115.65 |
| Fastify (10 routes + schema) | 88.84 | 118.84 |
| Fastify (100 routes) | 100.13 | 119.34 |
| Fastify (100 routes + schema) | 94.44 | 127.00 |
| AdonisJS (10 routes) | 140.03 | 147.58 |
| AdonisJS (1 routes) | 141.65 | 148.49 |
| AdonisJS (100 routes) | 140.81 | 150.48 |
| AdonisJS (1000 routes) | 143.20 | 165.67 |
| Fastify (1000 routes + schema) | 159.58 | 221.48 |
| Fastify (1000 routes) | 179.57 | 232.67 |
| NestJS (1 routes) | 162.33 | 259.35 |
| NestJS (10 routes) | 162.45 | 265.73 |
| NestJS (100 routes) | 164.06 | 277.42 |
| Zeltjs (10000 routes) | 57.48 | 329.55 |
| Fastify (10000 routes + schema) | 3897.65 | 4095.17 |
| Fastify (10000 routes) | 3450.32 | 4804.08 |
