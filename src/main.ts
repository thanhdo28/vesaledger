import './style.css';
import { setLang, getLang, onLangChange, t } from './i18n';
import { renderNavbar } from './components/Navbar';
import { renderHero } from './components/Hero';
import { renderExtractionPipeline } from './components/ExtractionPipeline';
import { renderWorkbench } from './components/Workbench';
import { renderArchitecture } from './components/Architecture';
import { renderModels } from './components/Models';
import { renderIntegrations } from './components/Integrations';
import { renderSecurity } from './components/Security';
import { renderRoiCalculator } from './components/RoiCalculator';
import { renderBlog } from './components/Blog';
import { renderTeam } from './components/Team';
import { renderPricing } from './components/Pricing';
import { renderPilotForm } from './components/PilotForm';
import { renderFooter } from './components/Footer';

import { sampleDocs } from './data/sampleDocs';
import { scenarios } from './data/scenarios';
import { blogPosts } from './data/blogs';

const app = document.querySelector<HTMLDivElement>('#app')!;

function renderApp() {
  app.innerHTML = `
    ${renderNavbar()}
    ${renderHero()}
    ${renderExtractionPipeline()}
    ${renderWorkbench()}
    ${renderArchitecture()}
    ${renderModels()}
    ${renderIntegrations()}
    ${renderSecurity()}
    ${renderRoiCalculator()}
    ${renderBlog()}
    ${renderTeam()}
    ${renderPricing()}
    ${renderPilotForm()}
    ${renderFooter()}
  `;

  bindEvents();
}

// --- Interactive Logic for Extraction Sandbox ---
let currentDocKey: keyof typeof sampleDocs = 'invoice';

function selectSampleDoc(docKey: keyof typeof sampleDocs) {
  currentDocKey = docKey;
  const doc = sampleDocs[docKey];

  const formatEl = document.getElementById('doc-format-label');
  const vendorEl = document.getElementById('doc-vendor-name');
  const taxEl = document.getElementById('doc-vendor-tax');
  const invEl = document.getElementById('doc-inv-num');
  const dateEl = document.getElementById('doc-date');
  const dueEl = document.getElementById('doc-due');
  const linesEl = document.getElementById('doc-lines-preview');
  const totalEl = document.getElementById('doc-total');

  if (formatEl) formatEl.innerText = doc.format;
  if (vendorEl) vendorEl.innerText = doc.vendor;
  if (taxEl) taxEl.innerText = doc.tax;
  if (invEl) invEl.innerText = doc.inv;
  if (dateEl) dateEl.innerText = doc.date;
  if (dueEl) dueEl.innerText = doc.due;
  if (linesEl) linesEl.innerHTML = doc.lines;
  if (totalEl) totalEl.innerText = doc.total;

  const sVendor = document.getElementById('schema-vendor');
  const sTaxId = document.getElementById('schema-tax-id');
  const sTerms = document.getElementById('schema-terms');
  const sGl = document.getElementById('schema-gl');
  const sDept = document.getElementById('schema-dept');
  const sRemit = document.getElementById('schema-remit');

  if (sVendor) sVendor.innerText = doc.schemaVendor;
  if (sTaxId) sTaxId.innerText = doc.schemaTaxId;
  if (sTerms) sTerms.innerText = doc.schemaTerms;
  if (sGl) sGl.innerText = doc.schemaGl;
  if (sDept) sDept.innerText = doc.schemaDept;
  if (sRemit) sRemit.innerText = doc.schemaRemit;

  updateErpTarget();

  (['invoice', 'receipt', 'contractor'] as const).forEach(key => {
    const btn = document.getElementById('btn-sample-' + key);
    if (btn) {
      if (key === docKey) {
        btn.className = "px-3 py-1.5 text-[12px] font-semibold rounded-lg bg-blue-600 text-white transition";
      } else {
        btn.className = "px-3 py-1.5 text-[12px] font-medium rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-white/10 transition";
      }
    }
  });
}

