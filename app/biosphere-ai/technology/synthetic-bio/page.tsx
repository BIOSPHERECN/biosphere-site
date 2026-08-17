import { biosphereAi as site, biosphereAiTech } from "@/lib/site/biosphere-ai";
import { PageHero } from "@/components/sites/biosphere-ai";
import { LeadForm } from "@/components/site";

const tech = biosphereAiTech.items[2];

export default function SyntheticBioPage() {
  return (
    <>
      <PageHero badge="Technology / 03" title={tech.title} desc={tech.desc} />
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 md:grid-cols-3">
            {tech.metrics.map((m) => (
              <div key={m.label} className="rounded-site bg-ink p-8 text-center text-white">
                <div className="text-3xl font-bold text-brand">{m.value}</div>
                <div className="mt-2 text-sm text-white/60">{m.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold">产学研协同</h2>
              <ul className="mt-6 space-y-4">
                {tech.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-xs text-white">✓</span>
                    <span className="leading-relaxed text-ink/70">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-site border border-black/5 bg-accent p-8">
              <h3 className="text-lg font-bold">联合实验室</h3>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-ink/70">
                <p>与暨南大学共建联合实验室，聚焦重组蛋白与活性肽的合成生物学研究。</p>
                <p>rhCOLL 重组人源化胶原蛋白已实现中试量产，序列与人体同源。</p>
                <p>CTP 透皮修复肽体系完成 28 天人体功效验证，数据公开可查。</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <LeadForm site={site} />
    </>
  );
}
