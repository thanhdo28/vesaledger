import { t, getLang } from '../i18n';

export function renderNavbar(): string {
  const lang = getLang();
  return `
  <!-- Top Global Utility Bar -->
  <div class="bg-slate-900/90 text-slate-300 text-[11px] font-mono border-b border-white/10 py-1.5 px-6 hidden sm:block">
    <div class="max-w-[1240px] mx-auto flex items-center justify-between">
      <div class="flex items-center gap-4">
        <span class="flex items-center gap-1.5">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span class="text-slate-200">${t('Private Beta Active · Q4 Pilot Cohort', 'Bản thử nghiệm kín · Đợt thử nghiệm Q4')}</span>
        </span>
        <span class="text-white/20">|</span>
        <span class="text-slate-300">${t('AWS Tier-III Architecture', 'Kiến trúc Cloud Chuẩn Tier-III')}</span>
        <span class="text-white/20">|</span>
        <span class="text-slate-300">${t('SOC 2 & ISO 27001 Aligned', 'Kiểm soát theo chuẩn SOC 2 &amp; ISO 27001')}</span>
      </div>
      <div class="flex items-center gap-4">
        <span>${t('Hanoi Office: ', 'Văn phòng Hà Nội: ')}<a href="tel:+84944002809" class="text-slate-100 hover:text-white font-semibold">0944 002 809</a></span>
        <span class="text-white/20">|</span>
        <span>Email: <a href="mailto:support@veraledger.site" class="text-slate-100 hover:text-white font-semibold">support@veraledger.site</a></span>
      </div>
    </div>
  </div>

  <!-- Primary Header -->
  <header class="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10">
    <div class="max-w-[1240px] mx-auto px-6 h-16 flex items-center justify-between">
      
      <!-- Logo / Wordmark -->
      <a href="#" class="flex items-center gap-3 group">
        <div class="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 group-hover:scale-105 transition">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 17 12 22 22 17" />
            <polyline points="2 12 12 17 22 12" />
          </svg>
        </div>
        <div class="flex items-baseline gap-1.5">
          <span class="text-[17px] font-bold text-white tracking-tight">Vera<span class="text-blue-500">Ledger</span></span>
          <span class="text-[10px] font-mono text-slate-500 tracking-wider uppercase bg-white/5 px-1.5 py-0.5 rounded border border-white/5">v2.5</span>
        </div>
      </a>

      <!-- Navigation Links -->
      <nav class="hidden lg:flex items-center gap-6 text-[13px] font-medium text-slate-300">
        <a href="#automation" class="hover:text-white transition">${t('Reconciliation', 'Đối soát 4 chiều')}</a>
        <a href="#workbench" class="hover:text-white transition">${t('Live Sandbox', 'Môi trường mẫu')}</a>
        <a href="#connectors" class="hover:text-white transition">${t('ERP Connectors', 'Tích hợp ERP')}</a>
        <a href="#roi-calculator" class="hover:text-white transition">${t('ROI Calculator', 'Tính toán ROI')}</a>
        <a href="#pricing" class="hover:text-white transition">${t('Pricing', 'Bảng giá')}</a>
        <a href="#security" class="hover:text-white transition">${t('Security & SLA', 'Bảo mật &amp; SLA')}</a>
      </nav>

      <!-- Right Action Cluster & Language Switcher -->
      <div class="flex items-center gap-3">
        <!-- Language Switch -->
        <div class="flex items-center gap-1 bg-white/5 p-1 rounded-lg border border-white/10 text-[11px] font-mono">
          <button id="lang-btn-en" class="px-2 py-0.5 rounded transition ${lang === 'en' ? 'bg-blue-600 text-white font-semibold' : 'text-slate-400 hover:text-white'}">EN</button>
          <button id="lang-btn-vi" class="px-2 py-0.5 rounded transition ${lang === 'vi' ? 'bg-blue-600 text-white font-semibold' : 'text-slate-400 hover:text-white'}">VI</button>
        </div>

        <a href="#pricing" class="hidden sm:inline-block px-4 py-2 text-[13px] font-medium text-slate-300 hover:text-white transition">
          ${t('Sign in', 'Đăng nhập')}
        </a>
        <a href="#pilot" class="px-4 py-2 text-[13px] font-medium bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white rounded-lg transition shadow-sm shadow-blue-600/30">
          ${t('Apply for Pilot', 'Đăng ký Thử nghiệm')}
        </a>
      </div>
    </div>
  </header>
  `;
}