function updateErpTarget() {
  const erpSelect = document.getElementById('erp-select') as HTMLSelectElement | null;
  const erp = erpSelect ? erpSelect.value : 'netsuite';
  const doc = sampleDocs[currentDocKey];
  const detailsEl = document.getElementById('erp-sync-details');
  const actionEl = document.getElementById('erp-action-type');
  const btnEl = document.getElementById('btn-sync-erp');
  const statusBox = document.getElementById('sync-status-box');

  if (statusBox) {
    statusBox.innerHTML = t('Ready for automated straight-through processing.', 'Sẵn sàng xử lý tự động thẳng vào sổ cái.');
    statusBox.className = 'p-3 rounded-lg bg-slate-900 border border-white/10 text-[11px] text-slate-400';
  }

  if (erp === 'netsuite') {
    if (actionEl) actionEl.innerText = 'API POST: /services/rest/record/v1/vendorBill';
    if (detailsEl) detailsEl.innerHTML = `• Entity ID: <code>${doc.entityId}</code><br>• Posting Period: <code>2026-10</code><br>• GL Debit: <code>${doc.glDebit}</code><br>• AP Credit: <code>2000 - Accounts Payable</code><br>• Attachment: <code>sha256:7b29a...pdf</code>`;
    if (btnEl) btnEl.innerHTML = `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg><span>${t('Dispatch Bill to NetSuite', 'Đẩy hóa đơn vào NetSuite')}</span>`;
  } else if (erp === 'quickbooks') {
    if (actionEl) actionEl.innerText = 'API POST: /v3/company/9130/bill';
    if (detailsEl) detailsEl.innerHTML = `• VendorRef: <code>${doc.entityId}</code><br>• AccountRef: <code>${doc.glDebit}</code><br>• TxnDate: <code>${doc.date}</code><br>• Line Items: <code>Itemized JSON mapped</code><br>• AttachmentRef: <code>receipt_vault_id: 99182</code>`;
    if (btnEl) btnEl.innerHTML = `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg><span>${t('Dispatch Expense to QuickBooks', 'Đẩy chi phí vào QuickBooks')}</span>`;
  } else if (erp === 'xero') {
    if (actionEl) actionEl.innerText = 'API PUT: /api.xro/2.0/Invoices (Type: ACCPAY)';
    if (detailsEl) detailsEl.innerHTML = `• Contact: <code>${doc.schemaVendor}</code><br>• AccountCode: <code>400 - Operating Expense</code><br>• Status: <code>AUTHORISED</code><br>• LineAmountTypes: <code>Exclusive</code>`;
    if (btnEl) btnEl.innerHTML = `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg><span>${t('Dispatch Bill to Xero', 'Đẩy hóa đơn vào Xero')}</span>`;
  } else {
    if (actionEl) actionEl.innerText = 'RFC BAPI_ACC_DOCUMENT_POST: SAP S/4HANA';
    if (detailsEl) detailsEl.innerHTML = `• DocType: <code>KR (Vendor Invoice)</code><br>• CompCode: <code>1000</code><br>• Header: <code>VERALEDGER_${doc.inv}</code><br>• Balance Check: <code>0.00 Variance Verified</code>`;
    if (btnEl) btnEl.innerHTML = `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg><span>${t('Dispatch Bill to SAP', 'Đẩy hóa đơn vào SAP')}</span>`;
  }
}

function executeErpSync() {
  const btn = document.getElementById('btn-sync-erp');
  const statusBox = document.getElementById('sync-status-box');

  if (btn) btn.innerHTML = `<span>${t('Processing STP Gateway...', 'Đang xử lý qua cổng STP...')}</span>`;

  setTimeout(() => {
    const txnId = 'TXN-ERP-2026-' + Math.floor(100000 + Math.random() * 900000);
    if (statusBox) {
      statusBox.className = 'p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/40 text-[11px] text-emerald-400 space-y-1';
      statusBox.innerHTML = `
        <div class="font-bold flex items-center gap-1.5">✓ POST SUCCESSFUL (HTTP 201 CREATED)</div>
        <div class="text-white font-mono text-[10px]">Transaction Ref: <code>${txnId}</code></div>
        <div class="text-slate-300 text-[10px]">${t('Document attached, dual GL entry balanced, audit token signed.', 'Đính kèm chứng từ, cân đối định khoản nợ/có, tạo chữ ký kiểm toán.')}</div>
      `;
    }
    if (btn) {
      btn.innerHTML = `<span>✓ ${t('Synced to Accounting ERP', 'Đã đồng bộ vào sổ cái ERP')}</span>`;
      btn.className = 'w-full py-2.5 text-[13px] font-semibold bg-emerald-600 text-white rounded-lg transition flex items-center justify-center gap-2 shadow-md';
    }
  }, 350);
}

