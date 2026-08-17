import type { SiteConfig } from "./types";

export const medierba: SiteConfig = {
  key: "medierba",
  domain: "medierba.com",
  name: "MEDIERBA",
  tagline: "实验室里的自然 · 新草本科学护肤",
  role: "自有品牌",
  desc: "帛卉集团自有护肤品牌：以三大生物技术重释东方草本，让实验室里被科学验证的自然，抵达每一天的护肤仪式。",
  theme: {
    brand: "#B8860B",
    brandDeep: "#8B6508",
    brandSoft: "#F5EFDC",
    ink: "#1C1917",
    paper: "#FAFAF5",
    accent: "#2D5016",
    sans: "'Inter', 'Helvetica Neue', 'Arial', 'PingFang SC', 'Microsoft YaHei', sans-serif",
    display: "'Cormorant Garamond', 'Playfair Display', Georgia, 'Times New Roman', serif",
  },
  nav: [
    { label: "全部产品", href: "/medierba/shop" },
    { label: "成分库", href: "/medierba/ingredients" },
    { label: "护肤仪式", href: "/medierba/rituals" },
    { label: "品牌故事", href: "/medierba/about" },
    { label: "期刊", href: "/medierba/journal" },
    { label: "联系", href: "/medierba/contact" },
  ],
  announcement: "新品首发：人参微光精华 · 发酵 28 天，皂苷富集 10 倍",
  hero: {
    badge: "新草本 · 科学验证",
    title: ["实验室里的自然", "实验室里的自然"],
    subtitle:
      "三大生物技术重释东方草本：发酵、低温闪萃与合成生物，让传承千年的植物，以可验证的科学姿态，进入你的日常仪式。",
    primary: { label: "探索产品", href: "/medierba/shop" },
    secondary: { label: "认识成分", href: "/medierba/ingredients" },
    visual: "晨光中的草本实验室 · 发酵罐与山茶花",
  },
  stats: [
    { value: "10-20×", label: "人参皂苷富集倍数" },
    { value: "95%+", label: "活性成分保留率" },
    { value: "28天", label: "人体功效验证周期" },
    { value: "0动物", label: "动物实验" },
  ],
  leadForm: {
    title: "订阅 MEDIERBA 日记",
    desc: "每期分享配方手记、成分科学与新品体验，还有会员专属礼遇。",
    selectLabel: "感兴趣的方向",
    selectOptions: ["修护抗衰", "舒缓敏感", "提亮焕肤", "控油平衡"],
    cta: "订阅",
    note: "订阅即表示同意接收品牌邮件，可随时退订。",
  },
  footer: {
    intro: "帛卉集团自有品牌：以生物科技重释东方草本，让科学验证自然之美。",
    contact: [
      { label: "客户服务", value: "care@medierba.com" },
      { label: "品牌合作", value: "brand@medierba.com" },
    ],
    linksTitle: "集团生态",
    extraLinks: [
      { label: "BIOSPHERE-AI 科技中枢", href: "/biosphere-ai" },
      { label: "BEAUTY2OEM 智造出口", href: "/beauty2oem" },
      { label: "SKIN2OEM 智造纵深", href: "/skin2oem" },
      { label: "BIOSPHERE-ORALCARE 口腔科技", href: "/biosphere-oralcare" },
    ],
    note: "Powered by BIOSPHERE-AI Herb-Biotech Intelligence",
    copyright: "© 2026 MEDIERBA · BIOSPHERE GROUP 帛卉集团",
  },
};

