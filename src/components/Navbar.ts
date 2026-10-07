export function renderNavbar(): string {
  return `
  <header class="sticky top-0 z-50 bg-[#faf9f5]/90 backdrop-blur-md border-b border-[#e6dfd8]">
    <div class="max-w-[1240px] mx-auto px-6 h-16 flex items-center justify-between">
      <!-- Logo / Wordmark -->
      <div class="flex items-center gap-3">
        <svg class="anthropic-spike text-[#141413] w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11 2h2v7.5l5.3-5.3 1.4 1.4L14.5 11H22v2h-7.5l5.3 5.3-1.4 1.4L13 14.5V22h-2v-7.5l-5.3 5.3-1.4-1.4L9.5 13H2v-2h7.5L4.3 5.7l1.4-1.4L11 9.5V2z"/>
        </svg>
        <div class="flex items-baseline gap-1.5">
          <span class="text-[17px] font-semibold text-[#141413] tracking-tight">Vera<span class="text-[#cc785c]">Ledger</span></span>
          <span class="text-[11px] font-mono text-[#8e8b82] tracking-wider uppercase">v2.4</span>
        </div>
        <div class="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#efe9de] text-[#141413] text-[12px] font-medium border border-[#e6dfd8] ml-2">
          <span class="w-1.5 h-1.5 rounded-full bg-[#5db872]"></span>
          Compact VLM · Sub-Second Inference
        </div>
      </div>

      <!-- Links -->
      <nav class="hidden lg:flex items-center gap-6 text-[14px] font-medium text-[#3d3d3a]">
        <a href="#automation" class="hover:text-[#141413] transition text-[#cc785c]">Invoice Automation</a>
        <a href="#pipeline" class="hover:text-[#141413] transition">Engine</a>
        <a href="#workbench" class="hover:text-[#141413] transition">Live Sandbox</a>
        <a href="#roi-calculator" class="hover:text-[#141413] transition">ROI Calculator</a>
        <a href="#pricing" class="hover:text-[#141413] transition">Pricing ($20/mo)</a>
        <a href="#security" class="hover:text-[#141413] transition">Security</a>
      </nav>

      <!-- Right cluster -->
      <div class="flex items-center gap-4">
        <a href="#pricing" class="hidden md:inline-block text-[14px] font-medium text-[#141413] hover:text-[#cc785c] transition">
          Sign in
        </a>
        <a href="#pricing" class="px-5 py-2.5 text-[14px] font-medium bg-[#cc785c] hover:bg-[#a9583e] active:bg-[#a9583e] text-white rounded-[8px] transition shadow-sm">
          Start Free Trial
        </a>
      </div>
    </div>
  </header>
  `;
}
