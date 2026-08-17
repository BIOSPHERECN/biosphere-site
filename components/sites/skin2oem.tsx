import Link from "next/link";
import type { SiteConfig } from "@/lib/site/types";
import { LangToggle } from "@/components/lang";

const mono = "'JetBrains Mono', 'Consolas', monospace";

export function SkHeader({ site, nav }: { site: SiteConfig; nav: { label: string; href: string }[] }) {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-paper">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-10 px-6 py-5">
        <Link href={`/${site.key}`} className="flex items-baseline gap-3">
          <span className="text-xl font-extrabold tracking-tight">{site.name}</span>
          <span className="hidden text-xs font-medium text-ink/50 lg:block">{site.tagline}</span>
        </Link>
        <nav className="no-scrollbar hidden items-center gap-8 overflow-x-auto text-sm font-semibold text-ink/70 xl:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="whitespace-nowrap transition hover:text-brand">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href={site.hero.primary.href}
          className="rounded-site bg-ink px-6 py-2.5 text-sm font-bold text-white transition hover:bg-brand-deep"
        >
          {site.hero.primary.label}
        </Link>
        <LangToggle className="text-ink/60" />
      </div>
      <div className="border-t border-black/5 bg-brand-soft">
        <div className="mx-auto flex max-w-7xl items-center gap-8 overflow-x-auto px-6 py-2 text-[11px] font-semibold text-brand-deep" style={{ fontFamily: mono }}>
          <span>配方库 FORMULAS / 3,000+</span>
          <span>活性保留 ACTIVE / 95%+</span>
          <span>功效维度 DATA DIMS / 30+</span>
          <span>测试周期 CYCLE / 28D</span>
        </div>
      </div>
    </header>
  );
}

