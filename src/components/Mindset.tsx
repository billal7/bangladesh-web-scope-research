import { mindset } from "../data/report";
import { Section } from "./Section";

export default function Mindset() {
  return (
    <Section
      id="mindset"
      dark
      kicker="The psychology behind the sale"
      title="How a Bangladeshi business owner actually thinks — and how to sell to them"
      subtitle="Research on Bangladeshi business culture (Hofstede-based studies, negotiation research, and SME adoption studies) is remarkably consistent. Your biggest advantage isn't a cheaper quote — it's understanding these dynamics. Here's the mindset, and exactly what it means for your sales approach."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {mindset.map((m, i) => (
          <div key={m.trait} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-sm font-extrabold text-emerald-300">
                {i + 1}
              </div>
              <div>
                <h3 className="text-base font-bold text-white">{m.trait}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{m.meaning}</p>
              </div>
            </div>
            <div className="mt-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4">
              <div className="text-xs font-bold uppercase tracking-wide text-emerald-300">So you should…</div>
              <p className="mt-1 text-sm leading-relaxed text-emerald-50">{m.salesAction}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
