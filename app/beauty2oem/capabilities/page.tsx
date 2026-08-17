import { beauty2oem as site, beauty2oemCapabilities } from "@/lib/site/beauty2oem";
import { CapabilityGrid } from "@/components/blocks";
import { PageHero } from "@/components/sites/beauty2oem";
import { LeadForm } from "@/components/site";

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero
        badge="Capabilities"
        title="四大品类能力"
        desc="护肤、彩妆、口腔、个护四线并进，梯度起订灵活匹配品牌生命周期。"
      />
      <CapabilityGrid items={beauty2oemCapabilities} title="品类与剂型矩阵" desc="每一品类都配套成熟的配方库与工艺参数，打样即所见，量产即所得。" />
      <LeadForm site={site} />
    </>
  );
}
