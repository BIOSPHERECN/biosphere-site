import type { SiteConfig } from "./types";

export const biosphereAi: SiteConfig = {
  key: "biosphere-ai",
  domain: "biosphere-ai.com",
  name: "BIOSPHERE-AI",
  tagline: "AI驱动的草本生物科技研发平台",
  role: "科技中枢",
  desc: "帛卉集团旗下 AI 驱动的草本生物科技研发中枢，以 13,000+ 独家配方数据库与三大自研技术，连接消费洞察、配方研发与柔性智造。",
  theme: {
    brand: "#3B82F6",
    brandDeep: "#1D4ED8",
    brandSoft: "#DBEAFE",
    ink: "#0F172A",
    paper: "#FFFFFF",
    accent: "#F5F0EB",
    sans: "'Inter', 'Helvetica Neue', 'Arial', 'PingFang SC', 'Microsoft YaHei', sans-serif",
  },
  nav: [
    { label: "平台", href: "/biosphere-ai/platform" },
    { label: "技术", href: "/biosphere-ai/technology" },
    { label: "解决方案", href: "/biosphere-ai/solutions" },
    { label: "资源", href: "/biosphere-ai/resources" },
    { label: "关于", href: "/biosphere-ai/about" },
    { label: "联系", href: "/biosphere-ai/contact" },
  ],
  announcement: "AI 配方研发平台开放品牌合作申请 · 13,000+ 独家配方数据库",
  hero: {
    badge: "AI × 草本生物科技",
    title: ["让配方研发，", "从实验室走向算法"],
    subtitle:
      "我们以 AI 驱动的配方引擎、创新提取发酵与低温闪萃技术，把 13,000+ 独家配方与 30+ 位研发科学家的经验，转化为可复用的产品力。",
    primary: { label: "预约平台演示", href: "/biosphere-ai/contact" },
    secondary: { label: "了解核心技术", href: "/biosphere-ai/technology" },
    visual: "AI 全链路：洞察 → 配方 → 制造 → 营销",
  },
  stats: [
    { value: "13,000+", label: "独家配方数据库" },
    { value: "50万+", label: "片面膜日产能" },
    { value: "300+", label: "全球战略供应商" },
    { value: "30+", label: "研发科学家" },
  ],
  leadForm: {
    title: "开启你的 AI 产品力",
    desc: "留下需求，产品顾问将在 1 个工作日内与你联系，提供配方诊断与平台演示。",
    selectLabel: "合作类型",
    selectOptions: ["品牌孵化", "技术授权", "联合研发", "原料合作"],
    cta: "提交申请",
    note: "提交即代表同意《数据与隐私条款》，我们承诺不向第三方共享你的信息。",
  },
  footer: {
    intro: "帛卉集团科技中枢：AI 驱动的草本生物科技研发平台，让配方研发从实验室走向算法。",
    contact: [
      { label: "合作邮箱", value: "partner@biosphere-ai.com" },
      { label: "研发基地", value: "广州 · 印尼双基地 20,000㎡" },
    ],
    linksTitle: "快速入口",
    extraLinks: [
      { label: "帛卉集团", href: "/" },
      { label: "BEAUTY2OEM 智造出口", href: "/beauty2oem" },
      { label: "SKIN2OEM 智造纵深", href: "/skin2oem" },
      { label: "MEDIERBA 自有品牌", href: "/medierba" },
      { label: "BIOSPHERE-ORALCARE 口腔科技", href: "/biosphere-oralcare" },
    ],
    note: "Powered by BIOSPHERE-AI Herb-Biotech Intelligence",
    copyright: "© 2026 BIOSPHERE GROUP · 帛卉集团 保留所有权利",
  },
};

