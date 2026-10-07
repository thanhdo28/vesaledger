export function renderWorkbench(): string {
  return `
  <section id="workbench" class="py-24 bg-[#faf9f5] border-b border-[#e6dfd8]">
    <div class="max-w-[1240px] mx-auto px-6">
      
      <div class="max-w-2xl mb-12">
        <div class="text-[12px] font-mono text-[#cc785c] uppercase tracking-wider font-semibold mb-2">Interactive Inspection Workbench</div>
        <h2 class="text-[38px] sm:text-[44px] text-[#141413] leading-tight font-serif">
          See how the auditor isolates discrepancies across messy payloads.
        </h2>
        <p class="text-[16px] text-[#3d3d3a] mt-3">
          Select a multi-source audit scenario below to inspect how VeraLedger cross-correlates documents, computes deterministic variances, and generates immutable audit tokens.
        </p>
      </div>

      <!-- Tab Buttons -->
      <div class="flex flex-wrap items-center gap-2 mb-8 border-b border-[#e6dfd8] pb-4">
        <button id="tab-btn-3way" class="px-4 py-2 text-[14px] font-medium rounded-[8px] bg-[#efe9de] text-[#141413] transition">
          Scenario A: 3-Way Enterprise PO Match
        </button>
        <button id="tab-btn-fx" class="px-4 py-2 text-[14px] font-medium rounded-[8px] bg-transparent text-[#6c6a64] hover:text-[#141413] transition">
          Scenario B: Multi-Currency FX Slippage
        </button>
        <button id="tab-btn-fraud" class="px-4 py-2 text-[14px] font-medium rounded-[8px] bg-transparent text-[#6c6a64] hover:text-[#141413] transition">
          Scenario C: Shadow Invoice & IBAN Tampering
        </button>
      </div>

      <!-- Tab Content Area -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        <!-- Left: Source Evidence Panel -->
        <div class="lg:col-span-5 space-y-4">
          <div class="bg-[#efe9de] rounded-[12px] p-6 card-border-hairline">
            <h3 class="text-[18px] font-semibold text-[#141413] mb-1 flex items-center justify-between">
              <span id="scenario-title">Vendor Invoice vs PO Ledger</span>
              <span class="text-[11px] font-mono bg-[#cc785c] text-white px-2 py-0.5 rounded">SOURCE CORRELATION</span>
            </h3>
            <p id="scenario-desc" class="text-[13px] text-[#6c6a64] mb-4">
              Comparing scanned supplier PDF against NetSuite open PO balance and Chase bank wire record.
            </p>

            <!-- Evidence Data Table -->
            <div class="space-y-3 text-[13px]" id="evidence-box">
              <div class="p-3 bg-[#faf9f5] rounded-[8px] card-border-hairline">
                <div class="text-[11px] text-[#8e8b82] uppercase font-mono mb-1">Source 1: Scanned PDF (Vendor AWS)</div>
                <div class="flex justify-between font-mono font-medium text-[#141413]">
                  <span>Total Due: $14,920.00</span>
                  <span class="text-[#5db872]">OCR Acc: 99.9%</span>
                </div>
                <div class="text-[12px] text-[#6c6a64] mt-1">Invoice #AWS-99201 • Due: 2026-11-01</div>
              </div>

              <div class="p-3 bg-[#faf9f5] rounded-[8px] card-border-hairline">
                <div class="text-[11px] text-[#8e8b82] uppercase font-mono mb-1">Source 2: NetSuite ERP PO #4120</div>
                <div class="flex justify-between font-mono font-medium text-[#141413]">
                  <span>Approved Cap: $15,000.00</span>
                  <span class="text-[#5db8a6]">Status: Open PO</span>
                </div>
                <div class="text-[12px] text-[#6c6a64] mt-1">Cost Center: Infrastructure / Engineering</div>
              </div>

              <div class="p-3 bg-[#faf9f5] rounded-[8px] card-border-hairline">
                <div class="text-[11px] text-[#8e8b82] uppercase font-mono mb-1">Source 3: Chase Treasury Feed</div>
                <div class="flex justify-between font-mono font-medium text-[#141413]">
                  <span>Outflow: -$14,920.00</span>
                  <span class="text-[#5db872]">Settled ACH</span>
                </div>
                <div class="text-[12px] text-[#6c6a64] mt-1">Trace #TXN-CHASE-0029910 • 10:14 AM EST</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Claude Deterministic Output Chrome -->
        <div class="lg:col-span-7">
          <div class="bg-[#181715] rounded-[12px] p-6 text-[#faf9f5] card-dark-border h-full flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                <div class="flex items-center gap-2">
                  <svg class="text-[#cc785c] w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11 2h2v7.5l5.3-5.3 1.4 1.4L14.5 11H22v2h-7.5l5.3 5.3-1.4 1.4L13 14.5V22h-2v-7.5l-5.3 5.3-1.4-1.4L9.5 13H2v-2h7.5L4.3 5.7l1.4-1.4L11 9.5V2z"/>
                  </svg>
                  <span class="text-[13px] font-mono text-white">audit_assertion_receipt.json</span>
                </div>
                <span id="audit-tag" class="text-[11px] font-mono bg-[#5db872]/20 text-[#5db872] px-2 py-0.5 rounded border border-[#5db872]/30">
                  DECISION: APPROVED_AUTO_POST
                </span>
              </div>

              <pre id="json-output" class="bg-[#1f1e1b] p-4 rounded-[8px] border border-white/5 text-[12px] font-mono text-[#a09d96] overflow-x-auto leading-relaxed">
{
  "match_status": "EXACT_THREE_WAY_BALANCED",
  "confidence_score": 0.9998,
  "variance_detected": {
    "amount": 0.00,
    "currency": "USD"
  },
  "audit_trail": {
    "po_id": "NETSUITE_PO_4120",
    "invoice_id": "AWS-99201",
    "bank_tx_id": "TXN-CHASE-0029910",
    "sha256_evidence": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
  },
  "action_taken": "POSTED_JOURNAL_ENTRY_TO_NETSUITE"
}</pre>
            </div>

            <div class="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[12px] text-[#a09d96]">
              <span>Signed by VeraLedger Key ID: <code>vl_sec_99182a</code></span>
              <span class="text-[#cc785c] font-medium hover:underline cursor-pointer">Download Cryptographic Receipt →</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
  `;
}
