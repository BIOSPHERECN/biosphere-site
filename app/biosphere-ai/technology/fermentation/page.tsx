import { biosphereAi as site, biosphereAiTech } from "@/lib/site/biosphere-ai";
import { PageHero } from "@/components/sites/biosphere-ai";
import { LeadForm } from "@/components/site";

const tech = biosphereAiTech.items[0];

export default function FermentationPage() {
  return (
    <>
      <PageHero badge="Technology / 01" title={tech.title} desc={tech.desc} />
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
              <h2 className="text-2xl font-bold">工艺链路</h2>
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
              <h3 className="text-lg font-bold">工程化控制</h3>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-ink/70">
                <p>菌株库包含 200+ 株定向筛选菌株，覆盖人参、灵芝、积雪草等东方草本基质。</p>
                <p>发酵过程以在线监测记录温度、pH、溶氧与代谢物曲线，每一批次均可追溯。</p>
                <p>发酵终点经活性物含量与安全性双检后释放，进入低温封装环节。</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <LeadForm site={site} />
    </>
  );
}
