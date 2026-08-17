import { oralcare as site, oralcareProducts } from "@/lib/site/oralcare";
import { PageHero } from "@/components/sites/oralcare";
import { LeadForm } from "@/components/site";

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = oralcareProducts.find((p) => p.name === slug) ?? oralcareProducts[0];

  return (
    <>
      <PageHero badge={product.category} title={product.name} desc={product.desc} />
      <section className="bg-paper py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2">
          <div
            className="flex aspect-square items-center justify-center rounded-site p-12"
            style={{ background: "linear-gradient(135deg, #ECFDF5 0%, #0891B2 100%)" }}
          >
            <span className="text-center text-4xl font-bold text-white/95">{product.name}</span>
          </div>
          <div>
            <div className="text-sm uppercase tracking-widest text-brand">{product.category}</div>
            <h1 className="mt-3 text-4xl font-bold">{product.name}</h1>
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
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <button className="rounded-site bg-brand py-4 text-sm font-semibold text-white transition hover:bg-brand-deep">
                加入购物车
              </button>
              <button className="rounded-site border border-ink/15 py-4 text-sm font-semibold transition hover:border-brand hover:text-brand">
                订阅省 15%
              </button>
            </div>
          </div>
        </div>
      </section>
      <LeadForm site={site} />
    </>
  );
}

export function generateStaticParams() {
  return oralcareProducts.map((p) => ({ slug: p.name }));
}
