"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Pinyon_Script } from "next/font/google";
import localFont from "next/font/local";
import type { SiteConfig } from "@/lib/site/types";
import { useLang, LangToggle } from "@/components/lang";

const expressa = localFont({
  src: "../../public/fonts/ExpressaEFHeavyRegular.woff2",
  variable: "--font-expressa",
  display: "swap",
});

const pinyon = Pinyon_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pinyon",
  display: "swap",
});

const futura = "'Futura', 'Century Gothic', 'Helvetica Neue', Arial, 'PingFang SC', 'Microsoft YaHei', sans-serif";

export const sfFonts = `${expressa.variable} ${pinyon.variable}`;

const INK = "#000418";
const PAPER = "#F9F8F5";
const CREAM = "#EEEEDC";
const PINK = "#ef4b81";
const BORDER = "#D5D1CA";

const products = [
  {
    name: "人参微光精华",
    en: "Ginseng Glow Serum",
    img: "/images/medierba-prod-1.jpg",
    imgHover: "",
    swatches: ["almond", "slipper", "rosette"],
    price: "$36-$58",
  },
  {
    name: "灵芝修护面霜",
    en: "Reishi Repair Cream",
    img: "/images/medierba-prod-2.jpg",
    imgHover: "",
    swatches: ["mocha", "plum", "maple"],
    price: "$42",
  },
  {
    name: "积雪草舒缓水",
    en: "Centella Soothing Water",
    img: "/images/medierba-prod-3.jpg",
    imgHover: "",
    swatches: ["sand", "clay", "dune"],
    price: "$38-$62",
  },
  {
    name: "绿茶平衡洁面",
    en: "Green Tea Balm Cleanser",
    img: "/images/medierba-prod-4.jpg",
    imgHover: "",
    swatches: ["sand", "desert", "haze"],
    price: "$32",
  },
  {
    name: "红参紧致眼霜",
    en: "Red Ginseng Eye Patches",
    img: "/images/medierba-prod-5.jpg",
    imgHover: "",
    swatches: [],
    price: "$24-$50",
  },
  {
    name: "发酵新生面膜",
    en: "Fermented Renewal Mask",
    img: "/images/medierba-prod-6.jpg",
    imgHover: "",
    swatches: ["iced-coffee", "cherry"],
    price: "$21",
  },
  {
    name: "烟酰胺控油精华",
    en: "Niacinamide Control Oil",
    img: "/images/medierba-prod-7.jpg",
    imgHover: "",
    swatches: ["bare-sand", "berry-spritz"],
    price: "$25",
  },
  {
    name: "新草本旅行套装",
    en: "Herbal Essentials Set",
    img: "/images/medierba-prod-8.jpg",
    imgHover: "",
    swatches: [],
    price: "$60-$88",
  },
  {
    name: "灵芝精华油",
    en: "Reishi Glow Oil",
    img: "/images/medierba-prod-9.jpg",
    imgHover: "",
    swatches: ["soft-strawberry", "blush-dreams"],
    price: "$28",
  },
  {
    name: "透明质酸保湿面霜",
    en: "Cloud Dew™ Gel Cream",
    img: "/images/medierba-prod-10.jpg",
    imgHover: "",
    swatches: [],
    price: "$38-$62",
  },
  {
    name: "本草唇膏笔",
    en: "Herbal Lip Liner",
    img: "/images/medierba-prod-11.jpg",
    imgHover: "",
    swatches: ["cinnamon", "espresso"],
    price: "$18",
  },
  {
    name: "本草淡香水",
    en: "Sunlit Vanilla™ Eau de Parfum",
    img: "/images/medierba-prod-12.jpg",
    imgHover: "",
    swatches: [],
    price: "$65",
  },
];

function SwatchRow({ swatches }: { swatches: string[] }) {
  if (!swatches.length) return <div className="h-5" />;
  return (
    <div className="flex gap-1.5 py-1">
      {swatches.map((s) => (
        <span
          key={s}
          className="h-4 w-4 cursor-pointer rounded-full border border-black/10 transition hover:scale-110"
          style={{ backgroundImage: `url(/images/summerfridays/swatch-${s}.png)`, backgroundSize: "cover" }}
          title={s}
        />
      ))}
    </div>
  );
}

export function SfAnnouncement() {
  const { t } = useLang();
  return (
    <div className="text-center text-[13px] font-medium tracking-[0.04em]" style={{ background: PINK, color: "#fff" }}>
      <div className="mx-auto max-w-7xl px-6 py-3">
        {t("sf.announcement")}{" "}
        <a href="#" className="underline underline-offset-2 hover:opacity-80">
          {t("sf.announceLink")}
        </a>
      </div>
    </div>
  );
}

