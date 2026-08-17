import { biosphereAi as site, biosphereAiResources } from "@/lib/site/biosphere-ai";
import { PageHero } from "@/components/sites/biosphere-ai";
import { LeadForm } from "@/components/site";

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        badge="Resources"
        title="资源中心"
        desc="技术笔记、应用笔记、白皮书与联合论文，技术实力的公开见证。"
      />
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 md:grid-cols-2">
            {biosphereAiResources.map((r) => (
              <article key={r.title} className="rounded-site border border-black/5 bg-paper p-8 shadow-sm">
                <div className="inline-block rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand-deep">
                  {r.type}
                </div>
                <h2 className="mt-4 text-lg font-bold leading-snug">{r.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">{r.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <LeadForm site={site} />
    </>
  );
}
