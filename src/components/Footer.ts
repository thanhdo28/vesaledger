export function renderFooter(): string {
  return `
  <footer class="py-16 bg-[#181715] text-[#a09d96] border-t border-white/10">
    <div class="max-w-[1240px] mx-auto px-6">
      <div class="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
        
        <div class="col-span-2">
          <div class="flex items-center gap-2.5 text-white mb-4">
            <svg class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11 2h2v7.5l5.3-5.3 1.4 1.4L14.5 11H22v2h-7.5l5.3 5.3-1.4 1.4L13 14.5V22h-2v-7.5l-5.3 5.3-1.4-1.4L9.5 13H2v-2h7.5L4.3 5.7l1.4-1.4L11 9.5V2z"/>
            </svg>
            <span class="text-[17px] font-semibold text-white">Vera<span class="text-[#cc785c]">Ledger</span></span>
          </div>
          <p class="text-[13px] text-[#a09d96] max-w-sm leading-relaxed mb-4">
            Autonomous multi-source financial and invoice auditor engineered for enterprise accuracy. Built with sub-second Small VLMs (&lt; 1s/page, &gt; 98% accuracy).
          </p>
          <div class="text-[11px] font-mono text-[#6c6a64]">
            San Francisco, CA • Delaware C-Corp
          </div>
        </div>

        <div>
          <h4 class="text-[13px] font-semibold text-white uppercase tracking-wider font-mono mb-4">Platform</h4>
          <ul class="space-y-2.5 text-[13px]">
            <li><a href="#automation" class="hover:text-white transition">Invoice Automation</a></li>
            <li><a href="#pipeline" class="hover:text-white transition">4-Way Match Engine</a></li>
            <li><a href="#workbench" class="hover:text-white transition">Workbench Demo</a></li>
            <li><a href="#connectors" class="hover:text-white transition">ERP Connectors</a></li>
            <li><a href="#security" class="hover:text-white transition">Zero Retention SLA</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-[13px] font-semibold text-white uppercase tracking-wider font-mono mb-4">Models</h4>
          <ul class="space-y-2.5 text-[13px]">
            <li><a href="#" class="hover:text-white transition">Small VLM (Fast)</a></li>
            <li><a href="#" class="hover:text-white transition">Sonnet 3.5 Core</a></li>
            <li><a href="#" class="hover:text-white transition">Claude 3 Opus</a></li>
            <li><a href="#" class="hover:text-white transition">Computer Use API</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-[13px] font-semibold text-white uppercase tracking-wider font-mono mb-4">Compliance</h4>
          <ul class="space-y-2.5 text-[13px]">
            <li><a href="#" class="hover:text-white transition">SOC 2 Type II</a></li>
            <li><a href="#" class="hover:text-white transition">ISO 27001</a></li>
            <li><a href="#" class="hover:text-white transition">GDPR / DPA</a></li>
            <li><a href="#" class="hover:text-white transition">Security Whitepaper</a></li>
          </ul>
        </div>

      </div>

      <div class="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[12px] text-[#6c6a64] gap-4">
        <div>© 2026 VeraLedger Technologies, Inc. All rights reserved.</div>
        <div class="flex items-center gap-6">
          <a href="#" class="hover:text-white transition">Privacy Policy</a>
          <a href="#" class="hover:text-white transition">Terms of Service</a>
          <a href="#" class="hover:text-white transition">Security Hall of Fame</a>
        </div>
      </div>
    </div>
  </footer>
  `;
}
