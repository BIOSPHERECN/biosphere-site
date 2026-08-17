import Link from "next/link";
import type { SiteConfig } from "@/lib/site/types";
import { LangToggle } from "@/components/lang";

export function OcHeader({ site, nav }: { site: SiteConfig; nav: { label: string; href: string }[] }) {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-paper">
      <div className="bg-brand text-white">
        <div className="mx-auto max-w-7xl px-6 py-2.5 text-center text-sm font-semibold">
          🪥 {site.announcement}
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-10 px-6 py-5">
        <Link href={`/${site.key}`} className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-lg font-black text-white">O</span>
          <span className="text-lg font-extrabold tracking-tight">{site.name}</span>
        </Link>
        <nav className="no-scrollbar hidden items-center gap-7 overflow-x-auto text-sm font-semibold text-ink/70 lg:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="whitespace-nowrap transition hover:text-brand">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href={site.hero.primary.href}
          className="rounded-full bg-brand px-6 py-2.5 text-sm font-bold text-white transition hover:bg-brand-deep"
        >
          {site.hero.primary.label}
        </Link>
        <LangToggle className="text-ink/60" />
      </div>
    </header>
  );
}

export function OcFooter({ site }: { site: SiteConfig }) {
  return (
    <footer className="bg-[#042F3A] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-lg font-black">O</span>
            <span className="text-lg font-extrabold tracking-tight">{site.name}</span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/50">{site.footer.intro}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["0 酒精", "可选无氟", "低研磨", "可吞咽设计"].map((c) => (
              <span key={c} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/60">
                {c}
              </span>
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
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 text-xs text-white/40">
          <span>{site.footer.note}</span>
          <span>{site.footer.copyright}</span>
        </div>
      </div>
    </footer>
  );
}

export function OcHero({ site }: { site: SiteConfig }) {
  return (
    <section style={{ background: "linear-gradient(180deg, #ECFDF5 0%, #CFFAFE 60%, #FFFFFF 100%)" }}>
      <div className="mx-auto max-w-7xl px-6 py-20 text-center md:py-28">
        <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-deep shadow-sm">
          {site.hero.badge}
        </div>
        <h1 className="mx-auto mt-8 max-w-3xl text-5xl font-black leading-[1.05] tracking-tight md:text-7xl">
          {site.hero.title[0]}
          <br />
          <span className="text-brand">{site.hero.title[1]}</span>
        </h1>
        <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-ink/60">{site.hero.subtitle}</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={site.hero.primary.href}
            className="rounded-full bg-brand px-9 py-4 text-sm font-bold text-white shadow-lg shadow-brand/30 transition hover:bg-brand-deep"
          >
            {site.hero.primary.label}
          </Link>
          {site.hero.secondary && (
            <Link
              href={site.hero.secondary.href}
              className="rounded-full border-2 border-ink/15 bg-white px-9 py-4 text-sm font-bold text-ink transition hover:border-brand hover:text-brand"
            >
              {site.hero.secondary.label}
            </Link>
          )}
        </div>
        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-3 gap-4">
          {site.stats.slice(0, 3).map((s) => (
            <div key={s.label} className="rounded-site bg-white/80 p-5 shadow-sm backdrop-blur">
              <div className="text-2xl font-black text-brand-deep md:text-3xl">{s.value}</div>
              <div className="mt-1 text-xs font-medium text-ink/50">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function OcStats({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <section className="bg-paper py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-6 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-site bg-accent p-7 text-center">
            <div className="text-3xl font-black text-brand-deep">{s.value}</div>
            <div className="mt-2 text-sm font-medium text-ink/60">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function OcPageHero({ badge, title, desc }: { badge: string; title: string; desc?: string }) {
  return (
    <section style={{ background: "linear-gradient(180deg, #ECFDF5 0%, #FFFFFF 100%)" }}>
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="text-xs font-bold uppercase tracking-[0.3em] text-brand">{badge}</div>
        <h1 className="mt-5 max-w-3xl text-4xl font-black tracking-tight md:text-5xl">{title}</h1>
        {desc && <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink/60">{desc}</p>}
      </div>
    </section>
  );
}

export { OcPageHero as PageHero };
