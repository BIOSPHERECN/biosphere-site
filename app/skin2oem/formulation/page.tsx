import { skin2oem as site, skin2oemFormulation } from "@/lib/site/skin2oem";
import { PageHero } from "@/components/sites/skin2oem";
import { LeadForm } from "@/components/site";

export default function FormulationPage() {
  return (
    <>
      <PageHero
        badge="Formulation R&D"
        title="配方研发体系"
        desc="30+ 项功效数据维度，体外与人体双重验证，让产品力可测量、可传播。"
      />
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl font-bold">功效数据维度</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skin2oemFormulation.dataDims.map((d) => (
              <div key={d.value} className="rounded-site border border-black/5 bg-paper p-6 shadow-sm">
                <div className="text-lg font-bold text-brand-deep">{d.value}</div>
                <div className="mt-2 text-sm leading-relaxed text-ink/60">{d.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-accent py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl font-bold">研发流水线</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {skin2oemFormulation.pipeline.map((p, i) => (
              <div key={p.title} className="rounded-site bg-paper p-6 shadow-sm">
                <div className="text-2xl font-bold text-brand">{String(i + 1).padStart(2, "0")}</div>
                <div className="mt-3 text-sm font-semibold">{p.title}</div>
                <div className="mt-2 text-xs leading-relaxed text-ink/60">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <LeadForm site={site} />
    </>
  );
}
