import { skin2oem as site, skin2oemCapabilities } from "@/lib/site/skin2oem";
import { CapabilityGrid } from "@/components/blocks";
import { PageHero } from "@/components/sites/skin2oem";
import { LeadForm } from "@/components/site";

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero
        badge="Capabilities"
        title="护肤剂型矩阵"
        desc="精华、面霜、面膜、洁面四线专精，梯度起订匹配品牌生命周期。"
      />
      <CapabilityGrid items={skin2oemCapabilities} title="剂型与功效方向" desc="每一剂型配套成熟的功效验证数据与工艺参数。" />
      <LeadForm site={site} />
    </>
  );
}
