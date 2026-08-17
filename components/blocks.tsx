import Link from "next/link";
import type { SiteConfig } from "@/lib/site/types";
import { SectionTitle } from "./site";

export function HeroB2B({
  site,
  visualCards,
}: {
  site: SiteConfig;
  visualCards: { label: string; value: string }[];
}) {
  return (
    <section className="bg-paper">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 md:py-28 lg:grid-cols-2">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand-soft px-3 py-1 text-xs font-semibold text-brand-deep">
            {site.hero.badge}
          </div>
          <h1 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            {site.hero.title[0]}
            <br />
            <span className="text-brand">{site.hero.title[1]}</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/60 md:text-lg">{site.hero.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={site.hero.primary.href}
              className="rounded-site bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-deep"
            >
              {site.hero.primary.label}
            </Link>
            {site.hero.secondary && (
              <Link
                href={site.hero.secondary.href}
                className="rounded-site border border-ink/15 px-6 py-3 text-sm font-semibold transition hover:border-brand hover:text-brand"
              >
                {site.hero.secondary.label}
              </Link>
            )}
          </div>
        </div>
        <div className="rounded-site bg-ink p-8 text-white">
          <div className="text-xs uppercase tracking-widest text-white/50">{site.hero.visual}</div>
          <div className="mt-8 space-y-6">
            {visualCards.map((c, i) => (
              <div key={c.label} className="flex items-center gap-4">
                <div className="w-8 text-lg font-bold text-brand">{String(i + 1).padStart(2, "0")}</div>
                <div className="flex-1">
                  <div className="text-sm font-semibold">{c.label}</div>
                  <div className="mt-2 h-2 rounded-full bg-white/10">
                    <div
                      className="h-2 rounded-full bg-brand"
                      style={{ width: `${92 - i * 9}%` }}
                    />
                  </div>
                </div>
                <div className="text-sm font-bold text-brand">{c.value}</div>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-site bg-white/5 p-4 text-xs leading-relaxed text-white/50">
            {site.stats.slice(0, 2).map((s) => (
              <span key={s.label} className="mr-4">
                <b className="text-white">{s.value}</b> {s.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function HeroDTC({ site, tint = true }: { site: SiteConfig; tint?: boolean }) {
  return (
    <section className={`${tint ? "bg-accent" : "bg-paper"}`}>
      <div className="mx-auto max-w-7xl px-4 py-20 text-center md:py-28">
        <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-paper px-3 py-1 text-xs font-semibold text-brand-deep">
          {site.hero.badge}
        </div>
        <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
          {site.hero.title[0]}
          <br />
          <span className="text-brand">{site.hero.title[1]}</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink/60 md:text-lg">
          {site.hero.subtitle}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href={site.hero.primary.href}
            className="rounded-site bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-deep"
          >
            {site.hero.primary.label}
          </Link>
          {site.hero.secondary && (
            <Link
              href={site.hero.secondary.href}
              className="rounded-site border border-ink/15 px-6 py-3 text-sm font-semibold transition hover:border-brand hover:text-brand"
            >
              {site.hero.secondary.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export function CapabilityGrid({
  items,
  title,
  desc,
}: {
  items: { title: string; desc: string; tags: string[]; moq?: string }[];
  title: string;
  desc: string;
}) {
  return (
    <section className="bg-paper py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle kicker="Capabilities" title={title} desc={desc} />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {items.map((c) => (
            <div key={c.title} className="rounded-site border border-black/5 bg-paper p-8 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-xl font-bold">{c.title}</h3>
                {c.moq && (
                  <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand-deep">
                    {c.moq}
                  </span>
                )}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink/60">{c.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {c.tags.map((t) => (
                  <span key={t} className="rounded-site bg-accent px-3 py-1 text-xs text-ink/70">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessSteps({ steps }: { steps: { title: string; desc: string }[] }) {
  return (
    <section className="bg-accent py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle kicker="Process" title="从需求到交付，六步闭环" />
        <div className="mt-12 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-site bg-paper p-5">
              <div className="text-3xl font-bold text-brand">{String(i + 1).padStart(2, "0")}</div>
              <div className="mt-3 text-sm font-semibold">{s.title}</div>
              <div className="mt-2 text-xs leading-relaxed text-ink/60">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CertWall({ certs }: { certs: string[] }) {
  return (
    <section className="bg-ink py-20 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle kicker="Quality" title="认证与质量体系" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certs.map((c) => (
            <div key={c} className="rounded-site border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-sm font-bold">
                  ✓
                </span>
                <span className="text-sm font-semibold">{c}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function NewsGrid({ items }: { items: { date: string; title: string; desc: string; img?: string }[] }) {
  return (
    <section className="bg-paper py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle kicker="News" title="新闻与动态" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((n) => (
            <article key={n.title} className="group rounded-site border border-black/5 bg-paper p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              {n.img && (
                <img
                  src={n.img}
                  alt={n.title}
                  className="mb-6 aspect-[16/10] w-full rounded-site object-cover transition duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              )}
              <div className="text-xs font-semibold text-brand">{n.date}</div>
              <h3 className="mt-3 text-lg font-bold leading-snug">{n.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/60">{n.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactPage({ site }: { site: SiteConfig }) {
  return (
    <div className="bg-paper py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">联系我们</h1>
          <p className="mt-4 leading-relaxed text-ink/60">{site.leadForm.desc}</p>
          <div className="mt-10 space-y-4">
            {site.footer.contact.map((c) => (
              <div key={c.label} className="rounded-site bg-accent p-5">
                <div className="text-xs font-semibold uppercase tracking-widest text-ink/50">{c.label}</div>
                <div className="mt-1 text-lg font-semibold">{c.value}</div>
              </div>
            ))}
          </div>
        </div>
        <form className="rounded-site border border-black/10 bg-accent p-8">
          <div className="grid gap-4">
            <input className="rounded-site border border-black/10 bg-paper px-4 py-3 text-sm outline-none focus:border-brand" placeholder="你的姓名 *" />
            <input className="rounded-site border border-black/10 bg-paper px-4 py-3 text-sm outline-none focus:border-brand" placeholder="工作邮箱 *" />
            <select className="rounded-site border border-black/10 bg-paper px-4 py-3 text-sm outline-none focus:border-brand">
              <option>{site.leadForm.selectLabel}</option>
              {site.leadForm.selectOptions.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
            <textarea rows={4} className="rounded-site border border-black/10 bg-paper px-4 py-3 text-sm outline-none focus:border-brand" placeholder="项目描述" />
          </div>
          <button type="submit" className="mt-5 w-full rounded-site bg-brand py-3 text-sm font-semibold text-white transition hover:bg-brand-deep">
            {site.leadForm.cta}
          </button>
          <p className="mt-4 text-xs text-ink/50">{site.leadForm.note}</p>
        </form>
      </div>
    </div>
  );
}

export function GroupValues() {
  const values = [
    { name: "传承", desc: "敬畏自然馈赠，以现代工艺重释千年草本智慧" },
    { name: "创新", desc: "AI 与合成生物驱动，让研发从经验走向算法" },
    { name: "共生", desc: "与供应商、品牌与消费者共享价值，永续发展" },
    { name: "卓越", desc: "每一支产品都经得起数据与时间的检验" },
  ];
  return (
    <section className="bg-accent py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle kicker="Values" title="集团价值观" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.name} className="rounded-site bg-paper p-6 text-center shadow-sm">
              <div className="text-2xl font-bold tracking-widest text-brand">{v.name}</div>
              <p className="mt-3 text-sm leading-relaxed text-ink/60">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BasesSection() {
  const bases = [
    { name: "广州智造基地", desc: "10 万级洁净车间，面膜与护肤核心产能，ISO22716 + GMPC 双认证" },
    { name: "印尼智造基地", desc: "20,000㎡ 二期扩建完成，辐射东南亚出口市场，HALAL 认证" },
  ];
  return (
    <section className="bg-paper py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle kicker="Global" title="双基地全球布局" desc="广州与印尼双基地协同，产能与合规并重，服务全球品牌。" />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {bases.map((b) => (
            <div key={b.name} className="rounded-site bg-ink p-8 text-white">
              <div className="text-lg font-bold">{b.name}</div>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SupplierWall() {
  const suppliers = ["BASF 巴斯夫", "Givaudan 奇华顿", "Symrise 德之馨", "Dow 陶氏", "Evonik 赢创"];
  return (
    <section className="border-y border-black/5 bg-paper py-12">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <div className="text-xs font-semibold uppercase tracking-widest text-ink/40">300+ 全球战略供应商</div>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {suppliers.map((s) => (
            <span key={s} className="text-lg font-bold text-ink/40">
              {s}
            </span>
          ))}
          <span className="text-sm font-semibold text-brand">+ 295 更多…</span>
        </div>
      </div>
    </section>
  );
}

export function ProductGrid({
  items,
  title,
  desc,
}: {
  items: { name: string; category: string; desc: string; points: string[]; price?: string; img?: string }[];
  title: string;
  desc: string;
}) {
  return (
    <section className="bg-paper py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle kicker="Shop" title={title} desc={desc} />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p, i) => (
            <article key={p.name} className="group rounded-site border border-black/5 bg-paper p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              {p.img ? (
                <div className="relative overflow-hidden rounded-site">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink backdrop-blur">
                    {p.category}
                  </span>
                </div>
              ) : (
                <div
                  className="flex aspect-[4/3] items-end justify-between rounded-site p-5 text-white"
                  style={{ background: `linear-gradient(135deg, var(--site-brand-soft), var(--site-brand))` }}
                >
                  <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur">{p.category}</span>
                  <span className="text-3xl opacity-0 transition group-hover:opacity-80">{String(i + 1).padStart(2, "0")}</span>
                </div>
              )}
              <h3 className="mt-5 text-lg font-bold">{p.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">{p.desc}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.points.map((pt) => (
                  <li key={pt} className="rounded-full bg-accent px-3 py-1 text-xs text-ink/70">
                    {pt}
                  </li>
                ))}
              </ul>
              {p.price && <div className="mt-4 text-lg font-bold text-brand-deep">{p.price}</div>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function IngredientGrid({
  items,
  title = "成分库",
}: {
  items: { name: string; latin: string; desc: string; benefit: string }[];
  title?: string;
}) {
  return (
    <section className="bg-accent py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle kicker="Ingredients" title={title} desc="每一种成分都经过实验室验证，让功效有据可循。" />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((ing) => (
            <div key={ing.name} className="rounded-site bg-paper p-8 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold">{ing.name}</h3>
                  <div className="mt-1 text-xs uppercase tracking-widest text-ink/40">{ing.latin}</div>
                </div>
                <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand-deep">
                  {ing.benefit}
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink/60">{ing.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function JournalGrid({ items }: { items: { date: string; title: string; desc: string; tag: string }[] }) {
  return (
    <section className="bg-paper py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle kicker="Journal" title="MEDIERBA 期刊" />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {items.map((j) => (
            <article key={j.title} className="rounded-site border border-black/5 bg-paper p-8 shadow-sm">
              <div className="flex items-center gap-3 text-xs">
                <span className="font-semibold text-brand">{j.tag}</span>
                <span className="text-ink/40">{j.date}</span>
              </div>
              <h3 className="mt-3 text-xl font-bold leading-snug">{j.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/60">{j.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
