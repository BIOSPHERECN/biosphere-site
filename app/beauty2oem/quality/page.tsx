import { beauty2oem as site, beauty2oemQuality } from "@/lib/site/beauty2oem";
import { PageHero } from "@/components/sites/beauty2oem";
import { LeadForm } from "@/components/site";
import { CertWall } from "@/components/blocks";

export default function QualityPage() {
  return (
    <>
      <PageHero
        badge="Quality"
        title="质量与认证"
        desc="ISO22716 + GMPC 双认证体系，10 万级洁净车间，全批次可追溯。"
      />
      <CertWall certs={beauty2oemQuality} />
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { t: "理化检验", d: "pH、粘度、耐热耐寒、离心等全项理化检测" },
              { t: "微生物检验", d: "菌落总数与致病菌检测，洁净车间动态监控" },
              { t: "功效检验", d: "保湿、修护、舒缓等功效项目人体或体外验证" },
            ].map((q) => (
              <div key={q.t} className="rounded-site border border-black/5 bg-paper p-8 shadow-sm">
                <h2 className="text-lg font-bold">{q.t}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">{q.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <LeadForm site={site} />
    </>
  );
}
