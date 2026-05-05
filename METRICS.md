# Metrics
* __Machine:__ linux x64 | 6 vCPUs | 11.7GB Mem
* __Node:__ `v24.14.0`
* __Run:__ Tue May 05 2026 20:07:26 GMT+0900 (日本標準時)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 118.42 | 157.25 |
| 1-startup-routes.cjs | 129.87 | 143.02 |
| 10-startup-routes-schema.cjs | 117.21 | 157.10 |
| 10-startup-routes.cjs | 120.86 | 135.03 |
| 100-startup-routes-schema.cjs | 121.82 | 167.21 |
| 100-startup-routes.cjs | 165.09 | 195.11 |
| 1000-startup-routes-schema.cjs | 281.16 | 367.78 |
| 1000-startup-routes.cjs | 304.72 | 412.25 |
| 10000-startup-routes-schema.cjs | 5244.67 | 5476.78 |
| 10000-startup-routes.cjs | 4936.55 | 6711.55 |
| startup-listen-hono.cjs | 56.03 | 59.93 |
| startup-listen-nestjs-express.cjs | 260.17 | 401.74 |
| startup-listen-zeltjs.cjs | 86.21 | 96.34 |
| startup-listen.cjs | 127.18 | 142.33 |
