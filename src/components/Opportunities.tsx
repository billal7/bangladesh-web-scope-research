import { useMemo, useState } from "react";
import { opportunities, type Opportunity } from "../data/report";
import { Section } from "./Section";
import { cn } from "../utils/cn";

const FILTERS = ["All", "Gold", "Silver", "Bronze"] as const;

function TierBadge({ tier }: { tier: Opportunity["tier"] }) {
  const map = {
    Gold: { label: "★ Best opportunity", cls: "border-amber-400 bg-amber-100 text-amber-800" },
    Silver: { label: "● Good opportunity", cls: "border-slate-300 bg-slate-100 text-slate-700" },
    Bronze: { label: "○ Niche / seasonal", cls: "border-orange-300 bg-orange-100 text-orange-800" },
  } as const;
  return (
    <span className={cn("inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-bold", map[tier].cls)}>
      {map[tier].label}
    </span>
  );
}

function IntentDot({ intent }: { intent: Opportunity["intent"] }) {
  const color = intent === "High" ? "bg-emerald-500" : intent === "Medium" ? "bg-amber-500" : intent === "Low-Med" ? "bg-orange-400" : "bg-slate-400";
  return (
    <span className={cn("inline-flex items-center gap-1.5 text-xs font-medium text-slate-600")}>
      <span className={cn("h-2 w-2 rounded-full", color)} />
      {intent} intent
    </span>
  );
}

export default function Opportunities() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");

  const list = useMemo(
    () => (filter === "All" ? opportunities : opportunities.filter((o) => o.tier === filter)),
    [filter]
  );

  return (
    <Section
      id="opportunities"
      kicker="Where the money is"
      title="The 12 target sectors with broken or missing websites"
      subtitle="Ranked by how many businesses lack a proper site, how much they'd pay, and how motivated they are. 'No-website rate' comes from SME industry data — the higher the rate, the more businesses you can treat as net-new clients instead of defending against an existing site."
    >
      <div className="mb-6 flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-semibold transition",
              filter === f
                ? "border-emerald-600 bg-emerald-600 text-white"
                : "border-slate-200 bg-white text-slate-600 hover:border-emerald-400 hover:text-emerald-700"
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {list.map((o) => {
          return (
            <article
              key={o.id}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="text-3xl">{o.emoji}</div>
                  <div>
                    <h3 className="text-lg font-bold leading-tight text-slate-900">{o.sector}</h3>
                    <p className="mt-0.5 text-xs font-medium text-slate-500">
                      Businesses lacking a proper site: <span className="font-bold text-slate-700">{o.noWebsiteRate}</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-3 flex flex-wrap items-center gap-2">
                <TierBadge tier={o.tier} />
                <IntentDot intent={o.intent} />
                <span className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-[11px] font-semibold text-slate-700">
                  Budget: {o.avgBudget}
                </span>
              </div>

              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wide text-emerald-700">Why they need one</dt>
                  <dd className="mt-1 leading-relaxed text-slate-700">{o.whyNeed}</dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wide text-rose-600">Their pain point</dt>
                  <dd className="mt-1 leading-relaxed text-slate-700">{o.painPoint}</dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wide text-slate-500">What a site gets them</dt>
                  <dd className="mt-1 leading-relaxed text-slate-700">{o.websiteValue}</dd>
                </div>
              </dl>

              <div className="mt-auto pt-4">
                <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-3">
                  <div className="text-xs font-bold text-emerald-800">Your pitch / offer</div>
                  <div className="mt-0.5 text-sm font-medium text-emerald-900">{o.idealOffer}</div>
                  <div className="mt-1 text-xs font-semibold text-emerald-700">→ Sellable at {o.productPrice}</div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
