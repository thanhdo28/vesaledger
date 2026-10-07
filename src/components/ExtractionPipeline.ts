export function renderExtractionPipeline(): string {
  return `
  <section id="automation" class="py-24 bg-[#efe9de] border-b border-[#e6dfd8]">
    <div class="max-w-[1240px] mx-auto px-6">
      
      <div class="max-w-3xl mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#faf9f5] card-border-hairline text-[#141413] text-[12px] font-medium tracking-wide mb-3">
          <span class="text-[#cc785c] font-bold">●</span> End-to-End Extraction & ERP Submission
        </div>
        <h2 class="text-[40px] sm:text-[48px] text-[#141413] font-serif leading-tight">
          Sub-second invoice extraction (&lt; 1s/page) with &gt; 98% accuracy straight to your ERP.
        </h2>
        <p class="text-[16px] text-[#3d3d3a] mt-3 leading-relaxed">
          Eliminate manual data entry. Our specialized small VLM processes pages in under 1 second (&lt; 850ms) with verified &gt; 98.4% field accuracy, extracts 42+ structured fields from complex multi-page PDFs, mobile snaps, and receipts, maps your Chart of Accounts, and submits audit-ready bills straight into NetSuite, QuickBooks, Xero, or SAP.
        </p>
      </div>

      <!-- 4-Stage Horizontal Pipeline Cards -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
        
        <div class="bg-[#faf9f5] rounded-[12px] p-6 card-border-hairline flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="text-[12px] font-mono font-bold text-[#cc785c]">STAGE 01</span>
              <span class="text-[11px] font-mono text-[#8e8b82]">INGESTION</span>
            </div>
            <h3 class="text-[18px] font-semibold text-[#141413] font-serif mb-2">Omni-Channel Ingestion</h3>
            <p class="text-[13px] text-[#6c6a64] leading-relaxed">
              Forward bills to <code>ap@company.veraledger.ai</code>, snap receipts via mobile, sync Slack expense channels, or trigger automatic batch S3/SFTP ingestion.
            </p>
          </div>
          <div class="mt-4 pt-3 border-t border-[#e6dfd8] text-[11px] font-mono text-[#5db872]">
            ✓ Auto-deduplication active
          </div>
        </div>

        <div class="bg-[#faf9f5] rounded-[12px] p-6 card-border-hairline flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="text-[12px] font-mono font-bold text-[#cc785c]">STAGE 02</span>
              <span class="text-[11px] font-mono text-[#8e8b82]">EXTRACTION</span>
            </div>
            <h3 class="text-[18px] font-semibold text-[#141413] font-serif mb-2">Small VLM Vision Engine</h3>
            <p class="text-[13px] text-[#6c6a64] leading-relaxed">
              Extracts vendor name, tax ID / VAT, invoice date, due date, itemized line tables, and payment wire coordinates with cryptographic bounding-box coordinates.
            </p>
          </div>
          <div class="mt-4 pt-3 border-t border-[#e6dfd8] text-[11px] font-mono text-[#5db872]">
            ✓ &gt; 98.4% accuracy • &lt; 850ms / page
          </div>
        </div>

        <div class="bg-[#faf9f5] rounded-[12px] p-6 card-border-hairline flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="text-[12px] font-mono font-bold text-[#cc785c]">STAGE 03</span>
              <span class="text-[11px] font-mono text-[#8e8b82]">GL MAPPING</span>
            </div>
            <h3 class="text-[18px] font-semibold text-[#141413] font-serif mb-2">Autonomous COA Coding</h3>
            <p class="text-[13px] text-[#6c6a64] leading-relaxed">
              Matches descriptions to your Chart of Accounts (COA). Tags Department (e.g. R&D), Subsidiary, Class, and Cost Center based on historical ledger conventions.
            </p>
          </div>
          <div class="mt-4 pt-3 border-t border-[#e6dfd8] text-[11px] font-mono text-[#5db872]">
            ✓ Straight-through processing rules
          </div>
        </div>

        <div class="bg-[#faf9f5] rounded-[12px] p-6 card-border-hairline flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="text-[12px] font-mono font-bold text-[#cc785c]">STAGE 04</span>
              <span class="text-[11px] font-mono text-[#8e8b82]">SUBMISSION</span>
            </div>
            <h3 class="text-[18px] font-semibold text-[#141413] font-serif mb-2">Instant ERP Dispatch</h3>
            <p class="text-[13px] text-[#6c6a64] leading-relaxed">
              Directly posts vendor bill, credit note, or expense claim into NetSuite, QuickBooks, Xero, or SAP. Attaches original source PDF as immutable evidence.
            </p>
          </div>
          <div class="mt-4 pt-3 border-t border-[#e6dfd8] text-[11px] font-mono text-[#5db872]">
            ✓ Bi-directional sync & audit trail
          </div>
        </div>

      </div>

      <!-- INTERACTIVE EXTRACTOR & ERP DISPATCHER SANDBOX -->
      <div class="bg-[#faf9f5] rounded-[12px] p-8 card-border-hairline shadow-sm">
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 border-b border-[#e6dfd8] pb-6">
          <div>
            <h3 class="text-[24px] font-serif font-semibold text-[#141413]">Live Extractor & ERP Dispatcher Sandbox</h3>
            <p class="text-[13px] text-[#6c6a64] mt-1">Inspect real-time extraction across document formats and test automated ERP submission.</p>
          </div>
          
          <!-- Sample Doc Selector -->
          <div class="flex items-center gap-2">
            <button id="btn-sample-invoice" class="px-3.5 py-1.5 text-[13px] font-medium rounded-[8px] bg-[#efe9de] text-[#141413] border border-[#e6dfd8] transition">
              Sample 1: SaaS Cloud Invoice
            </button>
            <button id="btn-sample-receipt" class="px-3.5 py-1.5 text-[13px] font-medium rounded-[8px] bg-transparent text-[#6c6a64] hover:text-[#141413] border border-transparent transition">
              Sample 2: Travel & Meal Receipt
            </button>
            <button id="btn-sample-contractor" class="px-3.5 py-1.5 text-[13px] font-medium rounded-[8px] bg-transparent text-[#6c6a64] hover:text-[#141413] border border-transparent transition">
              Sample 3: Contractor Bill
            </button>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <!-- Col 1: Visual Document Preview with Bounding Box Highlights -->
          <div class="lg:col-span-4 bg-[#f5f0e8] rounded-[10px] p-5 border border-[#e6dfd8] flex flex-col justify-between font-mono">
            <div>
              <div class="flex items-center justify-between text-[11px] text-[#8e8b82] mb-3 pb-2 border-b border-[#e6dfd8]">
                <span id="doc-format-label">FILE: datadog_inv_88201.pdf</span>
                <span class="text-[#5db872]">OCR: 300 DPI OK</span>
              </div>

              <!-- Mock Document Visual Display -->
              <div class="bg-white rounded p-4 text-[11px] text-[#141413] shadow-sm space-y-3 border border-[#e6dfd8] relative">
                <!-- Mock Bounding Box 1 -->
                <div class="border border-dashed border-[#cc785c] bg-[#cc785c]/10 p-1.5 rounded relative">
                  <span class="absolute -top-2 right-1 text-[8px] bg-[#cc785c] text-white px-1 rounded uppercase font-sans">Vendor</span>
                  <div class="font-bold" id="doc-vendor-name">Datadog Ireland Limited</div>
                  <div class="text-[10px] text-[#6c6a64]" id="doc-vendor-tax">VAT Reg: IE 9831920L</div>
                </div>

                <div class="flex justify-between border-b border-gray-100 pb-2 text-[10px]">
                  <div>
                    <span class="text-gray-400 block">INVOICE NO</span>
                    <span class="font-semibold" id="doc-inv-num">DD-2026-9014</span>
                  </div>
                  <div>
                    <span class="text-gray-400 block">ISSUE DATE</span>
                    <span class="font-semibold" id="doc-date">2026-10-01</span>
                  </div>
                  <div>
                    <span class="text-gray-400 block">DUE DATE</span>
                    <span class="font-semibold" id="doc-due">2026-10-31</span>
                  </div>
                </div>

                <!-- Line Item Highlights -->
                <div class="space-y-1 text-[10px]" id="doc-lines-preview">
                  <div class="flex justify-between border-b border-gray-100 pb-1">
                    <span>Infrastructure Host Monitoring (45 units)</span>
                    <span class="font-semibold">$6,750.00</span>
                  </div>
                  <div class="flex justify-between border-b border-gray-100 pb-1">
                    <span>APM Pro Traces & Ingestion</span>
                    <span class="font-semibold">$4,200.00</span>
                  </div>
                  <div class="flex justify-between border-b border-gray-100 pb-1">
                    <span>Log Management Indexed Events (30M)</span>
                    <span class="font-semibold">$1,850.00</span>
                  </div>
                </div>

                <!-- Total Highlight Box -->
                <div class="border border-dashed border-[#5db872] bg-[#5db872]/10 p-2 rounded flex justify-between items-baseline relative">
                  <span class="absolute -top-2 right-1 text-[8px] bg-[#5db872] text-white px-1 rounded uppercase font-sans">Total Verified</span>
                  <span class="text-[10px] font-bold uppercase">TOTAL AMOUNT DUE</span>
                  <span class="text-[13px] font-bold text-[#141413]" id="doc-total">$12,800.00 USD</span>
                </div>
              </div>
            </div>

            <div class="mt-4 pt-3 border-t border-[#e6dfd8] flex items-center justify-between text-[11px] text-[#6c6a64]">
              <span>Source: <code>ap-inbox@veraledger.ai</code></span>
              <span class="text-[#5db872] font-semibold">Clean Bounding Box ✓</span>
            </div>
          </div>

          <!-- Col 2: Extracted Structured Data Table -->
          <div class="lg:col-span-4 bg-[#faf9f5] rounded-[10px] p-5 card-border-hairline flex flex-col justify-between font-mono">
            <div>
              <div class="flex items-center justify-between pb-3 mb-3 border-b border-[#e6dfd8]">
                <span class="text-[12px] font-bold text-[#141413]">Extracted Schema</span>
                <span class="text-[11px] font-mono text-[#5db872] bg-[#5db872]/15 px-2 py-0.5 rounded">Confidence: 99.94%</span>
              </div>

              <div class="space-y-2 text-[12px]" id="schema-breakdown">
                <div class="p-2 rounded bg-[#efe9de] flex justify-between">
                  <span class="text-[#8e8b82]">vendor_normalized:</span>
                  <span class="text-[#141413] font-semibold" id="schema-vendor">Datadog, Inc.</span>
                </div>
                <div class="p-2 rounded bg-[#efe9de] flex justify-between">
                  <span class="text-[#8e8b82]">tax_identifier:</span>
                  <span class="text-[#141413]" id="schema-tax-id">IE9831920L</span>
                </div>
                <div class="p-2 rounded bg-[#efe9de] flex justify-between">
                  <span class="text-[#8e8b82]">payment_terms:</span>
                  <span class="text-[#141413]" id="schema-terms">Net 30 Days</span>
                </div>
                <div class="p-2 rounded bg-[#efe9de] flex justify-between">
                  <span class="text-[#8e8b82]">chart_of_accounts_gl:</span>
                  <span class="text-[#cc785c] font-bold" id="schema-gl">GL 6040 (SaaS Hosting)</span>
                </div>
                <div class="p-2 rounded bg-[#efe9de] flex justify-between">
                  <span class="text-[#8e8b82]">department_tag:</span>
                  <span class="text-[#141413]" id="schema-dept">Engineering / Core Platform</span>
                </div>
                <div class="p-2 rounded bg-[#efe9de] flex justify-between">
                  <span class="text-[#8e8b82]">payment_remittance:</span>
                  <span class="text-[#5db8a6]" id="schema-remit">ACH Routing: 021000021</span>
                </div>
              </div>
            </div>

            <div class="mt-4 pt-3 border-t border-[#e6dfd8] text-[11px] text-[#6c6a64] flex justify-between">
              <span>Validation: ISO 20022 compliant</span>
              <span class="text-[#5db872]">Zero Hallucinations</span>
            </div>
          </div>

          <!-- Col 3: Direct ERP Destination & Dispatcher Action -->
          <div class="lg:col-span-4 bg-[#181715] text-[#faf9f5] rounded-[10px] p-5 card-dark-border flex flex-col justify-between font-mono">
            <div>
              <div class="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                <div class="flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-[#5db872]"></span>
                  <span class="text-[12px] font-bold text-white">Accounting Destination</span>
                </div>
                <select id="erp-select" class="bg-[#252320] text-[11px] text-[#faf9f5] px-2 py-1 rounded border border-white/10 focus:outline-none">
                  <option value="netsuite">NetSuite AP Bill</option>
                  <option value="quickbooks">QuickBooks Online</option>
                  <option value="xero">Xero Accounting</option>
                  <option value="sap">SAP S/4HANA</option>
                </select>
              </div>

              <!-- Payload preview -->
              <div class="bg-[#1f1e1b] p-3 rounded text-[11px] text-[#a09d96] space-y-1.5 border border-white/5 mb-4">
                <div class="text-white font-semibold flex justify-between">
                  <span id="erp-action-type">API POST: /services/rest/record/v1/vendorBill</span>
                  <span class="text-[#5db8a6]">HTTP/2</span>
                </div>
                <div id="erp-sync-details">
                  • Entity ID: <code>VENDOR_DATADOG_0019</code><br>
                  • Posting Period: <code>2026-10</code><br>
                  • GL Debit: <code>6040 - Hosting Infrastructure</code><br>
                  • AP Credit: <code>2000 - Accounts Payable</code><br>
                  • Attachment: <code>sha256:7b29a...pdf</code>
                </div>
              </div>

              <!-- Live Submission Trigger Status Box -->
              <div id="sync-status-box" class="p-3 rounded bg-[#252320] border border-white/10 text-[11px] text-[#a09d96]">
                Ready for automated straight-through processing.
              </div>
            </div>

            <div class="mt-4 pt-4 border-t border-white/10">
              <button id="btn-sync-erp" class="w-full py-2.5 text-[13px] font-medium bg-[#cc785c] hover:bg-[#a9583e] active:bg-[#a9583e] text-white rounded-[6px] transition flex items-center justify-center gap-2 shadow-sm">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                <span>Dispatch Bill to NetSuite</span>
              </button>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
  `;
}
