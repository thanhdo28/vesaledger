import { t } from '../i18n';

export function renderIntegrations(): string {
  return `
  <section id="connectors" class="py-24 bg-slate-900 border-b border-white/10">
    <div class="max-w-[1240px] mx-auto px-6">
      
      <div class="text-center max-w-2xl mx-auto mb-16">
        <div class="text-[12px] font-mono text-blue-400 uppercase tracking-wider font-semibold mb-2">
          ${t('Enterprise Ecosystem Compatibility', 'Khả năng tương thích hệ sinh thái kế toán & ERP')}
        </div>
        <h2 class="text-[36px] sm:text-[42px] text-white font-bold tracking-tight">
          ${t('Connect your financial stack in under 15 minutes.', 'Kết nối toàn diện hệ thống tài chính chỉ trong 15 phút.')}
        </h2>
        <p class="text-[15px] text-slate-300 mt-2">
          ${t(
            'Pre-built certified connectors with OAuth2, mutual TLS, and REST/RFC adapters. Supporting international & Vietnam financial systems.',
            'Cổng kết nối chuẩn hóa qua OAuth2, mTLS bảo mật và API REST/RFC. Tương thích liền mạch với các hệ thống kế toán trong nước và quốc tế.'
          )}
        </p>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        
        <div class="p-5 rounded-xl bg-slate-950 border border-white/10 text-center hover:border-blue-500/50 transition">
          <div class="text-[18px] font-bold text-white mb-1">MISA AMIS</div>
          <div class="text-[11px] text-slate-400 font-mono">Bi-Directional</div>
        </div>

        <div class="p-5 rounded-xl bg-slate-950 border border-white/10 text-center hover:border-blue-500/50 transition">
          <div class="text-[18px] font-bold text-white mb-1">FAST</div>
          <div class="text-[11px] text-slate-400 font-mono">Accounting &amp; ERP</div>
        </div>

        <div class="p-5 rounded-xl bg-slate-950 border border-white/10 text-center hover:border-blue-500/50 transition">
          <div class="text-[18px] font-bold text-white mb-1">BRAVO ERP</div>
          <div class="text-[11px] text-slate-400 font-mono">Direct Connector</div>
        </div>

        <div class="p-5 rounded-xl bg-slate-950 border border-white/10 text-center hover:border-blue-500/50 transition">
          <div class="text-[18px] font-bold text-white mb-1">NetSuite</div>
          <div class="text-[11px] text-slate-400 font-mono">SuiteTalk REST</div>
        </div>

        <div class="p-5 rounded-xl bg-slate-950 border border-white/10 text-center hover:border-blue-500/50 transition">
          <div class="text-[18px] font-bold text-white mb-1">SAP S/4HANA</div>
          <div class="text-[11px] text-slate-400 font-mono">OData / RFC</div>
        </div>

        <div class="p-5 rounded-xl bg-slate-950 border border-white/10 text-center hover:border-blue-500/50 transition">
          <div class="text-[18px] font-bold text-white mb-1">Banking Feeds</div>
          <div class="text-[11px] text-slate-400 font-mono">Techcombank / VCB</div>
        </div>

      </div>
    </div>
  </section>
  `;
}