// --- Interactive Logic for Workbench Scenarios ---
function switchScenario(scenarioKey: keyof typeof scenarios) {
  const data = scenarios[scenarioKey];
  const titleEl = document.getElementById('scenario-title');
  const descEl = document.getElementById('scenario-desc');
  const evidenceEl = document.getElementById('evidence-box');
  const jsonEl = document.getElementById('json-output');
  const tagEl = document.getElementById('audit-tag');

  if (titleEl) titleEl.innerText = data.title;
  if (descEl) descEl.innerText = data.desc;
  if (evidenceEl) evidenceEl.innerHTML = data.evidence;
  if (jsonEl) jsonEl.innerText = data.json;
  if (tagEl) {
    tagEl.innerText = data.tag;
    tagEl.className = data.tagClass;
  }

  (['3way', 'fx', 'fraud'] as const).forEach(key => {
    const btn = document.getElementById(`tab-btn-${key}`);
    if (btn) {
      if (key === scenarioKey) {
        btn.className = "px-4 py-2 text-[13.5px] font-semibold rounded-lg bg-blue-600 text-white transition";
      } else {
        btn.className = "px-4 py-2 text-[13.5px] font-semibold rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-white/10 transition";
      }
    }
  });
}

// --- Interactive Logic for ROI Calculator ---
function updateRoiCalculator() {
  const volSlider = document.getElementById('calc-volume-slider') as HTMLInputElement | null;
  const rateSlider = document.getElementById('calc-rate-slider') as HTMLInputElement | null;
  
  if (!volSlider || !rateSlider) return;

  const volume = parseInt(volSlider.value, 10);
  const rate = parseInt(rateSlider.value, 10);

  const volDisplay = document.getElementById('calc-volume-display');
  const rateDisplay = document.getElementById('calc-rate-display');
  const hoursSavedEl = document.getElementById('calc-hours-saved');
  const dollarsSavedEl = document.getElementById('calc-dollars-saved');
  const errorsEl = document.getElementById('calc-errors-blocked');
  const planRecEl = document.getElementById('calc-plan-rec');

  if (volDisplay) volDisplay.innerText = volume.toLocaleString() + ' docs';
  if (rateDisplay) rateDisplay.innerText = '$' + rate + ' / hr';

  const hoursSaved = Math.round((volume * 3.5) / 60);
  const dollarsSaved = Math.round(hoursSaved * rate);
  const errorsBlocked = Math.round(volume * 0.03);

  if (hoursSavedEl) hoursSavedEl.innerText = hoursSaved.toLocaleString() + ' hrs';
  if (dollarsSavedEl) dollarsSavedEl.innerText = '$' + dollarsSaved.toLocaleString();
  if (errorsEl) errorsEl.innerText = '~' + errorsBlocked + ' items';

  if (planRecEl) {
    if (volume <= 500) {
      planRecEl.innerText = t('Starter ($20/mo)', 'Gói Cơ bản (490.000 đ/tháng)');
    } else if (volume <= 5000) {
      planRecEl.innerText = t('Growth ($99/mo)', 'Gói Tăng trưởng (2.490.000 đ/tháng)');
    } else {
      planRecEl.innerText = t('Enterprise ($499+/mo)', 'Gói Doanh nghiệp (Theo báo giá)');
    }
  }
}

