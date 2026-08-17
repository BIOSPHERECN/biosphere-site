import type { SiteConfig } from "./types";

export const beauty2oem: SiteConfig = {
  key: "beauty2oem",
  domain: "beauty2oem.com",
  name: "BEAUTY2OEM",
  tagline: "从配方到成品的全品类智造伙伴",
  role: "智造出口",
  desc: "帛卉集团智造平台，以 15 条智能产线与 20,000㎡ 双基地，为全球品牌提供护肤、彩妆、口腔、个护的 OEM / ODM 一站式交付。",
  theme: {
    brand: "#2563EB",
    brandDeep: "#1D4ED8",
    brandSoft: "#DBEAFE",
    ink: "#0F172A",
    paper: "#FFFFFF",
    accent: "#F5F0EB",
    sans: "'Inter', 'Helvetica Neue', 'Arial', 'PingFang SC', 'Microsoft YaHei', sans-serif",
  },
  nav: [
    { label: "关于我们", href: "/beauty2oem/about" },
    { label: "我们能做什么", href: "/beauty2oem/what-we-do" },
    { label: "品类能力", href: "/beauty2oem/capabilities" },
    { label: "工艺技术", href: "/beauty2oem/technology" },
    { label: "产能实力", href: "/beauty2oem/capacity" },
    { label: "质量认证", href: "/beauty2oem/quality" },
    { label: "新闻动态", href: "/beauty2oem/news" },
    { label: "联系我们", href: "/beauty2oem/contact" },
  ],
  announcement: "诚邀全球品牌伙伴洽谈 OEM / ODM 合作 · 15 条智能产线 全品类智造",
  hero: {
    badge: "OEM / ODM 智造伙伴",
    title: ["从配方到成品，", "一条线交付"],
    subtitle:
      "以 13,000+ 配方库、15 条智能产线与 ISO22716 + GMPC 双认证体系，把护肤、彩妆、口腔与个护的制造，做成高效、透明、可追溯的一条线。",
    primary: { label: "获取合作方案", href: "/beauty2oem/contact" },
    secondary: { label: "查看品类能力", href: "/beauty2oem/capabilities" },
    visual: "智能制造链路：打样 → 试产 → 大货 → 交付",
  },
  stats: [
    { value: "13,000+", label: "配方数据库" },
    { value: "15条", label: "智能生产线" },
    { value: "20,000㎡", label: "双基地智造面积" },
    { value: "300+", label: "全球战略供应商" },
  ],
  leadForm: {
    title: "获取专属合作方案",
    desc: "告诉我们你的品类与目标市场，工程团队将在 48 小时内回复报价与打样周期。",
    selectLabel: "合作品类",
    selectOptions: ["护肤", "彩妆", "口腔护理", "个人护理"],
    cta: "获取报价",
    note: "提交即代表同意《数据与隐私条款》，询盘信息仅用于业务对接。",
  },
  footer: {
    intro: "帛卉集团智造平台：全品类 OEM / ODM 一站式交付，让每一支产品都有数据背书。",
    contact: [
      { label: "商务邮箱", value: "sales@beauty2oem.com" },
      { label: "智造基地", value: "广州 · 印尼 双基地 20,000㎡" },
    ],
    linksTitle: "集团生态",
    extraLinks: [
      { label: "BIOSPHERE-AI 科技中枢", href: "/biosphere-ai" },
      { label: "SKIN2OEM 智造纵深", href: "/skin2oem" },
      { label: "MEDIERBA 自有品牌", href: "/medierba" },
      { label: "BIOSPHERE-ORALCARE 口腔科技", href: "/biosphere-oralcare" },
    ],
    note: "Powered by BIOSPHERE-AI Herb-Biotech Intelligence",
    copyright: "© 2026 BIOSPHERE GROUP · 帛卉集团 保留所有权利",
  },
};

