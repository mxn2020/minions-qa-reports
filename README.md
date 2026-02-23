# minions-qa-reports

**Aggregated test reports, health dashboards, trend analysis, and regression alerts**

Built on the [Minions SDK](https://github.com/mxn2020/minions).

---

## Quick Start

```bash
# TypeScript / Node.js
npm install @minions-qa-reports/sdk minions-sdk

# Python
pip install minions-qa-reports

# CLI (global)
npm install -g @minions-qa-reports/cli
```

---

## CLI

```bash
# Show help
qa-reports --help
```

---

## Python SDK

```python
from minions_qa_reports import create_client

client = create_client()
```

---

## Project Structure

```
minions-qa-reports/
  packages/
    core/           # TypeScript core library (@minions-qa-reports/sdk on npm)
    python/         # Python SDK (minions-qa-reports on PyPI)
    cli/            # CLI tool (@minions-qa-reports/cli on npm)
  apps/
    web/            # Playground web app
    docs/           # Astro Starlight documentation site
    blog/           # Blog
  examples/
    typescript/     # TypeScript usage examples
    python/         # Python usage examples
```

---

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Type check
pnpm run lint
```

---

## Documentation

- Docs: [qa-reports.minions.help](https://qa-reports.minions.help)
- Blog: [qa-reports.minions.blog](https://qa-reports.minions.blog)
- App: [qa-reports.minions.wtf](https://qa-reports.minions.wtf)

---

## License

[MIT](LICENSE)
