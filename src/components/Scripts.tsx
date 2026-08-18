import { salesScript } from "../data/report";
import { Section } from "./Section";

export default function Scripts() {
  return (
    <Section
      id="scripts"
      kicker="Word-for-word, ready to adapt"
      title="Sales scripts for the full journey"
      subtitle="Written to match Bangladeshi communication culture: polite greeting (Assalamu Alaikum), compliment-first, concrete proof, fixed prices, bKash-based deposits, and respectful follow-ups. Adapt names and details freely."
    >
      <div className="grid gap-5">
        {salesScript.map((s) => (
          <article key={s.scene} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold text-white">{s.scene}</span>
            </div>
            <div className="mt-4 rounded-xl border-l-4 border-emerald-500 bg-emerald-50 p-4 text-sm leading-relaxed text-emerald-950">
              {s.text}
            </div>
            <div className="mt-3 rounded-xl bg-slate-50 p-4">
              <div className="text-xs font-bold uppercase tracking-wide text-slate-500">Why this works</div>
              <p className="mt-1 text-sm text-slate-700">{s.why}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
