import { beauty2oem as site } from "@/lib/site/beauty2oem";
import { PageHero } from "@/components/sites/beauty2oem";
import { LeadForm } from "@/components/site";
import { BasesSection, GroupValues } from "@/components/blocks";

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="About"
        title="帛卉集团 · 智造平台"
        desc="以 15 条智能产线与 20,000㎡ 双基地，服务全球品牌的全品类智造伙伴。"
      />
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold">我们的使命</h2>
              <p className="mt-4 leading-relaxed text-ink/60">
                把复杂的制造，做成透明、高效、可追溯的一条线。从配方到成品，
                从广州到印尼，每一批次都有数据记录、每一支产品都有标准背书。
              </p>
              <div className="mt-8 space-y-4">
                {[
                  { year: "2019", ev: "帛卉集团成立，广州基地投产" },
                  { year: "2021", ev: "通过 ISO22716 + GMPC 双认证" },
                  { year: "2023", ev: "印尼基地启动，布局东南亚出口" },
                  { year: "2025", ev: "与暨南大学共建联合实验室" },
                  { year: "2026", ev: "印尼二期投产，产能提升 40%" },
                ].map((m) => (
                  <div key={m.year} className="flex gap-6 border-b border-black/5 pb-4">
                    <span className="w-16 font-bold text-brand">{m.year}</span>
                    <span className="text-sm text-ink/70">{m.ev}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-site bg-ink p-8 text-white">
              <div className="text-xs uppercase tracking-widest text-white/50">平台定位</div>
              <div className="mt-6 space-y-4">
                {[
                  { v: "全品类", l: "护肤 / 彩妆 / 口腔 / 个护" },
                  { v: "双基地", l: "广州 + 印尼 20,000㎡" },
                  { v: "双认证", l: "ISO22716 + GMPC" },
                  { v: "300+", l: "战略供应商" },
                ].map((d) => (
                  <div key={d.l} className="flex items-baseline justify-between border-b border-white/10 pb-3">
                    <span className="text-2xl font-bold text-brand">{d.v}</span>
                    <span className="text-sm text-white/60">{d.l}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <BasesSection />
      <GroupValues />
      <LeadForm site={site} />
    </>
  );
}
