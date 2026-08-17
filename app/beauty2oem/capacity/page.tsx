import { beauty2oem as site, beauty2oemCapacity } from "@/lib/site/beauty2oem";
import { PageHero } from "@/components/sites/beauty2oem";
import { LeadForm } from "@/components/site";
import { BasesSection } from "@/components/blocks";

export default function CapacityPage() {
  return (
    <>
      <PageHero
        badge="Capacity"
        title="产能实力"
        desc="15 条智能产线、50 万片面膜日产能，弹性产能应对爆单与梯度增长。"
      />
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 md:grid-cols-3">
          {beauty2oemCapacity.map((c) => (
            <div key={c.label} className="rounded-site border border-white/10 bg-white/5 p-8 text-center">
              <div className="text-3xl font-bold text-brand">{c.value}</div>
              <div className="mt-2 text-sm text-white/60">{c.label}</div>
            </div>
          ))}
        </div>
      </section>
      <BasesSection />
      <LeadForm site={site} />
    </>
  );
}
