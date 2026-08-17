import { biosphereAi as site } from "@/lib/site/biosphere-ai";
import { PageHero } from "@/components/sites/biosphere-ai";
import { LeadForm } from "@/components/site";
import { BasesSection, GroupValues } from "@/components/blocks";

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="About"
        title="关于帛卉集团"
        desc="AI 驱动的草本生物科技美妆产业创新平台，让配方研发从实验室走向算法。"
      />
      <section className="bg-paper py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">五平台协同生态</h2>
            <p className="mt-4 leading-relaxed text-ink/60">
              BIOSPHERE-AI 作为科技中枢，向智造双翼 BEAUTY2OEM 与 SKIN2OEM 输出配方与技术；自有品牌 MEDIERBA
              与垂类科技品牌 BIOSPHERE-ORALCARE 作为终端验证，让研发数据直面消费者反馈，形成闭环。
            </p>
            <ul className="mt-6 space-y-3 text-sm text-ink/70">
              <li>· BIOSPHERE-AI —— 科技中枢：AI 配方引擎与三大自研技术</li>
              <li>· BEAUTY2OEM —— 智造出口：全品类 OEM / ODM 一站式交付</li>
              <li>· SKIN2OEM —— 智造纵深：护肤专精，数据驱动的配方研发</li>
              <li>· MEDIERBA —— 自有品牌：实验室里的自然</li>
              <li>· BIOSPHERE-ORALCARE —— 垂类科技：微生态口腔护理</li>
            </ul>
          </div>
          <div className="rounded-site bg-ink p-8 text-white">
            <div className="text-xs uppercase tracking-widest text-white/50">研发实力</div>
            <div className="mt-6 space-y-4">
              {[
                { v: "30+", l: "研发科学家与工程师" },
                { v: "暨南大学", l: "联合实验室共建" },
                { v: "13,000+", l: "独家配方数据库" },
                { v: "300+", l: "全球战略供应商" },
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
      <BasesSection />
      <GroupValues />
      <LeadForm site={site} />
    </>
  );
}
