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
* __Run:__ Sun May 17 2026 08:29:44 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| restana                  | v5.2.0   | ✓      | 53445.6    | 18.18        | 9.53          |
| 0http                    | 4.4.0    | ✓      | 52144.0    | 18.73        | 9.30          |
| h3                       | 1.15.11  | ✗      | 51247.2    | 19.02        | 9.14          |
| h3-router                | 1.15.11  | ✓      | 50619.2    | 19.27        | 9.03          |
| polka                    | 0.5.2    | ✓      | 47970.4    | 20.40        | 8.55          |
| node-http                | v24.15.0 | ✗      | 47561.6    | 20.59        | 8.48          |
| micro                    | 10.0.1   | ✗      | 46111.2    | 21.19        | 8.22          |
| connect                  | 3.7.0    | ✗      | 45144.0    | 21.65        | 8.05          |
| fastify                  | 5.8.5    | ✓      | 44808.0    | 21.83        | 8.03          |
| connect-router           | 2.2.0    | ✓      | 42325.6    | 23.11        | 7.55          |
| nestjs-fastify           | 10.4.22  | ✓      | 42057.6    | 23.26        | 7.54          |
| whatwg-node-server       | 0.10.18  | ✗      | 39215.4    | 25.00        | 6.99          |
| hono                     | 4.12.19  | ✓      | 36644.0    | 26.80        | 6.01          |
| koa                      | 3.2.0    | ✗      | 36106.2    | 27.20        | 6.44          |
| zeltjs                   | 0.5.0    | ✓      | 35850.6    | 27.39        | 5.88          |
| hapi                     | 21.4.9   | ✓      | 33870.2    | 29.03        | 6.04          |
| adonisjs                 | 7.8.1    | ✓      | 33404.6    | 29.44        | 5.96          |
| koa-router               | 15.5.0   | ✓      | 33300.6    | 29.53        | 5.94          |
| express                  | 5.2.1    | ✓      | 27701.6    | 35.60        | 4.94          |
| srvx                     | 0.11.15  | ✗      | 27280.8    | 36.13        | 5.31          |
| microrouter              | 3.1.3    | ✓      | 24980.4    | 39.53        | 4.45          |
| nestjs-express           | 10.4.22  | ✓      | 22583.2    | 43.77        | 5.43          |
| express-with-middlewares | 5.2.1    | ✓      | 22185.6    | 44.56        | 8.25          |
| fastify-big-json         | 5.8.5    | ✓      | 13196.6    | 75.25        | 151.84        |
| trpc-router              | 11.17.0  | ✓      | 9099.9     | 109.24       | 2.07          |
| restify                  | 11.1.0   | ✓      | N/A        | N/A          | N/A           |
