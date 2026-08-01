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
* __Node:__ `v24.18.1`
* __Run:__ Sat Aug 01 2026 03:52:39 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| 0http                    | 4.4.0    | ✓      | 56146.4    | 17.31        | 10.01         |
| restana                  | v5.2.0   | ✓      | 52766.4    | 18.43        | 9.41          |
| h3-router                | 1.15.11  | ✓      | 51136.8    | 19.06        | 9.12          |
| h3                       | 1.15.11  | ✗      | 49873.6    | 19.56        | 8.89          |
| node-http                | v24.18.1 | ✗      | 47836.0    | 20.44        | 8.53          |
| connect                  | 3.7.0    | ✗      | 47169.6    | 20.70        | 8.41          |
| polka                    | 0.5.2    | ✓      | 46865.6    | 20.83        | 8.36          |
| micro                    | 10.0.1   | ✗      | 46815.2    | 20.85        | 8.35          |
| fastify                  | 5.11.0   | ✓      | 46335.2    | 21.08        | 8.31          |
| connect-router           | 2.2.0    | ✓      | 43212.0    | 22.61        | 7.71          |
| nestjs-fastify           | 10.4.22  | ✓      | 42068.0    | 23.27        | 7.54          |
| whatwg-node-server       | 0.10.18  | ✗      | 39596.6    | 24.75        | 7.06          |
| zeltjs                   | 0.5.0    | ✓      | 36742.4    | 26.72        | 6.03          |
| hono                     | 4.12.33  | ✓      | 36440.6    | 26.95        | 5.98          |
| koa                      | 3.2.1    | ✗      | 35715.0    | 27.53        | 6.37          |
| adonisjs                 | 7.8.1    | ✓      | 33873.8    | 29.01        | 6.04          |
| koa-router               | 15.7.0   | ✓      | 33753.6    | 29.13        | 6.02          |
| hapi                     | 21.4.10  | ✓      | 33070.4    | 29.75        | 5.90          |
| srvx                     | 0.11.22  | ✗      | 28598.0    | 34.45        | 5.56          |
| express                  | 5.2.1    | ✓      | 27479.6    | 35.88        | 4.90          |
| microrouter              | 3.1.3    | ✓      | 25222.0    | 39.15        | 4.50          |
| nestjs-express           | 10.4.22  | ✓      | 22916.8    | 43.12        | 5.51          |
| express-with-middlewares | 5.2.1    | ✓      | 22882.0    | 43.19        | 8.51          |
| fastify-big-json         | 5.11.0   | ✓      | 13820.6    | 71.80        | 159.03        |
| trpc-router              | 11.18.0  | ✓      | 10152.8    | 97.88        | 2.31          |
| restify                  | 11.1.0   | ✓      | N/A        | N/A          | N/A           |
