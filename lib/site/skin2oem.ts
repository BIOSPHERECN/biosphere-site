import type { SiteConfig } from "./types";

export const skin2oem: SiteConfig = {
  key: "skin2oem",
  domain: "skin2oem.com",
  name: "SKIN2OEM",
  tagline: "护肤专精 · 数据驱动的配方研发",
  role: "智造纵深",
  desc: "帛卉集团护肤专精智造平台：以 3,000+ 护肤配方、95%+ 活性保留率与功效数据体系，为功效护肤品牌提供从配方到数据背书的 OEM / ODM 服务。",
  theme: {
    brand: "#7C3AED",
    brandDeep: "#5B21B6",
    brandSoft: "#EDE9FE",
    ink: "#0F172A",
    paper: "#FFFFFF",
    accent: "#F8F5FF",
    sans: "'Inter', 'Helvetica Neue', 'Arial', 'PingFang SC', 'Microsoft YaHei', sans-serif",
  },
  nav: [
    { label: "关于我们", href: "/skin2oem/about" },
    { label: "护肤品类", href: "/skin2oem/capabilities" },
    { label: "配方研发", href: "/skin2oem/formulation" },
    { label: "核心技术", href: "/skin2oem/technology" },
    { label: "原料研究", href: "/skin2oem/ingredients" },
    { label: "质量认证", href: "/skin2oem/quality" },
    { label: "合作案例", href: "/skin2oem/case-studies" },
    { label: "联系我们", href: "/skin2oem/contact" },
  ],
  announcement: "功效护肤 OEM 专线：每一道配方，都以功效数据说话",
  hero: {
    badge: "护肤专精 OEM / ODM",
    title: ["护肤品的每一道配方，", "都以数据说话"],
    subtitle:
      "我们只做护肤。3,000+ 护肤配方、95%+ 活性保留率、30+ 项功效数据维度——用研发数据，为你的品牌建立可验证的产品力。",
    primary: { label: "提交配方需求", href: "/skin2oem/contact" },
    secondary: { label: "了解配方研发", href: "/skin2oem/formulation" },
    visual: "功效数据：透皮率 → 保湿力 → 修护指数",
  },
  stats: [
    { value: "3,000+", label: "护肤配方库" },
    { value: "95%+", label: "活性成分保留率" },
    { value: "30+", label: "功效数据维度" },
    { value: "28天", label: "人体功效测试周期" },
  ],
  leadForm: {
    title: "提交你的护肤配方需求",
    desc: "功效方向、剂型与目标价位告诉我们，配方团队将在 2 个工作日内回复初步方案。",
    selectLabel: "剂型方向",
    selectOptions: ["精华", "面霜", "面膜", "洁面", "水乳"],
    cta: "提交需求",
    note: "提交即代表同意《数据与隐私条款》，配方需求仅用于业务对接。",
  },
  footer: {
    intro: "帛卉集团护肤专精智造平台：只做护肤，用数据建立产品力。",
    contact: [
      { label: "研发合作", value: "rnd@skin2oem.com" },
      { label: "研发基地", value: "广州 · 暨南大学联合实验室" },
    ],
    linksTitle: "集团生态",
    extraLinks: [
      { label: "BIOSPHERE-AI 科技中枢", href: "/biosphere-ai" },
      { label: "BEAUTY2OEM 智造出口", href: "/beauty2oem" },
      { label: "MEDIERBA 自有品牌", href: "/medierba" },
      { label: "BIOSPHERE-ORALCARE 口腔科技", href: "/biosphere-oralcare" },
    ],
    note: "Powered by BIOSPHERE-AI Herb-Biotech Intelligence",
    copyright: "© 2026 BIOSPHERE GROUP · 帛卉集团 保留所有权利",
  },
};

