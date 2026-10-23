import { t } from '../i18n';

export function renderTeam(): string {
  return `
  <section id="team" class="py-20 bg-slate-950 border-b border-white/10">
    <div class="max-w-[1240px] mx-auto px-6">
      
      <div class="max-w-2xl mb-12">
        <div class="text-[12px] font-mono text-blue-400 uppercase tracking-wider font-semibold mb-2">
          ${t('Founding Team & Research Origins', 'Đội ngũ Sáng lập & Nền tảng Kỹ thuật')}
        </div>
        <h2 class="text-[32px] sm:text-[38px] text-white font-bold tracking-tight">
          ${t('Engineered by enterprise fintech & computer vision specialists.', 'Xây dựng bởi đội ngũ chuyên gia công nghệ tài chính và thị giác máy tính.')}
        </h2>
        <p class="text-[14.5px] text-slate-300 mt-2">
          ${t(
            'Headquartered in Ba Dinh, Hanoi. We combine deep domain experience in enterprise ERP reconciliation with specialized document AI model engineering.',
            'Trụ sở tại Ba Đình, Hà Nội. Chúng tôi kết hợp kinh nghiệm thực tiễn về kế toán doanh nghiệp cùng năng lực nghiên cứu AI thị giác chuyên sâu.'
          )}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        
        <!-- Founder 1 -->
        <div class="p-6 rounded-xl bg-slate-900 border border-white/10 flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-4 mb-4">
              <div class="w-12 h-12 rounded-full bg-blue-600/20 border border-blue-500/40 flex items-center justify-center font-bold text-blue-400 text-lg">
                HL
              </div>
              <div>
                <h3 class="text-[18px] font-bold text-white">Lê Hoàng Long</h3>
                <div class="text-[12px] font-mono text-blue-400">${t('Co-founder & Product Lead', 'Đồng sáng lập & Giám đốc Sản phẩm')}</div>
              </div>
            </div>
            <p class="text-[13.5px] text-slate-300 leading-relaxed mb-4">
              ${t(
                'Former Fintech Product Lead at regional e-commerce platforms. 8+ years scaling ERP financial data pipelines, payment reconciliation, and B2B accounting workflows across Southeast Asia. B.A. in Corporate Finance from National Economics University (NEU).',
                'Nguyên Trưởng nhóm Sản phẩm Fintech tại các nền tảng thương mại điện tử khu vực. 8+ năm kinh nghiệm xây dựng luồng đối soát thanh toán và kết nối ERP doanh nghiệp tại Đông Nam Á. Cử nhân Tài chính Doanh nghiệp (ĐH Kinh tế Quốc dân).'
              )}
            </p>
          </div>
          <div class="pt-3 border-t border-white/5 flex items-center gap-4 text-[12px] font-mono text-slate-400">
            <span>Hanoi, Vietnam</span>
            <span>·</span>
            <span class="text-slate-300">Enterprise Fintech</span>
          </div>
        </div>

        <!-- Founder 2 -->
        <div class="p-6 rounded-xl bg-slate-900 border border-white/10 flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-4 mb-4">
              <div class="w-12 h-12 rounded-full bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center font-bold text-emerald-400 text-lg">
                QH
              </div>
              <div>
                <h3 class="text-[18px] font-bold text-white">Đặng Quốc Huy</h3>
                <div class="text-[12px] font-mono text-emerald-400">${t('Co-founder & AI Architecture Lead', 'Đồng sáng lập & Phụ trách Kiến trúc AI')}</div>
              </div>
            </div>
            <p class="text-[13.5px] text-slate-300 leading-relaxed mb-4">
              ${t(
                'Ph.D. researcher in Document Intelligence & Spatial Vision-Language Models. Former Senior AI Research Engineer at leading enterprise labs in Vietnam. Author of publications on table structure extraction. B.S. in Computer Science from Hanoi University of Science & Technology (HUST).',
                'Nghiên cứu sinh Tiến sĩ chuyên sâu về Trí tuệ Chứng từ & Mô hình Thị giác Ngôn ngữ. Nguyên Kỹ sư Nghiên cứu AI Cao cấp tại các phòng thí nghiệm công nghệ lớn tại Việt Nam. Cử nhân Khoa học Máy tính (Đại học Bách Khoa Hà Nội).'
              )}
            </p>
          </div>
          <div class="pt-3 border-t border-white/5 flex items-center gap-4 text-[12px] font-mono text-slate-400">
            <span>Hanoi, Vietnam</span>
            <span>·</span>
            <span class="text-slate-300">Document AI & VLM</span>
          </div>
        </div>

      </div>

      <!-- Developer & Research Artifact Banner -->
      <div class="p-6 rounded-xl bg-slate-900/60 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div class="space-y-1">
          <div class="flex items-center gap-2">
            <span class="text-blue-400 font-mono text-[12px]">📦 OPEN RESEARCH EVAL KIT</span>
            <span class="text-[10px] bg-white/10 text-slate-300 px-2 py-0.5 rounded font-mono">MIT LICENSE</span>
          </div>
          <h4 class="text-[15px] font-semibold text-white">${t('VeraLedger 4-Way Matching Evaluation Benchmark', 'Bộ dữ liệu Thử nghiệm Đối soát 4 Chiều Mở')}</h4>
          <p class="text-[12.5px] text-slate-400">${t('Sanitized sample dataset containing 500 test POs, bills, and bank slips with automated variance evaluation scripts.', 'Bộ dữ liệu mẫu gồm 500 đơn đặt hàng, hóa đơn và ủy nhiệm chi ngân hàng kèm mã nguồn kiểm thử độ lệch đối soát.')}</p>
        </div>
        <a href="https://github.com/veraledger-ai/reconciliation-benchmark" target="_blank" rel="noopener noreferrer" class="px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-mono text-[12.5px] border border-white/15 transition whitespace-nowrap flex items-center gap-2">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          <span>View on GitHub</span>
        </a>
      </div>

    </div>
  </section>
  `;
}
