import { t } from '../i18n';

export function renderRoiCalculator(): string {
  return `
  <section id="roi-calculator" class="py-20 bg-slate-900 border-b border-white/10">
    <div class="max-w-[1240px] mx-auto px-6">
      
      <div class="max-w-2xl mx-auto text-center mb-12">
        <div class="text-[12px] font-mono text-blue-400 uppercase tracking-wider font-semibold mb-2">
          ${t('Automated Savings Calculator', 'Công cụ tính toán hiệu quả đầu tư (ROI)')}
        </div>
        <h2 class="text-[34px] sm:text-[40px] text-white font-bold tracking-tight">
          ${t('Calculate your team’s monthly ROI.', 'Ước tính thời gian và chi phí tiết kiệm hàng tháng.')}
        </h2>
        <p class="text-[15px] text-slate-300 mt-2">
          ${t(
            'Manual invoice entry takes 3–5 minutes per document with a 2–4% human error rate. See what automated 4-way matching saves your business.',
            'Kiểm tra và nhập liệu thủ công mất trung bình 3–5 phút mỗi hóa đơn với tỷ lệ sai sót 2–4%. Xem VeraLedger giúp tối ưu chi phí như thế nào.'
          )}
        </p>
      </div>

      <div class="max-w-3xl mx-auto bg-slate-950 rounded-2xl p-8 border border-white/10 shadow-2xl">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          <!-- Slider Controls -->
          <div class="space-y-6">
            <div>
              <div class="flex justify-between items-baseline mb-2">
                <label class="text-[13px] font-semibold text-slate-200">
                  ${t('Monthly Invoices & Receipts', 'Số lượng hóa đơn &amp; chứng từ / tháng')}
                </label>
                <span id="calc-volume-display" class="text-[18px] font-mono font-bold text-blue-400">1,200 docs</span>
              </div>
              <input type="range" id="calc-volume-slider" min="100" max="10000" step="100" value="1200" class="w-full accent-blue-500 cursor-pointer">
              <div class="flex justify-between text-[11px] text-slate-400 font-mono mt-1">
                <span>100 docs</span>
                <span>5,000 docs</span>
                <span>10,000+ docs</span>
              </div>
            </div>

            <div>
              <div class="flex justify-between items-baseline mb-2">
                <label class="text-[13px] font-semibold text-slate-200">
                  ${t('Avg Accounting Hourly Rate', 'Chi phí nhân sự / giờ')}
                </label>
                <span id="calc-rate-display" class="text-[15px] font-mono font-semibold text-slate-200">$35 / hr</span>
              </div>
              <input type="range" id="calc-rate-slider" min="20" max="75" step="5" value="35" class="w-full accent-blue-500 cursor-pointer">
              <div class="flex justify-between text-[11px] text-slate-400 font-mono mt-1">
                <span>$20/hr</span>
                <span>$45/hr</span>
                <span>$75/hr</span>
              </div>
            </div>

            <div class="pt-4 border-t border-white/10 flex items-center justify-between text-[12px] text-slate-400">
              <span>${t('Reconciliation Speed: ', 'Tốc độ đối soát: ')}<strong class="text-white">&lt; 0.85s / ${t('doc', 'hóa đơn')}</strong></span>
              <span class="text-emerald-400 font-semibold">✓ ${t('Zero Variance Target', 'Mục tiêu chênh lệch 0%')}</span>
            </div>
          </div>

          <!-- Calculated Savings Card -->
          <div class="bg-slate-900 text-slate-200 rounded-xl p-6 border border-white/10 flex flex-col justify-between space-y-4">
            <div class="border-b border-white/10 pb-3 flex justify-between items-center">
              <span class="text-[11px] font-mono text-slate-400 uppercase tracking-wider">${t('ESTIMATED MONTHLY IMPACT', 'TÁC ĐỘNG TÀI CHÍNH ƯỚC TÍNH')}</span>
              <span class="text-[10px] font-mono bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded font-bold">NET POSITIVE ROI</span>
            </div>

            <div class="grid grid-cols-2 gap-4">
              <div>
                <span class="text-[11px] text-slate-400 uppercase font-mono block">${t('Hours Saved / Mo', 'Thời gian tiết kiệm')}</span>
                <span id="calc-hours-saved" class="text-[28px] font-bold text-white tabular-nums">70 hrs</span>
              </div>
              <div>
                <span class="text-[11px] text-slate-400 uppercase font-mono block">${t('Labor Value Saved', 'Chi phí tiết kiệm')}</span>
                <span id="calc-dollars-saved" class="text-[28px] font-bold text-emerald-400 tabular-nums">$2,450</span>
              </div>
            </div>

            <div class="p-3 bg-slate-950 rounded-lg border border-white/5 space-y-1.5 text-[11px] font-mono text-slate-300">
              <div class="flex justify-between">
                <span>${t('Discrepancies Intercepted:', 'Số lỗi sai sót chặn trước:')}</span>
                <span id="calc-errors-blocked" class="text-blue-400 font-bold">~36 items</span>
              </div>
              <div class="flex justify-between">
                <span>${t('Recommended Tier:', 'Gói phù hợp:')}</span>
                <span id="calc-plan-rec" class="text-emerald-400 font-bold">Growth ($99/mo)</span>
              </div>
            </div>

            <a href="#pricing" class="w-full py-2.5 text-center text-[13px] font-semibold bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white rounded-lg transition shadow-md shadow-blue-600/30">
              ${t('View Detailed Pricing →', 'Xem bảng giá chi tiết →')}
            </a>
          </div>

        </div>
      </div>

    </div>
  </section>
  `;
}
