import {
  skin2oem as site,
  skin2oemCapabilities,
  skin2oemFormulation,
  skin2oemIngredients,
} from "@/lib/site/skin2oem";
import { SkHero, SkStats, SkBestSellers, SkConcerns, SkTeam } from "@/components/sites/skin2oem";
import { LeadForm, SectionTitle } from "@/components/site";
import { CapabilityGrid, IngredientGrid } from "@/components/blocks";
import { biosphereAiTech } from "@/lib/site/biosphere-ai";

export default function Skin2oemHome() {
  return (
    <>
      <SkHero site={site} />
      <SkBestSellers />
      <SkConcerns />
      <SkStats stats={site.stats} />

      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle kicker="R&D PIPELINE" title="数据驱动的配方研发" desc="每一道配方都经过体外与人体双重功效验证。" />
          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {skin2oemFormulation.pipeline.map((p, i) => (
              <div key={p.title} className="rounded-site border-2 border-black/5 bg-paper p-6">
                <div className="text-2xl font-black text-brand" style={{ fontFamily: "'JetBrains Mono','Consolas',monospace" }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="mt-3 text-sm font-bold">{p.title}</div>
                <div className="mt-2 text-xs leading-relaxed text-ink/60">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CapabilityGrid items={skin2oemCapabilities} title="护肤剂型矩阵" desc="精华、面霜、面膜、洁面四线专精。" />
      <IngredientGrid items={skin2oemIngredients} title="新草本原料体系" />
      <section className="bg-accent py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle kicker="TECH" title="核心技术底座" desc="三大生物技术直连配方，为产品力提供底层支撑。" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {biosphereAiTech.items.map((t) => (
              <div key={t.title} className="rounded-site border-2 border-black/5 bg-paper p-8">
                <div className="text-xs font-bold uppercase tracking-widest text-brand">{t.subtitle}</div>
                <h3 className="mt-3 text-lg font-extrabold">{t.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">{t.desc}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {t.metrics.map((m) => (
                    <span key={m.label} className="rounded-full bg-brand-soft px-3 py-1 text-xs font-bold text-brand-deep">
                      {m.value} {m.label}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SkTeam />
      <LeadForm site={site} />
    </>
  );
}
