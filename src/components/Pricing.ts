export function renderPricing(): string {
  return `
  <section id="pricing" class="py-24 bg-[#faf9f5] border-b border-[#e6dfd8]">
    <div class="max-w-[1240px] mx-auto px-6">
      
      <div class="text-center max-w-2xl mx-auto mb-16">
        <div class="text-[12px] font-mono text-[#cc785c] uppercase tracking-wider font-semibold mb-2">Transparent Predictable Tiers</div>
        <h2 class="text-[40px] text-[#141413] font-serif leading-tight">
          Priced by document volume, not per seat.
        </h2>
        <p class="text-[15px] text-[#3d3d3a] mt-2">
          Finance teams shouldn't be penalized for adding auditors or external CPAs.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        
        <!-- Tier 1: Starter ($20/mo) -->
        <div class="p-8 rounded-[12px] bg-[#faf9f5] card-border-hairline flex flex-col justify-between">
          <div>
            <div class="text-[18px] font-medium text-[#141413] mb-1">Starter</div>
            <div class="text-[13px] text-[#6c6a64] mb-6">For solo bookkeepers and early-stage small businesses.</div>
            <div class="flex items-baseline gap-1 mb-6">
              <span class="text-[44px] font-serif text-[#141413]">$20</span>
              <span class="text-[13px] text-[#6c6a64]">/ month</span>
            </div>
            <ul class="space-y-3 text-[14px] text-[#3d3d3a]">
              <li class="flex items-center gap-2">✓ Up to 500 documents / month ($0.04/doc after)</li>
              <li class="flex items-center gap-2">✓ QuickBooks Online & Xero 2-way sync</li>
              <li class="flex items-center gap-2">✓ Sub-second Small VLM extraction (&lt; 0.85s)</li>
              <li class="flex items-center gap-2">✓ Automated Chart of Accounts coding</li>
              <li class="flex items-center gap-2">✓ 1 seat • Standard email support</li>
            </ul>
          </div>
          <a href="#pilot" class="mt-8 w-full py-3 text-center text-[14px] font-medium rounded-[8px] bg-[#faf9f5] hover:bg-[#efe9de] text-[#141413] card-border-hairline transition">
            Start 14-Day Free Trial
          </a>
        </div>

        <!-- Tier 2: Growth ($99/mo - Featured) -->
        <div class="p-8 rounded-[12px] bg-[#181715] text-[#faf9f5] card-dark-border flex flex-col justify-between relative shadow-xl">
          <span class="absolute -top-3 left-8 text-[11px] font-mono uppercase bg-[#cc785c] text-white px-3 py-0.5 rounded font-medium">Most Popular for Growing Teams</span>
          <div>
            <div class="text-[18px] font-medium text-white mb-1">Growth</div>
            <div class="text-[13px] text-[#a09d96] mb-6">For scaling finance teams, controllers, and 2–10 person ops.</div>
            <div class="flex items-baseline gap-1 mb-6">
              <span class="text-[44px] font-serif text-white">$99</span>
              <span class="text-[13px] text-[#a09d96]">/ month</span>
            </div>
            <ul class="space-y-3 text-[14px] text-[#faf9f5]">
              <li class="flex items-center gap-2">✓ Up to 5,000 documents / month included</li>
              <li class="flex items-center gap-2">✓ All ERPs: NetSuite, QuickBooks, Xero, Stripe, Plaid</li>
              <li class="flex items-center gap-2">✓ 3-Way PO matching & foreign currency FX audit</li>
              <li class="flex items-center gap-2">✓ Small VLM Forensic Guard (tampering & duplicate freeze)</li>
              <li class="flex items-center gap-2">✓ 5 team seats • 24-hour priority support</li>
            </ul>
          </div>
          <a href="#pilot" class="mt-8 w-full py-3 text-center text-[14px] font-medium rounded-[8px] bg-[#cc785c] hover:bg-[#a9583e] text-white transition shadow-sm">
            Start Growth Trial
          </a>
        </div>

        <!-- Tier 3: Enterprise ($499+ / Custom) -->
        <div class="p-8 rounded-[12px] bg-[#faf9f5] card-border-hairline flex flex-col justify-between">
          <div>
            <div class="text-[18px] font-medium text-[#141413] mb-1">Enterprise</div>
            <div class="text-[13px] text-[#6c6a64] mb-6">For mid-market holding companies and high-compliance teams.</div>
            <div class="flex items-baseline gap-1 mb-6">
              <span class="text-[44px] font-serif text-[#141413]">$499</span>
              <span class="text-[13px] text-[#6c6a64]">/ mo (starts at 50k docs)</span>
            </div>
            <ul class="space-y-3 text-[14px] text-[#3d3d3a]">
              <li class="flex items-center gap-2">✓ 50,000+ documents / month with custom volume pricing</li>
              <li class="flex items-center gap-2">✓ SAP S/4HANA & Workday custom enterprise adapters</li>
              <li class="flex items-center gap-2">✓ Single-tenant VPC or Customer-Managed Keys (CMEK)</li>
              <li class="flex items-center gap-2">✓ Dedicated Solutions Architect + Slack Connect</li>
              <li class="flex items-center gap-2">✓ Unlimited seats • SAML 2.0 / Okta SSO</li>
            </ul>
          </div>
          <a href="#pilot" class="mt-8 w-full py-3 text-center text-[14px] font-medium rounded-[8px] bg-[#faf9f5] hover:bg-[#efe9de] text-[#141413] card-border-hairline transition">
            Talk to Finance Engineering
          </a>
        </div>

      </div>

      <!-- Trust & Risk Reversal Banner -->
      <div class="bg-[#efe9de] rounded-[10px] p-6 card-border-hairline flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left mb-16">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-full bg-[#5db872]/20 text-[#5db872] flex items-center justify-center font-bold text-sm">✓</div>
          <div>
            <h4 class="text-[15px] font-semibold text-[#141413]">100% Accuracy Guarantee</h4>
            <p class="text-[12px] text-[#6c6a64]">If VeraLedger ever miscodes an invoice field on your paid plan, we credit that entire month’s fee.</p>
          </div>
        </div>
        <div class="text-[12px] font-mono text-[#8e8b82]">
          No credit card required to start 14-day trial
        </div>
      </div>
    </div>
  </section>

  <!-- FULL-BLEED CORAL CALLOUT CARD -->
  <section class="py-16 bg-[#faf9f5]">
    <div class="max-w-[1240px] mx-auto px-6">
      <div class="bg-[#cc785c] rounded-[12px] p-12 lg:p-16 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8">
        <div class="space-y-3 max-w-2xl">
          <h2 class="text-[34px] sm:text-[42px] font-serif leading-tight">
            Stop spending weeks on month-end close.
          </h2>
          <p class="text-[16px] text-white/90">
            Audit your first 500 invoices completely risk-free for just $20/month. Set up in under 5 minutes with zero technical overhead.
          </p>
        </div>
        <div>
          <a href="#pilot" class="px-8 py-4 text-[14px] font-medium bg-[#faf9f5] hover:bg-[#efe9de] text-[#141413] rounded-[8px] transition whitespace-nowrap shadow-md">
            Start Free 14-Day Trial
          </a>
        </div>
      </div>
    </div>
  </section>
  `;
}
