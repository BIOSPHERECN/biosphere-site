import Link from "next/link";
import type { SiteConfig } from "@/lib/site/types";
import { LangToggle } from "@/components/lang";

const serif = "'Cormorant Garamond', 'Playfair Display', Georgia, serif";

export function MdHeader({ site, nav }: { site: SiteConfig; nav: { label: string; href: string }[] }) {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-10 px-6 py-7">
        <Link href={`/${site.key}`} className="flex items-baseline gap-4">
          <span className="font-display text-2xl font-medium tracking-[0.2em]">{site.name}</span>
        </Link>
        <nav className="hidden items-center gap-9 text-[13px] tracking-[0.15em] text-ink/60 lg:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>
        <span className="hidden text-[11px] tracking-[0.3em] text-ink/30 md:block">BOUTIQUE · 帛卉集团</span>
        <LangToggle className="text-ink/50" />
      </div>
    </header>
  );
}

export function MdFooter({ site }: { site: SiteConfig }) {
  return (
    <footer className="border-t border-ink/10 bg-paper">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-3">
        <div>
          <div className="font-display text-xl tracking-[0.2em]">{site.name}</div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink/50">{site.footer.intro}</p>
        </div>
        <div className="md:col-span-2">
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <div className="text-[11px] uppercase tracking-[0.3em] text-ink/30">集团生态</div>
              <ul className="mt-4 space-y-2.5 text-sm text-ink/60">
                {site.footer.extraLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="transition hover:text-ink">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.3em] text-ink/30">服务</div>
              <ul className="mt-4 space-y-2.5 text-sm text-ink/60">
                {site.nav.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="transition hover:text-ink">
                      {l.label}
                    </Link>
                  </li>
                ))}
                {site.footer.contact.map((c) => (
                  <li key={c.label} className="text-ink/40">
                    {c.label} · {c.value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-ink/10 py-6">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 text-[11px] tracking-widest text-ink/40">
          <span>{site.footer.note}</span>
          <span>{site.footer.copyright}</span>
        </div>
      </div>
    </footer>
  );
}

export function MdHero({ site }: { site: SiteConfig }) {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-4xl px-6 py-28 text-center md:py-40">
        <div className="text-[11px] uppercase tracking-[0.4em] text-brand">{site.hero.badge}</div>
        <h1
          className="mx-auto mt-10 text-5xl font-medium leading-[1.15] md:text-6xl"
          style={{ fontFamily: serif, letterSpacing: "0.05em" }}
        >
          {site.hero.title[0]}
          <br />
          <em className="text-brand" style={{ letterSpacing: "0.05em" }}>
            {site.hero.title[1]}
          </em>
        </h1>
        <p className="mx-auto mt-10 max-w-xl text-[15px] leading-loose text-ink/50">{site.hero.subtitle}</p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-10">
          <Link href={site.hero.primary.href} className="group flex items-center gap-3 text-sm tracking-[0.2em] text-ink">
            <span className="border-b border-ink/30 pb-1 transition group-hover:border-brand group-hover:text-brand">
              {site.hero.primary.label}
            </span>
            <span className="text-brand">→</span>
          </Link>
          {site.hero.secondary && (
            <Link href={site.hero.secondary.href} className="group flex items-center gap-3 text-sm tracking-[0.2em] text-ink/50">
              <span className="border-b border-ink/20 pb-1 transition group-hover:border-ink group-hover:text-ink">
                {site.hero.secondary.label}
              </span>
            </Link>
          )}
        </div>
      </div>
      <div className="h-px w-full bg-ink/10" />
    </section>
  );
}

export function MdStats({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <section className="bg-paper py-16">
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-14 gap-y-8 px-6">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-display text-3xl font-medium text-ink" style={{ letterSpacing: "0.08em" }}>
              {s.value}
            </div>
            <div className="mt-2 text-[11px] uppercase tracking-[0.25em] text-ink/40">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function MdPageHero({ badge, title, desc }: { badge: string; title: string; desc?: string }) {
  return (
    <section className="border-b border-ink/10 bg-paper">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
        <div className="text-[11px] uppercase tracking-[0.4em] text-brand">{badge}</div>
        <h1
          className="mt-8 text-4xl font-medium leading-tight md:text-5xl"
          style={{ fontFamily: serif, letterSpacing: "0.04em" }}
        >
          {title}
        </h1>
        {desc && <p className="mx-auto mt-6 max-w-xl text-[15px] leading-loose text-ink/50">{desc}</p>}
      </div>
    </section>
  );
}

export function MdSectionTitle({ kicker, title, desc }: { kicker?: string; title: string; desc?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {kicker && (
        <div className="text-[11px] uppercase tracking-[0.4em] text-brand">{kicker}</div>
      )}
      <h2
        className="mt-5 text-3xl font-medium md:text-4xl"
        style={{ fontFamily: serif, letterSpacing: "0.04em" }}
      >
        {title}
      </h2>
      {desc && <p className="mt-5 text-[15px] leading-loose text-ink/50">{desc}</p>}
    </div>
  );
}

export { MdPageHero as PageHero };
