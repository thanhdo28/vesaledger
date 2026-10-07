export interface AuditScenario {
  btnText: string;
  title: string;
  desc: string;
  tag: string;
  tagClass: string;
  evidence: string;
  json: string;
}

export const scenarios: Record<string, AuditScenario> = {
  '3way': {
    btnText: 'Scenario A: 3-Way Enterprise PO Match',
    title: 'Vendor Invoice vs PO Ledger',
    desc: 'Comparing scanned supplier PDF against NetSuite open PO balance and Chase bank wire record.',
    tag: 'DECISION: APPROVED_AUTO_POST',
    tagClass: 'text-[11px] font-mono bg-[#5db872]/20 text-[#5db872] px-2 py-0.5 rounded border border-[#5db872]/30',
    evidence: `
      <div class="p-3 bg-[#faf9f5] rounded-[8px] card-border-hairline">
        <div class="text-[11px] text-[#8e8b82] uppercase font-mono mb-1">Source 1: Scanned PDF (Vendor AWS)</div>
        <div class="flex justify-between font-mono font-medium text-[#141413]">
          <span>Total Due: $14,920.00</span>
          <span class="text-[#5db872]">OCR Acc: 99.9%</span>
        </div>
        <div class="text-[12px] text-[#6c6a64] mt-1">Invoice #AWS-99201 • Due: 2026-11-01</div>
      </div>
      <div class="p-3 bg-[#faf9f5] rounded-[8px] card-border-hairline">
        <div class="text-[11px] text-[#8e8b82] uppercase font-mono mb-1">Source 2: NetSuite ERP PO #4120</div>
        <div class="flex justify-between font-mono font-medium text-[#141413]">
          <span>Approved Cap: $15,000.00</span>
          <span class="text-[#5db8a6]">Status: Open PO</span>
        </div>
        <div class="text-[12px] text-[#6c6a64] mt-1">Cost Center: Infrastructure / Engineering</div>
      </div>
      <div class="p-3 bg-[#faf9f5] rounded-[8px] card-border-hairline">
        <div class="text-[11px] text-[#8e8b82] uppercase font-mono mb-1">Source 3: Chase Treasury Feed</div>
        <div class="flex justify-between font-mono font-medium text-[#141413]">
          <span>Outflow: -$14,920.00</span>
          <span class="text-[#5db872]">Settled ACH</span>
        </div>
        <div class="text-[12px] text-[#6c6a64] mt-1">Trace #TXN-CHASE-0029910 • 10:14 AM EST</div>
      </div>`,
    json: `{
  "match_status": "EXACT_THREE_WAY_BALANCED",
  "confidence_score": 0.9998,
  "variance_detected": {
    "amount": 0.00,
    "currency": "USD"
  },
  "audit_trail": {
    "po_id": "NETSUITE_PO_4120",
    "invoice_id": "AWS-99201",
    "bank_tx_id": "TXN-CHASE-0029910",
    "sha256_evidence": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
  },
  "action_taken": "POSTED_JOURNAL_ENTRY_TO_NETSUITE"
}`
  },
  'fx': {
    btnText: 'Scenario B: Multi-Currency FX Slippage',
    title: 'EUR/USD Cross-Border Wire Reconciliation',
    desc: 'Detecting hidden intermediary bank wire deductions and spot rate conversion deviations.',
    tag: 'DECISION: SLIPPAGE_TOLERANCE_ADJUSTED',
    tagClass: 'text-[11px] font-mono bg-[#d4a017]/20 text-[#d4a017] px-2 py-0.5 rounded border border-[#d4a017]/30',
    evidence: `
      <div class="p-3 bg-[#faf9f5] rounded-[8px] card-border-hairline">
        <div class="text-[11px] text-[#8e8b82] uppercase font-mono mb-1">Source 1: German Supplier Invoice (GmbH)</div>
        <div class="flex justify-between font-mono font-medium text-[#141413]">
          <span>Billed: €48,000.00</span>
          <span class="text-[#5db872]">VAT 19% Valid</span>
        </div>
        <div class="text-[12px] text-[#6c6a64] mt-1">Invoice #SAP-DE-88102 • Due in EUR</div>
      </div>
      <div class="p-3 bg-[#faf9f5] rounded-[8px] card-border-hairline">
        <div class="text-[11px] text-[#8e8b82] uppercase font-mono mb-1">Source 2: SWIFT MT103 Message</div>
        <div class="flex justify-between font-mono font-medium text-[#141413]">
          <span>Wire Dispatched: $52,110.00</span>
          <span class="text-[#e8a55a]">Spot: 1.0852</span>
        </div>
        <div class="text-[12px] text-[#6c6a64] mt-1">Intermediary Fee: -$25.00 deducted by Commerzbank</div>
      </div>
      <div class="p-3 bg-[#faf9f5] rounded-[8px] card-border-hairline">
        <div class="text-[11px] text-[#8e8b82] uppercase font-mono mb-1">Source 3: NetSuite FX Revaluation Engine</div>
        <div class="flex justify-between font-mono font-medium text-[#141413]">
          <span>Book Rate: 1.0845</span>
          <span class="text-[#5db872]">Auto-Adjusted</span>
        </div>
        <div class="text-[12px] text-[#6c6a64] mt-1">Realized FX Gain/Loss GL 8100 credited $33.60</div>
      </div>`,
    json: `{
  "match_status": "CROSS_BORDER_FX_RECONCILED",
  "confidence_score": 0.9984,
  "variance_breakdown": {
    "foreign_amount": 48000.00,
    "currency": "EUR",
    "wire_deduction_detected": 25.00,
    "realized_fx_gain_loss_usd": 33.60
  },
  "audit_trail": {
    "swift_uetr": "97b48f51-e734-4a47-a89e-4c7b89234b01",
    "sap_doc_num": "5100029100"
  },
  "action_taken": "JOURNAL_SPLIT_AND_SETTLED_WITH_FX_VARIANCE"
}`
  },
  'fraud': {
    btnText: 'Scenario C: Shadow Invoice & IBAN Tampering',
    title: 'Compromised Vendor IBAN Interception',
    desc: 'Intercepting altered vendor payment credentials using historical vector fingerprinting.',
    tag: 'DECISION: FRAUD_QUARANTINE_BLOCKED',
    tagClass: 'text-[11px] font-mono bg-[#c64545]/20 text-[#c64545] px-2 py-0.5 rounded border border-[#c64545]/30',
    evidence: `
      <div class="p-3 bg-red-50 rounded-[8px] border border-red-200">
        <div class="text-[11px] text-[#c64545] uppercase font-mono mb-1">Anomaly 1: Altered Wire Instructions</div>
        <div class="flex justify-between font-mono font-medium text-[#c64545]">
          <span>New IBAN: GB29BARC2000...</span>
          <span class="font-bold">MISMATCH ⚠️</span>
        </div>
        <div class="text-[12px] text-[#6c6a64] mt-1">Historical Vendor IBAN was: DE89DB300... (Never used UK account)</div>
      </div>
      <div class="p-3 bg-[#faf9f5] rounded-[8px] card-border-hairline">
        <div class="text-[11px] text-[#8e8b82] uppercase font-mono mb-1">Source 2: Email Header DKIM & SPF Audit</div>
        <div class="flex justify-between font-mono font-medium text-[#141413]">
          <span>DKIM: SOFTFAIL</span>
          <span class="text-[#c64545]">Spoofed Mail Relay</span>
        </div>
        <div class="text-[12px] text-[#6c6a64] mt-1">Sender: billing@acme-supplier-support.co (Typo-squatted)</div>
      </div>
      <div class="p-3 bg-[#faf9f5] rounded-[8px] card-border-hairline">
        <div class="text-[11px] text-[#8e8b82] uppercase font-mono mb-1">Action: Treasury Payment Freeze</div>
        <div class="flex justify-between font-mono font-medium text-[#5db872]">
          <span>$88,400.00 Protected</span>
          <span>Audit Incident #SEC-99</span>
        </div>
        <div class="text-[12px] text-[#6c6a64] mt-1">Alert dispatched via Slack & PagerDuty to CFO</div>
      </div>`,
    json: `{
  "match_status": "SECURITY_QUARANTINE_ACTIVE",
  "confidence_score": 0.0012,
  "threat_indicators": [
    "IBAN_GEO_COUNTRY_SHIFT_DE_TO_GB",
    "DKIM_ALIGNMENT_FAILURE",
    "DOMAIN_SIMILARITY_LEVENSTHEIN_DISTANCE_1"
  ],
  "funds_protected_usd": 88400.00,
  "action_taken": "PAYMENT_HALTED_INCIDENT_TICKET_OPENED"
}`
  }
};
