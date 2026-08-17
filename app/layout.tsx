import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "@/components/lang";

export const metadata: Metadata = {
  title: {
    default: "帛卉集团 | BIOSPHERE GROUP · AI驱动的草本生物科技美妆产业创新平台",
    template: "%s | 帛卉集团 BIOSPHERE GROUP",
  },
  description:
    "帛卉集团：AI驱动的草本生物科技美妆产业创新平台，旗下 BIOSPHERE-AI、BEAUTY2OEM、SKIN2OEM、MEDIERBA、BIOSPHERE-ORALCARE 五大平台。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
