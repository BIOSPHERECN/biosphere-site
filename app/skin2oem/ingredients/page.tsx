import { skin2oem as site, skin2oemIngredients } from "@/lib/site/skin2oem";
import { IngredientGrid } from "@/components/blocks";
import { PageHero } from "@/components/sites/skin2oem";
import { LeadForm } from "@/components/site";

export default function IngredientsPage() {
  return (
    <>
      <PageHero
        badge="Ingredients"
        title="原料研究"
        desc="新草本原料库：发酵、闪萃与合成生物技术下的活性物研究。"
      />
      <IngredientGrid items={skin2oemIngredients} title="核心原料体系" />
      <LeadForm site={site} />
    </>
  );
}
