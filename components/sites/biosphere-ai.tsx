import Link from "next/link";
import type { SiteConfig, Tech } from "@/lib/site/types";
import { LangToggle } from "@/components/lang";

const mono = "'JetBrains Mono', 'Consolas', monospace";

function GridBg() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-40"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
        backgroundSize: "56px 56px",
      }}
    />
  );
}

export function AiHeader({ site, nav }: { site: SiteConfig; nav: { label: string; href: string }[] }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink text-white">
      <div
        className="flex items-center justify-between gap-6 border-b border-white/10 px-6 py-2 text-[11px] uppercase tracking-[0.2em] text-white/50"
        style={{ fontFamily: mono }}
      >
        <span>SYSTEM ONLINE</span>
        <span className="hidden md:block">13,000+ FORMULAS · 50万+ UNITS/DAY</span>
        <span className="text-brand">HERB-BIOTECH INTELLIGENCE</span>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-6 py-5">
        <Link href={`/${site.key}`} className="flex items-baseline gap-3">
          <span className="text-xl font-bold tracking-tight">{site.name}</span>
          <span className="text-[11px] uppercase tracking-[0.25em] text-white/40" style={{ fontFamily: mono }}>
            {site.tagline}
          </span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium text-white/70 lg:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href={site.hero.primary.href}
          className="rounded-site bg-brand px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-deep"
        >
          {site.hero.primary.label}
        </Link>
        <LangToggle className="text-white/60" />
      </div>
    </header>
  );
}

