import { medierba as site, medierbaProducts } from "@/lib/site/medierba";
import { ProductGrid } from "@/components/blocks";
import { PageHero } from "@/components/sites/medierba";

export default function ShopPage() {
  return (
    <>
      <PageHero badge="Shop" title="全部产品" desc="每一支产品，都从一颗植物开始，以一组数据证明。" />
      <ProductGrid items={medierbaProducts} title="产品系列" desc="精华、面霜、洁面、面膜，组成完整的护肤仪式。" />
    </>
  );
}
