import Link from "next/link";
import type { ReactNode } from "react";
import type { NavItem, SiteConfig, Stat, Tech } from "@/lib/site/types";

export function SiteHeader({ site, nav }: { site: SiteConfig; nav: NavItem[] }) {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-paper/90 backdrop-blur">
      <div className="bg-brand text-white text-xs font-medium tracking-wide">
        <div className="mx-auto max-w-7xl px-4 py-2 text-center">{site.announcement}</div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4">
        <Link href={`/${site.key}`} className="flex items-baseline gap-2">
          <span className="text-lg font-bold tracking-tight">{site.name}</span>
          <span className="hidden text-xs text-ink/60 sm:block">{site.tagline}</span>
        </Link>
        <nav className="no-scrollbar flex items-center gap-6 overflow-x-auto text-sm font-medium text-ink/80">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="whitespace-nowrap hover:text-brand">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href={site.hero.primary.href}
          className="rounded-site bg-brand px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-deep"
        >
          {site.hero.primary.label}
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter({ site }: { site: SiteConfig }) {
  return (
    <footer className="border-t border-black/10 bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="text-lg font-bold tracking-tight">{site.name}</div>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-white/60">{site.footer.intro}</p>
          <div className="mt-4 space-y-1 text-sm text-white/60">
            {site.footer.contact.map((c) => (
              <div key={c.label}>
                <span className="text-white/40">{c.label}：</span>
                {c.value}
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="text-sm font-semibold text-white/80">{site.footer.linksTitle}</div>
          <ul className="mt-4 space-y-2 text-sm text-white/60">
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
          <div className="text-sm font-semibold text-white/80">快速导航</div>
          <ul className="mt-4 space-y-2 text-sm text-white/60">
            {site.nav.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 text-xs text-white/50">
          <span>{site.footer.note}</span>
          <span>{site.footer.copyright}</span>
        </div>
      </div>
    </footer>
  );
}

export function SiteShell({ site, nav, children }: { site: SiteConfig; nav: NavItem[]; children: ReactNode }) {
  return (
      <div
        className="min-h-screen bg-paper text-ink"
        style={
        {
          "--site-brand": site.theme.brand,
          "--site-brand-deep": site.theme.brandDeep,
          "--site-brand-soft": site.theme.brandSoft,
          "--site-ink": site.theme.ink,
          "--site-paper": site.theme.paper,
          "--site-accent": site.theme.accent,
          "--site-font-sans": site.theme.sans,
          "--site-font-display": site.theme.display ?? site.theme.sans,
        } as React.CSSProperties
      }
    >
      <SiteHeader site={site} nav={nav} />
      <main>{children}</main>
      <SiteFooter site={site} />
    </div>
  );
}

export function SectionTitle({
  kicker,
  title,
  desc,
  align = "center",
}: {
  kicker?: string;
  title: string;
  desc?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {kicker && <div className="text-sm font-semibold uppercase tracking-widest text-brand">{kicker}</div>}
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
      {desc && <p className="mt-4 text-base leading-relaxed text-ink/60">{desc}</p>}
    </div>
  );
}

export function StatsWall({ stats, dark = false }: { stats: Stat[]; dark?: boolean }) {
  return (
    <section className={`py-16 ${dark ? "bg-ink text-white" : "bg-paper"}`}>
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-4 text-center md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="text-3xl font-bold tracking-tight md:text-4xl">{s.value}</div>
            <div className={`mt-2 text-sm ${dark ? "text-white/60" : "text-ink/60"}`}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function TechGrid({ items, accentBg = false }: { items: Tech[]; accentBg?: boolean }) {
  return (
    <section className={`py-20 ${accentBg ? "bg-accent" : "bg-paper"}`}>
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <div
              key={t.title}
              className="rounded-site border border-black/5 bg-paper p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="text-sm font-semibold uppercase tracking-widest text-brand">{t.subtitle}</div>
              <h3 className="mt-2 text-xl font-bold">{t.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/60">{t.desc}</p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {t.metrics.map((m) => (
                  <div key={m.label} className="rounded-site bg-brand-soft p-3 text-center">
                    <div className="text-lg font-bold text-brand-deep">{m.value}</div>
                    <div className="mt-1 text-xs text-ink/60">{m.label}</div>
                  </div>
                ))}
              </div>
              <ul className="mt-6 space-y-2 text-sm text-ink/70">
                {t.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="text-brand">·</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LeadForm({ site }: { site: SiteConfig }) {
  return (
    <section className="bg-ink py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{site.leadForm.title}</h2>
          <p className="mt-4 max-w-md leading-relaxed text-white/60">{site.leadForm.desc}</p>
          <div className="mt-10 grid grid-cols-2 gap-6 text-white/70">
            <div>
              <div className="text-2xl font-bold text-white">{site.stats[0].value}</div>
              <div className="mt-1 text-sm text-white/50">{site.stats[0].label}</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">{site.stats[1].value}</div>
              <div className="mt-1 text-sm text-white/50">{site.stats[1].label}</div>
            </div>
          </div>
        </div>
        <form className="rounded-site border border-white/10 bg-white/5 p-8 backdrop-blur">
          <div className="grid gap-4">
            <input
              className="rounded-site border border-white/15 bg-white/10 px-4 py-3 text-sm placeholder-white/40 outline-none focus:border-brand"
              placeholder="你的姓名 *"
            />
            <input
              className="rounded-site border border-white/15 bg-white/10 px-4 py-3 text-sm placeholder-white/40 outline-none focus:border-brand"
              placeholder="工作邮箱 *"
            />
            <select className="rounded-site border border-white/15 bg-white/10 px-4 py-3 text-sm text-white/80 outline-none focus:border-brand">
              <option>{site.leadForm.selectLabel}</option>
              {site.leadForm.selectOptions.map((o) => (
                <option key={o} className="text-black">
                  {o}
                </option>
              ))}
            </select>
            <textarea
              rows={3}
              className="rounded-site border border-white/15 bg-white/10 px-4 py-3 text-sm placeholder-white/40 outline-none focus:border-brand"
              placeholder="项目描述（可选）"
            />
          </div>
          <button
            type="submit"
            className="mt-5 w-full rounded-site bg-brand py-3 text-sm font-semibold text-white transition hover:bg-brand-deep"
          >
            {site.leadForm.cta}
          </button>
          <p className="mt-4 text-xs leading-relaxed text-white/40">{site.leadForm.note}</p>
        </form>
      </div>
    </section>
  );
}

export function PageHero({
  badge,
  title,
  desc,
  site,
}: {
  badge: string;
  title: string;
  desc?: string;
  site: SiteConfig;
}) {
  return (
    <section className="border-b border-black/5 bg-accent">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="text-sm font-semibold uppercase tracking-widest text-brand">{badge}</div>
        <h1 className="mt-3 max-w-2xl font-display text-4xl font-bold tracking-tight md:text-5xl">{title}</h1>
        {desc && <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink/60">{desc}</p>}
      </div>
    </section>
  );
}
