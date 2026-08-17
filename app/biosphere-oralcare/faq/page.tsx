import { oralcare as site } from "@/lib/site/oralcare";
import { PageHero } from "@/components/sites/oralcare";

const faqs = [
  { q: "洁牙片如何替代牙膏？", a: "洁牙片咬碎后配合牙刷干刷或湿刷 2 分钟，泡沫细腻，使用感等同牙膏。" },
  { q: "含氟还是无氟？", a: "两种路线可选：儿童系列与敏感系列为无氟配方，日常系列含氟 1,000ppm。" },
  { q: "订阅如何管理？", a: "订阅价格省 15%，支持随时更换产品、调整频率或暂停，灵活无承诺。" },
  { q: "孕妇可以使用吗？", a: "配方无争议成分，建议孕期咨询牙医后使用。" },
  { q: "牙医渠道如何合作？", a: "诊所与口腔品牌合作请访问「牙医合作」页面提交申请。" },
];

export default function FaqPage() {
  return (
    <>
      <PageHero badge="FAQ" title="常见问题" desc="关于产品、成分与订阅的说明。" />
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-3xl px-4">
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-site border border-black/10 bg-accent p-6">
                <summary className="flex cursor-pointer items-center justify-between font-medium">
                  {f.q}
                  <span className="text-brand transition group-open:rotate-45">＋</span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-ink/60">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
