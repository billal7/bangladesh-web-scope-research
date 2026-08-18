export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 py-10 text-white">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-2 text-sm font-bold">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500 text-base font-extrabold text-slate-950">৳</span>
            BD Web Sales Playbook
          </div>
          <p className="max-w-2xl text-sm leading-relaxed text-slate-400">
            A consolidated research report on selling websites to Bangladeshi SME business owners. Figures on website
            adoption, no-website rates, owner dissatisfaction, and revenue impact are drawn from DataReportal 2025, SME
            industry research, Zyro, and local pricing guides cited in the source research. Trade prices are directional
            market estimates.
          </p>
          <p className="text-xs text-slate-500">
            Tip: Remember "Assalamu Alaikum," respect hierarchy, lower the risk, sell fast phone-call wins, take bKash, and
            follow up politely. Trust is everything here.
          </p>
        </div>
      </div>
    </footer>
  );
}
