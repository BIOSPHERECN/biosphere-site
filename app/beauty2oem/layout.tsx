import type { Metadata } from "next";
import { getSite } from "@/lib/sites";
import { B2Header, B2Footer } from "@/components/sites/beauty2oem";

const site = getSite("beauty2oem");

export const metadata: Metadata = {
  title: site.name,
  description: site.desc,
};

export default function Beauty2oemLayout({ children }: { children: React.ReactNode }) {
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
      <B2Header site={site} nav={site.nav} />
      <main>{children}</main>
      <B2Footer site={site} />
    </div>
  );
}
