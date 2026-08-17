import { medierba as site, medierbaJournal } from "@/lib/site/medierba";
import { PageHero } from "@/components/sites/medierba";
import { LeadForm } from "@/components/site";
import { JournalGrid } from "@/components/blocks";

export default function JournalPage() {
  return (
    <>
      <PageHero badge="Journal" title="MEDIERBA 期刊" desc="配方手记、成分科学与草本溯源。" />
      <JournalGrid items={medierbaJournal} />
      <LeadForm site={site} />
    </>
  );
}
