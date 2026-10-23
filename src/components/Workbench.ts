import { t } from '../i18n';

export function renderWorkbench(): string {
  return `
  <section id="workbench" class="py-24 bg-slate-950 border-b border-white/10">
    <div class="max-w-[1240px] mx-auto px-6">
      
      <div class="max-w-2xl mb-12">
        <div class="text-[12px] font-mono text-blue-400 uppercase tracking-wider font-semibold mb-2">
          ${t('Interactive Inspection Workbench', 'Môi trường Kiểm thử Đối soát Thực tế')}
        </div>
        <h2 class="text-[34px] sm:text-[40px] text-white leading-tight font-bold tracking-tight">
          ${t('See how the auditor isolates discrepancies across messy payloads.', 'Xem cách hệ thống phát hiện chênh lệch qua các tình huống thực tế.')}
        </h2>
        <p class="text-[15px] text-slate-300 mt-3">
          ${t(
            'Select a multi-source audit scenario below to inspect how VeraLedger correlates documents, detects discrepancies, and issues audit tokens.',
            'Chọn một kịch bản rà soát bên dưới để xem VeraLedger đối chiếu chéo chứng từ, tính toán chênh lệch và xuất mã xác thực kiểm toán.'
          )}
        </p>
      </div>

      <!-- Tab Buttons -->
      <div class="flex flex-wrap items-center gap-2 mb-8 border-b border-white/10 pb-4">
        <button id="tab-btn-3way" class="px-4 py-2 text-[13.5px] font-semibold rounded-lg bg-blue-600 text-white transition">
          ${t('Scenario A: 4-Way Enterprise PO Match', 'Tình huống A: Đối soát 4 chiều PO & Hóa đơn')}
        </button>
        <button id="tab-btn-fx" class="px-4 py-2 text-[13.5px] font-semibold rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-white/10 transition">
          ${t('Scenario B: FX Rate & Under-Declaration Check', 'Tình huống B: Chênh lệch tỷ giá ngoại tệ & Thuế')}
        </button>
        <button id="tab-btn-fraud" class="px-4 py-2 text-[13.5px] font-semibold rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-white/10 transition">
          ${t('Scenario C: Suspended Vendor & IBAN Tampering', 'Tình huống C: Người bán ngừng hoạt động & Đổi tài khoản')}
        </button>
      </div>

      <!-- Tab Content Area -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        <!-- Left: Source Evidence Panel -->
        <div class="lg:col-span-5 space-y-4">
          <div class="bg-slate-900 rounded-xl p-6 border border-white/10">
            <h3 class="text-[17px] font-bold text-white mb-1 flex items-center justify-between">
              <span id="scenario-title">Vendor Invoice vs PO Ledger</span>
              <span class="text-[10px] font-mono bg-blue-600 text-white px-2 py-0.5 rounded font-semibold tracking-wider">SOURCE CORRELATION</span>
            </h3>
            <p id="scenario-desc" class="text-[13px] text-slate-400 mb-4">
              Comparing scanned supplier PDF against NetSuite open PO balance and Chase bank wire record.
            </p>

            <!-- Evidence Data Table -->
            <div class="space-y-3 text-[13px]" id="evidence-box">
              <div class="p-3.5 bg-slate-950 rounded-lg border border-white/5 font-mono">
                <div class="text-[11px] text-slate-400 uppercase mb-1">Source 1: E-Invoice XML / PDF (Vendor FPT)</div>
                <div class="flex justify-between font-medium text-white">
                  <span>Total Due: 68,580,000 VND</span>
                  <span class="text-emerald-400">OCR Acc: 99.9%</span>
                </div>
                <div class="text-[11.5px] text-slate-400 mt-1">Invoice #FPT-2026-9014 • Due: 2026-10-31</div>
              </div>

              <div class="p-3.5 bg-slate-950 rounded-lg border border-white/5 font-mono">
                <div class="text-[11px] text-slate-400 uppercase mb-1">Source 2: ERP Open PO #4120</div>
                <div class="flex justify-between font-medium text-white">
                  <span>Approved Budget: 70,000,000 VND</span>
                  <span class="text-blue-400">Status: Approved PO</span>
                </div>
                <div class="text-[11.5px] text-slate-400 mt-1">Cost Center: Infrastructure / Tech Hub Hanoi</div>
              </div>

              <div class="p-3.5 bg-slate-950 rounded-lg border border-white/5 font-mono">
                <div class="text-[11px] text-slate-400 uppercase mb-1">Source 3: Bank Settlement Feed (UNC)</div>
                <div class="flex justify-between font-medium text-white">
                  <span>Outflow: -68,580,000 VND</span>
                  <span class="text-emerald-400">Settled Wire</span>
                </div>
                <div class="text-[11.5px] text-slate-400 mt-1">Beneficiary: FPT Telecom JSC • 10:14 AM</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Deterministic Output Chrome -->
        <div class="lg:col-span-7">
          <div class="bg-slate-900 rounded-xl p-6 text-slate-200 border border-white/10 h-full flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                <div class="flex items-center gap-2">
                  <span class="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                  <span class="text-[13px] font-mono text-white font-semibold">audit_assertion_receipt.json</span>
                </div>
                <span id="audit-tag" class="text-[11px] font-mono bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/30 font-semibold">
                  DECISION: APPROVED_AUTO_POST
                </span>
              </div>

              <pre id="json-output" class="bg-slate-950 p-4 rounded-lg border border-white/5 text-[12px] font-mono text-slate-300 overflow-x-auto leading-relaxed">
{
  "match_status": "EXACT_FOUR_WAY_BALANCED",
  "confidence_score": 0.9998,
  "variance_detected": {
    "amount": 0.00,
    "currency": "VND"
  },
  "audit_trail": {
    "po_id": "NETSUITE_PO_4120",
    "invoice_id": "FPT-2026-9014",
    "bank_tx_id": "TCB-WIRE-202610-991",
    "sha256_evidence": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
  },
  "action_taken": "POSTED_JOURNAL_ENTRY_TO_ERP"
}</pre>
            </div>

            <div class="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[12px] text-slate-400 font-mono">
              <span>Verified Key: <code>vl_sec_hanoi_99182</code></span>
              <span class="text-blue-400 font-medium hover:underline cursor-pointer">${t('Download Audit Token →', 'Tải mã xác thực kiểm toán →')}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
  `;
}
