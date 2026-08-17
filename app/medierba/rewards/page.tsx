import { medierba as site } from "@/lib/site/medierba";
import { PageHero } from "@/components/sites/medierba";

const rewards = [
  { name: "新客礼", desc: "注册即得 200 积分，可兑换旅行装" },
  { name: "打卡礼", desc: "连续打卡 7 天送 100 积分" },
  { name: "评测礼", desc: "真实使用评测返 300 积分" },
  { name: "生日礼", desc: "生日月双倍积分 + 专属礼遇" },
  { name: "升级礼", desc: "年度消费升级等级，解锁限时折扣" },
];

export default function RewardsPage() {
  return (
    <>
      <PageHero badge="Rewards" title="MEDIERBA 会员礼遇" desc="每一次护肤，都值得被记住。" />
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rewards.map((r, i) => (
              <div key={r.name} className="rounded-site border border-black/5 bg-paper p-8 shadow-sm">
                <div className="font-display text-3xl text-brand">{String(i + 1).padStart(2, "0")}</div>
                <h2 className="mt-3 text-lg font-bold">{r.name}</h2>
                <p className="mt-2 text-sm text-ink/60">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
