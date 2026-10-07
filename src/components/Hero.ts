export function renderHero(): string {
  return `
  <section class="pt-20 pb-24 border-b border-[#e6dfd8]">
    <div class="max-w-[1240px] mx-auto px-6">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <!-- Left: Editorial Pitch -->
        <div class="lg:col-span-6 space-y-6">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#efe9de] card-border-hairline text-[#252523] text-[12px] font-medium tracking-wide">
            <span class="text-[#cc785c] font-bold">●</span> Autonomous 4-Way Cross-Ledger Verification
          </div>

          <h1 class="text-[52px] sm:text-[62px] leading-[1.04] text-[#141413] font-serif">
            Financial reconciliation with zero margin for error.
          </h1>

          <p class="text-[17px] text-[#3d3d3a] leading-[1.6] max-w-xl">
            VeraLedger deploys lightweight, sub-second Vision-Language Models (VLMs) to process documents in &lt; 1 sec/page with &gt; 98% extraction accuracy. Cross-reference messy PDFs, raw MT940 bank feeds, Stripe transaction logs, and ERP ledgers with strict cryptographic bounding boxes and zero hallucinated journals.
          </p>

          <div class="pt-2 flex flex-wrap items-center gap-4">
            <a href="#pilot" class="px-6 py-3.5 text-[14px] font-medium bg-[#cc785c] hover:bg-[#a9583e] text-white rounded-[8px] transition shadow-sm inline-flex items-center gap-2">
              <span>Start Enterprise Trial</span>
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="#workbench" class="px-6 py-3.5 text-[14px] font-medium bg-[#faf9f5] hover:bg-[#efe9de] text-[#141413] rounded-[8px] card-border-hairline transition">
              Explore Demo Workspace
            </a>
          </div>

          <!-- Proof Metrics -->
          <div class="pt-8 border-t border-[#e6dfd8] grid grid-cols-3 gap-6">
            <div>
              <div class="text-[28px] font-serif text-[#141413]">&gt; 98.4%</div>
              <div class="text-[12px] text-[#6c6a64] uppercase tracking-wider font-medium mt-0.5">Field Accuracy Verified</div>
            </div>
            <div>
              <div class="text-[28px] font-serif text-[#141413]">&lt; 0.85s</div>
              <div class="text-[12px] text-[#6c6a64] uppercase tracking-wider font-medium mt-0.5">Speed Per Page (&lt;1s)</div>
            </div>
            <div>
              <div class="text-[28px] font-serif text-[#141413]">100%</div>
              <div class="text-[12px] text-[#6c6a64] uppercase tracking-wider font-medium mt-0.5">Deterministic Tracing</div>
            </div>
          </div>
        </div>

        <!-- Right: Dark Product Mockup Card -->
        <div class="lg:col-span-6">
          <div class="bg-[#181715] rounded-[12px] p-6 text-[#faf9f5] card-dark-border shadow-2xl relative overflow-hidden">
            <!-- Header bar -->
            <div class="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
              <div class="flex items-center gap-3">
                <div class="flex gap-1.5">
                  <span class="w-2.5 h-2.5 rounded-full bg-[#c64545]"></span>
                  <span class="w-2.5 h-2.5 rounded-full bg-[#d4a017]"></span>
                  <span class="w-2.5 h-2.5 rounded-full bg-[#5db872]"></span>
                </div>
                <span class="text-[12px] font-mono text-[#a09d96]">vlm_inference_worker.py :: Small-VLM-Fast (680ms)</span>
              </div>
              <span class="px-2.5 py-0.5 rounded text-[11px] font-mono bg-[#5db872]/20 text-[#5db872] border border-[#5db872]/30">LIVE RUNNING</span>
            </div>

            <!-- Terminal / Code Stream -->
            <div class="space-y-3 font-mono text-[12px] leading-relaxed">
              <div class="bg-[#1f1e1b] p-3 rounded-[8px] border border-white/5 space-y-1">
                <div class="text-[#a09d96] flex justify-between">
                  <span>[INGEST] 3 documents received</span>
                  <span class="text-[#5db8a6]">stream_id: rec_9091x</span>
                </div>
                <div class="text-[#faf9f5] text-[11px]">
                  → src_pdf: "Oracle_Cloud_Services_INV_99214.pdf" (6 pages, 142 line items)<br>
                  → src_bank: "Chase_Operating_MT940_Stmt_20261005.txt" (Line #491)<br>
                  → src_erp: "NetSuite_AP_Bill_Reference_104882.json"
                </div>
              </div>

              <!-- Small VLM Analysis Step -->
              <div class="bg-[#252320] p-3.5 rounded-[8px] border border-white/10 space-y-2">
                <div class="flex items-center justify-between">
                  <span class="text-[#cc785c] font-semibold flex items-center gap-1.5">
                    <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M11 2h2v7.5l5.3-5.3 1.4 1.4L14.5 11H22v2h-7.5l5.3 5.3-1.4 1.4L13 14.5V22h-2v-7.5l-5.3 5.3-1.4-1.4L9.5 13H2v-2h7.5L4.3 5.7l1.4-1.4L11 9.5V2z"/></svg>
                    Small VLM Bounding-Box Extraction (&lt; 0.72s)
                  </span>
                  <span class="text-[11px] text-[#5db872]">Confidence: 0.9992</span>
                </div>
                
                <div class="text-[11px] text-[#a09d96] bg-[#181715] p-2.5 rounded font-mono border border-white/5 space-y-1">
                  <div>• Subtotal extracted: <span class="text-white">$84,320.00</span> (Page 6, Box [y:0.82, x:0.71])</div>
                  <div>• VAT/Tax calculated: <span class="text-white">$7,588.80</span> (Irish Standard Rate 9.0% applied)</div>
                  <div>• Bank Wire Outflow: <span class="text-white">€82,148.50</span> (FX spot settled @ 1.0821 EUR/USD)</div>
                  <div class="text-[#5db872] font-semibold">✓ 4-Way Equation Balanced: Outflow ≡ Invoice ≡ NetSuite PO ≡ Bank Auth</div>
                </div>
              </div>

              <!-- Discrepancy Alert Highlight -->
              <div class="bg-[#c64545]/15 border border-[#c64545]/40 p-3 rounded-[8px] text-[11px] text-[#faf9f5]">
                <div class="flex items-center justify-between text-[#c64545] font-semibold mb-1">
                  <span>⚠️ ANOMALY DETECTED IN PARALLEL BATCH: INV-99215</span>
                  <span class="text-[10px] bg-[#c64545] text-white px-1.5 py-0.5 rounded">BLOCKED</span>
                </div>
                <div>Vendor remit IBAN changed from DE89... to GB21... without cryptographic dual-approval token. Suspicious phantom account alteration intercepted.</div>
              </div>
            </div>

            <!-- Footer status -->
            <div class="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#a09d96]">
              <span>Processed: 48,290 items today</span>
              <span>Memory overhead: 142MB</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
  `;
}
