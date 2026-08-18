import { Section } from "./Section";

const steps = [
  {
    title: "Build 2–3 demo sites now",
    detail:
      "Make polished demos for your 2–3 best sectors (e.g., a restaurant landing + a clinic + a boutique). Bangladeshi owners buy what they can SEE on a phone. A ready demo of their own industry instantly removes 'what will I get?' uncertainty.",
  },
  {
    title: "Pick one area & list 50 targets",
    detail:
      "Choose a high-density commercial area (Uttara, Dhanmondi, Banani, Mirpur, Gulshan — or your local district's main market). List 50 restaurants/clinics/salons with weak or no sites from Google Maps + Facebook.",
  },
  {
    title: "Run the 60-second free audit",
    detail:
      "Visit in person or call. Use the audit script — compliment, open their site on their phone, show the slow/Not-Secure/broken issues, tie each to money lost. Leave a card. You get clients from the first handful of conversations.",
  },
  {
    title: "Offer a low-risk first step",
    detail:
      "Lower their fear: 50% / 50% split via bKash, fixed price, a small one-page tier, and a satisfaction promise. Their first 'yes' is typically small — then they trust you for the bigger rebuild and the monthly care plan.",
  },
  {
    title: "Systematize with a care plan & referrals",
    detail:
      "Deliver fast and over-deliver on one client. Then ask politely for a referral or a 'testimonial' you can show the next prospect. In a relationship-driven market, referrals are how your pipeline compounds.",
  },
];

export default function ActionPlan() {
  return (
    <Section
      id="action-plan"
      kicker="Your 30-day start"
      title="A concrete action plan to get your first clients"
    >
      <div className="space-y-4">
        {steps.map((s, i) => (
          <div key={s.title} className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:flex-row sm:items-start">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-base font-extrabold text-emerald-400">
              {i + 1}
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">{s.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">{s.detail}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
        <h3 className="font-bold text-emerald-900">✅ The realistic first 90 days</h3>
        <ul className="mt-3 grid gap-2 text-sm text-emerald-800 sm:grid-cols-2">
          <li>• Week 1–2: Demos + target list of 50</li>
          <li>• Week 3–6: 20+ audit conversations → 2–4 sales</li>
          <li>• Week 6–12: Deliver 3–4 sites (vibe-speed), set up care plans</li>
          <li>• Month 3+: Referrals + repeat care-plan income</li>
        </ul>
        <p className="mt-4 text-sm leading-relaxed text-emerald-900">
          At a typical <strong>৳30,000–60,000</strong> Business tier per site plus <strong>৳1,500–5,000/month</strong> care
          plans, even 3–4 active clients can generate <strong>৳1.5–2.5+ lakh</strong> in the first quarter — with compounding
          referrals behind them.
        </p>
      </div>
    </Section>
  );
}