export const beauty2oemServices = [
  {
    title: "化妆品制造 OEM",
    img: "/images/beauty2oem/factory-engineer.jpg",
    desc: "依据你的配方或选定配方库方案，完成乳化、灌装、包装全流程生产。",
    points: ["配方库 300+ 成熟方案", "梯度起订 3,000 支起", "标签与包装代工"],
  },
  {
    title: "自有品牌开发 ODM",
    img: "/images/beauty2oem/skincare-product.jpg",
    desc: "从品牌定位、成分故事到包装设计与备案，全链路开发自有品牌产品线。",
    points: ["市场与竞品分析", "品牌包装设计", "备案与合规代办"],
  },
  {
    title: "包装与供应链",
    img: "/images/beauty2oem/factory-line.jpg",
    desc: "全球包材集采与智能仓储，覆盖瓶罐、泵头、软管与环保材料。",
    points: ["300+ 包材供应商", "环保包装方案", "智能仓配一体"],
  },
];

export const beauty2oemCapabilities = [
  {
    title: "护肤",
    img: "/images/beauty2oem/skincare-product.jpg",
    desc: "精华、面霜、面膜、洁面等全剂型，主攻修护、抗衰、美白功效方向。",
    tags: ["精华", "面霜", "面膜", "洁面", "水乳"],
    moq: "3,000 支起",
  },
  {
    title: "彩妆",
    img: "/images/beauty2oem/product-bottles.jpg",
    desc: "底妆、唇妆与眼部产品线，支持多彩配方与包材定制。",
    tags: ["粉底", "口红", "眼影", "遮瑕"],
    moq: "5,000 支起",
  },
  {
    title: "口腔护理",
    img: "/images/oralcare/oral-4300078.jpg",
    desc: "牙膏、漱口水、洁牙片等剂型，微生态与草本双技术路线。",
    tags: ["牙膏", "漱口水", "洁牙片"],
    moq: "10,000 支起",
  },
  {
    title: "个人护理",
    img: "/images/beauty2oem/factory-line.jpg",
    desc: "洗护、身体护理与香氛产品，承接自然与功能护理趋势。",
    tags: ["洗发", "沐浴", "身体乳", "香氛"],
    moq: "5,000 支起",
  },
];

export const beauty2oemProcess: { title: string; desc: string }[] = [
  { title: "需求对接", desc: "48 小时内响应，确认品类、预算与目标市场" },
  { title: "配方打样", desc: "7-10 个工作日完成打样与配方确认" },
  { title: "稳定性测试", desc: "加速老化、微生物与理化全项测试" },
  { title: "小批试产", desc: "试产验证工艺与包材适配性" },
  { title: "大货生产", desc: "智能产线排产，全程可追溯" },
  { title: "物流交付", desc: "国内直发或跨境出口合规交付" },
];

export const beauty2oemNews = [
  {
    date: "2026.07",
    title: "印尼基地二期投产，产能提升 40%",
    desc: "印尼 20,000㎡ 智造基地完成二期扩建，新增 6 条智能产线，辐射东南亚出口市场。",
    img: "/images/beauty2oem/factory-line.jpg",
  },
  {
    date: "2026.05",
    title: "与巴斯夫达成战略原料合作",
    desc: "300+ 战略供应商矩阵再扩容，锁定核心活性原料的长期供应与优先研发权。",
    img: "/images/biosphere-ai/lab-research.jpg",
  },
  {
    date: "2026.03",
    title: "连续三年通过 ISO22716 + GMPC 审核",
    desc: "广州基地双认证复评审通过，10 万级洁净车间全区域零缺陷。",
    img: "/images/beauty2oem/factory-engineer.jpg",
  },
];

export const beauty2oemCapacity = [
  { value: "50万+", label: "片面膜日产能" },
  { value: "15条", label: "智能生产线" },
  { value: "20,000㎡", label: "双基地智造面积" },
  { value: "10万级", label: "洁净车间等级" },
  { value: "300-300,000", label: "梯度起订范围" },
  { value: "48h", label: "询盘响应时效" },
];

export const beauty2oemQuality = [
  "ISO 22716 化妆品良好生产规范",
  "GMPC 认证体系",
  "HALAL 清真认证",
  "10 万级洁净车间",
  "全批次产品留样与追溯",
  "理化 + 微生物 + 功效三阶质检",
];
