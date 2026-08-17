import { skin2oem as site, skin2oemTechItems } from "@/lib/site/skin2oem";
import { PageHero } from "@/components/sites/skin2oem";
import { LeadForm } from "@/components/site";

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        badge="Technology"
        title="核心技术"
        desc="三大生物技术在护肤品的落地应用，从原料到剂型的完整能力。"
      />
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 md:grid-cols-3">
            {skin2oemTechItems.map((t) => (
              <div key={t.title} className="rounded-site border border-black/5 bg-paper p-8 shadow-sm">
                <h2 className="text-xl font-bold">{t.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">{t.desc}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {t.metrics.map((m) => (
                    <span key={m} className="rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand-deep">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <LeadForm site={site} />
    </>
  );
}
