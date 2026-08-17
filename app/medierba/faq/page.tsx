import { medierba as site } from "@/lib/site/medierba";
import { PageHero } from "@/components/sites/medierba";

const faqs = [
  { q: "MEDIERBA 的产品是否经过动物实验？", a: "不进行任何动物实验，所有产品均通过体外与人体功效验证。" },
  { q: "产品数据报告在哪里查看？", a: "每支产品详情页均附 28 天人体功效验证摘要，完整报告可联系客服索取。" },
  { q: "孕妇可以使用吗？", a: "建议孕期咨询医生后使用，产品全系无香精、无酒精、无防腐争议成分。" },
  { q: "如何退换货？", a: "签收后 7 天内未拆封可无条件退换，已拆封产品支持 30 天体验退款。" },
  { q: "会员积分会过期吗？", a: "积分自获取起 12 个月有效，可在商城直接抵扣现金。" },
];

export default function FaqPage() {
  return (
    <>
      <PageHero badge="FAQ" title="常见问题" desc="关于产品、数据与服务的说明。" />
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
