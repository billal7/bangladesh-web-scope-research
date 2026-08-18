import { commonObjections, outreachChannel } from "../data/report";
import { Section } from "./Section";

export default function Playbook() {
  return (
    <>
      <Section
        id="outreach"
        kicker="Where the leads are"
        title="5 proven places to find clients (ranked by effort vs. payoff)"
        subtitle="You can find businesses with no website or a broken one by systematically filtering local directories and maps. Ranked below, the walk-in/phone channel closes the fastest in Bangladesh — but the directory method gives you the biggest consistent pipeline."
      >
        <ol className="space-y-4">
          {outreachChannel.map((c) => (
            <li key={c.step} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-sm font-extrabold text-white">
                {c.step}
              </div>
              <div>
                <h3 className="font-bold text-slate-900">{c.channel}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">{c.action}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        id="objections"
        kicker="The inevitable pushback"
        title="How to handle the 6 objections you'll hear every time"
        subtitle="These aren't stuck-ups — they're risk-averse, value-focused owners who've been burned by gig sellers. Handle each objection with calm confidence and a number they can relate to, never with aggression or embarrassment."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {commonObjections.map((o) => (
            <div key={o.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-bold text-slate-900">"{o.title.replace(/^"(.*)"$/, "$1")}"</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{o.detail}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
