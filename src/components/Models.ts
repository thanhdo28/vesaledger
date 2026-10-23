import { t } from '../i18n';

export function renderModels(): string {
  return `
  <section class="py-24 bg-slate-900 border-b border-white/10">
    <div class="max-w-[1240px] mx-auto px-6">
      
      <div class="max-w-2xl mb-12">
        <div class="text-[12px] font-mono text-blue-400 uppercase tracking-wider font-semibold mb-2">
          ${t('Intelligent Document Processing Pipeline', 'Động cơ Phân tích Chứng từ Chuyên sâu')}
        </div>
        <h2 class="text-[34px] sm:text-[40px] text-white font-bold leading-tight tracking-tight">
          ${t('Specialized visual parsing tuned for financial documents.', 'Mô hình thị giác được tối ưu riêng biệt cho hóa đơn &amp; chứng từ kế toán.')}
        </h2>
        <p class="text-[15px] text-slate-300 mt-3">
          ${t(
            'Heavy generalist chat models add multi-second latency and unneeded costs. VeraLedger runs purpose-built compact visual engines tuned strictly for table geometry and mathematical audit.',
            'Các mô hình AI tổng quát cồng kềnh gây độ trễ lớn và chi phí cao. VeraLedger triển khai các mô hình thị giác chuyên biệt, tập trung vào cấu trúc bảng biểu và đối soát số liệu kế toán.'
          )}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <!-- Fast Triage Card -->
        <div class="p-6 rounded-xl bg-slate-950 border border-white/10 hover:border-white/20 transition">
          <div class="flex items-center justify-between mb-4">
            <span class="text-[17px] font-bold text-white">${t('High-Speed Intake', 'Bộ lọc & Phân loại Siêu tốc')}</span>
            <span class="text-[11px] font-mono text-emerald-400 bg-emerald-500/15 border border-emerald-500/30 px-2 py-0.5 rounded font-semibold">&lt; 400MS</span>
          </div>
          <div class="text-[13px] text-slate-400 mb-4">
            ${t(
              'High-speed document triage, mobile receipt digitization, and field normalization in fractions of a second.',
              'Tự động phân loại tài liệu, nhận diện định dạng (XML, PDF, ảnh chụp) và chuẩn hóa thông tin cơ bản trong chớp mắt.'
            )}
          </div>
          <div class="space-y-2 text-[11.5px] font-mono text-slate-300 border-t border-white/10 pt-4">
            <div>• ${t('Latency: < 400ms / page', 'Độ trễ: < 400ms / trang')}</div>
            <div>• ${t('Accuracy: > 98.4% field precision', 'Độ chính xác: > 98,4%')}</div>
            <div>• ${t('Throughput: 2,400 pages / min', 'Năng suất: 2.400 trang / phút')}</div>
          </div>
        </div>

        <!-- Doc Parser Card (Featured) -->
        <div class="p-6 rounded-xl bg-slate-950 border-2 border-blue-500/80 relative shadow-xl shadow-blue-500/10">
          <span class="absolute -top-3 right-6 text-[10px] font-mono uppercase bg-blue-600 text-white px-2.5 py-0.5 rounded font-bold tracking-wider">
            ${t('Core Workhorse', 'Trọng tâm Xử lý')}
          </span>
          <div class="flex items-center justify-between mb-4">
            <span class="text-[17px] font-bold text-white">${t('Complex Table Parser', 'Bóc tách Bảng biểu Phức tạp')}</span>
            <span class="text-[11px] font-mono text-blue-400 bg-blue-500/15 border border-blue-500/30 px-2 py-0.5 rounded font-semibold">CORE ENGINE</span>
          </div>
          <div class="text-[13px] text-slate-300 mb-4">
            ${t(
              'Extracts dense multi-page tables, nested line items, tax breakdowns, and validates mathematical sums with zero hallucinations.',
              'Bóc tách bảng kê nhiều trang, hàng hóa lồng ghép, thuế suất GTGT chi tiết và kiểm tra phép tính cộng dồn tuyệt đối chính xác.'
            )}
          </div>
          <div class="space-y-2 text-[11.5px] font-mono text-slate-200 border-t border-white/10 pt-4">
            <div>• ${t('Latency: < 850ms / page', 'Độ trễ: < 850ms / trang')}</div>
            <div>• ${t('Accuracy: > 98.8% verified', 'Độ chính xác: > 98,8%')}</div>
            <div>• ${t('Zero hallucinated items', 'Không bịa đặt dữ liệu (Zero Hallucination)')}</div>
          </div>
        </div>

        <!-- Forensic Guard Card -->
        <div class="p-6 rounded-xl bg-slate-950 border border-white/10 hover:border-white/20 transition">
          <div class="flex items-center justify-between mb-4">
            <span class="text-[17px] font-bold text-white">${t('Forensic Anomaly Guard', 'Lá chắn Gian lận & Rủi ro')}</span>
            <span class="text-[11px] font-mono text-amber-400 bg-amber-500/15 border border-amber-500/30 px-2 py-0.5 rounded font-semibold">SECURITY SHIELD</span>
          </div>
          <div class="text-[13px] text-slate-400 mb-4">
            ${t(
              'Intercepts altered bank wire account numbers, suspended vendors, duplicate invoice submissions, and contract rate variances.',
              'Tự động chặn số tài khoản ngân hàng bị sửa đổi, hóa đơn của doanh nghiệp ngừng hoạt động, nộp trùng hóa đơn và chênh lệch báo giá.'
            )}
          </div>
          <div class="space-y-2 text-[11.5px] font-mono text-slate-300 border-t border-white/10 pt-4">
            <div>• ${t('Active cross-check with Tax DB', 'Đối chiếu CSDL Thuế thời gian thực')}</div>
            <div>• ${t('Tamper-proof cryptographic trace', 'Vết kiểm toán mật mã chống sửa đổi')}</div>
            <div>• ${t('Automated risk alerts', 'Cảnh báo tức thì cho Kế toán trưởng')}</div>
          </div>
        </div>

      </div>
    </div>
  </section>
  `;
}
