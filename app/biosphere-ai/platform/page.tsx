import { biosphereAi as site, biosphereAiPlatform } from "@/lib/site/biosphere-ai";
import { PageHero } from "@/components/sites/biosphere-ai";
import { SectionTitle, LeadForm } from "@/components/site";

export default function PlatformPage() {
  return (
    <>
      <PageHero
        badge="Platform"
        title="AI 配方研发平台"
        desc="以 13,000+ 独家配方数据库为训练基底，四个模块连接洞察、研发、制造与营销。"
      />
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="space-y-6">
            {biosphereAiPlatform.modules.map((m, i) => (
              <div key={m.title} className="grid gap-6 rounded-site border border-black/5 bg-paper p-8 shadow-sm md:grid-cols-[1fr_2fr]">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-brand">{String(i + 1).padStart(2, "0")}</span>
                    <h2 className="text-2xl font-bold">{m.title}</h2>
                  </div>
                </div>
                <div>
                  <p className="leading-relaxed text-ink/60">{m.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {m.tags.map((t) => (
                      <span key={t} className="rounded-full bg-accent px-3 py-1 text-xs text-ink/70">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-accent py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle title="数据即资产" desc="配方、功效、趋势与供应链数据四维打标，沉淀为可复用的产品力。" />
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { v: "13,000+", l: "配方数据" },
              { v: "1.2亿+", l: "消费者触点" },
              { v: "300+", l: "供应商原料" },
              { v: "30+", l: "功效维度" },
            ].map((d) => (
              <div key={d.l} className="rounded-site bg-paper p-6 text-center shadow-sm">
                <div className="text-2xl font-bold text-brand-deep">{d.v}</div>
                <div className="mt-2 text-sm text-ink/60">{d.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <LeadForm site={site} />
    </>
  );
}
