import { biosphereAi as site, biosphereAiTech } from "@/lib/site/biosphere-ai";
import { PageHero } from "@/components/sites/biosphere-ai";
import { LeadForm } from "@/components/site";

const tech = biosphereAiTech.items[1];

export default function FlashExtractionPage() {
  return (
    <>
      <PageHero badge="Technology / 02" title={tech.title} desc={tech.desc} />
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
              <h3 className="text-lg font-bold">为什么低温</h3>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-ink/70">
                <p>高温提取会使茶多酚、花青素等热敏成分降解 30% 以上。</p>
                <p>0-10℃ 低温梯度闪萃以负压降低溶剂沸点，全程低温完成提取。</p>
                <p>提取液即时进入封装环节，活性成分保留率稳定在 95% 以上。</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <LeadForm site={site} />
    </>
  );
}
