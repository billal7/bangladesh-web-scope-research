export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-slate-950 text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(60rem 60rem at 20% -10%, rgba(16,185,129,0.25), transparent 55%), radial-gradient(50rem 50rem at 90% 20%, rgba(245,158,11,0.15), transparent 55%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-300">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Deep Market Research • Bangladesh 2026
        </p>
        <h1 className="mt-6 max-w-4xl text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl sm:leading-tight">
          How to Sell Websites to <span className="text-emerald-400">Bangladeshi Businesses</span> — the Opportunities, the Bugs Worth Fixing, and the Mindset You Must Master
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
          A researched, action-ready playbook for a "vibe-coding" web freelancer: which businesses have broken or missing
          websites, what specifically to fix, how to price, and — most importantly — how a Bangladeshi business owner
          actually thinks and says "yes."
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#opportunities"
            className="rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
          >
            📋 Target Sectors
          </a>
          <a
            href="#problems"
            className="rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            🐛 Bugs & Vulnerabilities
          </a>
          <a
            href="#mindset"
            className="rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            🧠 Owner Mindset
          </a>
          <a
            href="#scripts"
            className="rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            💬 Sales Scripts
          </a>
        </div>
      </div>
    </div>
  );
}
