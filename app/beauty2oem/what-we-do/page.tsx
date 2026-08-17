import { beauty2oem as site, beauty2oemServices, beauty2oemProcess } from "@/lib/site/beauty2oem";
import { PageHero } from "@/components/sites/beauty2oem";
import { LeadForm } from "@/components/site";
import { ProcessSteps } from "@/components/blocks";

export default function WhatWeDoPage() {
  return (
    <>
      <PageHero
        badge="What We Do"
        title="我们能做什么"
        desc="制造、品牌开发与供应链三大服务，覆盖产品从 0 到 1 的全部环节。"
      />
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="space-y-6">
            {beauty2oemServices.map((s, i) => (
              <div key={s.title} className="grid gap-6 rounded-site border border-black/5 bg-paper p-8 shadow-sm md:grid-cols-[1fr_2fr]">
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold text-brand">{String(i + 1).padStart(2, "0")}</span>
                  <h2 className="text-2xl font-bold">{s.title}</h2>
                </div>
                <div>
                  <p className="leading-relaxed text-ink/60">{s.desc}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {s.points.map((p) => (
                      <li key={p} className="rounded-full bg-accent px-3 py-1 text-xs text-ink/70">
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ProcessSteps steps={beauty2oemProcess} />
      <LeadForm site={site} />
    </>
  );
}
