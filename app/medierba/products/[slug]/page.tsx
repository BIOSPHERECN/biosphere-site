import { medierba as site, medierbaProducts } from "@/lib/site/medierba";
import { PageHero } from "@/components/sites/medierba";
import { LeadForm } from "@/components/site";

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = medierbaProducts.find((p) => p.name === slug) ?? medierbaProducts[0];

  return (
    <>
      <PageHero badge={product.category} title={product.name} desc={product.desc} />
      <section className="bg-paper py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2">
          <div
            className="flex aspect-square items-center justify-center rounded-site p-12"
            style={{ background: "linear-gradient(160deg, #1C1917 0%, #2D5016 55%, #B8860B 130%)" }}
          >
            <span className="text-center font-display text-4xl leading-snug text-white/90">{product.name}</span>
          </div>
          <div>
            <div className="text-sm uppercase tracking-widest text-brand">{product.category}</div>
            <h1 className="mt-3 font-display text-4xl font-semibold">{product.name}</h1>
            {product.price && <div className="mt-4 text-2xl font-bold text-brand-deep">{product.price}</div>}
            <p className="mt-6 text-lg leading-relaxed text-ink/70">{product.desc}</p>
            <ul className="mt-8 space-y-3">
              {product.points.map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="mt-1 h-5 w-5 shrink-0 rounded-full bg-brand-soft text-center text-xs leading-5 text-brand-deep">✓</span>
                  <span className="text-ink/70">{p}</span>
                </li>
              ))}
            </ul>
            <button className="mt-10 w-full rounded-site bg-ink py-4 text-sm font-semibold text-white transition hover:bg-brand-deep md:w-72">
              加入购物车
            </button>
            <p className="mt-3 text-xs text-ink/50">28 天人体功效验证 · 数据报告随产品公示</p>
          </div>
        </div>
      </section>
      <LeadForm site={site} />
    </>
  );
}

export function generateStaticParams() {
  return medierbaProducts.map((p) => ({ slug: p.name }));
}
