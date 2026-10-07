# VeraLedger Web

Autonomous Financial & Invoice Auditor landing page. Built with Vite, TypeScript, and Tailwind CSS following Anthropic Claude editorial design guidelines (`DESIGN-claude.md`).

## Quickstart

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build production bundle (outputs to dist/)
npm run build

# Preview production build locally
npm run preview
```

## Project Structure

```
vesaledger/
├── index.html                  # HTML entry point with web fonts & favicon
├── package.json
├── tsconfig.json
├── vite.config.ts              # Vite configuration
├── tailwind.config.js          # Anthropic brand colors, typography, layout tokens
├── postcss.config.js
├── public/
│   └── favicon.svg             # Anthropic spike radial mark
└── src/
    ├── main.ts                 # App bootstrap, DOM mounting, interactive event handlers
    ├── style.css               # Tailwind directives & serif utilities
    ├── data/
    │   ├── sampleDocs.ts       # Mock documents (SaaS PDF, meal receipt, contractor timesheet)
    │   └── scenarios.ts        # Reconciliation test cases (3-way PO, FX slippage, fraud)
    └── components/
        ├── Navbar.ts           # Top brand header & status badge
        ├── Hero.ts             # 6/6 editorial pitch & live VLM terminal stream
        ├── ExtractionPipeline.ts # 4-stage pipeline & live ERP dispatcher sandbox
        ├── Workbench.ts        # Multi-scenario audit inspection workbench
        ├── Architecture.ts     # Engine architecture & 200k context passes
        ├── Models.ts           # Multi-model routing (Small VLM, Sonnet, Opus)
        ├── Integrations.ts     # 6 native ERP / Banking connectors
        ├── Security.ts         # Zero retention SLA & SOC2 Type II compliance
        ├── Pricing.ts          # Volume-based pricing tiers ($0 pilot, $649 scale, custom)
        ├── PilotForm.ts        # Enterprise waitlist qualification intake form
        └── Footer.ts           # Dark 5-column brand footer
```

## Cloudflare Deployment

Deploy output `dist/` directly to Cloudflare Pages:

```bash
npx wrangler pages deploy dist --project-name=veraledger
```