function formatMarkdown(md: string): string {
  let html = md.replace(/```([\s\S]*?)```/g, '<pre class="bg-slate-950 p-4 rounded-lg font-mono text-[12px] text-slate-300 border border-white/10 overflow-x-auto">$1</pre>');
  html = html.replace(/^### (.*$)/gim, '<h3 class="text-[18px] font-bold text-white mt-6 mb-2">$1</h3>');
  html = html.replace(/^#### (.*$)/gim, '<h4 class="text-[15px] font-semibold text-blue-400 mt-4 mb-2">$1</h4>');
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>');
  html = html.replace(/^\* (.*$)/gim, '<li class="ml-4 list-disc text-slate-300">$1</li>');
  html = html.replace(/^\d+\. (.*$)/gim, '<li class="ml-4 list-decimal text-slate-300">$1</li>');
  html = html.replace(/^---$/gim, '<hr class="border-white/10 my-6">');
  html = html.split('\n\n').map(p => {
    p = p.trim();
    if (!p) return '';
    if (p.startsWith('<pre') || p.startsWith('<h') || p.startsWith('<li') || p.startsWith('<hr')) return p;
    return `<p class="leading-relaxed text-slate-300">${p}</p>`;
  }).join('\n');
  return html;
}

function bindEvents() {
  document.getElementById('lang-btn-en')?.addEventListener('click', () => setLang('en'));
  document.getElementById('lang-btn-vi')?.addEventListener('click', () => setLang('vi'));

  document.getElementById('btn-sample-invoice')?.addEventListener('click', () => selectSampleDoc('invoice'));
  document.getElementById('btn-sample-receipt')?.addEventListener('click', () => selectSampleDoc('receipt'));
  document.getElementById('btn-sample-contractor')?.addEventListener('click', () => selectSampleDoc('contractor'));
  document.getElementById('erp-select')?.addEventListener('change', updateErpTarget);
  document.getElementById('btn-sync-erp')?.addEventListener('click', executeErpSync);

  document.getElementById('tab-btn-3way')?.addEventListener('click', () => switchScenario('3way'));
  document.getElementById('tab-btn-fx')?.addEventListener('click', () => switchScenario('fx'));
  document.getElementById('tab-btn-fraud')?.addEventListener('click', () => switchScenario('fraud'));

  document.getElementById('calc-volume-slider')?.addEventListener('input', updateRoiCalculator);
  document.getElementById('calc-rate-slider')?.addEventListener('input', updateRoiCalculator);

  // Privacy & Terms Modals
  const pModal = document.getElementById('modal-privacy');
  const tModal = document.getElementById('modal-terms');
  document.getElementById('btn-open-privacy')?.addEventListener('click', () => pModal?.classList.remove('hidden'));
  document.getElementById('btn-close-privacy')?.addEventListener('click', () => pModal?.classList.add('hidden'));
  document.getElementById('btn-dismiss-privacy')?.addEventListener('click', () => pModal?.classList.add('hidden'));

  document.getElementById('btn-open-terms')?.addEventListener('click', () => tModal?.classList.remove('hidden'));
  document.getElementById('btn-close-terms')?.addEventListener('click', () => tModal?.classList.add('hidden'));
  document.getElementById('btn-dismiss-terms')?.addEventListener('click', () => tModal?.classList.add('hidden'));

  // Blog Reader Modal
  const blogModal = document.getElementById('modal-blog-reader');
  document.querySelectorAll('.btn-read-blog').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const target = e.currentTarget as HTMLElement;
      const postId = target.dataset.postId;
      const post = blogPosts.find(p => p.id === postId);
      if (!post) return;
      const lang = getLang();
      const catEl = document.getElementById('blog-modal-cat');
      const dateEl = document.getElementById('blog-modal-date');
      const titleEl = document.getElementById('blog-modal-title');
      const authorEl = document.getElementById('blog-modal-author');
      const bodyEl = document.getElementById('blog-modal-body');

      if (catEl) catEl.textContent = post.category[lang];
      if (dateEl) dateEl.textContent = `${post.date} · ${post.readTime[lang]}`;
      if (titleEl) titleEl.textContent = post.title[lang];
      if (authorEl) authorEl.textContent = post.author[lang];
      if (bodyEl) bodyEl.innerHTML = formatMarkdown(post.content[lang]);

      blogModal?.classList.remove('hidden');
    });
  });

  document.getElementById('btn-close-blog-modal')?.addEventListener('click', () => blogModal?.classList.add('hidden'));
  document.getElementById('btn-dismiss-blog-modal')?.addEventListener('click', () => blogModal?.classList.add('hidden'));

  document.getElementById('pilot-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert(t(
      'Thank you! Your pilot request has been logged. Our solutions team in Hanoi will contact you at your work email within 2 business hours.',
      'Cảm ơn bạn! Yêu cầu chạy thử đã được ghi nhận. Đội ngũ giải pháp tại Hà Nội sẽ liên hệ qua email công việc trong vòng 2 giờ làm việc.'
    ));
  });

  updateRoiCalculator();
}

onLangChange(() => {
  renderApp();
});

// Initial render
renderApp();
