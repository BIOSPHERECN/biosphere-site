import { beauty2oem as site, beauty2oemNews } from "@/lib/site/beauty2oem";
import { PageHero } from "@/components/sites/beauty2oem";
import { LeadForm } from "@/components/site";
import { NewsGrid } from "@/components/blocks";

export default function NewsPage() {
  return (
    <>
      <PageHero badge="News" title="新闻与动态" desc="产能、合作与行业动态，第一时间同步。" />
      <NewsGrid items={beauty2oemNews} />
      <LeadForm site={site} />
    </>
  );
}
