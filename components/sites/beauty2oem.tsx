import Link from "next/link";
import type { SiteConfig, Capability } from "@/lib/site/types";
import { LangToggle } from "@/components/lang";

export function B2Header({ site, nav }: { site: SiteConfig; nav: { label: string; href: string }[] }) {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-paper">
      <div className="bg-brand text-white">
        <div className="mx-auto max-w-7xl px-6 py-2 text-center text-xs font-semibold tracking-wide">
          {site.announcement}
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-10 px-6 py-5">
        <Link href={`/${site.key}`} className="flex items-baseline gap-3">
          <span className="text-2xl font-black tracking-tight">{site.name}</span>
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
          className="rounded-site bg-brand px-6 py-2.5 text-sm font-bold text-white transition hover:bg-brand-deep"
        >
          {site.hero.primary.label}
        </Link>
        <LangToggle className="text-ink/60" />
      </div>
    </header>
  );
}

export function B2Footer({ site }: { site: SiteConfig }) {
  return (
    <footer className="bg-[#0B1B3A] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <div className="text-xl font-black tracking-tight">{site.name}</div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">{site.footer.intro}</p>
            <div className="mt-6 space-y-1.5 text-xs text-white/50">
              {site.footer.contact.map((c) => (
                <div key={c.label}>
                  {c.label} / {c.value}
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-white/40">集团生态</div>
            <ul className="mt-5 space-y-2.5 text-sm text-white/60">
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
            <div className="text-xs font-bold uppercase tracking-widest text-white/40">快速导航</div>
            <ul className="mt-5 space-y-2.5 text-sm text-white/60">
              {site.nav.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-white/40">联系</div>
            <ul className="mt-5 space-y-2.5 text-sm text-white/60">
              {site.nav.slice(0, 2).map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
              {site.footer.extraLinks.slice(0, 1).map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
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

export function B2Hero({ site }: { site: SiteConfig }) {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <div className="text-sm font-bold uppercase tracking-widest text-brand">{site.hero.badge}</div>
            <h1 className="mt-6 text-5xl font-black leading-[1.05] tracking-tight md:text-6xl">
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
          <div className="grid grid-cols-2 gap-4">
            {[
              { t: "配方打样", v: "7-10 天" },
              { t: "梯度起订", v: "3,000 支" },
              { t: "大货交期", v: "30 天" },
              { t: "响应时效", v: "48 小时" },
            ].map((d, i) => (
              <div
                key={d.t}
                className="rounded-site p-7 text-white"
                style={{ background: i % 2 === 0 ? "linear-gradient(135deg, #2563EB, #1E40AF)" : "linear-gradient(135deg, #1D4ED8, #172554)" }}
              >
                <div className="text-3xl font-black">{d.v}</div>
                <div className="mt-2 text-xs font-semibold text-white/70">{d.t}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function B2Stats({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <section className="border-y border-black/10 bg-paper">
      <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <div key={s.label} className={`px-6 py-12 ${i % 2 === 1 ? "border-l border-black/10" : ""} md:border-l md:border-black/10 md:first:border-l-0`}>
            <div className="text-4xl font-black tracking-tight text-brand-deep">{s.value}</div>
            <div className="mt-2 text-sm font-medium text-ink/50">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function B2CapabilityBanner({ items }: { items: Capability[] }) {
  return (
    <section className="bg-paper py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-black tracking-tight">四大品类能力</h2>
        <p className="mt-3 max-w-xl text-ink/60">护肤、彩妆、口腔、个护四线并进，剂型矩阵覆盖主流消费场景。</p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((c, i) => (
            <Link
              key={c.title}
              href="/beauty2oem/capabilities"
              className="group relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-site p-7 text-white"
            >
              <img
                src={c.img}
                alt={c.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3A] via-[#0B1B3A]/60 to-transparent" />
              <div className="absolute right-5 top-5 text-5xl font-black text-white/25">{String(i + 1).padStart(2, "0")}</div>
              <div className="relative">
                <div className="text-3xl font-black">{c.title}</div>
                <div className="mt-2 text-sm text-white/70">{c.moq}</div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {c.tags.slice(0, 3).map((t) => (
                    <span key={t} className="rounded-full bg-white/15 px-2.5 py-1 text-[11px] backdrop-blur">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 h-0.5 w-0 bg-white transition-all group-hover:w-full" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function B2PageHero({ badge, title, desc }: { badge: string; title: string; desc?: string }) {
  return (
    <section className="border-b border-black/10 bg-paper">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="inline-block bg-brand px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
          {badge}
        </div>
        <h1 className="mt-6 max-w-3xl text-4xl font-black tracking-tight md:text-5xl">{title}</h1>
        {desc && <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink/60">{desc}</p>}
      </div>
    </section>
  );
}

export { B2PageHero as PageHero };
