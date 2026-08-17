import { skin2oem as site } from "@/lib/site/skin2oem";
import { PageHero } from "@/components/sites/skin2oem";
import { LeadForm } from "@/components/site";
import { GroupValues } from "@/components/blocks";

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="About"
        title="护肤专精 · 帛卉集团"
        desc="我们只做护肤：把集团三大生物技术聚焦到护肤剂的每一道配方。"
      />
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold">为什么只做护肤</h2>
              <p className="mt-4 leading-relaxed text-ink/60">
                聚焦带来纵深。我们把全部研发资源投入护肤品类：3,000+ 护肤配方、
                30+ 功效数据维度、暨南大学联合实验室的活性物研究——
                用深度换数据的可信度，用数据换品牌的竞争力。
              </p>
              <div className="mt-8 space-y-4">
                {[
                  { t: "研发团队", d: "30+ 科学家与工程师，专注护肤活性物与剂型" },
                  { t: "功效闭环", d: "体外筛选 → 人体验证 → 数据报告，全链路交付" },
                  { t: "技术底座", d: "发酵、低温闪萃、合成生物三大技术直连配方" },
                ].map((m) => (
                  <div key={m.t} className="rounded-site bg-accent p-5">
                    <div className="text-sm font-bold">{m.t}</div>
                    <div className="mt-1 text-sm text-ink/60">{m.d}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-site bg-ink p-8 text-white">
              <div className="text-xs uppercase tracking-widest text-white/50">研发版图</div>
              <div className="mt-6 space-y-4">
                {[
                  { v: "3,000+", l: "护肤配方库" },
                  { v: "95%+", l: "活性保留率" },
                  { v: "30+", l: "功效数据维度" },
                  { v: "28天", l: "人体功效测试" },
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
      <GroupValues />
      <LeadForm site={site} />
    </>
  );
}
