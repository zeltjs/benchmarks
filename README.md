<div align="center"> <a href="https://fastify.dev/">
    <img
      src="https://github.com/fastify/graphics/raw/HEAD/fastify-landscape-outlined.svg"
      width="650"
      height="auto"
    />
  </a>
</div>

<div align="center">

[![CI](https://github.com/fastify/fastify/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/fastify/fastify/actions/workflows/ci.yml)
[![Package Manager
CI](https://github.com/fastify/fastify/actions/workflows/package-manager-ci.yml/badge.svg?branch=main)](https://github.com/fastify/fastify/actions/workflows/package-manager-ci.yml)
[![Web
site](https://github.com/fastify/fastify/actions/workflows/website.yml/badge.svg?branch=main)](https://github.com/fastify/fastify/actions/workflows/website.yml)
[![neostandard javascript style](https://img.shields.io/badge/code_style-neostandard-brightgreen?style=flat)](https://github.com/neostandard/neostandard)
[![CII Best Practices](https://bestpractices.coreinfrastructure.org/projects/7585/badge)](https://bestpractices.coreinfrastructure.org/projects/7585)

</div>

<div align="center">

[![NPM
version](https://img.shields.io/npm/v/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify)
[![NPM
downloads](https://img.shields.io/npm/dm/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify)
[![Security Responsible
Disclosure](https://img.shields.io/badge/Security-Responsible%20Disclosure-yellow.svg)](https://github.com/fastify/fastify/blob/main/SECURITY.md)
[![Discord](https://img.shields.io/discord/725613461949906985)](https://discord.gg/fastify)
[![Contribute with Gitpod](https://img.shields.io/badge/Contribute%20with-Gitpod-908a85?logo=gitpod&color=blue)](https://gitpod.io/#https://github.com/fastify/fastify)
![Open Collective backers and sponsors](https://img.shields.io/opencollective/all/fastify)

</div>

<br />

# TL;DR

* [Fastify](https://github.com/fastify/fastify) is a fast and low overhead web framework for Node.js.
* This package shows how fast it is compared to other JS frameworks: these benchmarks do not pretend to represent a real-world scenario, but they give a **good indication of the framework overhead**.
* The benchmarks are run automatically on GitHub actions, which means they run on virtual hardware that can suffer from the "noisy neighbor" effect; this means that the results can vary.
* For metrics (cold-start) see [metrics.md](./METRICS.md)

# Requirements

To be included in this list, the framework should captivate users' interest. We have identified the following minimal requirements:
- **Ensure active usage**: a minimum of 500 downloads per week
- **Maintain an active repository** with at least one event (comment, issue, PR) in the last month
- The framework must use the **Node.js** HTTP module

# Usage

Clone this repo. Then

```
node ./benchmark [arguments (optional)]
```

#### Arguments

* `-h`: Help on how to use the tool.
* `bench`:  Benchmark one or more modules.
* `compare`: Get comparative data for your benchmarks.

> Create benchmark before comparing; `benchmark bench`

> You may also compare all test results, at once, in a single table; `benchmark compare -t`

> You can also extend the comparison table with percentage values based on fastest result; `benchmark compare -p`
# Benchmarks

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v24.15.0`
* __Run:__ Tue May 05 2026 12:03:39 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| 0http                    | 4.4.0    | ✓      | 55312.8    | 17.57        | 9.86          |
| restana                  | v5.2.0   | ✓      | 52072.0    | 18.73        | 9.29          |
| h3-router                | 1.15.11  | ✓      | 50084.0    | 19.46        | 8.93          |
| node-http                | v24.15.0 | ✗      | 49609.6    | 19.63        | 8.85          |
| h3                       | 1.15.11  | ✗      | 49036.8    | 19.92        | 8.74          |
| polka                    | 0.5.2    | ✓      | 47824.8    | 20.46        | 8.53          |
| micro                    | 10.0.1   | ✗      | 47348.8    | 20.63        | 8.44          |
| connect                  | 3.7.0    | ✗      | 46898.6    | 20.81        | 8.36          |
| fastify                  | 5.8.5    | ✓      | 44032.8    | 22.23        | 7.89          |
| nestjs-fastify           | 10.4.22  | ✓      | 43706.4    | 22.39        | 7.84          |
| connect-router           | 2.2.0    | ✓      | 43324.0    | 22.57        | 7.73          |
| whatwg-node-server       | 0.10.18  | ✗      | 40042.2    | 24.49        | 7.14          |
| zeltjs                   | 0.0.1    | ✓      | 37331.2    | 26.30        | 6.12          |
| hono                     | 4.12.17  | ✓      | 37262.2    | 26.33        | 6.11          |
| koa                      | 3.2.0    | ✗      | 36247.4    | 27.05        | 6.46          |
| adonisjs                 | 7.8.1    | ✓      | 33548.0    | 29.31        | 5.98          |
| koa-router               | 15.5.0   | ✓      | 33536.8    | 29.32        | 5.98          |
| hapi                     | 21.4.8   | ✓      | 33443.8    | 29.41        | 5.96          |
| srvx                     | 0.11.15  | ✗      | 28615.6    | 34.44        | 5.57          |
| express                  | 5.2.1    | ✓      | 26644.8    | 37.02        | 4.75          |
| microrouter              | 3.1.3    | ✓      | 25969.6    | 38.00        | 4.63          |
| nestjs-express           | 10.4.22  | ✓      | 23596.8    | 41.86        | 5.67          |
| express-with-middlewares | 5.2.1    | ✓      | 22343.2    | 44.23        | 8.31          |
| fastify-big-json         | 5.8.5    | ✓      | 13315.6    | 74.52        | 153.21        |
| trpc-router              | 11.17.0  | ✓      | 9075.6     | 109.59       | 2.07          |
| restify                  | 11.1.0   | ✓      | N/A        | N/A          | N/A           |
