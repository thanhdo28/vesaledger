export interface SampleDoc {
  format: string;
  vendor: string;
  tax: string;
  inv: string;
  date: string;
  due: string;
  total: string;
  lines: string;
  schemaVendor: string;
  schemaTaxId: string;
  schemaTerms: string;
  schemaGl: string;
  schemaDept: string;
  schemaRemit: string;
  entityId: string;
  glDebit: string;
  erpTarget: string;
}

export const sampleDocs: Record<string, SampleDoc> = {
  'invoice': {
    format: 'FILE: datadog_inv_88201.pdf',
    vendor: 'Datadog Ireland Limited',
    tax: 'VAT Reg: IE 9831920L',
    inv: 'DD-2026-9014',
    date: '2026-10-01',
    due: '2026-10-31',
    total: '$12,800.00 USD',
    lines: `
      <div class="flex justify-between border-b border-gray-100 pb-1"><span>Infrastructure Host Monitoring (45 units)</span><span class="font-semibold">$6,750.00</span></div>
      <div class="flex justify-between border-b border-gray-100 pb-1"><span>APM Pro Traces & Ingestion</span><span class="font-semibold">$4,200.00</span></div>
      <div class="flex justify-between border-b border-gray-100 pb-1"><span>Log Management Indexed Events (30M)</span><span class="font-semibold">$1,850.00</span></div>`,
    schemaVendor: 'Datadog, Inc.',
    schemaTaxId: 'IE9831920L',
    schemaTerms: 'Net 30 Days',
    schemaGl: 'GL 6040 (SaaS Hosting)',
    schemaDept: 'Engineering / Core Platform',
    schemaRemit: 'ACH Routing: 021000021',
    entityId: 'VENDOR_DATADOG_0019',
    glDebit: '6040 - Hosting Infrastructure',
    erpTarget: 'NetSuite'
  },
  'receipt': {
    format: 'FILE: camera_snap_20261005_1942.jpg',
    vendor: 'The French Laundry (Yountville, CA)',
    tax: 'State Tax ID: CA-889102',
    inv: 'RECEIPT #9921',
    date: '2026-10-05',
    due: 'Paid via Corporate Amex *4910',
    total: '$2,537.00 USD',
    lines: `
      <div class="flex justify-between border-b border-gray-100 pb-1"><span>Chef Tasting Menu (4 guests)</span><span class="font-semibold">$1,400.00</span></div>
      <div class="flex justify-between border-b border-gray-100 pb-1"><span>Sommelier Pairing Selection</span><span class="font-semibold">$750.00</span></div>
      <div class="flex justify-between border-b border-gray-100 pb-1"><span>Gratuity & Local Hospitality Tax</span><span class="font-semibold">$387.00</span></div>`,
    schemaVendor: 'The French Laundry',
    schemaTaxId: 'EIN: 68-0192841',
    schemaTerms: 'Settled Immediate (Corporate Card)',
    schemaGl: 'GL 6210 (Client Meals & Entertainment)',
    schemaDept: 'Executive / Investor Relations',
    schemaRemit: 'Card Token: amex_4910_settled',
    entityId: 'EXP_MERCHANT_FRENCH_LAUNDRY',
    glDebit: '6210 - Meals & Entertainment',
    erpTarget: 'QuickBooks'
  },
  'contractor': {
    format: 'FILE: dev_sow_timesheet_inv04.pdf',
    vendor: 'Apex Engineering Services LLC',
    tax: 'EIN: 47-9921402',
    inv: 'APEX-2026-04',
    date: '2026-10-04',
    due: '2026-10-18 (Net 14)',
    total: '$14,100.00 USD',
    lines: `
      <div class="flex justify-between border-b border-gray-100 pb-1"><span>Senior Rust Systems Eng (80 hrs @ $120/h)</span><span class="font-semibold">$9,600.00</span></div>
      <div class="flex justify-between border-b border-gray-100 pb-1"><span>Distributed Storage Architecture Review</span><span class="font-semibold">$3,500.00</span></div>
      <div class="flex justify-between border-b border-gray-100 pb-1"><span>24/7 Production Incident Retainer</span><span class="font-semibold">$1,000.00</span></div>`,
    schemaVendor: 'Apex Engineering Services LLC',
    schemaTaxId: 'US EIN: 47-9921402',
    schemaTerms: 'Net 14 Days',
    schemaGl: 'GL 6120 (Contract Engineering & Dev)',
    schemaDept: 'Product Engineering / Backend',
    schemaRemit: 'Wire Account: 991829012 (Silicon Valley Bank)',
    entityId: 'VENDOR_APEX_ENG_004',
    glDebit: '6120 - Outside Engineering',
    erpTarget: 'Xero'
  }
};
