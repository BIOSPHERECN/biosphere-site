import { biosphereAi as site, biosphereAiTech } from "@/lib/site/biosphere-ai";
import { PageHero } from "@/components/sites/biosphere-ai";
import { LeadForm } from "@/components/site";
import { AiTechGrid } from "@/components/sites/biosphere-ai";

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        badge="Technology"
        title="三大自研技术"
        desc={biosphereAiTech.intro}
      />
      <AiTechGrid items={biosphereAiTech.items} />
      <LeadForm site={site} />
    </>
  );
}
