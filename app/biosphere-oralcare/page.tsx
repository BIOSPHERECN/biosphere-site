import { oralcare as site, oralcareProducts, oralcareScience } from "@/lib/site/oralcare";
import { OcHero, OcStats } from "@/components/sites/oralcare";
import { LeadForm, SectionTitle } from "@/components/site";
import { ProductGrid } from "@/components/blocks";
import Link from "next/link";

export default function OralcareHome() {
  return (
    <>
      <OcHero site={site} />
      <OcStats stats={site.stats} />

      <ProductGrid items={oralcareProducts.slice(0, 3)} title="畅销产品" desc="洁牙片、牙膏与漱口水，组成日常口腔护理三步。" />

      <section className="bg-accent py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle kicker="Science" title="为什么是微生态" desc="口腔健康的关键，不是消灭细菌，而是维护平衡。" />
          <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
            <img
              src="/images/oralcare/oral-30518441.jpg"
              alt="口腔微生态"
              className="aspect-[4/3] w-full rounded-site object-cover shadow-lg"
              loading="lazy"
            />
            <div className="grid gap-6">
              {oralcareScience.principles.map((p, i) => (
                <div key={p.title} className="rounded-site bg-white p-8 shadow-sm">
                  <div className="flex items-center gap-4">
                    <span className="text-3xl font-black text-brand">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="text-lg font-extrabold">{p.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink/60">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#042F3A] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-white/40">Subscription</div>
              <h2 className="mt-3 text-3xl font-black">订阅省 15%</h2>
              <p className="mt-4 max-w-md leading-relaxed text-white/60">
                按你的节奏配送，随时更换、暂停或取消。口腔护理，也可以很省心。
              </p>
              <Link
                href="/biosphere-oralcare/subscribe"
                className="mt-8 inline-block rounded-full bg-brand px-8 py-4 text-sm font-bold text-white transition hover:bg-brand-deep"
              >
                了解订阅 →
              </Link>
            </div>
            <div className="relative overflow-hidden rounded-site">
              <img
                src="/images/oralcare/oral-32115957.jpg"
                alt="订阅口腔护理"
                className="aspect-[16/10] w-full object-cover opacity-60"
                loading="lazy"
              />
              <div className="absolute inset-0 grid grid-cols-2 items-end gap-4 bg-gradient-to-t from-[#042F3A] via-transparent to-transparent p-6">
                {["0 酒精", "可选无氟", "低研磨", "可吞咽设计"].map((c) => (
                  <div key={c} className="rounded-site border border-white/10 bg-white/5 p-4 backdrop-blur">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand text-xs font-bold">✓</div>
                    <div className="mt-2 text-sm font-bold">{c}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <LeadForm site={site} />
    </>
  );
}
