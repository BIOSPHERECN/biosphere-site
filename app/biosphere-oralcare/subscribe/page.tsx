import { oralcare as site, oralcareProducts } from "@/lib/site/oralcare";
import { PageHero } from "@/components/sites/oralcare";

export default function SubscribePage() {
  return (
    <>
      <PageHero
        badge="Subscribe & Save"
        title="订阅省 15%"
        desc="按你的节奏配送，随时更换、暂停或取消。"
      />
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 md:grid-cols-3">
            {oralcareProducts.slice(0, 3).map((p) => (
              <div key={p.name} className="rounded-site border border-black/5 bg-paper p-8 shadow-sm">
                <div
                  className="flex aspect-[4/3] items-center justify-center rounded-site"
                  style={{ background: "linear-gradient(135deg, #ECFDF5 0%, #0891B2 100%)" }}
                >
                  <span className="text-lg font-bold text-white/95">{p.name}</span>
                </div>
                <div className="mt-5 flex items-baseline justify-between">
                  <h3 className="text-lg font-bold">{p.name}</h3>
                  <div className="text-right">
                    <span className="text-xl font-bold text-brand-deep">−15%</span>
                  </div>
                </div>
                <p className="mt-2 text-sm text-ink/60">{p.desc}</p>
                <button className="mt-6 w-full rounded-site bg-brand py-3 text-sm font-semibold text-white transition hover:bg-brand-deep">
                  选择订阅频率
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
