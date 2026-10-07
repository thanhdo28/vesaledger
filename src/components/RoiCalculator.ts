export function renderRoiCalculator(): string {
  return `
  <section id="roi-calculator" class="py-20 bg-[#faf9f5] border-b border-[#e6dfd8]">
    <div class="max-w-[1240px] mx-auto px-6">
      
      <div class="max-w-2xl mx-auto text-center mb-12">
        <div class="text-[12px] font-mono text-[#cc785c] uppercase tracking-wider font-semibold mb-2">Automated Savings Calculator</div>
        <h2 class="text-[36px] sm:text-[42px] text-[#141413] font-serif leading-tight">
          Calculate your team’s monthly ROI.
        </h2>
        <p class="text-[15px] text-[#3d3d3a] mt-2">
          Manual invoice entry takes 3–5 minutes per document with a 2–4% human error rate. See what autonomous Small VLM extraction saves your business.
        </p>
      </div>

      <div class="max-w-3xl mx-auto bg-[#efe9de] rounded-[14px] p-8 card-border-hairline shadow-sm">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          <!-- Slider Controls -->
          <div class="space-y-6">
            <div>
              <div class="flex justify-between items-baseline mb-2">
                <label class="text-[13px] font-medium text-[#141413]">Monthly Invoices & Receipts</label>
                <span id="calc-volume-display" class="text-[18px] font-serif font-bold text-[#cc785c]">1,200 docs</span>
              </div>
              <input type="range" id="calc-volume-slider" min="100" max="10000" step="100" value="1200" class="w-full accent-[#cc785c] cursor-pointer">
              <div class="flex justify-between text-[11px] text-[#8e8b82] font-mono mt-1">
                <span>100 docs</span>
                <span>5,000 docs</span>
                <span>10,000+ docs</span>
              </div>
            </div>

            <div>
              <div class="flex justify-between items-baseline mb-2">
                <label class="text-[13px] font-medium text-[#141413]">Avg AP Clerk Hourly Rate</label>
                <span id="calc-rate-display" class="text-[15px] font-mono font-medium text-[#141413]">$35 / hr</span>
              </div>
              <input type="range" id="calc-rate-slider" min="20" max="75" step="5" value="35" class="w-full accent-[#cc785c] cursor-pointer">
              <div class="flex justify-between text-[11px] text-[#8e8b82] font-mono mt-1">
                <span>$20/hr</span>
                <span>$45/hr</span>
                <span>$75/hr</span>
              </div>
            </div>

            <div class="pt-4 border-t border-[#e6dfd8] flex items-center justify-between text-[12px] text-[#6c6a64]">
              <span>Small VLM Latency: <strong>&lt; 0.85s / page</strong></span>
              <span class="text-[#5db872] font-medium">✓ Straight-through ERP sync</span>
            </div>
          </div>

          <!-- Calculated Savings Card -->
          <div class="bg-[#181715] text-[#faf9f5] rounded-[12px] p-6 card-dark-border flex flex-col justify-between space-y-4">
            <div class="border-b border-white/10 pb-3 flex justify-between items-center">
              <span class="text-[12px] font-mono text-[#a09d96]">ESTIMATED MONTHLY IMPACT</span>
              <span class="text-[10px] font-mono bg-[#5db872]/20 text-[#5db872] px-2 py-0.5 rounded">NET POSITIVE ROI</span>
            </div>

            <div class="grid grid-cols-2 gap-4">
              <div>
                <span class="text-[11px] text-[#a09d96] uppercase font-mono block">Hours Saved / Mo</span>
                <span id="calc-hours-saved" class="text-[28px] font-serif font-bold text-white">70 hrs</span>
              </div>
              <div>
                <span class="text-[11px] text-[#a09d96] uppercase font-mono block">Labor Value Saved</span>
                <span id="calc-dollars-saved" class="text-[28px] font-serif font-bold text-[#5db872]">$2,450</span>
              </div>
            </div>

            <div class="p-3 bg-[#1f1e1b] rounded border border-white/5 space-y-1 text-[11px] font-mono text-[#a09d96]">
              <div class="flex justify-between text-white">
                <span>Estimated Manual Errors Avoided:</span>
                <span id="calc-errors-blocked" class="text-[#cc785c] font-bold">~36 items</span>
              </div>
              <div class="flex justify-between">
                <span>Recommended Plan:</span>
                <span id="calc-plan-rec" class="text-[#5db8a6] font-semibold">Growth ($99/mo)</span>
              </div>
            </div>

            <a href="#pricing" class="w-full py-2.5 text-center text-[13px] font-medium bg-[#cc785c] hover:bg-[#a9583e] text-white rounded-[6px] transition">
              View Pricing for Your Volume →
            </a>
          </div>

        </div>
      </div>

    </div>
  </section>
  `;
}
