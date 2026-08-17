import {
  beauty2oem as site,
  beauty2oemCapabilities,
  beauty2oemServices,
  beauty2oemProcess,
  beauty2oemNews,
} from "@/lib/site/beauty2oem";
import { B2Hero, B2Stats, B2CapabilityBanner } from "@/components/sites/beauty2oem";
import { LeadForm, SectionTitle } from "@/components/site";
import { ProcessSteps, NewsGrid, SupplierWall } from "@/components/blocks";

export default function Beauty2oemHome() {
  return (
    <>
      <B2Hero site={site} />
      <B2Stats stats={site.stats} />
      <B2CapabilityBanner items={beauty2oemCapabilities} />
      <SupplierWall />

      <section className="bg-accent py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle kicker="What We Do" title="三大服务板块" desc="制造、品牌开发与供应链，全链路覆盖。" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {beauty2oemServices.map((s, i) => (
              <div key={s.title} className="overflow-hidden rounded-site border-2 border-black/5 bg-paper">
                {s.img && (
                  <img
                    src={s.img}
                    alt={s.title}
                    className="aspect-[16/10] w-full object-cover"
                    loading="lazy"
                  />
                )}
                <div className="p-8">
                  <div className="text-4xl font-black text-brand">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="mt-4 text-lg font-extrabold">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/60">{s.desc}</p>
                  <ul className="mt-5 space-y-2 text-sm text-ink/70">
                    {s.points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span className="text-brand">■</span>
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
      <NewsGrid items={beauty2oemNews} />
      <LeadForm site={site} />
    </>
  );
}
