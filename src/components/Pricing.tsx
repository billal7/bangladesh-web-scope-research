import { pricingInfo } from "../data/report";
import { Section } from "./Section";
import { cn } from "../utils/cn";

export default function Pricing() {
  return (
    <Section
      id="pricing"
      kicker="Position yourself right"
      title="Pricing in the Bangladeshi market"
      subtitle={pricingInfo.intro}
    >
      <div className="grid gap-5 md:grid-cols-3">
        {pricingInfo.tiers.map((t) => (
          <div
            key={t.name}
            className={cn(
              "relative flex flex-col rounded-2xl border p-6",
              t.highlight
                ? "border-emerald-400 bg-emerald-50 shadow-lg"
                : "border-slate-200 bg-white shadow-sm"
            )}
          >
            {t.highlight && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-600 px-3 py-1 text-[11px] font-bold text-white">
                Best fit for most clients
              </span>
            )}
            <h3 className="text-lg font-bold text-slate-900">{t.name}</h3>
            <div className="mt-2 text-2xl font-extrabold text-emerald-700">{t.priceBdt}</div>
            <div className="text-xs font-semibold text-slate-500">Delivery: {t.workDays}</div>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {t.includes.split("·").map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-emerald-600">✓</span>
                  <span>{item.trim()}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-4">
              <div className="rounded-lg bg-slate-100 p-3 text-xs font-medium text-slate-700">{t.best}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <h3 className="font-bold text-slate-900">😩 Don't sell one-offs — sell a care plan</h3>
        <p className="mt-1 text-sm leading-relaxed text-slate-600">
          Bangladeshi owners rarely touch their own site after launch. That's your ongoing revenue. Charge a flat monthly
          fee your client sees as "maintenance," and you (a) keep the relationship warm for future work and (b) get
          predictable income while your other clients refer you to friends.
        </p>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {pricingInfo.ongoing.items.map((item) => (
            <li key={item} className="flex gap-2 text-sm text-slate-700">
              <span className="text-emerald-600">↻</span>
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-center text-lg font-bold text-emerald-800">
          {pricingInfo.ongoing.price}
        </div>
      </div>
    </Section>
  );
}
