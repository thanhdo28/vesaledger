export function renderArchitecture(): string {
  return `
  <section id="pipeline" class="py-24 bg-[#efe9de] border-b border-[#e6dfd8]">
    <div class="max-w-[1240px] mx-auto px-6">
      
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="text-[12px] font-mono text-[#cc785c] uppercase tracking-wider font-semibold mb-2">Engine Architecture</div>
        <h2 class="text-[40px] sm:text-[48px] text-[#141413] font-serif leading-tight">
          How VeraLedger solves zero-loss auditing at enterprise scale.
        </h2>
        <p class="text-[16px] text-[#3d3d3a] mt-3">
          Generic OCR models drop line items on large tables. VeraLedger deploys a high-throughput small VLM for sub-second document parsing (&lt; 1s/page, &gt; 98% accuracy) paired with deterministic rules.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <!-- Step 1 -->
        <div class="bg-[#faf9f5] rounded-[12px] p-8 card-border-hairline flex flex-col justify-between">
          <div>
            <div class="w-10 h-10 rounded-[8px] bg-[#efe9de] text-[#141413] flex items-center justify-center font-serif text-[18px] font-semibold mb-6 card-border-hairline">
              I
            </div>
            <h3 class="text-[20px] font-semibold text-[#141413] mb-2 font-serif">
              Multi-Source Ingestion
            </h3>
            <p class="text-[14px] text-[#3d3d3a] leading-relaxed">
              Pulls directly from S3/SFTP drops, ERP webhooks, Stripe/Adyen gateways, and email inboxes. Normalizes PDF, TIFF, MT940, CAMT.053, and EDIFACT feeds without pre-training templates.
            </p>
          </div>
          <div class="mt-6 pt-4 border-t border-[#e6dfd8] text-[12px] font-mono text-[#6c6a64]">
            Formats: PDF, JSON, MT940, CSV, EDI
          </div>
        </div>

        <!-- Step 2 -->
        <div class="bg-[#faf9f5] rounded-[12px] p-8 card-border-hairline flex flex-col justify-between">
          <div>
            <div class="w-10 h-10 rounded-[8px] bg-[#efe9de] text-[#141413] flex items-center justify-center font-serif text-[18px] font-semibold mb-6 card-border-hairline">
              II
            </div>
            <h3 class="text-[20px] font-semibold text-[#141413] mb-2 font-serif">
              Small VLM Multimodal Inference
            </h3>
            <p class="text-[14px] text-[#3d3d3a] leading-relaxed">
              Specialized compact visual models extract nested line items, receipts, and tables in under 1 second per page with &gt; 98% verified accuracy. Handles handwritten notes and complex layouts.
            </p>
          </div>
          <div class="mt-6 pt-4 border-t border-[#e6dfd8] text-[12px] font-mono text-[#6c6a64]">
            Speed: &lt; 850ms / page • Accuracy: &gt; 98.4%
          </div>
        </div>

        <!-- Step 3 -->
        <div class="bg-[#faf9f5] rounded-[12px] p-8 card-border-hairline flex flex-col justify-between">
          <div>
            <div class="w-10 h-10 rounded-[8px] bg-[#efe9de] text-[#141413] flex items-center justify-center font-serif text-[18px] font-semibold mb-6 card-border-hairline">
              III
            </div>
            <h3 class="text-[20px] font-semibold text-[#141413] mb-2 font-serif">
              Deterministic Ledger Reconciliation
            </h3>
            <p class="text-[14px] text-[#3d3d3a] leading-relaxed">
              Calculates line-by-line tax rates across 140+ countries. Compares PO allocations against real bank settlements. Auto-generates balanced double-entry journals directly in your ERP.
            </p>
          </div>
          <div class="mt-6 pt-4 border-t border-[#e6dfd8] text-[12px] font-mono text-[#6c6a64]">
            Integrations: SAP, NetSuite, Workday, Xero
          </div>
        </div>

      </div>
    </div>
  </section>
  `;
}
