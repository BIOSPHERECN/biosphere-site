import { biosphereAi as site, biosphereAiPlatform, biosphereAiTech } from "@/lib/site/biosphere-ai";
import { AiHero, AiStats, AiTechGrid, AiSectionTitle } from "@/components/sites/biosphere-ai";
import { LeadForm } from "@/components/site";

const mono = "'JetBrains Mono', 'Consolas', monospace";

export default function BiosphereAiHome() {
  return (
    <>
      <AiHero site={site} />
      <AiStats stats={site.stats} />

      <section className="relative overflow-hidden border-b border-white/10 bg-ink py-24 text-white">
        <img
          src="/images/biosphere-ai/lab-engineer.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/60 to-ink" />
        <div className="relative mx-auto max-w-7xl px-6">
          <AiSectionTitle kicker="SUPPLY BASE" title="全球原料网络" />
          <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-white/10 pt-8">
            {["BASF 巴斯夫", "Givaudan 奇华顿", "Symrise 德之馨", "Dow 陶氏", "Evonik 赢创"].map((s) => (
              <span key={s} className="text-lg font-bold text-white/30">
                {s}
              </span>
            ))}
            <span className="text-xs text-brand" style={{ fontFamily: mono }}>
              +295 MORE
            </span>
          </div>
        </div>
      </section>

      <section className="bg-[#0B1120] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <AiSectionTitle kicker="PLATFORM" title="AI 全链路研发平台" desc="从消费者洞察到产线交付，四个模块覆盖产品开发的完整链路。" />
          <img
            src="/images/biosphere-ai/lab-research.jpg"
            alt="AI 研发平台实验室"
            className="mt-12 aspect-[21/9] w-full rounded-site border border-white/10 object-cover opacity-80"
            loading="lazy"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {biosphereAiPlatform.modules.map((m, i) => (
              <article key={m.title} className="rounded-site border border-white/10 bg-white/[0.04] p-8 transition hover:border-brand/50">
                <div className="flex items-center gap-5">
                  <span className="text-3xl font-bold text-white/20" style={{ fontFamily: mono }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl font-bold">{m.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-white/50">{m.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {m.tags.map((t) => (
                    <span key={t} className="rounded-site border border-brand/30 bg-brand/10 px-3 py-1 text-xs text-brand">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <AiTechGrid items={biosphereAiTech.items} />
      <LeadForm site={site} />
    </>
  );
}
