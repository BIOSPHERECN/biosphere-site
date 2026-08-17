import { beauty2oem as site } from "@/lib/site/beauty2oem";
import { PageHero } from "@/components/sites/beauty2oem";
import { LeadForm } from "@/components/site";
import { BasesSection } from "@/components/blocks";

export default function GlobalPage() {
  return (
    <>
      <PageHero
        badge="Global"
        title="全球布局"
        desc="广州与印尼双基地协同，覆盖中国本土与东南亚出口市场。"
      />
      <BasesSection />
      <section className="bg-accent py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl font-bold">出口服务</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {["跨境合规备案", "多语言标签与文档", "国际物流与清关"].map((s) => (
              <div key={s} className="rounded-site bg-paper p-6 shadow-sm">
                <div className="text-sm font-semibold">{s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <LeadForm site={site} />
    </>
  );
}
