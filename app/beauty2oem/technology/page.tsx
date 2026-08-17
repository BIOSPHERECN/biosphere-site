import { beauty2oem as site } from "@/lib/site/beauty2oem";
import { PageHero } from "@/components/sites/beauty2oem";
import { LeadForm } from "@/components/site";

const techs = [
  {
    title: "创新提取发酵",
    desc: "菌株筛选与梯度发酵工艺，人参皂苷含量提升 10-20 倍，成分生物利用度提升 30-70%。",
    metrics: ["10-20×", "+30-70%"],
  },
  {
    title: "低温闪萃合成",
    desc: "0-10℃ 低温梯度闪萃，热敏活性成分保留率 95%+，抗氧化活性提升 20-40%。",
    metrics: ["95%+", "+20-40%"],
  },
  {
    title: "IoT 智能质检",
    desc: "产线实时数据采集，理化、微生物与功效三阶质检全批次覆盖。",
    metrics: ["3阶", "全批次"],
  },
];

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        badge="Technology"
        title="工艺技术"
        desc="集团三大生物技术 + 智能制造体系，让每一支产品都经得起检验。"
      />
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 md:grid-cols-3">
            {techs.map((t) => (
              <div key={t.title} className="rounded-site border border-black/5 bg-paper p-8 shadow-sm">
                <h2 className="text-xl font-bold">{t.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">{t.desc}</p>
                <div className="mt-6 flex gap-3">
                  {t.metrics.map((m) => (
                    <span key={m} className="rounded-site bg-brand-soft px-4 py-2 text-sm font-bold text-brand-deep">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-accent py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold tracking-tight">智造链路</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {["乳化配料", "自动灌装", "在线质检", "包装入库", "智能发运"].map((s, i) => (
              <div key={s} className="rounded-site bg-paper p-6 text-center shadow-sm">
                <div className="text-2xl font-bold text-brand">{String(i + 1).padStart(2, "0")}</div>
                <div className="mt-2 text-sm font-semibold">{s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <LeadForm site={site} />
    </>
  );
}
