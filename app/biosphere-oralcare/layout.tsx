import type { Metadata } from "next";
import { getSite } from "@/lib/sites";
import { OcHeader, OcFooter } from "@/components/sites/oralcare";

const site = getSite("biosphere-oralcare");

export const metadata: Metadata = {
  title: site.name,
  description: site.desc,
};

export default function OralcareLayout({ children }: { children: React.ReactNode }) {
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
      <OcHeader site={site} nav={site.nav} />
      <main>{children}</main>
      <OcFooter site={site} />
    </div>
  );
}
