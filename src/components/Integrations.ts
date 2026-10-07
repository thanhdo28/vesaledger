export function renderIntegrations(): string {
  return `
  <section id="connectors" class="py-24 bg-[#faf9f5] border-b border-[#e6dfd8]">
    <div class="max-w-[1240px] mx-auto px-6">
      
      <div class="text-center max-w-2xl mx-auto mb-16">
        <div class="text-[12px] font-mono text-[#cc785c] uppercase tracking-wider font-semibold mb-2">Native Integrations</div>
        <h2 class="text-[40px] text-[#141413] font-serif leading-tight">
          Connect your entire financial stack in under 15 minutes.
        </h2>
        <p class="text-[15px] text-[#3d3d3a] mt-2">
          Pre-built secure connectors with OAuth2 and mutual TLS. Read-only audit access or automated two-way journal posting.
        </p>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        
        <div class="p-5 rounded-[12px] bg-[#faf9f5] card-border-hairline text-center hover:bg-[#efe9de] transition">
          <div class="text-[20px] font-serif font-bold text-[#141413] mb-1">NetSuite</div>
          <div class="text-[11px] text-[#6c6a64] font-mono">Bi-Directional</div>
        </div>

        <div class="p-5 rounded-[12px] bg-[#faf9f5] card-border-hairline text-center hover:bg-[#efe9de] transition">
          <div class="text-[20px] font-serif font-bold text-[#141413] mb-1">SAP S/4</div>
          <div class="text-[11px] text-[#6c6a64] font-mono">OData / RFC</div>
        </div>

        <div class="p-5 rounded-[12px] bg-[#faf9f5] card-border-hairline text-center hover:bg-[#efe9de] transition">
          <div class="text-[20px] font-serif font-bold text-[#141413] mb-1">Workday</div>
          <div class="text-[11px] text-[#6c6a64] font-mono">REST / RaaS</div>
        </div>

        <div class="p-5 rounded-[12px] bg-[#faf9f5] card-border-hairline text-center hover:bg-[#efe9de] transition">
          <div class="text-[20px] font-serif font-bold text-[#141413] mb-1">QuickBooks</div>
          <div class="text-[11px] text-[#6c6a64] font-mono">OAuth 2.0</div>
        </div>

        <div class="p-5 rounded-[12px] bg-[#faf9f5] card-border-hairline text-center hover:bg-[#efe9de] transition">
          <div class="text-[20px] font-serif font-bold text-[#141413] mb-1">Stripe</div>
          <div class="text-[11px] text-[#6c6a64] font-mono">Real-time Webhook</div>
        </div>

        <div class="p-5 rounded-[12px] bg-[#faf9f5] card-border-hairline text-center hover:bg-[#efe9de] transition">
          <div class="text-[20px] font-serif font-bold text-[#141413] mb-1">Plaid / SWIFT</div>
          <div class="text-[11px] text-[#6c6a64] font-mono">Banking Core</div>
        </div>

      </div>
    </div>
  </section>
  `;
}
