export function renderModels(): string {
  return `
  <section class="py-24 bg-[#faf9f5] border-b border-[#e6dfd8]">
    <div class="max-w-[1240px] mx-auto px-6">
      
      <div class="max-w-2xl mb-12">
        <div class="text-[12px] font-mono text-[#cc785c] uppercase tracking-wider font-semibold mb-2">Small VLM Architecture</div>
        <h2 class="text-[38px] sm:text-[44px] text-[#141413] font-serif leading-tight">
          Specialized small VLMs for every stage of financial inference.
        </h2>
        <p class="text-[16px] text-[#3d3d3a] mt-3">
          Heavy generalist models add multi-second latency and unnecessary compute costs. VeraLedger runs purpose-built compact Vision-Language Models tuned strictly for document intelligence.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <!-- Small VLM Fast Card -->
        <div class="p-6 rounded-[12px] bg-[#faf9f5] card-border-hairline">
          <div class="flex items-center justify-between mb-4">
            <span class="text-[18px] font-serif font-semibold text-[#141413]">Small VLM Fast</span>
            <span class="text-[11px] font-mono text-[#5db872] bg-[#5db872]/10 px-2 py-0.5 rounded">&lt; 500MS INFERENCE</span>
          </div>
          <div class="text-[13px] text-[#6c6a64] mb-4">
            High-speed document triage, mobile receipt digitization, and field normalization in fractions of a second.
          </div>
          <div class="space-y-2 text-[12px] font-mono text-[#252523] border-t border-[#e6dfd8] pt-4">
            <div>• Latency: &lt; 450ms / page</div>
            <div>• Accuracy: &gt; 98.4% field precision</div>
            <div>• Throughput: 2,400 pages / min</div>
          </div>
        </div>

        <!-- Small VLM Doc Parser Card (Featured) -->
        <div class="p-6 rounded-[12px] bg-[#efe9de] card-border-hairline relative">
          <span class="absolute -top-3 right-6 text-[10px] font-mono uppercase bg-[#cc785c] text-white px-2 py-0.5 rounded font-semibold">Primary Workhorse</span>
          <div class="flex items-center justify-between mb-4">
            <span class="text-[18px] font-serif font-semibold text-[#141413]">Small VLM Doc Parser</span>
            <span class="text-[11px] font-mono text-[#cc785c] bg-[#cc785c]/10 px-2 py-0.5 rounded">CORE ENGINE</span>
          </div>
          <div class="text-[13px] text-[#3d3d3a] mb-4">
            Complex multi-page table extraction, fine line items, tax breakdowns, and 4-way cross-ledger mathematical reconciliation.
          </div>
          <div class="space-y-2 text-[12px] font-mono text-[#141413] border-t border-[#e6dfd8] pt-4">
            <div>• Latency: &lt; 850ms / page</div>
            <div>• Accuracy: &gt; 98.8% field precision</div>
            <div>• Zero hallucinated line items</div>
          </div>
        </div>

        <!-- Small VLM Forensic Guard Card -->
        <div class="p-6 rounded-[12px] bg-[#faf9f5] card-border-hairline">
          <div class="flex items-center justify-between mb-4">
            <span class="text-[18px] font-serif font-semibold text-[#141413]">Small VLM Forensic Guard</span>
            <span class="text-[11px] font-mono text-[#5db8a6] bg-[#5db8a6]/10 px-2 py-0.5 rounded">FRAUD SHIELD</span>
          </div>
          <div class="text-[13px] text-[#6c6a64] mb-4">
            Interception of altered IBAN/remit coordinates, spoofed vendor domains, duplicate invoice submission, and contract variance.
          </div>
          <div class="space-y-2 text-[12px] font-mono text-[#252523] border-t border-[#e6dfd8] pt-4">
            <div>• Latency: &lt; 950ms / page</div>
            <div>• Role: Forensic fraud & compliance</div>
            <div>• Tamper-proof cryptographic hashes</div>
          </div>
        </div>

      </div>
    </div>
  </section>
  `;
}
