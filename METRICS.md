# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v24.15.0`
* __Run:__ Tue May 05 2026 11:13:37 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 87.05 | 118.06 |
| 1-startup-routes.cjs | 85.87 | 95.96 |
| 10-startup-routes-schema.cjs | 87.77 | 119.39 |
| 10-startup-routes.cjs | 86.50 | 97.58 |
| 100-startup-routes-schema.cjs | 94.90 | 130.05 |
| 100-startup-routes.cjs | 94.61 | 113.58 |
| 1000-startup-routes-schema.cjs | 178.02 | 239.58 |
| 1000-startup-routes.cjs | 178.95 | 232.34 |
| 10000-startup-routes-schema.cjs | 3320.44 | 3524.51 |
| 10000-startup-routes.cjs | 3117.19 | 4319.91 |
| startup-listen-hono.cjs | 34.17 | 36.28 |
| startup-listen-nestjs-express.cjs | 164.31 | 259.76 |
| startup-listen-zeltjs.cjs | 53.25 | 59.20 |
| startup-listen.cjs | 92.63 | 103.60 |
