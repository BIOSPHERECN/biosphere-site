# Summer Fridays Homepage Clone → MEDIERBA

Target: https://summerfridays.com/ (Shopify, Summer Fridays)
Fidelity: pixel-perfect visual emulation; content localized to MEDIERBA (帛卉集团自有品牌)
Landing: `/medierba` homepage replacement

## Design Tokens (extracted from live site)
- 深蓝 ink: `rgb(0,4,24)` (#000418) — text/primary
- 米白 paper: `rgb(238,237,236)` (#EEEEDC), `rgb(249,248,245)` (#F9F8F5), `rgb(246,247,248)` (#F6F7F8) — backgrounds
- 玫红 accent: `#ef4b81` — announcement bar, price accents
- 浅灰: `rgb(213,209,202)` (#D5D1CA) — borders
- Fonts: ExpressaEFHeavyRegular (woff2, headings), futura-pt (body, system), Pinyon Script (Google, decorative script)

## Page Topology (top → bottom)
1. Announcement bar — pink #ef4b81, "FREE SHIPPING ON U.S. ORDERS $35+ Learn More"
2. Header — paper bg, logo left, nav center (Shop mega-menu: Shop All/Best Sellers/Skincare/Makeup/Lip Care/Fragrance/Body Care/Minis/Sets/Gift Card; By Skin Type; By Ingredients; Discover; About), right icons (Rewards/Account/Search/Bag(0))
3. Hero — full-width image (Jet-Lag-Overnight-Bundle-Model.jpg 1600w), overlay heading, CTA "shop now"
4. "The Perfect Routine for Your Skin" — quiz CTA block (Skincare Quiz)
5. "body essentials" — H1 script overlay on large image (Body-Desktop_HP_v3.jpg / BBB_group.jpg)
6. "Discover Our Community Favorites" — horizontal product carousel: 12 cards (image + swatch row + name + desc + price + Add to Bag button)
7. Collection banner 1 — "The Flushed Lip Stain Collection" (prod-lipstain-howto.jpg)
8. "Skincare + Hybrid-Makeup" — two-line brand statement section
9. Collection banner 2 — "The Lip Butter Balm Collection" (prod-lbb-square.jpg)
10. "Hydrated Summer Skin" — 4-product grid (2x2 with product images)
11. "Essential beauty formulations from California." + "For the skin and senses." — brand story (story.jpg)
12. Perks — 3 cards: Join the Self-Care Club Rewards / Subscribe & Save Get 15% Off / Recycle with Us Get $25 back (perks.jpg bg)
13. "Follow us @summerfridays" — 4-tile social gallery (social-1..4)
14. Newsletter — "Stay Up To Date" email signup
15. Footer — dark blue, link columns, social icons

## Interaction Model
- Product carousel: click-driven horizontal scroll (no autoplay)
- Header mega-menu: click-driven dropdown
- All hover states: opacity/scale transitions 300ms

## Product Mapping (SF → MEDIERBA)
| SF product | MEDIERBA product | image | swatches |
|---|---|---|---|
| Body Butter Balm Vanilla | 人参微光精华 | prod-butter-main.jpg | almond/slipper/rosette |
| Flushed Lip Stain Mocha | 灵芝修护面霜 | prod-lipstain-main.jpg | mocha/plum/maple |
| ShadeDrops SPF50 | 积雪草舒缓水 | prod-shadedrops-main.jpg | sand/clay/dune |
| Bronzer Butter Balm | 绿茶平衡洁面 | prod-bronzer-main.jpg | sand/desert/haze |
| Jet Lag Eye Patches | 红参紧致眼霜 | prod-eyepatches.jpg | — |
| Lip Butter Balm Iced Coffee | 发酵新生面膜 | prod-lbb-icedcoffee.png | iced-coffee/cherry |
| Dream Lip Oil | 烟酰胺控油精华 | prod-liopoil-main.jpg | bare-sand/berry-spritz |
| Jet Lag Essentials Set | 新草本旅行套装 | prod-jetlagsets-main.jpg | — |
| Blush Butter Balm | 灵芝精华油 | prod-blush-strawberry.jpg | soft-strawberry/blush-dreams |
| Cloud Dew Gel Cream | 透明质酸保湿面霜 | prod-clouddew-main.jpg | — |
| SoftLine Lip Liner | 本草唇膏笔 | prod-liner-main.jpg | cinnamon/espresso |
| Sunlit Vanilla EDP | 本草淡香水 | prod-perfume-main.jpg | — |

## Assets
All under `public/images/summerfridays/` (85 files downloaded: 39 main images + 46 swatches)
Font: `public/fonts/ExpressaEFHeavyRegular.woff2`
Favicon: `public/images/summerfridays/favicon.png`
