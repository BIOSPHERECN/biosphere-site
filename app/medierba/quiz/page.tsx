"use client";

import { useState } from "react";
import { medierba as site } from "@/lib/site/medierba";
import { PageHero } from "@/components/sites/medierba";

const questions = [
  { q: "你的肤质是？", options: ["干性", "油性", "混合", "敏感"] },
  { q: "最想改善的问题是？", options: ["暗沉发黄", "干燥细纹", "泛红敏感", "出油闭口"] },
  { q: "你偏好哪种质地的产品？", options: ["轻盈水感", "滋润绵密", "快速吸收"] },
];

export default function QuizPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  return (
    <>
      <PageHero badge="Skin Quiz" title="肌肤测试" desc="30 秒回答 3 个问题，找到属于你的护肤仪式。" />
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-2xl px-4">
          {step < questions.length ? (
            <div className="rounded-site border border-black/10 bg-accent p-10">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand">
                Question {step + 1} / {questions.length}
              </div>
              <h2 className="mt-4 font-display text-3xl font-semibold">{questions[step].q}</h2>
              <div className="mt-8 space-y-3">
                {questions[step].options.map((o) => (
                  <button
                    key={o}
                    onClick={() => {
                      setAnswers([...answers, o]);
                      setStep(step + 1);
                    }}
                    className="w-full rounded-site border border-black/10 bg-paper px-6 py-4 text-left text-sm font-medium transition hover:border-brand hover:bg-brand-soft"
                  >
                    {o}
                  </button>
                ))}
              </div>
              <div className="mt-6 h-1.5 rounded-full bg-black/10">
                <div
                  className="h-1.5 rounded-full bg-brand transition-all"
                  style={{ width: `${((step + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>
          ) : (
            <div className="rounded-site border border-black/10 bg-accent p-10 text-center">
              <div className="font-display text-3xl font-semibold">你的仪式已生成</div>
              <p className="mt-4 text-sm text-ink/60">
                根据你的回答（{answers.join(" · ")}），推荐：人参微光精华 + 积雪草舒缓水。
              </p>
              <button
                onClick={() => {
                  setStep(0);
                  setAnswers([]);
                }}
                className="mt-8 rounded-site bg-ink px-8 py-3 text-sm font-semibold text-white"
              >
                重新测试
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
