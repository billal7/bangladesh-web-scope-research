import { marketStats } from "../data/report";
import { Section } from "./Section";

export default function MarketOverview() {
  return (
    <Section
      id="overview"
      kicker="Why this market is wide open"
      title="Only about a third of Bangladeshi SMEs have a professional website — and most owners hate the one they have."
      subtitle="The research is consistent across sources: a 2025 DataReportal study found just 36% of SMEs have a professional site, 87% of owners say their existing site needs work, and most of their customers (98%) browse on mobile. Compare that to what a website delivers — on average 42% more revenue — and you have a classic untapped market."
    >
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {marketStats.map((s) => (
          <div
            key={s.label}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
          >
            <div className="text-3xl font-extrabold text-emerald-600">{s.value}</div>
            <div className="mt-1 text-sm font-semibold text-slate-800">{s.label}</div>
            <div className="mt-1 text-xs leading-relaxed text-slate-500">{s.note}</div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
        <h3 className="font-bold text-emerald-900">The one-line opportunity</h3>
        <p className="mt-1 text-sm leading-relaxed text-emerald-800">
          Bangladeshi consumers have moved online (<strong>89%</strong> research before buying), but the tiny businesses they
          shop at largely haven't. This gap — between a mobile-first, searching customer base and a Facebook-only,
          no-website SME base — is exactly what you, as a vibe-coder with fast turnaround, are positioned to bridge with
          fast, reliable, mobile-first sites at a fraction of agency cost.
        </p>
      </div>
    </Section>
  );
}
