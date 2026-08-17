import { skin2oem as site, skin2oemCases } from "@/lib/site/skin2oem";
import { PageHero } from "@/components/sites/skin2oem";
import { LeadForm } from "@/components/site";

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        badge="Case Studies"
        title="合作案例"
        desc="匿名案例，展示从配方到上市的全链路能力。"
      />
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 md:grid-cols-3">
            {skin2oemCases.map((c) => (
              <div key={c.name} className="rounded-site border border-black/5 bg-paper p-8 shadow-sm">
                <h2 className="text-lg font-bold leading-snug">{c.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">{c.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <span key={t} className="rounded-full bg-accent px-3 py-1 text-xs text-ink/70">
                      {t}
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