export function SkFooter({ site }: { site: SiteConfig }) {
  return (
    <footer className="bg-[#150B2E] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="text-lg font-extrabold tracking-tight">{site.name}</div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/50">{site.footer.intro}</p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            {site.stats.slice(0, 2).map((s) => (
              <div key={s.label} className="rounded-site border border-white/10 bg-white/5 p-4">
                <div className="text-xl font-bold text-brand" style={{ fontFamily: mono }}>{s.value}</div>
                <div className="mt-1 text-[11px] text-white/40">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="text-xs font-bold uppercase tracking-widest text-white/40">集团生态</div>
          <ul className="mt-5 space-y-2.5 text-sm text-white/60">
            {site.footer.extraLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs font-bold uppercase tracking-widest text-white/40">导航</div>
          <ul className="mt-5 space-y-2.5 text-sm text-white/60">
            {site.nav.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">{l.label}</Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 space-y-1.5 text-xs text-white/40">
            {site.footer.contact.map((c) => (
              <div key={c.label}>{c.label} / {c.value}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 text-xs text-white/40" style={{ fontFamily: mono }}>
          <span>{site.footer.note}</span>
          <span>{site.footer.copyright}</span>
        </div>
      </div>
    </footer>
  );
}

export function SkHero({ site }: { site: SiteConfig }) {
  const bars = [
    { label: "透皮率", value: 97 },
    { label: "活性保留", value: 95 },
    { label: "保湿力提升", value: 68 },
    { label: "舒缓有效率", value: 82 },
  ];
  return (
    <section className="bg-paper">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 md:py-24 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-deep">
            {site.hero.badge}
          </div>
          <h1 className="mt-7 text-5xl font-black leading-[1.05] tracking-tight md:text-6xl">
            {site.hero.title[0]}
            <br />
            <span className="text-brand">{site.hero.title[1]}</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink/60">{site.hero.subtitle}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={site.hero.primary.href}
              className="rounded-site bg-brand px-8 py-4 text-sm font-bold text-white transition hover:bg-brand-deep"
            >
              {site.hero.primary.label}
            </Link>
            {site.hero.secondary && (
              <Link
                href={site.hero.secondary.href}
                className="rounded-site border-2 border-ink/15 px-8 py-4 text-sm font-bold text-ink transition hover:border-brand hover:text-brand"
              >
                {site.hero.secondary.label}
              </Link>
            )}
          </div>
        </div>
        <div className="rounded-site border border-black/10 bg-paper p-8 shadow-lg">
          <div className="flex items-baseline justify-between">
            <div className="text-xs font-bold uppercase tracking-widest text-ink/40" style={{ fontFamily: mono }}>
              FORMULATION DATA / 28D
            </div>
            <div className="text-2xl font-black text-brand-deep" style={{ fontFamily: mono }}>
              87.5<span className="text-sm">%</span>
            </div>
          </div>
          <div className="mt-8 space-y-6">
            {bars.map((b) => (
              <div key={b.label}>
                <div className="flex items-baseline justify-between text-sm">
                  <span className="font-semibold text-ink/70">{b.label}</span>
                  <span className="font-bold text-brand-deep" style={{ fontFamily: mono }}>{b.value}%</span>
                </div>
                <div className="mt-2 h-2.5 rounded-full bg-ink/10">
                  <div className="h-2.5 rounded-full bg-gradient-to-r from-brand to-brand-deep" style={{ width: `${b.value}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 border-t border-black/10 pt-6">
            {site.stats.slice(0, 2).map((s) => (
              <div key={s.label} className="rounded-site bg-accent p-4">
                <div className="text-lg font-black text-brand-deep" style={{ fontFamily: mono }}>{s.value}</div>
                <div className="mt-1 text-[11px] text-ink/50">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SkStats({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <section className="border-y border-black/10 bg-paper">
      <div className="mx-auto max-w-7xl px-6 py-10">
        {stats.map((s) => (
          <div key={s.label} className="flex items-baseline justify-between border-b border-black/5 py-4 last:border-b-0">
            <span className="text-sm font-semibold text-ink/50">{s.label}</span>
            <span className="text-2xl font-black text-brand-deep" style={{ fontFamily: mono }}>{s.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

const bestSellers = [
  {
    img: "/images/skin2oem/products/niacinamide.png",
    tag: "BESTSELLER",
    name: "烟酰胺 10% + 锌 1% 控油精华",
    desc: "控油 · 提亮 · 平滑",
    rating: "4.8",
    ampm: "AM/PM",
    price: "¥72",
    sizes: ["30ml", "60ml"],
  },
  {
    img: "/images/skin2oem/products/hyaluronic.png",
    tag: "BESTSELLER",
    name: "透明质酸 2% + B5 保湿精华",
    desc: "补水 · 锁水 · 舒缓",
    rating: "4.7",
    ampm: "AM/PM",
    price: "¥119",
    sizes: ["30ml", "60ml"],
  },
  {
    img: "/images/skin2oem/products/nmf.png",
    tag: "BESTSELLER",
    name: "天然保湿因子 + HA 修护面霜",
    desc: "保湿 · 屏障 · 柔润",
    rating: "4.6",
    ampm: "PM",
    price: "¥80",
    sizes: ["30ml", "100ml"],
  },
  {
    img: "/images/skin2oem/products/glycolic.png",
    tag: "BESTSELLER",
    name: "甘醇酸 7% 焕肤爽肤水",
    desc: "去角质 · 提亮 · 平滑",
    rating: "4.5",
    ampm: "PM",
    price: "¥108",
    sizes: ["100ml", "240ml"],
  },
  {
    img: "/images/skin2oem/products/copper-peptides.png",
    tag: "TRENDING",
    name: "多重多肽 + 铜肽 1% 抗老精华",
    desc: "紧致 · 抗老 · 修护",
    rating: "4.9",
    ampm: "AM/PM",
    price: "¥384",
    sizes: ["30ml"],
  },
  {
    img: "/images/skin2oem/products/hair-density.png",
    tag: "TRENDING",
    name: "发丝密度多肽精华",
    desc: "固发 · 强韧 · 丰盈",
    rating: "4.6",
    ampm: "AM/PM",
    price: "¥288",
    sizes: ["60ml"],
  },
  {
    img: "/images/skin2oem/products/eye-serum.jpg",
    tag: "OEM 精选",
    name: "多重多肽眼部精华",
    desc: "淡纹 · 紧致 · 焕亮",
    rating: "4.7",
    ampm: "AM/PM",
    price: "¥300",
    sizes: ["30ml"],
  },
  {
    img: "/images/skin2oem/products/volufiline.png",
    tag: "NEW",
    name: "丰盈紧实 92% 精华",
    desc: "丰盈 · 紧致 · 饱满",
    rating: "4.8",
    ampm: "AM/PM",
    price: "¥257",
    sizes: ["15ml", "30ml"],
  },
];

const concerns = [
  { img: "/images/skin2oem/concerns/aging.jpg", title: "抗皱紧致", en: "AGING", href: "/skin2oem/ingredients" },
  { img: "/images/skin2oem/concerns/congestion.jpg", title: "控油净痘", en: "CONGESTION", href: "/skin2oem/ingredients" },
  { img: "/images/skin2oem/concerns/texture.jpg", title: "平滑纹理", en: "TEXTURE", href: "/skin2oem/formulation" },
  { img: "/images/skin2oem/concerns/eye.jpg", title: "眼周护理", en: "EYE CARE", href: "/skin2oem/formulation" },
  { img: "/images/skin2oem/concerns/redness.jpg", title: "舒缓泛红", en: "REDNESS", href: "/skin2oem/ingredients" },
  { img: "/images/skin2oem/concerns/dryness.jpg", title: "深层保湿", en: "DRYNESS", href: "/skin2oem/ingredients" },
];

const scientists = [
  { img: "/images/skin2oem/team/rita.jpg", name: "陈明慧", title: "配方研发总监" },
  { img: "/images/skin2oem/team/joe.jpg", name: "林凯文", title: "功效评估主任" },
  { img: "/images/skin2oem/team/bushra.jpg", name: "王若彤", title: "原料化学家" },
  { img: "/images/skin2oem/team/dina.jpg", name: "赵一诺", title: "体外测试专家" },
  { img: "/images/skin2oem/team/alejandro.jpg", name: "高天佑", title: "生物技术研究员" },
  { img: "/images/skin2oem/team/kinnari.jpg", name: "苏婉清", title: "皮肤科医学顾问" },
];

export function SkBestSellers() {
  return (
    <section className="border-y border-black/10 bg-paper py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-brand-deep" style={{ fontFamily: mono }}>
              BESTSELLERS / 热门配方方案
            </div>
            <h2 className="mt-4 text-3xl font-black tracking-tight md:text-4xl">为 OEM 客户预研的畅销配方</h2>
          </div>
          <Link href="/skin2oem/capabilities" className="text-sm font-bold text-brand transition hover:text-brand-deep">
            查看全部配方 →
          </Link>
        </div>
        <div className="no-scrollbar mt-12 flex gap-5 overflow-x-auto pb-4">
          {bestSellers.map((p) => (
            <div
              key={p.name}
              className="group w-64 shrink-0 rounded-site border-2 border-black/5 bg-white p-4 transition hover:border-brand"
            >
              <div className="relative">
                <span
                  className="absolute left-0 top-0 z-10 rounded-full bg-ink px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white"
                  style={{ fontFamily: mono }}
                >
                  {p.tag}
                </span>
                <img
                  src={p.img}
                  alt={p.name}
                  className="aspect-square w-full rounded-site object-cover"
                  loading="lazy"
                />
              </div>
              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-500">
                    ★ {p.rating} <span className="font-normal text-ink/40">/ 5</span>
                  </span>
                  <span className="rounded bg-brand-soft px-1.5 py-0.5 text-[10px] font-bold text-brand-deep" style={{ fontFamily: mono }}>
                    {p.ampm}
                  </span>
                </div>
                <div className="mt-2 text-sm font-bold leading-snug">{p.name}</div>
                <div className="mt-1 text-xs font-semibold text-brand" style={{ fontFamily: mono }}>
                  {p.desc}
                </div>
                <div className="mt-3 flex gap-1.5">
                  {p.sizes.map((s) => (
                    <span
                      key={s}
                      className="cursor-pointer rounded-full border border-ink/15 px-2.5 py-0.5 text-[10px] font-bold text-ink/60 transition hover:border-brand hover:text-brand"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-lg font-black text-ink" style={{ fontFamily: mono }}>
                    {p.price}
                    <span className="text-[10px] font-medium text-ink/40"> / 起订 5K</span>
                  </span>
                  <button className="rounded-site bg-brand px-3 py-1.5 text-xs font-bold text-white transition group-hover:bg-brand-deep">
                    加购
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SkConcerns() {
  return (
    <section className="bg-paper py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <div className="text-xs font-bold uppercase tracking-[0.3em] text-brand-deep" style={{ fontFamily: mono }}>
            COMMON CONCERNS / 六大功效靶点
          </div>
          <h2 className="mt-4 text-3xl font-black tracking-tight md:text-4xl">你的品牌主打什么功效？</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ink/60">
            从配方库直接选择功效方向，32 条成熟路径、28 天测试周期，最快 90 天上市。
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {concerns.map((c) => (
            <Link key={c.en} href={c.href} className="group">
              <div className="overflow-hidden rounded-site">
                <img
                  src={c.img}
                  alt={c.title}
                  className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="mt-3 flex items-baseline justify-between px-1">
                <span className="text-sm font-extrabold transition group-hover:text-brand">{c.title}</span>
                <span className="text-[10px] font-bold tracking-widest text-ink/40" style={{ fontFamily: mono }}>
                  {c.en}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SkTeam() {
  return (
    <section className="border-t border-black/10 bg-accent py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-brand-deep" style={{ fontFamily: mono }}>
              MEET OUR SCIENTISTS / 研发科学家
            </div>
            <h2 className="mt-4 text-3xl font-black tracking-tight md:text-4xl">每一道配方背后的人</h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-ink/60">
            47 位研发人员覆盖配方、功效、原料、法规四个领域，客户配方从立项即进入双人复核制。
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">
          {scientists.map((s) => (
            <div key={s.name} className="group text-center">
              <div className="overflow-hidden rounded-site">
                <img
                  src={s.img}
                  alt={s.name}
                  className="aspect-[5/9] w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 text-sm font-extrabold">{s.name}</div>
              <div className="mt-1 text-xs text-ink/50">{s.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SkPageHero({ badge, title, desc }: { badge: string; title: string; desc?: string }) {
  return (
    <section className="border-b border-black/10 bg-brand-soft">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="text-xs font-bold uppercase tracking-[0.3em] text-brand-deep" style={{ fontFamily: mono }}>
          {badge}
        </div>
        <h1 className="mt-5 max-w-3xl text-4xl font-black tracking-tight md:text-5xl">{title}</h1>
        {desc && <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink/60">{desc}</p>}
      </div>
    </section>
  );
}

export { SkPageHero as PageHero };
