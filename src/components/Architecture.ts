import { t } from '../i18n';

export function renderArchitecture(): string {
  return `
  <section id="pipeline" class="py-24 bg-slate-950 border-b border-white/10">
    <div class="max-w-[1240px] mx-auto px-6">
      
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="text-[12px] font-mono text-blue-400 uppercase tracking-wider font-semibold mb-2">
          ${t('Engine Architecture', 'Kiến trúc Lõi Đối soát')}
        </div>
        <h2 class="text-[36px] sm:text-[44px] text-white font-bold leading-tight tracking-tight">
          ${t('How VeraLedger ensures zero-variance reconciliation at enterprise scale.', 'Cách VeraLedger đảm bảo đối soát không sai lệch ở quy mô lớn.')}
        </h2>
        <p class="text-[15px] text-slate-300 mt-3">
          ${t(
            'Generic OCR engines fail on complex tables and non-standard tax formats. VeraLedger deploys a high-throughput parser (< 1s/page, > 98% accuracy) paired with deterministic financial validation rules.',
            'Các công cụ OCR thông thường dễ bỏ sót dòng chi tiết trong bảng biểu phức tạp. VeraLedger kết hợp khả năng bóc tách siêu tốc (< 1s/trang, độ chính xác > 98%) cùng hệ thống luật kế toán xác thực nghiêm ngặt.'
          )}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <!-- Step 1 -->
        <div class="bg-slate-900 rounded-xl p-8 border border-white/10 flex flex-col justify-between hover:border-white/20 transition">
          <div>
            <div class="w-10 h-10 rounded-lg bg-blue-600/20 border border-blue-500/40 text-blue-400 flex items-center justify-center font-mono text-[16px] font-bold mb-6">
              01
            </div>
            <h3 class="text-[18px] font-bold text-white mb-2">
              ${t('Multi-Source Document Intake', 'Nạp dữ liệu đa nguồn')}
            </h3>
            <p class="text-[13.5px] text-slate-300 leading-relaxed">
              ${t(
                'Ingests invoices from email inboxes, direct S3/SFTP, bank statement feeds, and ERP webhooks. Normalizes XML, PDF, Excel, and scan formats without brittle custom templates.',
                'Tự động thu thập hóa đơn từ email, thư mục chia sẻ SFTP/S3, sao kê ngân hàng và webhook ERP. Chuẩn hóa XML, PDF, Excel và scan mà không phụ thuộc template cứng.'
              )}
            </p>
          </div>
          <div class="mt-6 pt-4 border-t border-white/10 text-[11px] font-mono text-slate-400">
            Formats: XML (NĐ 123), PDF, MT940, CSV
          </div>
        </div>

        <!-- Step 2 -->
        <div class="bg-slate-900 rounded-xl p-8 border border-white/10 flex flex-col justify-between hover:border-white/20 transition">
          <div>
            <div class="w-10 h-10 rounded-lg bg-blue-600/20 border border-blue-500/40 text-blue-400 flex items-center justify-center font-mono text-[16px] font-bold mb-6">
              02
            </div>
            <h3 class="text-[18px] font-bold text-white mb-2">
              ${t('Sub-Second High-Precision Extraction', 'Bóc tách dữ liệu siêu tốc & chính xác')}
            </h3>
            <p class="text-[13.5px] text-slate-300 leading-relaxed">
              ${t(
                'Extracts itemized tables, tax codes, vendor registration numbers, and wire instructions in under 1 second per page with > 98.4% accuracy.',
                'Trích xuất chi tiết từng dòng hàng, mã thuế, thông tin người bán và tài khoản thanh toán dưới 1 giây mỗi trang với độ chính xác trên 98,4%.'
              )}
            </p>
          </div>
          <div class="mt-6 pt-4 border-t border-white/10 text-[11px] font-mono text-emerald-400">
            Speed: &lt; 850ms / page • Accuracy: &gt; 98.4%
          </div>
        </div>

        <!-- Step 3 -->
        <div class="bg-slate-900 rounded-xl p-8 border border-white/10 flex flex-col justify-between hover:border-white/20 transition">
          <div>
            <div class="w-10 h-10 rounded-lg bg-blue-600/20 border border-blue-500/40 text-blue-400 flex items-center justify-center font-mono text-[16px] font-bold mb-6">
              03
            </div>
            <h3 class="text-[18px] font-bold text-white mb-2">
              ${t('Deterministic 4-Way Reconciliation', 'Đối soát 4 chiều xác thực tuyệt đối')}
            </h3>
            <p class="text-[13.5px] text-slate-300 leading-relaxed">
              ${t(
                'Cross-references PO allocations, warehouse goods receipts, invoice amounts, and bank payment orders. Flags anomalies for Chief Accountant sign-off before ERP posting.',
                'Đối chiếu chéo đơn đặt hàng, phiếu nhập kho, hóa đơn điện tử và lệnh thanh toán ngân hàng. Báo động ngay cho Kế toán trưởng trước khi ghi sổ cái.'
              )}
            </p>
          </div>
          <div class="mt-6 pt-4 border-t border-white/10 text-[11px] font-mono text-slate-400">
            ERPs: SAP, NetSuite, MISA, FAST, Bravo
          </div>
        </div>

      </div>
    </div>
  </section>
  `;
}
