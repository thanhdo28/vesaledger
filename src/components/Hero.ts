import { t } from '../i18n';

export function renderHero(): string {
  return `
  <section class="relative pt-16 pb-20 border-b border-white/10 overflow-hidden bg-slate-950">
    <!-- Subtle gradient glow -->
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/10 blur-[140px] pointer-events-none rounded-full"></div>

    <div class="max-w-[1240px] mx-auto px-6 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <!-- Left: FinTech Proposition -->
        <div class="lg:col-span-6 space-y-6">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-300 text-[12px] font-mono tracking-wide">
            <span class="w-2 h-2 rounded-full bg-blue-400 animate-ping"></span>
            <span>${t('Private Beta · 4-Way Cross-Ledger Reconciliation', 'Bản thử nghiệm kín · Đối soát chéo sổ cái 4 chiều')}</span>
          </div>

          <h1 class="text-[44px] sm:text-[54px] lg:text-[58px] leading-[1.08] text-white font-bold tracking-tight">
            ${t('Catch every invoice error before it hits your ledger.', 'Chặn đứng mọi sai sót hóa đơn trước khi vào sổ cái kế toán.')}
          </h1>

          <p class="text-[16px] sm:text-[17px] text-slate-300 leading-[1.6] max-w-xl">
            ${t(
              'VeraLedger cross-checks purchase orders, receiving slips, bank confirmations, and invoice XMLs in under 1 second. Built for Chief Accountants and CFOs needing zero-variance closing.',
              'VeraLedger tự động đối chiếu hóa đơn, đơn đặt hàng (PO), phiếu nhập kho và ủy nhiệm chi ngân hàng chỉ dưới 1 giây. Thiết kế chuyên sâu cho Kế toán trưởng và CFO cần quyết toán không sai lệch.'
            )}
          </p>

          <div class="pt-2 flex flex-wrap items-center gap-4">
            <a href="#pilot" class="px-6 py-3.5 text-[14px] font-semibold bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white rounded-lg transition shadow-lg shadow-blue-600/25 inline-flex items-center gap-2">
              <span>${t('Apply for Pilot Cohort', 'Đăng ký Đợt Thử nghiệm')}</span>
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="#workbench" class="px-6 py-3.5 text-[14px] font-semibold bg-slate-900 hover:bg-slate-850 text-slate-200 border border-white/15 rounded-lg transition">
              ${t('Explore Live Sandbox', 'Trải nghiệm Sandbox đối soát')}
            </a>
          </div>

          <!-- Trust Signals -->
          <div class="flex flex-wrap items-center gap-5 text-[12px] text-slate-400 font-medium pt-1">
            <span class="flex items-center gap-1.5"><span class="text-emerald-400">✓</span> ${t('Zero Retention SLA', 'Cam kết không lưu trữ dữ liệu huấn luyện')}</span>
            <span class="flex items-center gap-1.5"><span class="text-emerald-400">✓</span> ${t('Decree 13 / PDPA Aligned', 'Tuân thủ Nghị định 13 &amp; PDPA')}</span>
            <span class="flex items-center gap-1.5"><span class="text-emerald-400">✓</span> ${t('Instant ERP Connectors', 'Tích hợp ERP tức thì')}</span>
          </div>

          <!-- Proof Metrics -->
          <div class="pt-8 border-t border-white/10 grid grid-cols-3 gap-6">
            <div>
              <div class="text-[28px] font-bold text-white tabular-nums">99.9%</div>
              <div class="text-[11px] text-slate-400 uppercase tracking-wider font-mono mt-0.5">${t('Field Match Precision', 'Độ chính xác đối soát')}</div>
            </div>
            <div>
              <div class="text-[28px] font-bold text-white tabular-nums">&lt; 0.85s</div>
              <div class="text-[11px] text-slate-400 uppercase tracking-wider font-mono mt-0.5">${t('Audit Latency / Page', 'Thời gian rà soát / trang')}</div>
            </div>
            <div>
              <div class="text-[28px] font-bold text-emerald-400 tabular-nums">0.00%</div>
              <div class="text-[11px] text-slate-400 uppercase tracking-wider font-mono mt-0.5">${t('Ledger Variance Target', 'Mục tiêu chênh lệch 0%')}</div>
            </div>
          </div>
        </div>

        <!-- Right: Modern Dark Product Workbench Mockup -->
        <div class="lg:col-span-6">
          <div class="bg-slate-900/90 rounded-xl p-6 text-slate-200 border border-white/10 shadow-2xl relative overflow-hidden backdrop-blur-md">
            
            <!-- Window header -->
            <div class="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
              <div class="flex items-center gap-3">
                <div class="flex gap-1.5">
                  <span class="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                  <span class="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                  <span class="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                </div>
                <span class="text-[11.5px] font-mono text-slate-400">veraledger-engine :: audit-stream-worker (420ms)</span>
              </div>
              <span class="px-2.5 py-0.5 rounded text-[10.5px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold tracking-wide">STP ACTIVE</span>
            </div>

            <!-- Pipeline Log Stream -->
            <div class="space-y-3 font-mono text-[12px] leading-relaxed">
              
              <!-- Ingestion Box -->
              <div class="bg-slate-950 p-3.5 rounded-lg border border-white/5 space-y-1">
                <div class="text-slate-400 flex justify-between text-[11px]">
                  <span>[INGESTION] 4-Way Document Stream</span>
                  <span class="text-blue-400">batch_ref: #REC-90812</span>
                </div>
                <div class="text-slate-200 text-[11px]">
                  • E-Invoice XML: <span class="text-blue-300">"INV_0091823_FPT_Corp.xml"</span> (Tax ID: 0101248141)<br>
                  • ERP PO Match: <span class="text-slate-400">"NetSuite PO #99120 · Matching line items 100%"</span><br>
                  • Bank Slip (UNC): <span class="text-slate-400">"Techcombank Wire ref #TCB-202610-991"</span>
                </div>
              </div>

              <!-- Matching Result -->
              <div class="bg-slate-850 p-3.5 rounded-lg border border-white/10 space-y-2">
                <div class="flex items-center justify-between">
                  <span class="text-blue-400 font-semibold flex items-center gap-1.5 text-[12px]">
                    <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                    ${t('Deterministic 4-Way Reconciliation', 'Đối soát chéo 4 chiều hoàn tất')}
                  </span>
                  <span class="text-[11px] text-emerald-400 font-semibold">Matched: 100%</span>
                </div>
                
                <div class="text-[11px] text-slate-300 bg-slate-950/80 p-2.5 rounded font-mono border border-white/5 space-y-1">
                  <div>• Subtotal: <span class="text-white font-semibold">145,200,000 VND</span> (Matched PO #99120)</div>
                  <div>• Input VAT (8%): <span class="text-white font-semibold">11,616,000 VND</span> (Statutory Decree 123 verified)</div>
                  <div>• Bank Wire Outflow: <span class="text-white font-semibold">156,816,000 VND</span> (UNC beneficiary matches Seller MST)</div>
                  <div class="text-emerald-400 font-semibold pt-1 border-t border-white/5 flex items-center gap-1.5">
                    <span>✓</span> Verified: E-Invoice ≡ PO Line ≡ Warehouse Receipt ≡ Bank Settlement
                  </div>
                </div>
              </div>

              <!-- Fraud Guard Alert Highlight -->
              <div class="bg-red-950/30 border border-red-500/30 p-3 rounded-lg text-[11px] text-slate-200">
                <div class="flex items-center justify-between text-red-400 font-semibold mb-1">
                  <span class="flex items-center gap-1.5">
                    <span>⚠️</span>
                    ${t('PARALLEL INVOICE BLOCKED: #INV-0091824', 'PHÁT HIỆN BẤT THƯỜNG: #INV-0091824')}
                  </span>
                  <span class="text-[10px] bg-red-600 text-white px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">Intercepted</span>
                </div>
                <div class="text-slate-300">
                  ${t(
                    'Vendor tax code flagged: Seller closed business before issuance date. Route to Chief Accountant for review before general ledger posting.',
                    'Cảnh báo: Nhà cung cấp đã đóng MST trước ngày xuất hóa đơn. Đã tự động chặn và chuyển Kế toán trưởng duyệt.'
                  )}
                </div>
              </div>

            </div>

            <!-- Card Footer -->
            <div class="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>${t('Pilot Benchmark: 10,000+ Decree 123 XMLs Tested', 'Kiểm thử thực tế: 10.000+ XML hóa đơn NĐ 123')}</span>
              <span class="text-emerald-400">0.00ms Queue Delay</span>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
  `;
}
