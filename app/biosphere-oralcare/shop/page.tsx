import { oralcare as site, oralcareProducts } from "@/lib/site/oralcare";
import { ProductGrid } from "@/components/blocks";
import { PageHero } from "@/components/sites/oralcare";

export default function ShopPage() {
  return (
    <>
      <PageHero badge="Shop" title="全部产品" desc="从洁牙片到漱口水，为不同场景设计的口腔护理方案。" />
      <ProductGrid items={oralcareProducts} title="产品系列" desc="订阅计划可省 15%，随时更换或暂停。" />
    </>
  );
}
