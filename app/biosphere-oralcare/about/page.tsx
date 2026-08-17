import { oralcare as site } from "@/lib/site/oralcare";
import { PageHero } from "@/components/sites/oralcare";
import { LeadForm } from "@/components/site";

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="About"
        title="帛卉集团 · 口腔科技"
        desc="微生态口腔护理的垂类科技平台，让口腔护理成为可测量的科学。"
      />
      <section className="bg-paper py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">从口腔微生态出发</h2>
            <p className="mt-4 leading-relaxed text-ink/60">
              口腔是人体微生态最复杂的器官之一。我们放弃"杀死一切细菌"的传统路径，
              选择以益生元喂养有益菌、以 n-Ha 修复釉质、以草本提取温和协同——
              这是帛卉集团在垂类科技的又一次纵深探索。
            </p>
            <div className="mt-8 space-y-4">
              {[
                { t: "集团背景", d: "帛卉集团五大平台之一，共享研发与智造体系" },
                { t: "研发团队", d: "30+ 口腔护理研发科学家" },
                { t: "制造体系", d: "集团 20,000㎡ 双基地，ISO22716 + GMPC 认证" },
              ].map((m) => (
                <div key={m.t} className="rounded-site bg-accent p-5">
                  <div className="text-sm font-bold">{m.t}</div>
                  <div className="mt-1 text-sm text-ink/60">{m.d}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-site bg-ink p-8 text-white">
            <div className="text-xs uppercase tracking-widest text-white/50">平台数据</div>
            <div className="mt-6 space-y-4">
              {[
                { v: "7天", l: "菌群平衡改善周期" },
                { v: "0酒精", l: "全系配方" },
                { v: "30+", l: "口腔研发团队" },
                { v: "300+", l: "集团战略供应商" },
              ].map((d) => (
                <div key={d.l} className="flex items-baseline justify-between border-b border-white/10 pb-3">
                  <span className="text-2xl font-bold text-brand">{d.v}</span>
                  <span className="text-sm text-white/60">{d.l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <LeadForm site={site} />
    </>
  );
}
