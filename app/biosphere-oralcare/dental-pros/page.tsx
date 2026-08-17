import { oralcare as site, oralcarePros } from "@/lib/site/oralcare";
import { PageHero } from "@/components/sites/oralcare";
import { LeadForm } from "@/components/site";

export default function DentalProsPage() {
  return (
    <>
      <PageHero
        badge="Dental Pros"
        title="牙医与合作"
        desc="面向牙科诊所、口腔医院与口腔品牌的 B 端合作入口。"
      />
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 md:grid-cols-3">
            {oralcarePros.map((p, i) => (
              <div key={p.title} className="rounded-site border border-black/5 bg-paper p-8 shadow-sm">
                <div className="text-3xl font-bold text-brand">{String(i + 1).padStart(2, "0")}</div>
                <h2 className="mt-4 text-lg font-bold">{p.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-site bg-ink p-10 text-white">
            <h2 className="text-2xl font-bold">申请专业渠道合作</h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/60">
              提交诊所或品牌信息，专业合作团队将在 3 个工作日内与你联系，提供产品资料与教育支持。
            </p>
            <button className="mt-6 rounded-site bg-brand px-8 py-3 text-sm font-semibold text-white transition hover:bg-brand-deep">
              申请合作
            </button>
          </div>
        </div>
      </section>
      <LeadForm site={site} />
    </>
  );
}
