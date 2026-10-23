import { t, getLang } from '../i18n';
import { blogPosts, BlogPost } from '../data/blogs';

export function renderBlog(): string {
  const lang = getLang();

  return `
  <section id="blog" class="py-24 bg-slate-950 border-b border-white/10">
    <div class="max-w-[1240px] mx-auto px-6">
      
      <div class="max-w-2xl mb-14">
        <div class="text-[12px] font-mono text-blue-400 uppercase tracking-wider font-semibold mb-2">
          ${t('Engineering & Financial Controls Blog', 'Nghiên cứu Kỹ thuật &amp; Kiểm soát Tài chính')}
        </div>
        <h2 class="text-[34px] sm:text-[42px] text-white font-bold tracking-tight">
          ${t('Deep dives on autonomous reconciliation, AI vision, and fraud defense.', 'Bài viết chuyên sâu về đối soát sổ cái, Small VLM và phòng vệ gian lận.')}
        </h2>
        <p class="text-[15px] text-slate-300 mt-3">
          ${t(
            'Insights and architectural notes from our finance engineering team in Hanoi on building mission-critical accounting automation.',
            'Phân tích kiến trúc và kinh nghiệm thực tiễn từ đội ngũ kỹ sư tài chính tại Hà Nội về tự động hóa kế toán chính xác tuyệt đối.'
          )}
        </p>
      </div>

      <!-- Blog Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        ${blogPosts.map(post => `
          <article class="bg-slate-900 rounded-xl p-7 border border-white/10 flex flex-col justify-between hover:border-blue-500/50 transition group shadow-xl">
            <div>
              <div class="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-4 pb-3 border-b border-white/5">
                <span class="text-blue-400 font-semibold uppercase tracking-wider">${post.category[lang]}</span>
                <span>${post.readTime[lang]}</span>
              </div>

              <h3 class="text-[18px] font-bold text-white group-hover:text-blue-400 transition leading-snug mb-3">
                ${post.title[lang]}
              </h3>

              <p class="text-[13.5px] text-slate-400 leading-relaxed mb-6">
                ${post.summary[lang]}
              </p>
            </div>

            <div class="pt-4 border-t border-white/5 flex items-center justify-between">
              <span class="text-[11px] font-mono text-slate-500">${post.date}</span>
              <button 
                class="btn-read-blog text-[13px] font-semibold text-blue-400 hover:text-blue-300 transition inline-flex items-center gap-1.5"
                data-post-id="${post.id}"
              >
                <span>${t('Read Article', 'Đọc bài viết')}</span>
                <svg class="w-3.5 h-3.5 group-hover:translate-x-1 transition" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>
          </article>
        `).join('')}
      </div>

    </div>
  </section>

  <!-- Blog Reader Modal -->
  <div id="modal-blog-reader" class="fixed inset-0 z-[110] bg-black/85 backdrop-blur-md hidden flex items-center justify-center p-4">
    <div class="bg-slate-900 border border-white/10 rounded-2xl max-w-3xl w-full p-6 sm:p-10 max-h-[90vh] overflow-y-auto space-y-6 text-slate-200">
      <div class="flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <span id="blog-modal-cat" class="text-[11px] font-mono text-blue-400 font-semibold uppercase tracking-wider"></span>
          <span class="text-white/20 mx-2">·</span>
          <span id="blog-modal-date" class="text-[11px] font-mono text-slate-500"></span>
        </div>
        <button id="btn-close-blog-modal" class="text-slate-400 hover:text-white text-xl font-bold p-1">✕</button>
      </div>

      <div>
        <h2 id="blog-modal-title" class="text-[24px] sm:text-[30px] font-bold text-white leading-tight mb-2"></h2>
        <div id="blog-modal-author" class="text-[12px] font-mono text-slate-400"></div>
      </div>

      <div id="blog-modal-body" class="prose prose-invert max-w-none text-[14.5px] leading-relaxed text-slate-300 space-y-4">
      </div>

      <div class="pt-6 border-t border-white/10 flex items-center justify-between">
        <span class="text-[12px] text-slate-500 font-mono">VeraLedger Technical Research · Hanoi, Vietnam</span>
        <button id="btn-dismiss-blog-modal" class="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-[13px] transition">
          ${t('Close Article', 'Đóng bài viết')}
        </button>
      </div>
    </div>
  </div>
  `;
}
