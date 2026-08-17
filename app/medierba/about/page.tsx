import { medierba as site } from "@/lib/site/medierba";
import { PageHero } from "@/components/sites/medierba";
import { LeadForm } from "@/components/site";
import { GroupValues } from "@/components/blocks";

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="Our Story"
        title="实验室里的自然"
        desc="我们相信，自然之美值得被科学验证——以生物科技重释东方草本。"
      />
      <section className="bg-paper py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2">
          <div
            className="flex aspect-[4/3] items-center justify-center rounded-site p-10"
            style={{ background: "linear-gradient(160deg, #1C1917 0%, #2D5016 55%, #B8860B 130%)" }}
          >
            <div className="text-center font-display text-3xl leading-relaxed text-white/90">
              传承千年草本
              <br />
              验证于实验室
            </div>
          </div>
          <div>
            <h2 className="font-display text-3xl font-semibold">帛卉集团 · 自有品牌</h2>
            <p className="mt-5 leading-relaxed text-ink/60">
              MEDIERBA 是帛卉集团的终端验证平台。集团三大生物技术——创新提取发酵、
              低温闪萃合成与合成生物智造——在这里接受最真实的检验：消费者每天的使用反馈。
            </p>
            <p className="mt-4 leading-relaxed text-ink/60">
              我们只发布经过 28 天人体功效验证的产品，每一支产品公开数据报告。
              因为自然之美，从不需要谎言。
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { v: "10-20×", l: "人参皂苷富集" },
                { v: "95%+", l: "活性保留率" },
                { v: "28天", l: "人体功效验证" },
                { v: "0动物", l: "动物实验" },
              ].map((d) => (
                <div key={d.l} className="rounded-site bg-accent p-5">
                  <div className="text-xl font-bold text-brand-deep">{d.v}</div>
                  <div className="mt-1 text-xs text-ink/60">{d.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <GroupValues />
      <LeadForm site={site} />
    </>
  );
}