export function AiFooter({ site }: { site: SiteConfig }) {
  return (
    <footer className="border-t border-white/10 bg-[#0B1120] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="text-lg font-bold tracking-tight">{site.name}</div>
          <p
            className="mt-4 text-[11px] uppercase tracking-[0.2em] text-white/40"
            style={{ fontFamily: mono }}
          >
            AI-DRIVEN HERBAL BIOTECH R&D PLATFORM
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/50">{site.footer.intro}</p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-white/40" style={{ fontFamily: mono }}>
            ECO-SYSTEM
          </div>
          <ul className="mt-4 space-y-2.5 text-sm text-white/60">
            {site.footer.extraLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-white/40" style={{ fontFamily: mono }}>
            NAVIGATION
          </div>
          <ul className="mt-4 space-y-2.5 text-sm text-white/60">
            {site.nav.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 space-y-1 text-xs text-white/40">
            {site.footer.contact.map((c) => (
              <div key={c.label}>
                {c.label} / {c.value}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div
          className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 text-[11px] text-white/40"
          style={{ fontFamily: mono }}
        >
          <span>{site.footer.note}</span>
          <span>{site.footer.copyright}</span>
        </div>
      </div>
    </footer>
  );
}

export function AiHero({ site }: { site: SiteConfig }) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <GridBg />
      <div className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-brand/20 blur-[120px]" />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-24 md:py-32 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <div className="inline-flex items-center gap-2 border border-brand/40 bg-brand/10 px-3 py-1.5 text-[11px] uppercase tracking-[0.25em] text-brand" style={{ fontFamily: mono }}>
            {site.hero.badge}
          </div>
          <h1 className="mt-8 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
            {site.hero.title[0]}
            <br />
            <span className="bg-gradient-to-r from-brand via-brand to-cyan-300 bg-clip-text text-transparent">
              {site.hero.title[1]}
            </span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/60">{site.hero.subtitle}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={site.hero.primary.href}
              className="rounded-site bg-brand px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-deep"
            >
              {site.hero.primary.label} →
            </Link>
            {site.hero.secondary && (
              <Link
                href={site.hero.secondary.href}
                className="rounded-site border border-white/20 px-7 py-3.5 text-sm font-semibold text-white/80 transition hover:border-brand hover:text-white"
              >
                {site.hero.secondary.label}
              </Link>
            )}
          </div>
        </div>
        <div className="rounded-site border border-white/10 bg-white/[0.04] p-8 backdrop-blur">
          <div className="text-[11px] uppercase tracking-[0.25em] text-white/40" style={{ fontFamily: mono }}>
            PIPELINE / LIVE
          </div>
          <div className="mt-8 space-y-7">
            {[
              { label: "趋势洞察", value: "REAL-TIME", pct: 100 },
              { label: "智能配方生成", value: "10 MIN", pct: 86 },
              { label: "功效数据标签化", value: "100%", pct: 100 },
              { label: "配方到产线直连", value: "HOUR-LEVEL", pct: 64 },
            ].map((d) => (
              <div key={d.label}>
                <div className="flex items-baseline justify-between">
                  <span className="text-sm font-medium text-white/80">{d.label}</span>
                  <span className="text-xs text-brand" style={{ fontFamily: mono }}>
                    {d.value}
                  </span>
                </div>
                <div className="mt-2.5 h-1.5 rounded-full bg-white/10">
                  <div className="h-1.5 rounded-full bg-brand" style={{ width: `${d.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
            <div>
              <div className="text-2xl font-bold" style={{ fontFamily: mono }}>{site.stats[0].value}</div>
              <div className="mt-1 text-[11px] text-white/40">{site.stats[0].label}</div>
            </div>
            <div>
              <div className="text-2xl font-bold" style={{ fontFamily: mono }}>{site.stats[1].value}</div>
              <div className="mt-1 text-[11px] text-white/40">{site.stats[1].label}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AiStats({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <section className="border-y border-white/10 bg-[#0B1120]">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="px-6 py-10 text-center">
            <div className="text-3xl font-bold text-white md:text-4xl" style={{ fontFamily: mono }}>
              {s.value}
            </div>
            <div className="mt-2 text-xs uppercase tracking-[0.2em] text-white/40">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function AiTechGrid({ items }: { items: Tech[] }) {
  const imgs = [
    "/images/biosphere-ai/lab-microscope.jpg",
    "/images/biosphere-ai/lab-research.jpg",
    "/images/biosphere-ai/lab-scientist.jpg",
  ];
  return (
    <section className="bg-ink py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">核心计算单元</h2>
          <div className="text-[11px] uppercase tracking-[0.25em] text-white/40" style={{ fontFamily: mono }}>
            CORE MODULES / 03
          </div>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <article key={t.title} className="group relative overflow-hidden rounded-site border border-white/10 bg-white/[0.04] transition hover:border-brand/50">
              <img
                src={imgs[i] ?? imgs[0]}
                alt={t.title}
                className="aspect-[16/9] w-full object-cover opacity-70 transition duration-700 group-hover:scale-105 group-hover:opacity-90"
                loading="lazy"
              />
              <div className="p-8">
                <div className="absolute right-6 top-6 text-4xl font-bold text-white/20" style={{ fontFamily: mono }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="text-[11px] uppercase tracking-[0.25em] text-brand" style={{ fontFamily: mono }}>
                  {t.subtitle}
                </div>
                <h3 className="mt-3 text-xl font-bold">{t.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/50">{t.desc}</p>
                <div className="mt-8 space-y-3">
                  {t.metrics.map((m) => (
                    <div key={m.label} className="flex items-baseline justify-between border-b border-white/10 pb-2">
                      <span className="text-sm text-white/60">{m.label}</span>
                      <span className="text-lg font-bold text-brand" style={{ fontFamily: mono }}>
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>
                <ul className="mt-6 space-y-2 text-sm text-white/60">
                  {t.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="text-brand">▸</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AiPageHero({ badge, title, desc }: { badge: string; title: string; desc?: string }) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-ink text-white">
      <GridBg />
      <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-brand/15 blur-[100px]" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="text-[11px] uppercase tracking-[0.3em] text-brand" style={{ fontFamily: mono }}>
          {badge}
        </div>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">{title}</h1>
        {desc && <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/60">{desc}</p>}
      </div>
    </section>
  );
}

export function AiSectionTitle({ kicker, title, desc }: { kicker?: string; title: string; desc?: string }) {  return (
    <div className="max-w-2xl">
      {kicker && (
        <div className="text-[11px] uppercase tracking-[0.3em] text-brand" style={{ fontFamily: mono }}>
          {kicker}
        </div>
      )}
      <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
      {desc && <p className="mt-4 text-base leading-relaxed text-ink/60">{desc}</p>}
    </div>
  );
}

export { AiPageHero as PageHero };
