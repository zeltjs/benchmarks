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
* __Node:__ `v24.18.0`
* __Run:__ Wed Jul 01 2026 04:48:20 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| 0http                    | 4.4.0    | ✓      | 55344.8    | 17.57        | 9.87          |
| restana                  | v5.2.0   | ✓      | 53674.4    | 18.14        | 9.57          |
| h3-router                | 1.15.11  | ✓      | 51509.6    | 18.92        | 9.19          |
| h3                       | 1.15.11  | ✗      | 50444.0    | 19.31        | 9.00          |
| node-http                | v24.18.0 | ✗      | 49343.2    | 19.75        | 8.80          |
| micro                    | 10.0.1   | ✗      | 47755.2    | 20.45        | 8.52          |
| polka                    | 0.5.2    | ✓      | 47754.4    | 20.50        | 8.52          |
| connect                  | 3.7.0    | ✗      | 46824.0    | 20.85        | 8.35          |
| fastify                  | 5.9.0    | ✓      | 46757.6    | 20.88        | 8.38          |
| connect-router           | 2.2.0    | ✓      | 43656.8    | 22.39        | 7.79          |
| nestjs-fastify           | 10.4.22  | ✓      | 43185.6    | 22.67        | 7.74          |
| whatwg-node-server       | 0.10.18  | ✗      | 39906.2    | 24.57        | 7.12          |
| hono                     | 4.12.27  | ✓      | 37902.4    | 25.86        | 6.22          |
| zeltjs                   | 0.5.0    | ✓      | 36350.4    | 26.98        | 5.96          |
| koa                      | 3.2.1    | ✗      | 36278.6    | 27.03        | 6.47          |
| hapi                     | 21.4.9   | ✓      | 35080.2    | 28.00        | 6.26          |
| koa-router               | 15.6.0   | ✓      | 34325.4    | 28.63        | 6.12          |
| adonisjs                 | 7.8.1    | ✓      | 33609.0    | 29.25        | 5.99          |
| srvx                     | 0.11.18  | ✗      | 27844.4    | 35.40        | 5.42          |
| express                  | 5.2.1    | ✓      | 27604.8    | 35.72        | 4.92          |
| microrouter              | 3.1.3    | ✓      | 26068.4    | 37.84        | 4.65          |
| nestjs-express           | 10.4.22  | ✓      | 23314.4    | 42.36        | 5.60          |
| express-with-middlewares | 5.2.1    | ✓      | 22616.4    | 43.71        | 8.41          |
| fastify-big-json         | 5.9.0    | ✓      | 13896.8    | 71.43        | 159.88        |
| trpc-router              | 11.18.0  | ✓      | 10196.5    | 97.47        | 2.32          |
| restify                  | 11.1.0   | ✓      | N/A        | N/A          | N/A           |