export const biosphereAiPlatform = {
  modules: [
    {
      title: "趋势洞察",
      desc: "AI 实时扫描全球消费数据与社媒声量，自动生成成分趋势、功效热度与定价带建议。",
      tags: ["消费洞察", "趋势预测", "定价建议"],
    },
    {
      title: "智能配方",
      desc: "以 13,000+ 配方库为训练基底，AI 依据目标功效、肤质与成本约束生成配方骨架，科学家复核后打样。",
      tags: ["配方生成", "功效标签化", "成本优化"],
    },
    {
      title: "柔性智造",
      desc: "配方数据直连 15 条智能产线，小批量多 SKU 切换时间缩短至小时级，支持 300-300,000 片梯度起订。",
      tags: ["柔性生产", "数据直连", "梯度起订"],
    },
    {
      title: "精准营销",
      desc: "每个成分与配方自动生成科学故事与可视化素材，让传播内容从配方数据库直接产出。",
      tags: ["成分叙事", "素材生成", "合规校验"],
    },
  ],
};

export const biosphereAiTech = {
  intro: "三大自研技术体系，构成草本生物科技的完整闭环。",
  items: [
    {
      title: "创新提取发酵",
      subtitle: "菌株优化 × 定向发酵",
      desc: "从 300+ 战略供应商原料库出发，经菌株筛选与梯度发酵工艺，把传统草本原料的活性挖掘到极致。",
      metrics: [
        { value: "10-20×", label: "人参皂苷含量提升" },
        { value: "+30-70%", label: "成分生物利用度" },
      ],
      points: ["定向菌株筛选与驯化", "多梯度发酵参数控制", "发酵终点在线监测"],
    },
    {
      title: "低温闪萃合成",
      subtitle: "0-10℃ 低温梯度闪萃",
      desc: "以低温梯度闪萃工艺替代传统高温提取，保护热敏活性成分，保留天然植物本来的活性面貌。",
      metrics: [
        { value: "95%+", label: "热敏活性成分保留率" },
        { value: "+20-40%", label: "抗氧化活性" },
      ],
      points: ["0-10℃ 全链路低温", "负压梯度闪萃", "活性即时封装"],
    },
    {
      title: "合成生物智造",
      subtitle: "产学研协同",
      desc: "与暨南大学共建联合实验室，通过合成生物学技术量产重组蛋白与透皮修复肽。",
      metrics: [
        { value: "rhCOLL", label: "重组人源化胶原蛋白" },
        { value: "CTP", label: "透皮修复肽" },
      ],
      points: ["暨南大学联合实验室", "重组人源化胶原蛋白量产", "CTP 透皮修复肽体系"],
    },
  ],
};

export const biosphereAiSolutions = [
  {
    title: "品牌孵化",
    desc: "从市场定位、配方开发到包装上市的全链路产品方案，帮助新品牌 90 天完成首款产品交付。",
    points: ["定位咨询", "配方与功效验证", "包装与备案支持"],
  },
  {
    title: "技术授权",
    desc: "将发酵与闪萃工艺、专利配方授权给成熟品牌，快速补充功效叙事与产品线。",
    points: ["专利配方授权", "工艺输出", "技术背书与培训"],
  },
  {
    title: "联合研发",
    desc: "与品牌研发团队共建项目，针对特定成分、剂型与功效做定制化开发。",
    points: ["定制成分开发", "功效联合验证", "知识产权共商"],
  },
];

export const biosphereAiResources = [
  {
    type: "技术笔记",
    title: "低温闪萃如何保住 95% 的热敏活性成分",
    desc: "从温度曲线、真空梯度到封装节点，拆解闪萃工艺的完整控制链。",
  },
  {
    type: "应用笔记",
    title: "人参发酵液的 10-20 倍皂苷提升实践",
    desc: "菌株筛选路径与发酵参数的工程化记录。",
  },
  {
    type: "白皮书",
    title: "AI 配方研发：从数据库到产品力的方法论",
    desc: "13,000+ 配方的标签化体系与生成式配方的质量控制。",
  },
  {
    type: "联合论文",
    title: "重组人源化胶原蛋白在护肤品的应用研究",
    desc: "与暨南大学联合实验室的合作成果摘要。",
  },
];