export const medierbaProducts = [
  {
    name: "人参微光精华",
    category: "精华",
    img: "/images/skin2oem/products/hyaluronic.png",
    desc: "人参发酵液浓度 85%，皂苷富集 10 倍，28 天焕亮肤色。",
    points: ["10-20× 皂苷富集", "85% 发酵液浓度", "28 天焕亮验证"],
    price: "¥369 / 30ml",
  },
  {
    name: "灵芝修护面霜",
    category: "面霜",
    img: "/images/skin2oem/products/nmf.png",
    desc: "灵芝提取物 × CTP 透皮修复肽，深层修护屏障。",
    points: ["灵芝多糖活性", "CTP 透皮修复肽", "48h 长效保湿"],
    price: "¥429 / 50ml",
  },
  {
    name: "积雪草舒缓水",
    category: "爽肤水",
    img: "/images/skin2oem/products/niacinamide.png",
    desc: "低温闪萃积雪草，95% 活性保留，即刻舒缓泛红。",
    points: ["95%+ 活性保留", "积雪草苷舒缓", "无香精配方"],
    price: "¥239 / 150ml",
  },
  {
    name: "绿茶平衡洁面",
    category: "洁面",
    img: "/images/skin2oem/products/glycolic.png",
    desc: "氨基酸表活 × 发酵绿茶提取物，温和清洁平衡水油。",
    points: ["氨基酸表活", "发酵绿茶", "弱酸性 pH 5.5"],
    price: "¥189 / 120ml",
  },
  {
    name: "红参紧致眼霜",
    category: "眼霜",
    desc: "红参皂苷协同胶原蛋白肽，紧致眼周轮廓。",
    points: ["红参皂苷", "重组胶原蛋白", "按摩冰感头"],
    price: "¥399 / 20ml",
  },
  {
    name: "发酵新生面膜",
    category: "面膜",
    desc: "双菌发酵精华液足量浸润，一周两次深养肌肤。",
    points: ["双菌发酵", "30ml 足量精华", "0 香精 0 酒精"],
    price: "¥219 / 5片",
  },
];

export const medierbaIngredients = [
  {
    name: "人参",
    latin: "Ginseng",
    desc: "定向菌株发酵后皂苷含量提升 10-20 倍，激活肌肤能量循环，焕亮与抗衰双效。",
    benefit: "焕亮 · 抗衰",
  },
  {
    name: "灵芝",
    latin: "Reishi",
    desc: "灵芝多糖与三萜经低温萃取，修护屏障并舒缓压力肌。",
    benefit: "修护 · 舒缓",
  },
  {
    name: "积雪草",
    latin: "Centella Asiatica",
    desc: "低温闪萃保留 95%+ 活性，积雪草苷即时舒缓泛红。",
    benefit: "舒缓 · 修护",
  },
  {
    name: "绿茶",
    latin: "Green Tea",
    desc: "发酵绿茶提升茶多酚活性，抗氧化同时平衡水油。",
    benefit: "抗氧化 · 平衡",
  },
  {
    name: "红参",
    latin: "Red Ginseng",
    desc: "九蒸九晒后低温闪萃，皂苷活性完整保留，紧致眼周。",
    benefit: "紧致 · 抗衰",
  },
  {
    name: "重组胶原蛋白",
    latin: "rhCOLL",
    desc: "合成生物技术量产的类人源胶原蛋白，直接补充流失基质。",
    benefit: "充盈 · 紧致",
  },
];

export const medierbaRituals = [
  {
    title: "晨间焕活",
    steps: ["绿茶平衡洁面", "积雪草舒缓水", "人参微光精华", "灵芝修护面霜"],
    desc: "以清醒的绿意唤醒肌肤，人参精华为一天注入微光。",
  },
  {
    title: "夜间修护",
    steps: ["绿茶平衡洁面", "红参紧致眼霜", "灵芝修护面霜"],
    desc: "夜间是修护的黄金时间，灵芝与修复肽协同工作。",
  },
  {
    title: "一周深养",
    steps: ["发酵新生面膜 ×2", "红参紧致眼霜", "人参微光精华"],
    desc: "每周两次深养面膜，为肌肤补给高浓度发酵精华。",
  },
];

export const medierbaJournal = [
  {
    date: "2026.07",
    title: "为什么我们坚持发酵 28 天",
    desc: "从菌株驯化到发酵终点监测，一篇关于耐心的配方手记。",
    tag: "配方手记",
    img: "/images/skin2oem/concerns/texture.jpg",
  },
  {
    date: "2026.06",
    title: "低温闪萃：95% 活性背后的温度曲线",
    desc: "0-10℃ 不是玄学，是每一度都被记录的工程。",
    tag: "成分科学",
    img: "/images/skin2oem/concerns/dryness.jpg",
  },
  {
    date: "2026.05",
    title: "人参皂苷的 10 倍之旅",
    desc: "一颗人参从产地到发酵罐的完整旅程。",
    tag: "草本溯源",
  },
  {
    date: "2026.04",
    title: "我们的 28 天人体功效验证",
    desc: "每个新品都要回答的问题：数据会说话。",
    tag: "科学验证",
  },
];
