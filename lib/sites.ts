import { biosphereAi } from "./site/biosphere-ai";
import { beauty2oem } from "./site/beauty2oem";
import { skin2oem } from "./site/skin2oem";
import { medierba } from "./site/medierba";
import { oralcare } from "./site/oralcare";

export const sites = {
  "biosphere-ai": biosphereAi,
  "beauty2oem": beauty2oem,
  "skin2oem": skin2oem,
  medierba: medierba,
  "biosphere-oralcare": oralcare,
};

export type SiteKey = keyof typeof sites;

export function getSite(key: string) {
  return sites[key as SiteKey] ?? biosphereAi;
}