export const skin2oemCapabilities = [
  {
    title: "精华",
    desc: "修护、抗衰、美白、舒缓全功效方向，支持水油双相与微乳体系。",
    tags: ["修护精华", "抗衰精华", "美白精华"],
    moq: "3,000 支起",
  },
  {
    title: "面霜",
    desc: "从轻薄乳霜到丰润膏霜，覆盖日霜、晚霜与睡眠面膜。",
    tags: ["日霜", "晚霜", "睡眠面膜"],
    moq: "3,000 支起",
  },
  {
    title: "面膜",
    desc: "贴片式与涂抹式双线，50 万片日产能支持大促爆单。",
    tags: ["贴片面膜", "涂抹面膜", "冻干面膜"],
    moq: "50,000 片起",
  },
  {
    title: "洁面",
    desc: "氨基酸表活体系，弱酸性配方兼顾清洁力与温和度。",
    tags: ["氨基酸洁面", "卸妆", "洁面泡"],
    moq: "5,000 支起",
  },
];

export const skin2oemFormulation = {
  dataDims: [
    { value: "透皮率", desc: "体外经皮渗透实验，量化活性物渗透曲线" },
    { value: "保湿力", desc: "皮肤水分含量与经皮水分散失双指标" },
    { value: "修护指数", desc: "屏障修护功效评估，含 TEWL 恢复率" },
    { value: "舒缓验证", desc: "红区面积与炎症因子检测双重验证" },
    { value: "美白评估", desc: "黑色素指数 MI 值变化追踪" },
    { value: "稳定性", desc: "3 年加速老化 + 极端温变测试" },
  ],
  pipeline: [
    { title: "原料筛选", desc: "300+ 战略供应商原料库，活性物溯源认证" },
    { title: "配方设计", desc: "AI 辅助生成骨架 + 科学家手工微调" },
    { title: "功效验证", desc: "体外 + 人体双重功效数据闭环" },
    { title: "临床背书", desc: "28 天人体功效测试，输出数据报告" },
  ],
};

export const skin2oemTechItems = [
  {
    title: "创新提取发酵",
    desc: "人参皂苷定向富集 10-20 倍，成分生物利用度提升 30-70%。",
    metrics: ["10-20× 皂苷富集", "+30-70% 生物利用度"],
  },
  {
    title: "低温闪萃合成",
    desc: "0-10℃ 低温梯度闪萃，热敏活性保留率 95%+，抗氧化活性提升 20-40%。",
    metrics: ["95%+ 活性保留", "+20-40% 抗氧化"],
  },
  {
    title: "合成生物智造",
    desc: "rhCOLL 重组人源化胶原蛋白与 CTP 透皮修复肽量产。",
    metrics: ["rhCOLL 重组胶原", "CTP 透皮修复肽"],
  },
];

export const skin2oemIngredients = [
  {
    name: "人参发酵液",
    latin: "Panax Ginseng Ferment",
    desc: "定向菌株发酵，皂苷含量提升 10-20 倍，激活肌肤能量循环。",
    benefit: "提亮 · 抗衰",
  },
  {
    name: "重组人源化胶原蛋白",
    latin: "rhCOLL",
    desc: "与人体胶原蛋白同源序列设计，靶向补充流失基质。",
    benefit: "充盈 · 紧致",
  },
  {
    name: "CTP 透皮修复肽",
    latin: "CTP Repair Peptide",
    desc: "自研透皮修复肽体系，深度修护屏障并缓解泛红。",
    benefit: "修护 · 舒缓",
  },
  {
    name: "积雪草发酵液",
    latin: "Centella Ferment",
    desc: "发酵工艺放大积雪草苷活性，舒缓敏感同时促进修护。",
    benefit: "舒缓 · 修护",
  },
];

export const skin2oemCases = [
  {
    name: "国货功效护肤新锐",
    desc: "依托 AI 配方引擎 45 天完成 3 款精华从定位到上市，28 天人体测试报告成为核心卖点。",
    tags: ["精华系列", "AI 配方引擎", "45 天上市"],
  },
  {
    name: "东南亚皮肤科渠道品牌",
    desc: "以重组胶原蛋白为技术锚点开发修护线，通过 GMPC + HALAL 双认证进入药房渠道。",
    tags: ["修护线", "重组胶原", "渠道合规"],
  },
  {
    name: "直播电商白牌升级",
    desc: "以数据报告重塑品牌叙事，单款面膜 90 天销量破百万片。",
    tags: ["面膜爆品", "数据叙事", "百万片级"],
  },
];
