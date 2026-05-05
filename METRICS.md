# Metrics
* __Machine:__ linux x64 | 6 vCPUs | 11.7GB Mem
* __Node:__ `v24.14.0`
* __Run:__ Tue May 05 2026 20:15:04 GMT+0900 (日本標準時)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

## Single Route Startup

| Framework | startup(ms) | listen(ms) |
|-----------|-------------|------------|
| Hono | 56.03 | 59.93 |
| Zeltjs | 86.21 | 96.34 |
| Fastify (original) | 127.18 | 142.33 |
| NestJS (Express) | 260.17 | 401.74 |

## Many Routes Startup

| Framework | startup(ms) | listen(ms) |
|-----------|-------------|------------|
| Fastify (10 routes) | 120.86 | 135.03 |
| Fastify (1 routes) | 129.87 | 143.02 |
| Fastify (10 routes + schema) | 117.21 | 157.10 |
| Fastify (1 routes + schema) | 118.42 | 157.25 |
| Fastify (100 routes + schema) | 121.82 | 167.21 |
| Fastify (100 routes) | 165.09 | 195.11 |
| Fastify (1000 routes + schema) | 281.16 | 367.78 |
| Fastify (1000 routes) | 304.72 | 412.25 |
| Fastify (10000 routes + schema) | 5244.67 | 5476.78 |
| Fastify (10000 routes) | 4936.55 | 6711.55 |
