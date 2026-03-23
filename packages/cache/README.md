<div align="center">
    <h1>@voctal/cache</h1>
    <p>
        <a href="https://voctal.dev/discord"><img src="https://img.shields.io/badge/join_us-on_discord-5865F2?logo=discord&logoColor=white" alt="Discord server" /></a>
        <a href="https://www.npmjs.com/package/@voctal/cache"><img src="https://img.shields.io/npm/v/@voctal/cache.svg?maxAge=3600" alt="npm version" /></a>
        <a href="https://www.npmjs.com/package/@voctal/cache"><img src="https://img.shields.io/npm/dt/@voctal/cache.svg?maxAge=3600" alt="npm downloads" /></a>
        <a href="https://github.com/voctal/utilities/commits/main/packages/cache"><img alt="Last commit" src="https://img.shields.io/github/last-commit/voctal/utilities?logo=github&logoColor=ffffff&path=packages%2Fcache" /></a>
    </p>
</div>

## About

A lightweight and performant caching library providing simple TTL-based caches for single values and key-value maps.

## Installation

Node.js 18 or newer is required.

```sh
npm install @voctal/cache
```

## Usage

Cache

```ts
import { Cache } from "@voctal/cache";

// values are cached for 60s:
const cache = new Cache({ ttl: 60_000 });

cache.set("some key", 10);

cache.get("some key"); // 10
cache.has("some key"); // true
cache.set("some key", 10, 10_000); // override the default TTL with 10s

await sleep(11_000);

cache.has("some key"); // false
```

ValueCache

```ts
import { ValueCache } from "@voctal/cache";

const value = new ValueCache({ ttl: 10_000 }).set("some value");

value.get(); // "some value"

await sleep(11_000);

value.get(); // undefined
```

## Links

- [Documentation](https://docs.voctal.dev/docs/packages/cache/stable)
- [Discord server](https://voctal.dev/discord)
- [GitHub](https://github.com/voctal/utilities/tree/main/packages/cache)
- [npm](https://npmjs.com/package/@voctal/cache)
- [Voctal](https://voctal.dev)

## Help

Need help with the module? Ask on our [support server!](https://voctal.dev/discord)
