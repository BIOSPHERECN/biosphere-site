import { skin2oem as site } from "@/lib/site/skin2oem";
import { PageHero } from "@/components/sites/skin2oem";
import { LeadForm } from "@/components/site";
import { CertWall } from "@/components/blocks";
import { beauty2oemQuality } from "@/lib/site/beauty2oem";

export default function QualityPage() {
  return (
    <>
      <PageHero
        badge="Quality"
        title="质量与认证"
        desc="共享集团认证体系，功效验证与生产质量双轨并进。"
      />
      <CertWall certs={beauty2oemQuality} />
      <LeadForm site={site} />
    </>
  );
}
