# VeraLedger Landing Page Critique

---

## 1. CRITICAL WEAKNESSES

**W1: Speaking engineer, not accountant.** "Small VLM Vision," "Deterministic Ledger Reconciliation," "Ingestion Pipeline" — CFOs don't care. They care about caught errors, hours saved, audit-readiness. Entire page sells architecture when it should sell outcomes. The interactive terminal mockup actively repels the buyer persona.

**W2: Zero ROI math anywhere.** No calculator, no "average team saves X hours/month," no dollar figure. Accounting buyers are the most numbers-driven humans alive and you give them… latency benchmarks. The 98.4% accuracy stat is good but floating without context (vs. what? manual? competitors? what does the 1.6% miss cost?).

**W3: Pricing friction kills SMB self-serve.** Starting at "Pilot" with work-email-gated form screams enterprise sales motion. Contradicts the $0 tier goal entirely. No self-serve signup = no PLG flywheel. The $49 jump from $0 also needs a bridge or it looks like a wall.

**W4: Too many sections, no conversion funnel.** 9 sections is a brochure, not a landing page. Architecture + VLM Tiers + Extraction Pipeline = three sections saying the same thing to an audience that doesn't care about any of them. Visitor hits decision fatigue before reaching pricing. Kill or collapse at least 3 sections.

---

## 2. NEW 3-TIER PRICING

| | **Starter** | **Pro** | **Enterprise** |
|---|---|---|---|
| **Price** | $0/mo | $99/mo | Custom |
| **Target** | Freelance bookkeepers, solo accountants, SMBs evaluating | Growing firms, 2-10 person accounting teams, controllers | Mid-market finance orgs, multi-entity, regulated |
| **Documents** | 200 docs/mo | 5,000 docs/mo | Unlimited |
| **VLM Tier** | Small VLM Fast only | Fast + Doc Parser | Fast + Doc Parser + Forensic Guard |
| **ERP Integrations** | QuickBooks, Xero (2) | + NetSuite, Stripe, Plaid (all 6) | All + SAP, Workday, custom |
| **Reconciliation** | 2-way match | 3-way PO match, FX reconciliation | 4-way + IBAN fraud detection |
| **Users** | 1 | 5 | Unlimited + SSO/SCIM |
| **Support** | Community/docs | Email, 24h SLA | Dedicated CSM, Slack channel |
| **Security** | SOC2 shared | SOC2 + audit logs | + CMEK, BAA, custom retention |
| **CTA** | "Start free — no card" | "Start 14-day free trial" | "Talk to finance team" |

Why $99 not $49: $49 is a dead zone — too cheap for controllers to take seriously as a real tool, too expensive for hobbyists. $99 signals professional-grade and gives margin. The $0→$99 gap is bridged by the free tier proving value first.

---

## 3. COPYWRITING FIXES

**Hero headline:**
- ❌ Before: *"Financial reconciliation with zero margin for error."*
- ✅ After: *"Catch every invoice error before it hits your books."*
- Sub: *"VeraLedger audits receipts, matches POs, and codes to your chart of accounts — automatically. 200 docs/month free."*

**Extraction Pipeline section:**
- ❌ Before: *"Ingestion → Small VLM Vision → Autonomous COA Coding → Instant ERP Dispatch"*
- ✅ After: *"Drop a receipt. Get a coded, matched, ERP-ready entry in under 1 second."*
- Sub: *"Works with QuickBooks, Xero, NetSuite, and SAP. No templates, no manual data entry, no rules to configure."*

**Workbench section:**
- ❌ Before: *"Interactive Workbench: 3-way PO match, multi-currency FX slippage, IBAN fraud freeze"*
- ✅ After: *"See it catch what you'd miss."*
- Sub: *"Upload a sample invoice and watch VeraLedger flag a duplicate, reconcile a currency mismatch, or freeze a suspicious IBAN — live, on your data."*

---

## 4. TRUST & RISK REVERSAL

**Add these, in this priority:**

1. **Live accuracy counter.** "4.2M documents audited. 98.4% field-level accuracy. 0 false approvals on fraud checks." Real-time or weekly-updated. Accounting people trust ledgers, so be one.

2. **ROI calculator above the fold.** Inputs: docs/month, avg hourly cost of AP clerk, current error rate. Output: hours saved, dollars saved, errors caught. Dead simple. This alone could double conversion.

3. **"Accuracy guarantee" badge.** "If VeraLedger miscodes a line item on the Pro or Enterprise plan, we credit that month." Tangible. Accountants respect guarantees with teeth.

4. **Logo bar + one specific case study.** Not "trusted by 100+ companies." One real quote: *"We cut month-end close by 2 days and caught $14K in duplicate invoices in the first quarter." — Controller, [Company], [size]."* Specific numbers or nothing.

5. **SOC2 + "Zero training retention" badge in the hero area**, not buried in section 7. For finance buyers, security is a qualifying criterion, not a feature. If they don't see it in 5 seconds, they bounce.

---

## Summary: What to kill

- Merge Architecture + VLM Tiers + Extraction Pipeline into ONE section ("How it works" — 3 steps, outcome-focused).
- Kill the terminal/code mockup. Replace with an animation of a messy receipt becoming a clean journal entry.
- Kill the pilot form. Replace with a "Start free" button that goes to signup. Add the qualifying questions *inside* onboarding, not before it.
- Total sections after cleanup: Hero → How It Works → Live Demo (upload) → ROI Calculator → Integrations → Pricing → One Case Study + Trust Badges → CTA. Eight max, ideally seven.