import { t } from '../i18n';

export function renderExtractionPipeline(): string {
  return `
  <section id="automation" class="py-24 bg-slate-900 border-b border-white/10">
    <div class="max-w-[1240px] mx-auto px-6">
      
      <div class="max-w-3xl mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-300 text-[12px] font-mono tracking-wide mb-3">
          <span class="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
          <span>${t('End-to-End Extraction & ERP Submission', 'Quy trình bóc tách &amp; đẩy sổ cái ERP tự động')}</span>
        </div>
        <h2 class="text-[36px] sm:text-[44px] text-white font-bold leading-tight">
          ${t('Sub-second invoice extraction (< 1s/page) with > 98% accuracy straight to your ERP.', 'Bóc tách hóa đơn dưới 1 giây (&lt; 1s/trang) với độ chính xác > 98% thẳng vào ERP.')}
        </h2>
        <p class="text-[16px] text-slate-300 mt-3 leading-relaxed">
          ${t(
            'Eliminate manual data entry. VeraLedger extracts 42+ structured fields from complex multi-page PDFs, scans, and XMLs, auto-maps to your Chart of Accounts, and pushes audit-ready bills into NetSuite, SAP, MISA, FAST, or QuickBooks.',
            'Loại bỏ hoàn toàn nhập liệu thủ công. VeraLedger tự động bóc tách 42+ trường dữ liệu từ PDF, bản scan và XML hóa đơn điện tử, tự động định khoản tài khoản kế toán và đồng bộ vào NetSuite, SAP, MISA, FAST hoặc QuickBooks.'
          )}
        </p>
      </div>

      <!-- 4-Stage Horizontal Pipeline Cards -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
        
        <div class="bg-slate-950 rounded-xl p-6 border border-white/10 flex flex-col justify-between hover:border-white/20 transition">
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="text-[11px] font-mono font-bold text-blue-400">STAGE 01</span>
              <span class="text-[10px] font-mono text-slate-500">INGESTION</span>
            </div>
            <h3 class="text-[17px] font-bold text-white mb-2">${t('Omni-Channel Ingestion', 'Thu nhận đa kênh')}</h3>
            <p class="text-[13px] text-slate-400 leading-relaxed">
              ${t(
                'Forward bills to ap@company.veraledger.site, upload batches via SFTP/S3, sync bank email notices, or connect e-invoice vendor feeds.',
                'Tự động nhận hóa đơn qua email chuyên dụng, tải tệp hàng loạt qua SFTP/S3, hoặc kết nối API trực tiếp từ hệ thống hóa đơn điện tử.'
              )}
            </p>
          </div>
          <div class="mt-4 pt-3 border-t border-white/10 text-[11px] font-mono text-emerald-400">
            ✓ ${t('Auto-deduplication active', 'Tự động phát hiện trùng lặp')}
          </div>
        </div>

        <div class="bg-slate-950 rounded-xl p-6 border border-white/10 flex flex-col justify-between hover:border-white/20 transition">
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="text-[11px] font-mono font-bold text-blue-400">STAGE 02</span>
              <span class="text-[10px] font-mono text-slate-500">EXTRACTION</span>
            </div>
            <h3 class="text-[17px] font-bold text-white mb-2">${t('Structured Field Parser', 'Bóc tách trường dữ liệu')}</h3>
            <p class="text-[13px] text-slate-400 leading-relaxed">
              ${t(
                'Extracts vendor name, tax ID, invoice date, due date, line items, and bank wire details with cryptographic bounding-box verification.',
                'Trích xuất tên nhà cung cấp, mã số thuế, số hóa đơn, ngày lập, chi tiết từng dòng hàng hóa và tài khoản thanh toán kèm tọa độ xác thực.'
              )}
            </p>
          </div>
          <div class="mt-4 pt-3 border-t border-white/10 text-[11px] font-mono text-emerald-400">
            ✓ &gt; 98.4% ${t('accuracy', 'chính xác')} • &lt; 850ms / ${t('page', 'trang')}
          </div>
        </div>

        <div class="bg-slate-950 rounded-xl p-6 border border-white/10 flex flex-col justify-between hover:border-white/20 transition">
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="text-[11px] font-mono font-bold text-blue-400">STAGE 03</span>
              <span class="text-[10px] font-mono text-slate-500">GL MAPPING</span>
            </div>
            <h3 class="text-[17px] font-bold text-white mb-2">${t('Autonomous COA Coding', 'Tự động định khoản')}</h3>
            <p class="text-[13px] text-slate-400 leading-relaxed">
              ${t(
                'Matches line items to your Chart of Accounts (COA). Assigns cost centers, tax codes, and subsidiary tags based on corporate rules.',
                'Khớp nội dung diễn giải với hệ thống tài khoản kế toán doanh nghiệp (COA). Gắn trung tâm chi phí, mã thuế và chi nhánh tự động.'
              )}
            </p>
          </div>
          <div class="mt-4 pt-3 border-t border-white/10 text-[11px] font-mono text-emerald-400">
            ✓ ${t('Deterministic rule checks', 'Quy tắc định khoản chính xác')}
          </div>
        </div>

        <div class="bg-slate-950 rounded-xl p-6 border border-white/10 flex flex-col justify-between hover:border-white/20 transition">
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="text-[11px] font-mono font-bold text-blue-400">STAGE 04</span>
              <span class="text-[10px] font-mono text-slate-500">SUBMISSION</span>
            </div>
            <h3 class="text-[17px] font-bold text-white mb-2">${t('Instant ERP Dispatch', 'Đẩy dữ liệu vào ERP')}</h3>
            <p class="text-[13px] text-slate-400 leading-relaxed">
              ${t(
                'Directly posts vendor bills or payment orders into SAP, NetSuite, MISA, FAST, Bravo, or QuickBooks with immutable audit hash attached.',
                'Đẩy trực tiếp chứng từ mua hàng, phiếu chi vào SAP, NetSuite, MISA, FAST, Bravo, QuickBooks kèm tệp đính kèm và mã băm kiểm toán.'
              )}
            </p>
          </div>
          <div class="mt-4 pt-3 border-t border-white/10 text-[11px] font-mono text-emerald-400">
            ✓ ${t('Bi-directional ERP sync', 'Đồng bộ 2 chiều &amp; vết kiểm toán')}
          </div>
        </div>

      </div>

      <!-- INTERACTIVE EXTRACTOR & ERP DISPATCHER SANDBOX -->
      <div class="bg-slate-950 rounded-xl p-8 border border-white/10 shadow-2xl">
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 border-b border-white/10 pb-6">
          <div>
            <h3 class="text-[20px] font-bold text-white">${t('Live Extractor & ERP Dispatcher Sandbox', 'Môi trường Trực quan: Bóc tách &amp; Đồng bộ ERP')}</h3>
            <p class="text-[13px] text-slate-400 mt-1">${t('Inspect real-time extraction across document formats and test automated ERP submission.', 'Xem kết quả bóc tách thời gian thực theo từng định dạng chứng từ và thử nghiệm đẩy vào ERP.')}</p>
          </div>
          
          <!-- Sample Doc Selector -->
          <div class="flex flex-wrap items-center gap-2">
            <button id="btn-sample-invoice" class="px-3 py-1.5 text-[12px] font-medium rounded-lg bg-blue-600 text-white transition">
              ${t('Sample 1: Cloud SaaS Invoice', 'Mẫu 1: Hóa đơn Dịch vụ Cloud')}
            </button>
            <button id="btn-sample-receipt" class="px-3 py-1.5 text-[12px] font-medium rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-white/10 transition">
              ${t('Sample 2: Operations Receipt', 'Mẫu 2: Hóa đơn Mua hàng')}
            </button>
            <button id="btn-sample-contractor" class="px-3 py-1.5 text-[12px] font-medium rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-white/10 transition">
              ${t('Sample 3: Contractor Bill', 'Mẫu 3: Dịch vụ Thuê ngoài')}
            </button>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <!-- Col 1: Visual Document Preview with Bounding Box Highlights -->
          <div class="lg:col-span-4 bg-slate-900 rounded-xl p-5 border border-white/10 flex flex-col justify-between font-mono">
            <div>
              <div class="flex items-center justify-between text-[11px] text-slate-400 mb-3 pb-2 border-b border-white/10">
                <span id="doc-format-label">FILE: fpt_cloud_inv_88201.pdf</span>
                <span class="text-emerald-400 font-semibold">OCR: 300 DPI OK</span>
              </div>

              <!-- Mock Document Visual Display -->
              <div class="bg-slate-950 rounded-lg p-4 text-[11px] text-slate-200 shadow-sm space-y-3 border border-white/10 relative">
                <!-- Mock Bounding Box 1 -->
                <div class="border border-dashed border-blue-500 bg-blue-500/10 p-2 rounded relative">
                  <span class="absolute -top-2 right-1 text-[8px] bg-blue-600 text-white px-1.5 py-0.2 rounded uppercase font-sans font-bold">Issuer / Vendor</span>
                  <div class="font-bold text-white text-[12px]" id="doc-vendor-name">FPT Telecom Corporation</div>
                  <div class="text-[10px] text-slate-400" id="doc-vendor-tax">MST / Tax ID: 0101248141</div>
                </div>

                <div class="flex justify-between border-b border-white/10 pb-2 text-[10px]">
                  <div>
                    <span class="text-slate-500 block">INVOICE NO</span>
                    <span class="font-semibold text-slate-200" id="doc-inv-num">FPT-2026-9014</span>
                  </div>
                  <div>
                    <span class="text-slate-500 block">ISSUE DATE</span>
                    <span class="font-semibold text-slate-200" id="doc-date">2026-10-01</span>
                  </div>
                  <div>
                    <span class="text-slate-500 block">DUE DATE</span>
                    <span class="font-semibold text-slate-200" id="doc-due">2026-10-31</span>
                  </div>
                </div>

                <!-- Line Item Highlights -->
                <div class="space-y-1 text-[10px]" id="doc-lines-preview">
                  <div class="flex justify-between border-b border-white/5 pb-1 text-slate-300">
                    <span>Cloud Dedicated Server Hosting (12 mo)</span>
                    <span class="font-semibold text-white">45,000,000 VND</span>
                  </div>
                  <div class="flex justify-between border-b border-white/5 pb-1 text-slate-300">
                    <span>Direct Leased Line Internet 1Gbps</span>
                    <span class="font-semibold text-white">18,500,000 VND</span>
                  </div>
                  <div class="flex justify-between border-b border-white/5 pb-1 text-slate-300">
                    <span>Input VAT (8% Decree 123)</span>
                    <span class="font-semibold text-white">5,080,000 VND</span>
                  </div>
                </div>

                <!-- Total Highlight Box -->
                <div class="border border-dashed border-emerald-500 bg-emerald-500/10 p-2 rounded flex justify-between items-baseline relative">
                  <span class="absolute -top-2 right-1 text-[8px] bg-emerald-600 text-white px-1.5 rounded uppercase font-sans font-bold">Reconciled</span>
                  <span class="text-[10px] font-bold uppercase text-slate-300">TOTAL AMOUNT DUE</span>
                  <span class="text-[13px] font-bold text-emerald-400" id="doc-total">68,580,000 VND</span>
                </div>
              </div>
            </div>

            <div class="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
              <span>Channel: <code>invoices@veraledger.site</code></span>
              <span class="text-emerald-400 font-semibold">100% Parsed ✓</span>
            </div>
          </div>

          <!-- Col 2: Extracted Structured Data Table -->
          <div class="lg:col-span-4 bg-slate-900 rounded-xl p-5 border border-white/10 flex flex-col justify-between font-mono">
            <div>
              <div class="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                <span class="text-[12px] font-bold text-white">${t('Extracted Schema', 'Cấu trúc dữ liệu đã bóc tách')}</span>
                <span class="text-[10.5px] font-mono text-emerald-400 bg-emerald-500/15 border border-emerald-500/30 px-2 py-0.5 rounded font-semibold">Confidence: 99.94%</span>
              </div>

              <div class="space-y-2 text-[11.5px]" id="schema-breakdown">
                <div class="p-2 rounded bg-slate-950 flex justify-between border border-white/5">
                  <span class="text-slate-400">vendor_legal_name:</span>
                  <span class="text-white font-semibold" id="schema-vendor">FPT Telecom JSC</span>
                </div>
                <div class="p-2 rounded bg-slate-950 flex justify-between border border-white/5">
                  <span class="text-slate-400">tax_id_tct:</span>
                  <span class="text-blue-400" id="schema-tax-id">0101248141</span>
                </div>
                <div class="p-2 rounded bg-slate-950 flex justify-between border border-white/5">
                  <span class="text-slate-400">payment_terms:</span>
                  <span class="text-slate-200" id="schema-terms">Net 30 Days</span>
                </div>
                <div class="p-2 rounded bg-slate-950 flex justify-between border border-white/5">
                  <span class="text-slate-400">chart_of_accounts:</span>
                  <span class="text-emerald-400 font-bold" id="schema-gl">TK 6422 / GL 6040 (Hosting)</span>
                </div>
                <div class="p-2 rounded bg-slate-950 flex justify-between border border-white/5">
                  <span class="text-slate-400">department_tag:</span>
                  <span class="text-slate-200" id="schema-dept">Core Infra / Tech Hub Hanoi</span>
                </div>
                <div class="p-2 rounded bg-slate-950 flex justify-between border border-white/5">
                  <span class="text-slate-400">payment_order_unc:</span>
                  <span class="text-blue-400" id="schema-remit">Techcombank 1902...</span>
                </div>
              </div>
            </div>

            <div class="mt-4 pt-3 border-t border-white/10 text-[11px] text-slate-400 flex justify-between">
              <span>${t('Statutory validation: Active', 'Kiểm tra thuế: Đang hoạt động')}</span>
              <span class="text-emerald-400 font-semibold">Audit Ready ✓</span>
            </div>
          </div>

          <!-- Col 3: Direct ERP Destination & Dispatcher Action -->
          <div class="lg:col-span-4 bg-slate-950 text-slate-200 rounded-xl p-5 border border-white/10 flex flex-col justify-between font-mono">
            <div>
              <div class="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                <div class="flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span class="text-[12px] font-bold text-white">${t('ERP Destination', 'Hệ thống kế toán nhận')}</span>
                </div>
                <select id="erp-select" class="bg-slate-900 text-[11px] text-white px-2 py-1 rounded border border-white/15 focus:outline-none">
                  <option value="netsuite">NetSuite AP Bill</option>
                  <option value="sap">SAP S/4HANA</option>
                  <option value="quickbooks">QuickBooks Online</option>
                  <option value="xero">Xero Accounting</option>
                </select>
              </div>

              <!-- Payload preview -->
              <div class="bg-slate-900 p-3 rounded-lg text-[11px] text-slate-300 space-y-1.5 border border-white/5 mb-4">
                <div class="text-white font-semibold flex justify-between">
                  <span id="erp-action-type">API POST: /services/rest/record/v1/vendorBill</span>
                  <span class="text-blue-400">HTTP/2</span>
                </div>
                <div id="erp-sync-details">
                  • Entity ID: <code>VENDOR_FPT_0101248141</code><br>
                  • Posting Period: <code>2026-10</code><br>
                  • GL Debit: <code>TK 6422 - Chi phí quản lý</code><br>
                  • AP Credit: <code>TK 331 - Phải trả người bán</code><br>
                  • Attachment: <code>sha256:7b29a...xml</code>
                </div>
              </div>

              <!-- Live Submission Trigger Status Box -->
              <div id="sync-status-box" class="p-3 rounded-lg bg-slate-900 border border-white/10 text-[11px] text-slate-400">
                ${t('Ready for automated straight-through processing.', 'Sẵn sàng xử lý tự động thẳng vào sổ cái.')}
              </div>
            </div>

            <div class="mt-4 pt-4 border-t border-white/10">
              <button id="btn-sync-erp" class="w-full py-2.5 text-[13px] font-semibold bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white rounded-lg transition flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                <span>${t('Dispatch Bill to NetSuite', 'Đẩy hóa đơn vào NetSuite')}</span>
              </button>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
  `;
}
