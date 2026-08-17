import { oralcare as site, oralcareScience } from "@/lib/site/oralcare";
import { PageHero } from "@/components/sites/oralcare";
import { LeadForm, SectionTitle } from "@/components/site";

export default function SciencePage() {
  return (
    <>
      <PageHero
        badge="Science"
        title="口腔科学"
        desc="以微生态为核心的口腔护理理念，建立在可测量的科学之上。"
      />
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle kicker="Principles" title="三大科学原则" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {oralcareScience.principles.map((p, i) => (
              <div key={p.title} className="rounded-site border border-black/5 bg-paper p-8 shadow-sm">
                <div className="text-3xl font-bold text-brand">{String(i + 1).padStart(2, "0")}</div>
                <h2 className="mt-4 text-lg font-bold">{p.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-accent py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle title="临床证据" />
          <div className="mt-10 grid grid-cols-3 gap-4 text-center">
            {oralcareScience.evidence.map((e) => (
              <div key={e.label} className="rounded-site bg-paper p-8 shadow-sm">
                <div className="text-3xl font-bold text-brand-deep">{e.value}</div>
                <div className="mt-2 text-sm text-ink/60">{e.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <LeadForm site={site} />
    </>
  );
}
