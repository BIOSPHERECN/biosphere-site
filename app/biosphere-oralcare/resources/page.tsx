import { oralcare as site } from "@/lib/site/oralcare";
import { PageHero } from "@/components/sites/oralcare";
import { LeadForm } from "@/components/site";

const resources = [
  {
    type: "白皮书",
    title: "口腔微生态平衡与护理策略",
    desc: "口腔菌群生态与日常护理的机制综述。",
  },
  {
    type: "临床摘要",
    title: "n-Ha 羟基磷灰石再矿化研究摘要",
    desc: "n-Ha 对早期釉质损伤修复的体外证据。",
  },
  {
    type: "科普",
    title: "你该选择含氟还是无氟牙膏",
    desc: "两种路线的适用人群与科学依据。",
  },
  {
    type: "指南",
    title: "儿童口腔护理分龄指南",
    desc: "从萌牙到换牙期的护理要点。",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero badge="Resources" title="资源中心" desc="论文、临床摘要与科普指南，公开我们的科学依据。" />
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 md:grid-cols-2">
            {resources.map((r) => (
              <article key={r.title} className="rounded-site border border-black/5 bg-paper p-8 shadow-sm">
                <div className="inline-block rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand-deep">
                  {r.type}
                </div>
                <h2 className="mt-4 text-lg font-bold leading-snug">{r.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">{r.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <LeadForm site={site} />
    </>
  );
}
