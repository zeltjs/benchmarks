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
* __Node:__ `v24.16.0`
* __Run:__ Mon Jun 01 2026 05:00:43 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| 0http                    | 4.4.0    | ✓      | 56906.4    | 17.03        | 10.15         |
| h3                       | 1.15.11  | ✗      | 55288.8    | 17.59        | 9.86          |
| restana                  | v5.2.0   | ✓      | 53124.0    | 18.34        | 9.47          |
| h3-router                | 1.15.11  | ✓      | 51755.2    | 18.82        | 9.23          |
| node-http                | v24.16.0 | ✗      | 48861.6    | 19.97        | 8.71          |
| polka                    | 0.5.2    | ✓      | 47658.4    | 20.51        | 8.50          |
| fastify                  | 5.8.5    | ✓      | 47510.4    | 20.52        | 8.52          |
| connect                  | 3.7.0    | ✗      | 47507.2    | 20.52        | 8.47          |
| micro                    | 10.0.1   | ✗      | 47280.8    | 20.66        | 8.43          |
| connect-router           | 2.2.0    | ✓      | 43830.4    | 22.29        | 7.82          |
| nestjs-fastify           | 10.4.22  | ✓      | 43357.6    | 22.58        | 7.77          |
| whatwg-node-server       | 0.10.18  | ✗      | 39614.6    | 24.78        | 7.07          |
| zeltjs                   | 0.5.0    | ✓      | 37250.4    | 26.35        | 6.11          |
| hono                     | 4.12.23  | ✓      | 36834.2    | 26.65        | 6.04          |
| koa                      | 3.2.1    | ✗      | 36245.0    | 27.06        | 6.46          |
| adonisjs                 | 7.8.1    | ✓      | 34838.6    | 28.21        | 6.21          |
| hapi                     | 21.4.9   | ✓      | 34598.6    | 28.39        | 6.17          |
| koa-router               | 15.6.0   | ✓      | 34074.6    | 28.83        | 6.08          |
| express                  | 5.2.1    | ✓      | 28258.0    | 34.87        | 5.04          |
| srvx                     | 0.11.16  | ✗      | 27615.6    | 35.70        | 5.37          |
| microrouter              | 3.1.3    | ✓      | 25841.2    | 38.18        | 4.61          |
| express-with-middlewares | 5.2.1    | ✓      | 23080.0    | 42.80        | 8.58          |
| nestjs-express           | 10.4.22  | ✓      | 23024.0    | 42.92        | 5.53          |
| fastify-big-json         | 5.8.5    | ✓      | 14462.8    | 68.59        | 166.41        |
| trpc-router              | 11.17.0  | ✓      | 10119.4    | 98.22        | 2.31          |
| restify                  | 11.1.0   | ✓      | N/A        | N/A          | N/A           |
