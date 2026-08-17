import type { Metadata } from "next";
import { getSite } from "@/lib/sites";
import { sfFonts, SfAnnouncement, SfHeader, SfFooter } from "@/components/sites/medierba-sf";

const site = getSite("medierba");

export const metadata: Metadata = {
  title: site.name,
  description: site.desc,
};

export default function MedierbaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`min-h-screen bg-paper text-ink ${sfFonts}`}
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
      <SfAnnouncement />
      <SfHeader />
      <main>{children}</main>
      <SfFooter site={site} />
    </div>
  );
}
