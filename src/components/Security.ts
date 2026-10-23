import { t } from '../i18n';

export function renderSecurity(): string {
  return `
  <section id="security" class="py-24 bg-slate-950 text-slate-200 border-b border-white/10">
    <div class="max-w-[1240px] mx-auto px-6">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div class="lg:col-span-6 space-y-6">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-slate-200 text-[11px] font-mono">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            ${t('ZERO RETENTION ENTERPRISE ARCHITECTURE', 'KIẾN TRÚC BẢO MẬT ZERO RETENTION CẤP DOANH NGHIỆP')}
          </div>
          <h2 class="text-[34px] sm:text-[42px] text-white font-bold leading-tight tracking-tight">
            ${t('Financial data that never trains external AI models.', 'Dữ liệu tài chính &amp; hóa đơn tuyệt đối không dùng để huấn luyện AI.')}
          </h2>
          <p class="text-[15px] text-slate-300 leading-relaxed">
            ${t(
              'Commercial enterprise agreements guarantee strict Zero Data Retention (ZDR). Your corporate invoices, bank slip transfers, and customer details are encrypted with Customer-Managed Keys (CMEK) and purged upon request.',
              'Hợp đồng thương mại cam kết rõ ràng không lưu trữ dữ liệu để huấn luyện mô hình. Toàn bộ hóa đơn, sao kê ngân hàng và sổ cái được mã hóa bằng khóa riêng của doanh nghiệp (CMEK) và xóa hoàn toàn khi có yêu cầu.'
            )}
          </p>
          
          <div class="grid grid-cols-2 gap-6 pt-4">
            <div class="border-l-2 border-blue-500 pl-4">
              <div class="text-[15px] font-bold text-white">SOC 2 &amp; ISO 27001 Ready</div>
              <div class="text-[12.5px] text-slate-400 mt-1">
                ${t('Verified access controls, audit logs, and high-availability SLA.', 'Kiểm soát truy cập đa lớp, nhật ký kiểm toán và cam kết tính sẵn sàng cao.')}
              </div>
            </div>
            <div class="border-l-2 border-blue-500 pl-4">
              <div class="text-[15px] font-bold text-white">Tamper-Proof Audit Trail</div>
              <div class="text-[12.5px] text-slate-400 mt-1">
                ${t('SHA-256 cryptographic logs ready for external auditor inspection.', 'Mã băm mật mã SHA-256 sẵn sàng cho các đợt kiểm toán độc lập.')}
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-6">
          <div class="bg-slate-900 rounded-xl p-8 border border-white/10 space-y-6 shadow-2xl">
            <div class="flex items-center justify-between border-b border-white/10 pb-4">
              <span class="text-[13px] font-mono text-slate-400">${t('Security & Compliance Controls', 'Kiểm soát Bảo mật &amp; Tuân thủ')}</span>
              <span class="text-[11px] font-mono text-emerald-400 bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-0.5 rounded font-semibold">All Controls Active</span>
            </div>
            <div class="space-y-4 font-mono text-[12px]">
              <div class="flex items-center justify-between text-slate-200 pb-2 border-b border-white/5">
                <span>Data In-Transit &amp; At Rest</span>
                <span class="text-blue-400 font-semibold">TLS 1.3 / AES-256-GCM</span>
              </div>
              <div class="flex items-center justify-between text-slate-200 pb-2 border-b border-white/5">
                <span>Model Data Retention (ZDR)</span>
                <span class="text-emerald-400 font-semibold">0 Days (Contractual SLA)</span>
              </div>
              <div class="flex items-center justify-between text-slate-200 pb-2 border-b border-white/5">
                <span>Role-Based Access Control</span>
                <span class="text-slate-300">SAML 2.0 / Okta / Azure AD</span>
              </div>
              <div class="flex items-center justify-between text-slate-200 pb-2 border-b border-white/5">
                <span>Regional Data Privacy</span>
                <span class="text-emerald-400">Decree 13/2023 / PDPA</span>
              </div>
              <div class="flex items-center justify-between text-slate-200">
                <span>High-Availability Target</span>
                <span class="text-slate-200">99.98% SLA / Multi-Zone</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
  `;
}
