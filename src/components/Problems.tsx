import { siteProblems } from "../data/report";
import { Section } from "./Section";
import { cn } from "../utils/cn";

const sevCls: Record<string, string> = {
  Critical: "bg-rose-100 text-rose-700 border-rose-300",
  High: "bg-amber-100 text-amber-700 border-amber-300",
  Medium: "bg-sky-100 text-sky-700 border-sky-300",
};

export default function Problems() {
  return (
    <Section
      id="problems"
      kicker="What to look for & how to pitch it"
      title="The 12 website bugs, vulnerabilities & failures you can detect and fix"
      subtitle="Research shows the most common Bangladeshi SME website failures: 12-second mobile loads, no SSL, copied content, zero SEO, broken forms, and gig-scam sites sold on Fiverr that were never finished. Each one is a sales conversation starter. This is where 'vibe coding' shines — you can rebuild fast, secure, mobile-first sites in days."
    >
      <div className="mb-6 rounded-2xl border border-rose-200 bg-rose-50 p-5">
        <h3 className="font-bold text-rose-900">🔍 Your free-audit cheat sheet</h3>
        <p className="mt-1 text-sm leading-relaxed text-rose-800">
          Before any meeting, type "{'{'}business type{'}'} + {'{'}'area name{'}'}{" "}
          {'}'} into Google. Note which businesses don't appear at all, appear without a website link, or link to a slow/Not-Secure site. Those are your warmest leads. In-person, open their site on <em>their</em> phone and walk them through these issues one by one.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {siteProblems.map((p) => (
          <article key={p.title} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-sm font-bold leading-snug text-slate-900">{p.title}</h3>
              <span className={cn("shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase", sevCls[p.severity])}>
                {p.severity}
              </span>
            </div>
            <p className="mt-2 text-xs font-semibold text-emerald-700">
              <span className="font-bold">How to detect:</span> <span className="font-normal text-slate-600">{p.detect}</span>
            </p>
            <p className="mt-2 rounded-lg bg-slate-50 p-2.5 text-xs leading-relaxed text-slate-700 italic">
              "{p.pitch}"
            </p>
            <p className="mt-auto pt-3 text-xs text-slate-600">
              <span className="font-bold text-slate-800">Your fix:</span> {p.vibeFix}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
