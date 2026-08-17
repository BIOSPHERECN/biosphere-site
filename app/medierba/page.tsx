import { medierba as site } from "@/lib/site/medierba";
import {
  SfHero,
  SfQuiz,
  SfBodyEssentials,
  SfCarousel,
  SfCollectionBanner,
  SfHybrid,
  SfHydratedGrid,
  SfStory,
  SfPerks,
  SfSocial,
  SfNewsletter,
} from "@/components/sites/medierba-sf";

export default function MedierbaHome() {
  return (
    <div>
      <SfHero />
      <SfQuiz />
      <SfBodyEssentials />
      <SfCarousel />
      <SfCollectionBanner
        img="/images/medierba-collection-1.jpg"
        href="/medierba/shop"
        variant="lipstain"
      />
      <SfHybrid />
      <SfCollectionBanner
        img="/images/medierba-collection-2.jpg"
        href="/medierba/shop"
        variant="lipbutter"
        reverse
      />
      <SfHydratedGrid />
      <SfStory />
      <SfPerks />
      <SfSocial />
      <SfNewsletter site={site} />
    </div>
  );
}