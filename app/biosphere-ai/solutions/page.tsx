import { biosphereAi as site, biosphereAiSolutions } from "@/lib/site/biosphere-ai";
import { PageHero } from "@/components/sites/biosphere-ai";
import { LeadForm, SectionTitle } from "@/components/site";

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        badge="Solutions"
        title="面向品牌的解决方案"
        desc="无论从零起步还是技术升级，总有一种合作方式适合你的品牌。"
      />
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 md:grid-cols-3">
            {biosphereAiSolutions.map((s, i) => (
              <div key={s.title} className="flex flex-col rounded-site border border-black/5 bg-paper p-8 shadow-sm">
                <div className="text-3xl font-bold text-brand">{String(i + 1).padStart(2, "0")}</div>
                <h2 className="mt-4 text-xl font-bold">{s.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/60">{s.desc}</p>
                <ul className="mt-5 space-y-2 text-sm text-ink/70">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="text-brand">·</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-accent py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle title="合作流程" desc="从第一次沟通到产品落地，流程透明可预期。" />
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {["需求诊断", "方案与报价", "签约与排期", "交付与陪跑"].map((s, i) => (
              <div key={s} className="rounded-site bg-paper p-6 text-center shadow-sm">
                <div className="text-2xl font-bold text-brand">{String(i + 1).padStart(2, "0")}</div>
                <div className="mt-2 text-sm font-semibold">{s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <LeadForm site={site} />
    </>
  );
}
