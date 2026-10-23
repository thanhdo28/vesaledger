import { t } from '../i18n';

export function renderPricing(): string {
  return `
  <section id="pricing" class="py-24 bg-slate-900 border-b border-white/10">
    <div class="max-w-[1240px] mx-auto px-6">
      
      <div class="text-center max-w-2xl mx-auto mb-16">
        <div class="text-[12px] font-mono text-blue-400 uppercase tracking-wider font-semibold mb-2">
          ${t('Predictable Transparent Tiers', 'Bảng giá rõ ràng, minh bạch theo sản lượng')}
        </div>
        <h2 class="text-[36px] sm:text-[42px] text-white font-bold tracking-tight">
          ${t('Priced by document volume, not per seat.', 'Tính phí theo khối lượng chứng từ, không phụ thu người dùng.')}
        </h2>
        <p class="text-[15px] text-slate-300 mt-3">
          ${t(
            'Finance teams should not be penalized for adding internal auditors, controllers, or external tax accountants.',
            'Doanh nghiệp không bị tính thêm chi phí khi phân quyền cho Kế toán viên, Kế toán trưởng hay Kiểm toán viên.'
          )}
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
        
        <!-- Tier 1: Starter ($20/mo) -->
        <div class="p-8 rounded-xl bg-slate-950 border border-white/10 flex flex-col justify-between hover:border-white/20 transition">
          <div>
            <div class="text-[18px] font-bold text-white mb-1">${t('Starter', 'Cơ bản')}</div>
            <div class="text-[13px] text-slate-400 mb-6">${t('For small businesses and growing trading firms.', 'Dành cho doanh nghiệp vừa và nhỏ, công ty thương mại.')}</div>
            <div class="flex items-baseline gap-1 mb-6">
              <span class="text-[44px] font-bold text-white tabular-nums">$20</span>
              <span class="text-[13px] text-slate-400">/ ${t('month', 'tháng')} (~490.000 đ)</span>
            </div>
            <ul class="space-y-3 text-[13.5px] text-slate-300">
              <li class="flex items-center gap-2.5">
                <span class="text-blue-400">✓</span>
                <span>${t('Up to 500 documents / month ($0.04/doc after)', 'Tối đa 500 chứng từ / tháng (vượt mức $0.04/chứng từ)')}</span>
              </li>
              <li class="flex items-center gap-2.5">
                <span class="text-blue-400">✓</span>
                <span>${t('2-Way match: Invoices ↔ Bank wires (UNC)', 'Đối soát 2 chiều: Hóa đơn ↔ Ủy nhiệm chi (UNC)')}</span>
              </li>
              <li class="flex items-center gap-2.5">
                <span class="text-blue-400">✓</span>
                <span>${t('QuickBooks Online & Xero connectors', 'Đồng bộ QuickBooks &amp; Xero')}</span>
              </li>
              <li class="flex items-center gap-2.5">
                <span class="text-blue-400">✓</span>
                <span>${t('Automated Chart of Accounts coding', 'Tự động định khoản tài khoản kế toán')}</span>
              </li>
              <li class="flex items-center gap-2.5">
                <span class="text-blue-400">✓</span>
                <span>${t('1 Auditor seat • Email support', '1 người dùng chính • Hỗ trợ qua email')}</span>
              </li>
            </ul>
          </div>
          <a href="#pilot" class="mt-8 w-full py-3 text-center text-[14px] font-semibold rounded-lg bg-slate-900 hover:bg-slate-850 text-white border border-white/15 transition">
            ${t('Start 14-Day Free Trial', 'Dùng thử miễn phí 14 ngày')}
          </a>
        </div>

        <!-- Tier 2: Growth ($99/mo - Featured) -->
        <div class="p-8 rounded-xl bg-slate-950 border-2 border-blue-500/80 text-white flex flex-col justify-between relative shadow-2xl shadow-blue-500/10">
          <span class="absolute -top-3 left-8 text-[11px] font-mono uppercase bg-blue-600 text-white px-3 py-0.5 rounded font-bold tracking-wider">
            ${t('Most Popular for Scaling Teams', 'Lựa chọn phổ biến nhất')}
          </span>
          <div>
            <div class="text-[18px] font-bold text-white mb-1">${t('Growth', 'Tăng trưởng')}</div>
            <div class="text-[13px] text-slate-400 mb-6">${t('For manufacturing, distribution & multi-vendor companies.', 'Dành cho doanh nghiệp sản xuất, phân phối và nhiều nhà cung cấp.')}</div>
            <div class="flex items-baseline gap-1 mb-6">
              <span class="text-[44px] font-bold text-white tabular-nums">$99</span>
              <span class="text-[13px] text-slate-400">/ ${t('month', 'tháng')} (~2.490.000 đ)</span>
            </div>
            <ul class="space-y-3 text-[13.5px] text-slate-200">
              <li class="flex items-center gap-2.5">
                <span class="text-emerald-400">✓</span>
                <span>${t('Up to 5,000 documents / month included', 'Bao gồm 5.000 chứng từ / tháng')}</span>
              </li>
              <li class="flex items-center gap-2.5">
                <span class="text-emerald-400">✓</span>
                <span>${t('4-Way Match: PO ↔ Warehouse ↔ Invoice ↔ Bank', 'Đối soát 4 chiều: Đơn PO ↔ Nhập kho ↔ Hóa đơn ↔ Ngân hàng')}</span>
              </li>
              <li class="flex items-center gap-2.5">
                <span class="text-emerald-400">✓</span>
                <span>${t('All ERPs: NetSuite, MISA, FAST, Bravo, SAP, Xero', 'Hỗ trợ NetSuite, MISA, FAST, Bravo, SAP, Xero')}</span>
              </li>
              <li class="flex items-center gap-2.5">
                <span class="text-emerald-400">✓</span>
                <span>${t('Forensic Anomaly Guard & Duplicate Freeze', 'Chặn trùng lặp &amp; phát hiện gian lận thay đổi tài khoản')}</span>
              </li>
              <li class="flex items-center gap-2.5">
                <span class="text-emerald-400">✓</span>
                <span>${t('5 Team seats • Priority 24h SLA support', '5 tài khoản nhóm • Hỗ trợ ưu tiên trong 24 giờ')}</span>
              </li>
            </ul>
          </div>
          <a href="#pilot" class="mt-8 w-full py-3 text-center text-[14px] font-semibold rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition shadow-lg shadow-blue-600/30">
            ${t('Start Growth Trial', 'Đăng ký gói Tăng trưởng')}
          </a>
        </div>

        <!-- Tier 3: Enterprise ($499+ / Custom) -->
        <div class="p-8 rounded-xl bg-slate-950 border border-white/10 flex flex-col justify-between hover:border-white/20 transition">
          <div>
            <div class="text-[18px] font-bold text-white mb-1">${t('Enterprise', 'Doanh nghiệp lớn')}</div>
            <div class="text-[13px] text-slate-400 mb-6">${t('For conglomerates, holding groups & high-compliance orgs.', 'Dành cho tập đoàn, chuỗi bán lẻ &amp; yêu cầu kiểm toán nghiêm ngặt.')}</div>
            <div class="flex items-baseline gap-1 mb-6">
              <span class="text-[44px] font-bold text-white tabular-nums">$499</span>
              <span class="text-[13px] text-slate-400">/ ${t('month (starts at 50k docs)', 'tháng (từ 50.000 chứng từ)')}</span>
            </div>
            <ul class="space-y-3 text-[13.5px] text-slate-300">
              <li class="flex items-center gap-2.5">
                <span class="text-blue-400">✓</span>
                <span>${t('50,000+ documents / month with custom volume pricing', '50.000+ chứng từ / tháng với đơn giá ưu đãi riêng')}</span>
              </li>
              <li class="flex items-center gap-2.5">
                <span class="text-blue-400">✓</span>
                <span>${t('Custom SAP S/4HANA & Oracle ERP on-prem adapters', 'Bộ kết nối chuyên biệt cho SAP S/4HANA &amp; Oracle')}</span>
              </li>
              <li class="flex items-center gap-2.5">
                <span class="text-blue-400">✓</span>
                <span>${t('Customer-Managed Encryption Keys (CMEK) & Private VPC', 'Hạ tầng riêng biệt VPC &amp; tự quản lý khóa mã hóa (CMEK)')}</span>
              </li>
              <li class="flex items-center gap-2.5">
                <span class="text-blue-400">✓</span>
                <span>${t('Dedicated Solutions Engineer + 99.98% SLA', 'Kỹ sư giải pháp chuyên trách + Cam kết SLA 99,98%')}</span>
              </li>
              <li class="flex items-center gap-2.5">
                <span class="text-blue-400">✓</span>
                <span>${t('Unlimited team seats • SAML 2.0 / Okta SSO', 'Không giới hạn tài khoản • Đăng nhập SSO SAML 2.0')}</span>
              </li>
            </ul>
          </div>
          <a href="#pilot" class="mt-8 w-full py-3 text-center text-[14px] font-semibold rounded-lg bg-slate-900 hover:bg-slate-850 text-white border border-white/15 transition">
            ${t('Talk to Solutions Engineering', 'Liên hệ tư vấn giải pháp')}
          </a>
        </div>

      </div>

      <!-- Trust & Risk Reversal Banner -->
      <div class="bg-slate-950 rounded-xl p-6 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left mb-16">
        <div class="flex items-center gap-3.5">
          <div class="w-9 h-9 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-bold text-base">✓</div>
          <div>
            <h4 class="text-[15px] font-semibold text-white">${t('Deterministic Rule Verification', 'Cam kết kiểm tra chéo theo quy tắc chính xác')}</h4>
            <p class="text-[12.5px] text-slate-400">${t('All line items, tax rates, and wire settlements are mathematically balanced against POs with cryptographic audit receipts.', 'Toàn bộ số tiền, thuế suất và ủy nhiệm chi ngân hàng được cân đối toán học với đơn đặt hàng kèm chữ ký mật mã kiểm toán.')}</p>
          </div>
        </div>
        <div class="text-[12px] font-mono text-slate-400">
          ${t('No credit card required to start 14-day trial', 'Không yêu cầu thẻ tín dụng khi bắt đầu dùng thử')}
        </div>
      </div>
    </div>
  </section>

  <!-- High-End FinTech CTA Section (Replaces old coral banner) -->
  <section class="py-16 bg-slate-950 border-b border-white/10">
    <div class="max-w-[1240px] mx-auto px-6">
      <div class="bg-gradient-to-r from-blue-900/60 via-slate-900 to-slate-950 rounded-2xl p-10 lg:p-14 border border-blue-500/30 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-8">
        <div class="space-y-3 max-w-2xl text-center sm:text-left">
          <h2 class="text-[28px] sm:text-[34px] font-bold text-white leading-tight">
            ${t('Close your monthly books in hours, not weeks.', 'Hoàn tất quyết toán sổ sách hàng tháng trong vài giờ, không phải vài tuần.')}
          </h2>
          <p class="text-[15px] text-slate-300">
            ${t(
              'Audit your first 500 invoices completely risk-free. Connect QuickBooks, Xero, MISA, or NetSuite in under 5 minutes.',
              'Rà soát miễn phí 500 hóa đơn đầu tiên. Kết nối nhanh chóng với QuickBooks, Xero, MISA hoặc NetSuite chỉ trong 5 phút.'
            )}
          </p>
        </div>
        <div>
          <a href="#pilot" class="px-8 py-3.5 text-[14px] font-semibold bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white rounded-lg transition whitespace-nowrap shadow-lg shadow-blue-600/30 inline-block">
            ${t('Request 14-Day Pilot', 'Yêu cầu chạy thử 14 ngày')}
          </a>
        </div>
      </div>
    </div>
  </section>
  `;
}