export function SfHeader() {
  const { t } = useLang();
  const shopLinks = [
    { t: t("nav.shopAll"), href: "/medierba/shop" },
    { t: t("nav.bestsellers"), href: "/medierba/shop" },
    { t: t("nav.skincare"), href: "/medierba/shop" },
    { t: t("nav.makeup"), href: "/medierba/shop" },
    { t: t("nav.lippcare"), href: "/medierba/shop" },
    { t: t("nav.fragrance"), href: "/medierba/shop" },
    { t: t("nav.bodycare"), href: "/medierba/shop" },
    { t: t("nav.minis"), href: "/medierba/shop" },
    { t: t("nav.giftsets"), href: "/medierba/shop" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b" style={{ background: PAPER, borderColor: BORDER }}>
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-8 px-6 py-4">
        <Link href="/medierba" className="flex shrink-0 items-center gap-2">
          <span className="text-lg font-bold tracking-[0.15em]" style={{ color: INK, fontFamily: futura }}>
            BIOSPHERE
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-[13px] font-medium tracking-[0.08em] lg:flex" style={{ fontFamily: futura }}>
          <div className="group relative">
            <button className="flex items-center gap-1 py-2" style={{ color: INK }}>
              {t("nav.shop")} <span className="text-[10px]">▾</span>
            </button>
            <div className="invisible absolute left-1/2 top-full z-50 w-[560px] -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <div className="grid grid-cols-2 gap-2 border p-6 shadow-2xl" style={{ background: PAPER, borderColor: BORDER }}>
                {shopLinks.map((l) => (
                  <Link key={l.t} href={l.href} className="py-1 text-[13px] hover:opacity-60" style={{ color: INK }}>
                    {l.t}
                  </Link>
                ))}
                <div className="col-span-2 mt-3 border-t pt-3 text-[11px] uppercase tracking-[0.15em] text-ink/50" style={{ borderColor: BORDER }}>
                  {t("nav.skinType")}
                </div>
                {["Normal 中性", "Dry 干性", "Oily 油性", "Sensitive 敏感"].map((s) => (
                  <Link key={s} href="/medierba/shop" className="py-1 text-[13px] hover:opacity-60" style={{ color: INK }}>
                    {s}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {[
            { t: t("nav.discover"), href: "/medierba/ingredients" },
            { t: t("nav.story"), href: "/medierba/about" },
            { t: t("nav.members"), href: "/medierba/contact" },
            { t: t("nav.contact"), href: "/medierba/contact" },
          ].map((n) => (
            <Link key={n.href} href={n.href} className="py-2 hover:opacity-60" style={{ color: INK }}>
              {n.t}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-5 text-sm" style={{ color: INK, fontFamily: futura }}>
          <LangToggle />
          <span className="hidden cursor-pointer hover:opacity-60 xl:block">{t("nav.members")}</span>
          <span className="hidden cursor-pointer hover:opacity-60 xl:block">Account</span>
          <span className="cursor-pointer text-lg leading-none">⌕</span>
          <span className="cursor-pointer text-lg leading-none">🛍 <sup className="ml-0.5 text-[10px]">0</sup></span>
        </div>
      </div>
    </header>
  );
}

export function SfHero() {
  const { t } = useLang();
  const slides = [
    "/images/medierba-hero.png",
    "/images/medierba-slide-2.jpg",
    "/images/medierba-slide-3.jpg",
    "/images/medierba-slide-4.jpg",
    "/images/medierba-slide-5.jpg",
  ];
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setIdx((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, [slides.length]);
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[78vh] w-full">
        {slides.map((s, i) => (
          <img
            key={s}
            src={s}
            alt="BIOSPHERE hero"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${i === idx ? "opacity-100" : "opacity-0"}`}
          />
        ))}
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pb-16 pt-40">
        <div className="mx-auto max-w-7xl px-6 text-white">
          <h1 className="max-w-2xl text-2xl font-bold leading-tight md:text-4xl" style={{ fontFamily: futura }}>
            {t("sf.heroTitle1")}
            <br />
            {t("sf.heroTitle2")}
          </h1>
          <p className="mt-4 max-w-md text-[13px] leading-relaxed text-white/80" style={{ fontFamily: futura }}>
            {t("sf.heroSub")}
          </p>
          <Link
            href="/medierba/shop"
            className="mt-6 inline-block px-7 py-3 text-[12px] font-bold uppercase tracking-[0.15em] transition hover:opacity-80"
            style={{ background: PINK, color: "#fff", fontFamily: futura }}
          >
            {t("sf.heroCta")}
          </Link>
        </div>
      </div>
      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => setIdx((i) => (i - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/25 text-xl text-white transition hover:bg-black/50"
      >
        ‹
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => setIdx((i) => (i + 1) % slides.length)}
        className="absolute right-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/25 text-xl text-white transition hover:bg-black/50"
      >
        ›
      </button>
      <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIdx(i)}
            className={`h-2 rounded-full transition-all ${i === idx ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/80"}`}
          />
        ))}
      </div>
    </section>
  );
}

export function SfQuiz() {
  const { t } = useLang();
  return (
    <section className="py-20" style={{ background: PAPER }}>
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-bold md:text-5xl" style={{ color: INK, fontFamily: futura }}>
          {t("sf.quizTitle")}
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-ink/60" style={{ fontFamily: futura }}>
          {t("sf.quizSub")}
        </p>
        <Link
          href="/medierba/rituals"
          className="mt-8 inline-block border-2 px-10 py-4 text-[13px] font-bold uppercase tracking-[0.15em] transition hover:bg-ink hover:text-white"
          style={{ borderColor: INK, color: INK, fontFamily: futura }}
        >
          {t("sf.quizCta")}
        </Link>
      </div>
    </section>
  );
}

export function SfBodyEssentials() {
  const { t } = useLang();
  return (
    <section className="relative">
      <img
        src="/images/medierba-body.jpg"
        alt="BIOSPHERE body banner"
        className="h-[72vh] w-full object-cover"
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 bg-gradient-to-b from-black/50 to-transparent pb-32 pt-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-6xl font-bold text-white md:text-8xl" style={{ fontFamily: pinyon.style.fontFamily, transform: "rotate(-3deg)" }}>
            body essentials
          </div>
          <h1 className="mt-2 text-2xl font-bold uppercase tracking-[0.3em] text-white md:text-4xl" style={{ fontFamily: futura }}>
            {t("sf.bodyTitle")}
          </h1>
        </div>
      </div>
    </section>
  );
}

export function SfCarousel() {
  const { t } = useLang();
  return (
    <section className="py-20" style={{ background: PAPER }}>
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-3xl font-bold md:text-4xl" style={{ color: INK, fontFamily: futura }}>
            {t("sf.carouselTitle")}
          </h2>
          <span className="hidden text-[12px] uppercase tracking-[0.2em] text-ink/50 md:block" style={{ fontFamily: futura }}>
            {t("sf.carouselAll")}
          </span>
        </div>
        <div className="no-scrollbar -mx-6 mt-10 flex gap-6 overflow-x-auto px-6 pb-4">
          {products.map((p) => (
            <div key={p.en} className="group w-64 shrink-0 cursor-pointer">
              <div className="relative overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  className="aspect-[4/5] w-full object-cover transition duration-500"
                  loading="lazy"
                />
              </div>
              <div className="mt-4">
                <SwatchRow swatches={p.swatches} />
                <div className="text-[13px] font-bold" style={{ color: INK, fontFamily: futura }}>
                  {p.name}
                </div>
                <div className="mt-0.5 text-[12px] text-ink/60" style={{ fontFamily: futura }}>
                  {p.en}
                </div>
                <div className="mt-2 text-[13px] font-semibold text-pink-600" style={{ color: PINK, fontFamily: futura }}>
                  Add to Bag ${p.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SfCollectionBanner({
  img,
  href,
  reverse = false,
  variant,
}: {
  img: string;
  href: string;
  reverse?: boolean;
  variant: "lipstain" | "lipbutter";
}) {
  const { t } = useLang();
  const copy =
    variant === "lipstain"
      ? { kicker: t("sf.coll1Kicker"), title: t("sf.coll1Title"), desc: t("sf.coll1Desc"), cta: t("sf.coll1Cta") }
      : { kicker: t("sf.coll2Kicker"), title: t("sf.coll2Title"), desc: t("sf.coll2Desc"), cta: t("sf.coll2Cta") };
  return (
    <section className="py-20" style={{ background: CREAM }}>
      <div className={`mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2 ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
        <img src={img} alt={copy.title} className="aspect-[4/5] w-full object-cover" loading="lazy" />
        <div>
          <div className="text-[12px] uppercase tracking-[0.25em] text-ink/50" style={{ fontFamily: futura }}>
            {copy.kicker}
          </div>
          <h2 className="mt-4 text-3xl font-bold md:text-5xl" style={{ color: INK, fontFamily: futura }}>
            {copy.title}
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink/60" style={{ fontFamily: futura }}>
            {copy.desc}
          </p>
          <Link
            href={href}
            className="mt-8 inline-block border-2 px-10 py-4 text-[13px] font-bold uppercase tracking-[0.15em] transition hover:bg-ink hover:text-white"
            style={{ borderColor: INK, color: INK, fontFamily: futura }}
          >
            {copy.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}

export function SfHybrid() {
  const { t } = useLang();
  return (
    <section
      className="relative overflow-hidden py-24"
      style={{
        background: "linear-gradient(135deg, #EAF2E6 0%, #F6F3E9 50%, #DFEDDA 100%)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220' viewBox='0 0 220 220'%3E%3Cg fill='none' stroke='%234A6B3A' stroke-opacity='0.18' stroke-width='2'%3E%3Cpath d='M40 200 C 60 150, 60 90, 90 50 C 95 42, 108 42, 112 52 C 100 92, 100 150, 80 200 Z'/%3E%3Cpath d='M95 45 C 120 30, 150 32, 178 42 C 170 60, 140 66, 112 58'/%3E%3Cpath d='M150 70 C 160 50, 180 40, 200 42 C 198 62, 180 76, 158 76'/%3E%3Ccircle cx='52' cy='120' r='14'/%3E%3Ccircle cx='120' cy='150' r='10'/%3E%3Ccircle cx='170' cy='110' r='8'/%3E%3C/g%3E%3C/svg%3E\")",
          backgroundSize: "220px 220px",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <div
          className="mx-auto mb-6 h-px w-24"
          style={{ background: "linear-gradient(90deg, transparent, #4A6B3A, transparent)" }}
        />
        <h2 className="text-3xl font-bold leading-snug md:text-5xl" style={{ fontFamily: futura, color: "#2E4A2B" }}>
          {t("sf.hybridTitle")}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed" style={{ fontFamily: futura, color: "#4A6B3A" }}>
          {t("sf.hybridDesc")}
        </p>
      </div>
    </section>
  );
}

export function SfHydratedGrid() {
  const { t } = useLang();
  const four = [products[9], products[2], products[0], products[6]];
  return (
    <section className="py-20" style={{ background: PAPER }}>
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold md:text-4xl" style={{ color: INK, fontFamily: futura }}>
          {t("sf.hydratedTitle")}
        </h2>
        <p className="mt-4 text-center text-[15px] text-ink/60" style={{ fontFamily: futura }}>
          {t("sf.hydratedDesc")}
        </p>
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {four.map((p) => (
            <div key={p.en} className="group cursor-pointer">
              <img
                src={p.img}
                alt={p.name}
                className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-[1.01]"
                loading="lazy"
              />
              <div className="mt-4 flex items-baseline justify-between">
                <div>
                  <div className="text-[15px] font-bold" style={{ color: INK, fontFamily: futura }}>
                    {p.name}
                  </div>
                  <div className="text-[13px] text-ink/60" style={{ fontFamily: futura }}>
                    {p.en}
                  </div>
                </div>
                <div className="text-[14px] font-semibold" style={{ color: PINK, fontFamily: futura }}>
                  ${p.price}
                </div>
              </div>
              <SwatchRow swatches={p.swatches} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SfStory() {
  const { t } = useLang();
  return (
    <section className="py-20" style={{ background: CREAM }}>
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <img src="/images/medierba-story.jpg" alt="MEDIERBA story" className="aspect-[4/5] w-full object-cover" loading="lazy" />
        <div className="text-center md:text-left">
          <div className="text-4xl font-bold leading-tight md:text-5xl" style={{ color: INK, fontFamily: futura }}>
            {t("sf.storyTitle1")}
            <br />
            {t("sf.storyTitle2")}
          </div>
          <div className="mt-8 text-3xl font-light text-ink/70 md:text-4xl" style={{ fontFamily: pinyon.style.fontFamily }}>
            {t("sf.storyScript")}
          </div>
          <Link
            href="/medierba/about"
            className="mt-10 inline-block border-2 px-10 py-4 text-[13px] font-bold uppercase tracking-[0.15em] transition hover:bg-ink hover:text-white"
            style={{ borderColor: INK, color: INK, fontFamily: futura }}
          >
            {t("sf.storyCta")}
          </Link>
        </div>
      </div>
    </section>
  );
}

export function SfPerks() {
  const { t } = useLang();
  const perks = [
    { t: t("sf.perks1T"), d: t("sf.perks1D"), icon: "★" },
    { t: t("sf.perks2T"), d: t("sf.perks2D"), icon: "↻" },
    { t: t("sf.perks3T"), d: t("sf.perks3D"), icon: "♻" },
  ];
  return (
    <section className="relative py-20 text-white">
      <img src="/images/medierba-perks.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      <div className="absolute inset-0" style={{ background: "rgba(0,4,24,0.55)" }} />
      <div className="relative mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-3">
        {perks.map((p) => (
          <div key={p.t} className="cursor-pointer border border-white/25 p-8 text-center transition hover:bg-white/10">
            <div className="text-2xl">{p.icon}</div>
            <div className="mt-4 text-[15px] font-bold" style={{ fontFamily: futura }}>
              {p.t}
            </div>
            <div className="mt-2 text-[13px] text-white/70" style={{ fontFamily: futura }}>
              {p.d}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function SfSocial() {
  const { t } = useLang();
  const imgs = ["medierba-social-1.jpg", "medierba-social-2.jpg", "medierba-social-3.jpg", "medierba-social-4.jpg"];
  return (
    <section className="py-20" style={{ background: PAPER }}>
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-3xl font-bold" style={{ color: INK, fontFamily: futura }}>
          {t("sf.socialTitle")}
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
          {imgs.map((s) => (
            <a key={s} href="#" className="group relative block overflow-hidden">
              <img
                src={`/images/${s}`}
                alt=""
                className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-black/40 text-xl opacity-0 transition group-hover:opacity-100">
                ❤
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SfNewsletter({ site }: { site: SiteConfig }) {
  const { t } = useLang();
  return (
    <section className="py-20" style={{ background: CREAM }}>
      <div className="mx-auto max-w-xl px-6 text-center">
        <h2 className="text-3xl font-bold md:text-4xl" style={{ color: INK, fontFamily: futura }}>
          {t("sf.newsTitle")}
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-ink/60" style={{ fontFamily: futura }}>
          {site.leadForm.desc}
        </p>
        <form className="mt-8 flex border-2" style={{ borderColor: INK }}>
          <input
            type="email"
            placeholder={t("sf.newsPlaceholder")}
            className="w-full bg-transparent px-5 py-4 text-sm outline-none"
            style={{ color: INK, fontFamily: futura }}
          />
          <button
            type="submit"
            className="shrink-0 px-8 text-[13px] font-bold uppercase tracking-[0.15em] text-white transition hover:opacity-80"
            style={{ background: INK, fontFamily: futura }}
          >
            {t("sf.newsJoin")}
          </button>
        </form>
        <p className="mt-4 text-[12px] text-ink/50" style={{ fontFamily: futura }}>
          {site.leadForm.note}
        </p>
      </div>
    </section>
  );
}

export function SfFooter({ site }: { site: SiteConfig }) {
  const { t } = useLang();
  const cols: { title: string; links: string[] }[] = [
    { title: t("sf.footerShop"), links: t("sf.footerShopLinks") as unknown as string[] },
    { title: t("sf.footerCompany"), links: t("sf.footerCompanyLinks") as unknown as string[] },
    { title: t("sf.footerHelp"), links: t("sf.footerHelpLinks") as unknown as string[] },
  ];
  return (
    <footer style={{ background: INK, color: "#fff" }}>
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold tracking-[0.15em]" style={{ fontFamily: futura }}>
              BIOSPHERE
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">{site.footer.intro}</p>
          <div className="mt-6 flex gap-4 text-xl">
            <span className="cursor-pointer hover:opacity-70">◎</span>
            <span className="cursor-pointer hover:opacity-70">✆</span>
            <span className="cursor-pointer hover:opacity-70">✉</span>
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <div className="text-[12px] font-bold uppercase tracking-[0.2em] text-white/40" style={{ fontFamily: futura }}>
              {c.title}
            </div>
            <ul className="mt-5 space-y-3 text-sm text-white/60">
              {c.links.map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-white hover:underline">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/15 py-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 text-xs text-white/40" style={{ fontFamily: futura }}>
          <span>{site.footer.copyright}</span>
          <span>{site.footer.note}</span>
        </div>
      </div>
    </footer>
  );
}