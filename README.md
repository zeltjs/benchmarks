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
* __Node:__ `v24.20.0`
* __Run:__ Tue Sep 01 2026 04:51:33 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| 0http                    | 4.4.0    | ✓      | 67265.6    | 14.37        | 12.00         |
| node-http                | v24.20.0 | ✗      | 63806.0    | 15.18        | 11.38         |
| restana                  | v5.2.0   | ✓      | 63660.4    | 15.22        | 11.35         |
| polka                    | 0.5.2    | ✓      | 62865.6    | 15.43        | 11.21         |
| fastify                  | 5.12.1   | ✓      | 60611.6    | 16.00        | 10.87         |
| connect                  | 3.7.0    | ✗      | 60277.6    | 16.10        | 10.75         |
| micro                    | 10.0.1   | ✗      | 60097.2    | 16.14        | 10.72         |
| nestjs-fastify           | 10.4.22  | ✓      | 56675.2    | 17.16        | 10.16         |
| connect-router           | 2.2.0    | ✓      | 55604.8    | 17.48        | 9.92          |
| h3                       | 1.15.11  | ✗      | 54659.2    | 17.80        | 9.75          |
| whatwg-node-server       | 0.10.18  | ✗      | 53431.2    | 18.22        | 9.53          |
| hono                     | 4.13.5   | ✓      | 52734.4    | 18.46        | 8.65          |
| h3-router                | 1.15.11  | ✓      | 51950.4    | 18.75        | 9.27          |
| koa                      | 3.2.1    | ✗      | 51648.8    | 18.86        | 9.21          |
| koa-router               | 15.7.0   | ✓      | 48695.2    | 20.03        | 8.68          |
| zeltjs                   | 0.5.0    | ✓      | 44732.0    | 21.86        | 7.34          |
| adonisjs                 | 7.8.1    | ✓      | 44408.8    | 22.02        | 7.92          |
| hapi                     | 21.4.10  | ✓      | 40069.6    | 24.45        | 7.15          |
| srvx                     | 0.11.22  | ✗      | 39176.8    | 25.02        | 7.62          |
| express                  | 5.2.1    | ✓      | 37519.2    | 26.14        | 6.69          |
| microrouter              | 3.1.3    | ✓      | 35608.2    | 27.59        | 6.35          |
| express-with-middlewares | 5.2.1    | ✓      | 32021.4    | 30.72        | 11.91         |
| nestjs-express           | 10.4.22  | ✓      | 30697.0    | 32.07        | 7.38          |
| fastify-big-json         | 5.12.1   | ✓      | 12702.0    | 78.17        | 146.15        |
| trpc-router              | 11.18.0  | ✓      | 11453.4    | 86.76        | 2.61          |
| restify                  | 11.1.0   | ✓      | N/A        | N/A          | N/A           |
