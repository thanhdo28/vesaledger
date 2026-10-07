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
        
        <!-- Tier 1: Starter -->
        <div class="p-8 rounded-[12px] bg-[#faf9f5] card-border-hairline flex flex-col justify-between">
          <div>
            <div class="text-[18px] font-medium text-[#141413] mb-1">Pilot Beta</div>
            <div class="text-[13px] text-[#6c6a64] mb-6">For venture-backed startups setting up automated books.</div>
            <div class="flex items-baseline gap-1 mb-6">
              <span class="text-[44px] font-serif text-[#141413]">$0</span>
              <span class="text-[13px] text-[#6c6a64]">/ 60-day pilot</span>
            </div>
            <ul class="space-y-3 text-[14px] text-[#3d3d3a]">
              <li class="flex items-center gap-2">✓ Up to 1,500 documents / month</li>
              <li class="flex items-center gap-2">✓ 2 Bank connections + QuickBooks/Xero</li>
              <li class="flex items-center gap-2">✓ Standard 3-way matching engine</li>
              <li class="flex items-center gap-2">✓ Community & email support</li>
            </ul>
          </div>
          <a href="#pilot" class="mt-8 w-full py-3 text-center text-[14px] font-medium rounded-[8px] bg-[#faf9f5] hover:bg-[#efe9de] text-[#141413] card-border-hairline transition">
            Join Pilot Waitlist
          </a>
        </div>

        <!-- Tier 2: Scale (Featured Dark Card) -->
        <div class="p-8 rounded-[12px] bg-[#181715] text-[#faf9f5] card-dark-border flex flex-col justify-between relative shadow-xl">
          <span class="absolute -top-3 left-8 text-[11px] font-mono uppercase bg-[#cc785c] text-white px-3 py-0.5 rounded font-medium">Most Popular for Scale-ups</span>
          <div>
            <div class="text-[18px] font-medium text-white mb-1">Growth & Scale</div>
            <div class="text-[13px] text-[#a09d96] mb-6">For high-volume transaction businesses & mid-market.</div>
            <div class="flex items-baseline gap-1 mb-6">
              <span class="text-[44px] font-serif text-white">$649</span>
              <span class="text-[13px] text-[#a09d96]">/ month</span>
            </div>
            <ul class="space-y-3 text-[14px] text-[#faf9f5]">
              <li class="flex items-center gap-2">✓ Up to 25,000 documents / month</li>
              <li class="flex items-center gap-2">✓ Unlimited ERP & Bank sync (NetSuite, Stripe)</li>
              <li class="flex items-center gap-2">✓ Multi-currency & foreign exchange reconciliation</li>
              <li class="flex items-center gap-2">✓ Automated anomaly & fraud quarantine</li>
              <li class="flex items-center gap-2">✓ 99.9% processing SLA</li>
            </ul>
          </div>
          <a href="#pilot" class="mt-8 w-full py-3 text-center text-[14px] font-medium rounded-[8px] bg-[#cc785c] hover:bg-[#a9583e] text-white transition shadow-sm">
            Deploy Scale Agent
          </a>
        </div>

        <!-- Tier 3: Enterprise -->
        <div class="p-8 rounded-[12px] bg-[#faf9f5] card-border-hairline flex flex-col justify-between">
          <div>
            <div class="text-[18px] font-medium text-[#141413] mb-1">Global Enterprise</div>
            <div class="text-[13px] text-[#6c6a64] mb-6">For multi-entity holding companies & global compliance.</div>
            <div class="flex items-baseline gap-1 mb-6">
              <span class="text-[44px] font-serif text-[#141413]">Custom</span>
            </div>
            <ul class="space-y-3 text-[14px] text-[#3d3d3a]">
              <li class="flex items-center gap-2">✓ 250,000+ documents / month</li>
              <li class="flex items-center gap-2">✓ Dedicated single-tenant VPC / CMEK</li>
              <li class="flex items-center gap-2">✓ SAP S/4HANA & Workday custom adapters</li>
              <li class="flex items-center gap-2">✓ 24/7 dedicated solutions architect</li>
              <li class="flex items-center gap-2">✓ Custom SOC2 compliance attestation</li>
            </ul>
          </div>
          <a href="#pilot" class="mt-8 w-full py-3 text-center text-[14px] font-medium rounded-[8px] bg-[#faf9f5] hover:bg-[#efe9de] text-[#141413] card-border-hairline transition">
            Speak to Engineering
          </a>
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
            Let VeraLedger audit your first 500 invoices completely free. Set up in minutes with no code required.
          </p>
        </div>
        <div>
          <a href="#pilot" class="px-8 py-4 text-[14px] font-medium bg-[#faf9f5] hover:bg-[#efe9de] text-[#141413] rounded-[8px] transition whitespace-nowrap shadow-md">
            Start Free Audit Pilot
          </a>
        </div>
      </div>
    </div>
  </section>
  `;
}
