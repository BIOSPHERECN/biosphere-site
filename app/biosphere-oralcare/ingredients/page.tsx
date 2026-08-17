import { oralcare as site, oralcareIngredients } from "@/lib/site/oralcare";
import { PageHero } from "@/components/sites/oralcare";
import { LeadForm } from "@/components/site";
import { IngredientGrid } from "@/components/blocks";

export default function IngredientsPage() {
  return (
    <>
      <PageHero
        badge="Ingredients"
        title="成分库"
        desc="n-Ha、益生元与草本提取，每一种成分都有清晰的作用机制。"
      />
      <IngredientGrid items={oralcareIngredients} />
      <LeadForm site={site} />
    </>
  );
}
