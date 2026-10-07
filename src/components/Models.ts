export function renderModels(): string {
  return `
  <section class="py-24 bg-[#faf9f5] border-b border-[#e6dfd8]">
    <div class="max-w-[1240px] mx-auto px-6">
      
      <div class="max-w-2xl mb-12">
        <div class="text-[12px] font-mono text-[#cc785c] uppercase tracking-wider font-semibold mb-2">Multi-Model Orchestration</div>
        <h2 class="text-[38px] sm:text-[44px] text-[#141413] font-serif leading-tight">
          Right model for each stage of financial inference.
        </h2>
        <p class="text-[16px] text-[#3d3d3a] mt-3">
          Financial workflows demand a balance of millisecond latency and deep legal reasoning. VeraLedger routes queries dynamically across visual and reasoning tiers.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <!-- Haiku Card -->
        <div class="p-6 rounded-[12px] bg-[#faf9f5] card-border-hairline">
          <div class="flex items-center justify-between mb-4">
            <span class="text-[18px] font-serif font-semibold text-[#141413]">Small VLM (Haiku Core)</span>
            <span class="text-[11px] font-mono text-[#5db872] bg-[#5db872]/10 px-2 py-0.5 rounded">SUB-SECOND &gt;98%</span>
          </div>
          <div class="text-[13px] text-[#6c6a64] mb-4">
            High-speed document triage, line-item table digitization, invoice parsing under 1 second.
          </div>
          <div class="space-y-2 text-[12px] font-mono text-[#252523] border-t border-[#e6dfd8] pt-4">
            <div>• Latency: &lt; 750ms / page</div>
            <div>• Accuracy: &gt; 98.4% field precision</div>
            <div>• Throughput: 2,400 pages / min</div>
          </div>
        </div>

        <!-- Sonnet Card (Featured) -->
        <div class="p-6 rounded-[12px] bg-[#efe9de] card-border-hairline relative">
          <span class="absolute -top-3 right-6 text-[10px] font-mono uppercase bg-[#cc785c] text-white px-2 py-0.5 rounded font-semibold">Primary Workhorse</span>
          <div class="flex items-center justify-between mb-4">
            <span class="text-[18px] font-serif font-semibold text-[#141413]">Sonnet Multi-Source Tier</span>
            <span class="text-[11px] font-mono text-[#cc785c] bg-[#cc785c]/10 px-2 py-0.5 rounded">AUDIT CORE</span>
          </div>
          <div class="text-[13px] text-[#3d3d3a] mb-4">
            Complex multi-source reconciliation, 4-way matching logic, VAT/GST cross-checking, anomaly scoring.
          </div>
          <div class="space-y-2 text-[12px] font-mono text-[#141413] border-t border-[#e6dfd8] pt-4">
            <div>• Latency: ~1.8s</div>
            <div>• Role: Multi-source ledger math</div>
            <div>• Accuracy: 99.84% zero-shot</div>
          </div>
        </div>

        <!-- Opus Card -->
        <div class="p-6 rounded-[12px] bg-[#faf9f5] card-border-hairline">
          <div class="flex items-center justify-between mb-4">
            <span class="text-[18px] font-serif font-semibold text-[#141413]">Claude 3 Opus Arbitration</span>
            <span class="text-[11px] font-mono text-[#5db8a6] bg-[#5db8a6]/10 px-2 py-0.5 rounded">LEGAL ESCALATION</span>
          </div>
          <div class="text-[13px] text-[#6c6a64] mb-4">
            High-risk dispute escalation, complex master contract interpretation, forensic fraud investigation.
          </div>
          <div class="space-y-2 text-[12px] font-mono text-[#252523] border-t border-[#e6dfd8] pt-4">
            <div>• Latency: ~4.5s</div>
            <div>• Role: Legal clause & contract audit</div>
            <div>• Depth: Master Service Agreements</div>
          </div>
        </div>

      </div>
    </div>
  </section>
  `;
}
