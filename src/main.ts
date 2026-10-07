import './style.css';
import { renderNavbar } from './components/Navbar';
import { renderHero } from './components/Hero';
import { renderExtractionPipeline } from './components/ExtractionPipeline';
import { renderWorkbench } from './components/Workbench';
import { renderArchitecture } from './components/Architecture';
import { renderModels } from './components/Models';
import { renderIntegrations } from './components/Integrations';
import { renderSecurity } from './components/Security';
import { renderPricing } from './components/Pricing';
import { renderPilotForm } from './components/PilotForm';
import { renderFooter } from './components/Footer';

import { sampleDocs } from './data/sampleDocs';
import { scenarios } from './data/scenarios';

// Render full template into #app
const app = document.querySelector<HTMLDivElement>('#app')!;
app.innerHTML = `
  ${renderNavbar()}
  ${renderHero()}
  ${renderExtractionPipeline()}
  ${renderWorkbench()}
  ${renderArchitecture()}
  ${renderModels()}
  ${renderIntegrations()}
  ${renderSecurity()}
  ${renderPricing()}
  ${renderPilotForm()}
  ${renderFooter()}
`;

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
        btn.className = "px-3.5 py-1.5 text-[13px] font-medium rounded-[8px] bg-[#efe9de] text-[#141413] border border-[#e6dfd8] transition";
      } else {
        btn.className = "px-3.5 py-1.5 text-[13px] font-medium rounded-[8px] bg-transparent text-[#6c6a64] hover:text-[#141413] border border-transparent transition";
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
    statusBox.innerHTML = 'Ready for automated straight-through processing.';
    statusBox.className = 'p-3 rounded bg-[#252320] border border-white/10 text-[11px] text-[#a09d96]';
  }

  if (erp === 'netsuite') {
    if (actionEl) actionEl.innerText = 'API POST: /services/rest/record/v1/vendorBill';
    if (detailsEl) detailsEl.innerHTML = `• Entity ID: <code>${doc.entityId}</code><br>• Posting Period: <code>2026-10</code><br>• GL Debit: <code>${doc.glDebit}</code><br>• AP Credit: <code>2000 - Accounts Payable</code><br>• Attachment: <code>sha256:7b29a...pdf</code>`;
    if (btnEl) btnEl.innerHTML = `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg><span>Dispatch Bill to NetSuite</span>`;
  } else if (erp === 'quickbooks') {
    if (actionEl) actionEl.innerText = 'API POST: /v3/company/9130/bill';
    if (detailsEl) detailsEl.innerHTML = `• VendorRef: <code>${doc.entityId}</code><br>• AccountRef: <code>${doc.glDebit}</code><br>• TxnDate: <code>${doc.date}</code><br>• Line Items: <code>Itemized JSON mapped</code><br>• AttachmentRef: <code>receipt_vault_id: 99182</code>`;
    if (btnEl) btnEl.innerHTML = `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg><span>Dispatch Expense to QuickBooks</span>`;
  } else if (erp === 'xero') {
    if (actionEl) actionEl.innerText = 'API PUT: /api.xro/2.0/Invoices (Type: ACCPAY)';
    if (detailsEl) detailsEl.innerHTML = `• Contact: <code>${doc.schemaVendor}</code><br>• AccountCode: <code>400 - Operating Expense</code><br>• Status: <code>AUTHORISED</code><br>• LineAmountTypes: <code>Exclusive</code>`;
    if (btnEl) btnEl.innerHTML = `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg><span>Dispatch Bill to Xero</span>`;
  } else {
    if (actionEl) actionEl.innerText = 'RFC BAPI_ACC_DOCUMENT_POST: SAP S/4HANA';
    if (detailsEl) detailsEl.innerHTML = `• DocType: <code>KR (Vendor Invoice)</code><br>• CompCode: <code>1000</code><br>• Header: <code>VERALEDGER_${doc.inv}</code><br>• Balance Check: <code>0.00 Variance Verified</code>`;
    if (btnEl) btnEl.innerHTML = `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg><span>Dispatch Bill to SAP</span>`;
  }
}

function executeErpSync() {
  const btn = document.getElementById('btn-sync-erp');
  const statusBox = document.getElementById('sync-status-box');

  if (btn) btn.innerHTML = '<span>Processing VLM STP Gateway...</span>';

  setTimeout(() => {
    const txnId = 'TXN-ERP-2026-' + Math.floor(100000 + Math.random() * 900000);
    if (statusBox) {
      statusBox.className = 'p-3 rounded bg-[#5db872]/20 border border-[#5db872]/40 text-[11px] text-[#5db872] space-y-1';
      statusBox.innerHTML = `
        <div class="font-bold flex items-center gap-1.5">✓ POST SUCCESSFUL (HTTP 201 CREATED)</div>
        <div class="text-white font-mono text-[10px]">Transaction Ref: <code>${txnId}</code></div>
        <div class="text-[#a09d96] text-[10px]">Document attached, dual GL entry balanced, audit token signed.</div>
      `;
    }
    if (btn) {
      btn.innerHTML = '<span>✓ Synced to Accounting Program</span>';
      btn.className = 'w-full py-2.5 text-[13px] font-medium bg-[#5db872] text-black rounded-[6px] transition flex items-center justify-center gap-2 shadow-sm';
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
        btn.className = "px-4 py-2 text-[14px] font-medium rounded-[8px] bg-[#efe9de] text-[#141413] transition";
      } else {
        btn.className = "px-4 py-2 text-[14px] font-medium rounded-[8px] bg-transparent text-[#6c6a64] hover:text-[#141413] transition";
      }
    }
  });
}

// Bind DOM event listeners
document.getElementById('btn-sample-invoice')?.addEventListener('click', () => selectSampleDoc('invoice'));
document.getElementById('btn-sample-receipt')?.addEventListener('click', () => selectSampleDoc('receipt'));
document.getElementById('btn-sample-contractor')?.addEventListener('click', () => selectSampleDoc('contractor'));
document.getElementById('erp-select')?.addEventListener('change', updateErpTarget);
document.getElementById('btn-sync-erp')?.addEventListener('click', executeErpSync);

document.getElementById('tab-btn-3way')?.addEventListener('click', () => switchScenario('3way'));
document.getElementById('tab-btn-fx')?.addEventListener('click', () => switchScenario('fx'));
document.getElementById('tab-btn-fraud')?.addEventListener('click', () => switchScenario('fraud'));

document.getElementById('pilot-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Pilot request logged! An engineer will reach out within 2 business hours.');
});
