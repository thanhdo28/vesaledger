export function renderSecurity(): string {
  return `
  <section id="security" class="py-24 bg-[#181715] text-[#faf9f5] border-b border-white/10">
    <div class="max-w-[1240px] mx-auto px-6">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div class="lg:col-span-6 space-y-6">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#252320] border border-white/10 text-[#faf9f5] text-[12px] font-mono">
            <span class="text-[#5db872]">●</span> ZERO RETENTION ENTERPRISE ARCHITECTURE
          </div>
          <h2 class="text-[42px] sm:text-[48px] text-white font-serif leading-tight">
            Financial data that never trains external models.
          </h2>
          <p class="text-[16px] text-[#a09d96] leading-relaxed">
            Enterprise commercial agreements guarantee zero customer data retention for model fine-tuning. VeraLedger wraps this with customer-managed encryption keys (CMEK) and air-gapped VPC deployment options.
          </p>
          
          <div class="grid grid-cols-2 gap-6 pt-4">
            <div class="border-l-2 border-[#cc785c] pl-4">
              <div class="text-[16px] font-semibold text-white">SOC 2 Type II</div>
              <div class="text-[13px] text-[#a09d96] mt-1">Audited security, availability, and financial data integrity.</div>
            </div>
            <div class="border-l-2 border-[#cc785c] pl-4">
              <div class="text-[16px] font-semibold text-white">Tamper-Proof Logs</div>
              <div class="text-[13px] text-[#a09d96] mt-1">SHA-256 hashed audit trees for external auditor inspection.</div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-6">
          <div class="bg-[#1f1e1b] rounded-[12px] p-8 border border-white/10 space-y-6">
            <div class="flex items-center justify-between border-b border-white/10 pb-4">
              <span class="text-[14px] font-mono text-[#a09d96]">Compliance Snapshot</span>
              <span class="text-[12px] font-mono text-[#5db872] bg-[#5db872]/20 px-2.5 py-0.5 rounded">All Controls Passing</span>
            </div>
            <div class="space-y-4 font-mono text-[12px]">
              <div class="flex items-center justify-between text-[#faf9f5] pb-2 border-b border-white/5">
                <span>Data In-Transit & At Rest</span>
                <span class="text-[#5db8a6]">TLS 1.3 / AES-256-GCM</span>
              </div>
              <div class="flex items-center justify-between text-[#faf9f5] pb-2 border-b border-white/5">
                <span>Model Data Retention (ZDR)</span>
                <span class="text-[#5db872]">0 Days (Verified SLA)</span>
              </div>
              <div class="flex items-center justify-between text-[#faf9f5] pb-2 border-b border-white/5">
                <span>Role-Based Access Control (RBAC)</span>
                <span class="text-[#faf9f5]">SAML 2.0 / Okta / Azure AD</span>
              </div>
              <div class="flex items-center justify-between text-[#faf9f5]">
                <span>Disaster Recovery SLA</span>
                <span class="text-[#faf9f5]">RPO &lt; 1 min / RTO &lt; 5 min</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
  `;
}
