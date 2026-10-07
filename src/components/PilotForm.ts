export function renderPilotForm(): string {
  return `
  <section id="pilot" class="py-24 bg-[#efe9de] border-t border-[#e6dfd8]">
    <div class="max-w-xl mx-auto px-6">
      <div class="text-center mb-10">
        <div class="text-[12px] font-mono text-[#cc785c] uppercase tracking-wider font-semibold mb-2">Private Pilot Program</div>
        <h2 class="text-[36px] text-[#141413] font-serif">Apply for Early Access</h2>
        <p class="text-[14px] text-[#6c6a64] mt-2">
          We onboard select finance teams weekly. Qualifying criteria includes multi-source reconciliation pain points.
        </p>
      </div>

      <form id="pilot-form" class="bg-[#faf9f5] rounded-[12px] p-8 card-border-hairline space-y-5">
        <div>
          <label class="block text-[13px] font-medium text-[#141413] mb-1.5">Work Email Address</label>
          <input type="email" required placeholder="cfo@yourcompany.com" class="w-full px-4 py-2.5 rounded-[8px] bg-[#faf9f5] border border-[#e6dfd8] text-[14px] text-[#141413] focus:outline-none focus:border-[#cc785c] transition">
          <p class="text-[11px] text-[#8e8b82] mt-1">Must match company domain for verification.</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block text-[13px] font-medium text-[#141413] mb-1.5">Company Website</label>
            <input type="url" required placeholder="https://yourcompany.com" class="w-full px-4 py-2.5 rounded-[8px] bg-[#faf9f5] border border-[#e6dfd8] text-[14px] text-[#141413] focus:outline-none focus:border-[#cc785c] transition">
          </div>
          <div>
            <label class="block text-[13px] font-medium text-[#141413] mb-1.5">Monthly Document Volume</label>
            <select class="w-full px-4 py-2.5 rounded-[8px] bg-[#faf9f5] border border-[#e6dfd8] text-[14px] text-[#141413] focus:outline-none focus:border-[#cc785c] transition">
              <option>&lt; 1,000 documents / mo</option>
              <option>1,000 - 10,000 documents / mo</option>
              <option>10,000 - 50,000 documents / mo</option>
              <option>50,000+ documents / mo</option>
            </select>
          </div>
        </div>

        <div>
          <label class="block text-[13px] font-medium text-[#141413] mb-1.5">Primary Accounting / ERP Stack</label>
          <select class="w-full px-4 py-2.5 rounded-[8px] bg-[#faf9f5] border border-[#e6dfd8] text-[14px] text-[#141413] focus:outline-none focus:border-[#cc785c] transition">
            <option>NetSuite</option>
            <option>SAP S/4HANA</option>
            <option>Workday Financial Management</option>
            <option>QuickBooks Online</option>
            <option>Xero</option>
            <option>Other / Custom In-House ERP</option>
          </select>
        </div>

        <button type="submit" class="w-full py-3.5 text-[14px] font-medium bg-[#cc785c] hover:bg-[#a9583e] text-white rounded-[8px] transition shadow-sm">
          Submit Pilot Application
        </button>
      </form>
    </div>
  </section>
  `;
}
