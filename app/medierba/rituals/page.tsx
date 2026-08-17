import { medierba as site, medierbaRituals } from "@/lib/site/medierba";
import { PageHero } from "@/components/sites/medierba";
import { LeadForm } from "@/components/site";

export default function RitualsPage() {
  return (
    <>
      <PageHero
        badge="Rituals"
        title="护肤仪式"
        desc="护肤不是任务，是一天中属于自己的安静时刻。"
      />
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="space-y-6">
            {medierbaRituals.map((r, i) => (
              <div key={r.title} className="grid gap-8 rounded-site border border-black/5 bg-paper p-10 shadow-sm md:grid-cols-[1fr_1fr]">
                <div>
                  <div className="font-display text-4xl text-brand">{String(i + 1).padStart(2, "0")}</div>
                  <h2 className="mt-3 font-display text-3xl font-semibold">{r.title}</h2>
                  <p className="mt-3 leading-relaxed text-ink/60">{r.desc}</p>
                </div>
                <ol className="space-y-4">
                  {r.steps.map((s, j) => (
                    <li key={s} className="flex items-center gap-4 rounded-site bg-accent p-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-soft font-display text-brand-deep">
                        {j + 1}
                      </span>
                      <span className="font-medium">{s}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>
      <LeadForm site={site} />
    </>
  );
}
