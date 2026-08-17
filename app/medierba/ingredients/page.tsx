import { medierba as site, medierbaIngredients } from "@/lib/site/medierba";
import { PageHero } from "@/components/sites/medierba";
import { LeadForm } from "@/components/site";
import { IngredientGrid } from "@/components/blocks";

export default function IngredientsPage() {
  return (
    <>
      <PageHero
        badge="Ingredients"
        title="成分库"
        desc="每一种成分都经过实验室验证，让功效有据可循。"
      />
      <IngredientGrid items={medierbaIngredients} />
      <LeadForm site={site} />
    </>
  );
}
