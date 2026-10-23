import { t } from '../i18n';

export function renderPilotForm(): string {
  return `
  <section id="pilot" class="py-24 bg-slate-950 border-t border-white/10">
    <div class="max-w-xl mx-auto px-6">
      <div class="text-center mb-10">
        <div class="text-[12px] font-mono text-blue-400 uppercase tracking-wider font-semibold mb-2">
          ${t('Fast-Track Onboarding', 'Quy trình triển khai nhanh')}
        </div>
        <h2 class="text-[32px] sm:text-[36px] text-white font-bold tracking-tight">
          ${t('Schedule a Tailored Demo', 'Đăng ký Demo &amp; Chạy thử Pilot')}
        </h2>
        <p class="text-[14px] text-slate-300 mt-2">
          ${t(
            'We review your invoice ingestion workflow and run 100 sample documents through the 4-way matching engine within 2 business days.',
            'Đội ngũ kỹ sư sẽ đánh giá luồng dữ liệu chứng từ của bạn và thực hiện chạy đối soát mẫu 100 hóa đơn thực tế trong vòng 2 ngày làm việc.'
          )}
        </p>
      </div>

      <form id="pilot-form" class="bg-slate-900 rounded-xl p-8 border border-white/10 space-y-5 shadow-2xl">
        <div>
          <label class="block text-[13px] font-semibold text-slate-200 mb-1.5">
            ${t('Work Email Address', 'Email công việc')}
          </label>
          <input type="email" required placeholder="cfo@yourcompany.com" class="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-white/10 text-[14px] text-white focus:outline-none focus:border-blue-500 transition">
          <p class="text-[11px] text-slate-500 mt-1">${t('Must match company domain for security verification.', 'Vui lòng sử dụng email theo tên miền công ty.')}</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block text-[13px] font-semibold text-slate-200 mb-1.5">
              ${t('Company Name / Website', 'Tên công ty / Website')}
            </label>
            <input type="text" required placeholder="https://company.com" class="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-white/10 text-[14px] text-white focus:outline-none focus:border-blue-500 transition">
          </div>
          <div>
            <label class="block text-[13px] font-semibold text-slate-200 mb-1.5">
              ${t('Monthly Invoices Volume', 'Sản lượng hóa đơn / tháng')}
            </label>
            <select class="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-white/10 text-[14px] text-white focus:outline-none focus:border-blue-500 transition">
              <option>&lt; 500 documents / mo</option>
              <option>500 - 3,000 documents / mo</option>
              <option>3,000 - 15,000 documents / mo</option>
              <option>15,000+ documents / mo</option>
            </select>
          </div>
        </div>

        <div>
          <label class="block text-[13px] font-semibold text-slate-200 mb-1.5">
            ${t('Primary Accounting / ERP Stack', 'Hệ thống Kế toán / ERP hiện tại')}
          </label>
          <select class="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-white/10 text-[14px] text-white focus:outline-none focus:border-blue-500 transition">
            <option>SAP S/4HANA / SAP ERP</option>
            <option>Oracle NetSuite</option>
            <option>MISA AMIS / SME</option>
            <option>FAST Accounting / Financial</option>
            <option>BRAVO ERP</option>
            <option>QuickBooks Online / Xero</option>
            <option>Other / In-House System</option>
          </select>
        </div>

        <div class="p-3 bg-slate-950 rounded-lg border border-white/5 text-[12px] text-slate-400">
          <span>${t('Direct support fallback:', 'Liên hệ kỹ thuật trực tiếp:')} </span>
          <span class="text-slate-200 font-mono">support@veraledger.site</span> · 
          <a href="tel:+84944002809" class="text-blue-400 font-semibold hover:underline">0944 002 809</a>
        </div>

        <button type="submit" class="w-full py-3.5 text-[14px] font-semibold bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white rounded-lg transition shadow-lg shadow-blue-600/30">
          ${t('Submit Pilot Application', 'Gửi yêu cầu thử nghiệm')}
        </button>
      </form>
    </div>
  </section>
  `;
}
