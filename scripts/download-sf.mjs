import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const CDN = "https://cdn.shopify.com/s/files/1/2382/2877/files/";
const OUT = join(process.cwd(), "public", "images", "summerfridays");
mkdirSync(OUT, { recursive: true });

const names = [
  ["Jet-Lag-Overnight-Bundle-Model.jpg", "hero-jetlag.jpg", 1600],
  ["Body-Desktop_HP_v3.jpg", "hero-body.jpg", 1600],
  ["HP-About-Navigation.jpg", "story.jpg", 1000],
  ["HP-Footer-V2.jpg", "footer.jpg", 1200],
  ["BBB_group.jpg", "body-essentials.jpg", 1200],
  ["Treat_on_Repeat_Body_Header_Mobile.jpg", "perks.jpg", 1000],
  ["Body-Butter-Community-Vanilla.jpg", "prod-butter-community.jpg", 800],
  ["BodyButterMainVanilla.jpg", "prod-butter-main.jpg", 800],
  ["Mocha-Lip-Stains-Main.jpg", "prod-lipstain-main.jpg", 800],
  ["Lip-Stains-How-To.jpg", "prod-lipstain-howto.jpg", 800],
  ["US-shadedrops-spf-50-main.jpg", "prod-shadedrops-main.jpg", 800],
  ["ShadeDrops-SPF50-How-To.jpg", "prod-shadedrops-howto.jpg", 800],
  ["Bronzer-Butter-Balm-Main-Sand.jpg", "prod-bronzer-main.jpg", 800],
  ["Bronzer_How_To.jpg", "prod-bronzer-howto.jpg", 800],
  ["Jet-Lag-Essentials-Set-Main.jpg", "prod-jetlagsets-main.jpg", 800],
  ["Jet-Lag-Essentials-Set-HP-Cover.jpg", "prod-jetlagsets-cover.jpg", 800],
  ["Jet-Lag-Eye-Patches-with-Box.jpg", "prod-eyepatches.jpg", 800],
  ["CloudDew2026Main.jpg", "prod-clouddew-main.jpg", 800],
  ["2026-Cloud-Dew-How-To.jpg", "prod-clouddew-howto.jpg", 800],
  ["Dream-Lip-Oil-Main-Square-Bare-Sand.jpg", "prod-liopoil-main.jpg", 800],
  ["LBB_IcedCoffee-Shadow.jpg", "prod-lbb-icedcoffee.jpg", 800],
  ["LBB_Iced-Coffee-Square.jpg", "prod-lbb-square.jpg", 800],
  ["Lip_Butter_Balm_Iced_Coffee_Community_Cover.jpg", "prod-lbb-community.jpg", 800],
  ["cinnamon-softline-liner-main_81313e70-4bbd-4c8c-a9cc-abc3e5f872c3.jpg", "prod-liner-main.jpg", 800],
  ["Liners-How-To.jpg", "prod-liner-howto.jpg", 800],
  ["Sunlit-Vanilla-Main.jpg", "prod-perfume-main.jpg", 800],
  ["Sunlit-Vanilla-How-To.jpg", "prod-perfume-howto.jpg", 800],
  ["Jet-Lag-Mist-Square.jpg", "prod-mist-square.jpg", 800],
  ["Sheer_Skin_Tint_Main_PDP_1.jpg", "prod-tint-main.jpg", 800],
  ["the-blush-brush.jpg", "prod-blushbrush.jpg", 800],
  ["Blush-Butter-Balm-Soft-Strawberry.jpg", "prod-blush-strawberry.jpg", 800],
  ["Blush-Butter-Balm-Community-Cover.jpg", "prod-blush-community.jpg", 800],
  ["body-social-1.jpg", "social-1.jpg", 800],
  ["body-social-2.jpg", "social-2.jpg", 800],
  ["body-social-3.jpg", "social-3.jpg", 800],
  ["Dream-Lil-Oil-HP-Social-Gallery.jpg", "social-4.jpg", 800],
  ["Shelfie_homepage_95d77953-2794-456f-898a-31eac04d99eb.jpg", "gallery-shelfie.jpg", 1000],
  ["NEA_homepage_3e1d5588-97bf-4f7c-9273-9010c2e9bc01.jpg", "gallery-nea.jpg", 1000],
  ["LBB_homepage_7e7df239-fc72-447b-94fd-baaaf28b22d6.jpg", "gallery-lbb.jpg", 1000],
];

const swatches = [
  "almond", "slipper", "rosette", "maple", "plum", "mocha", "sand", "clay", "dune", "desert", "haze",
  "bare-sand", "berry-spritz", "blush-dreams", "brown-sugar", "brownie", "cherry", "cinnamon",
  "espresso", "hot-cocoa", "iced-coffee", "latte", "midnight-berry", "pecan", "pink-cloud",
  "pink-guava", "pink-sugar", "pink-sunset", "poppy", "rose-bud", "rose", "rosewood-nights",
  "sienna", "soft-mauve", "soft-strawberry", "strawberry-soft-serve", "sugar", "sweet-mint",
  "sweet-rose", "toasted-marshmallow", "toasted-terracotta", "toffee", "vanilla-beige", "vanilla",
  "warm-beige",
];

const UA = { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" };

async function dl(url, file) {
  const res = await fetch(url, { headers: UA });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  writeFileSync(join(OUT, file), buf);
}

async function main() {
  const queue = names.map(([n, out, w]) => [
    `${CDN}${n}?width=${w}`,
    out,
  ]);
  for (const s of swatches) {
    queue.push([`${CDN}swatch-${s}_72x.png`, `swatch-${s}.png`]);
  }
  let ok = 0, fail = [];
  for (let i = 0; i < queue.length; i += 4) {
    const batch = queue.slice(i, i + 4);
    await Promise.all(batch.map(async ([url, out]) => {
      try { await dl(url, out); ok++; process.stdout.write(`.`); }
      catch (e) { fail.push(`${out} (${e.message})`); }
    }));
  }
  console.log(`\nDownloaded ${ok}/${queue.length}`);
  if (fail.length) console.log("FAILED:", fail.join(", "));
}

main();
