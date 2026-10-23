import { t } from '../i18n';

export function renderFooter(): string {
  return `
  <footer class="py-16 bg-slate-950 text-slate-400 border-t border-white/10">
    <div class="max-w-[1240px] mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
        
        <!-- Corporate Info -->
        <div class="md:col-span-2 space-y-3">
          <div class="flex items-center gap-2.5 text-white mb-2">
            <div class="w-6 h-6 rounded-md bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
              </svg>
            </div>
            <span class="text-[17px] font-bold text-white tracking-tight">Vera<span class="text-blue-500">Ledger</span></span>
          </div>

          <p class="text-[13px] text-slate-400 max-w-sm leading-relaxed">
            ${t(
              'Enterprise-grade cross-ledger reconciliation and invoice audit platform. Connecting e-invoices, bank wires, and ERP general ledgers.',
              'Nền tảng đối soát chéo sổ cái và rà soát hóa đơn tự động cấp doanh nghiệp. Kết nối đồng bộ hóa đơn điện tử, ủy nhiệm chi ngân hàng và sổ cái ERP.'
            )}
          </p>

          <!-- Contact Details (Hanoi, Vietnam) -->
          <div class="text-[12.5px] text-slate-400 space-y-1.5 pt-2 font-mono">
            <div>
              <strong class="text-slate-200 font-sans">${t('Headquarters (Hanoi, Vietnam):', 'Trụ sở chính (Hà Nội, Việt Nam):')}</strong><br>
              <span class="text-slate-300 font-sans">${t('Level 9, Keangnam Landmark 72, Pham Hung, Nam Tu Liem, Hanoi', 'Tầng 9, Keangnam Landmark 72, Phạm Hùng, Nam Từ Liêm, Hà Nội')}</span>
            </div>
            <div>
              <span class="text-slate-400 font-sans">${t('Tel: ', 'Điện thoại: ')}</span><a href="tel:+84944002809" class="text-slate-200 hover:text-white font-semibold">0944 002 809</a>
            </div>
            <div>
              <span class="text-slate-400 font-sans">Email: </span><a href="mailto:support@veraledger.site" class="text-blue-400 hover:underline">support@veraledger.site</a>
            </div>
          </div>
        </div>

        <!-- Platform Links -->
        <div>
          <h4 class="text-[12px] font-semibold text-white uppercase tracking-wider font-mono mb-4">${t('Platform', 'Nền tảng')}</h4>
          <ul class="space-y-2.5 text-[13px]">
            <li><a href="#automation" class="hover:text-white transition">${t('Invoice Automation', 'Tự động hóa Hóa đơn')}</a></li>
            <li><a href="#pipeline" class="hover:text-white transition">${t('4-Way Match Engine', 'Engine Đối soát 4 chiều')}</a></li>
            <li><a href="#workbench" class="hover:text-white transition">${t('Live Sandbox', 'Môi trường Sandbox')}</a></li>
            <li><a href="#connectors" class="hover:text-white transition">${t('ERP Connectors', 'Cổng kết nối ERP')}</a></li>
            <li><a href="#security" class="hover:text-white transition">${t('Zero Retention SLA', 'Cam kết Zero Retention')}</a></li>
          </ul>
        </div>

        <!-- Compliance & Controls -->
        <div>
          <h4 class="text-[12px] font-semibold text-white uppercase tracking-wider font-mono mb-4">${t('Compliance', 'Tuân thủ pháp lý')}</h4>
          <ul class="space-y-2.5 text-[13px]">
            <li><a href="#security" class="hover:text-white transition">SOC 2 Type II Architecture</a></li>
            <li><a href="#security" class="hover:text-white transition">ISO 27001 Ready</a></li>
            <li><a href="#security" class="hover:text-white transition">${t('Decree 13 / PDPA', 'Nghị định 13 &amp; PDPA')}</a></li>
            <li><a href="#security" class="hover:text-white transition">${t('Security Whitepaper', 'Tài liệu kiến trúc bảo mật')}</a></li>
          </ul>
        </div>

        <!-- Support & Direct -->
        <div>
          <h4 class="text-[12px] font-semibold text-white uppercase tracking-wider font-mono mb-4">${t('Support', 'Hỗ trợ')}</h4>
          <ul class="space-y-2.5 text-[13px]">
            <li><a href="mailto:support@veraledger.site" class="hover:text-white transition font-mono">support@veraledger.site</a></li>
            <li><a href="tel:+84944002809" class="hover:text-white transition font-mono">0944 002 809</a></li>
            <li><a href="#roi-calculator" class="hover:text-white transition">${t('ROI Calculator', 'Tính toán ROI')}</a></li>
            <li><a href="#pilot" class="hover:text-white transition">${t('Request Pilot', 'Yêu cầu chạy thử')}</a></li>
          </ul>
        </div>

      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[12px] text-slate-500 gap-4">
        <div>© 2026 VeraLedger Technologies Vietnam (veraledger.site). ${t('All rights reserved.', 'Bảo lưu mọi quyền.')}</div>
        <div class="flex items-center gap-6">
          <a href="#" class="hover:text-slate-300 transition">${t('Privacy Policy', 'Chính sách bảo mật')}</a>
          <a href="#" class="hover:text-slate-300 transition">${t('Terms of Service', 'Điều khoản dịch vụ')}</a>
          <span class="text-slate-600">|</span>
          <span class="text-slate-400 font-mono">Hanoi, Vietnam 🇻🇳</span>
        </div>
      </div>
    </div>
  </footer>
  `;
}
