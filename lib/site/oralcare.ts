import type { SiteConfig } from "./types";

export const oralcare: SiteConfig = {
  key: "biosphere-oralcare",
  domain: "biosphere-oralcare.com",
  name: "BIOSPHERE-ORALCARE",
  tagline: "微生态口腔护理科技",
  role: "垂类科技",
  desc: "帛卉集团口腔护理科技品牌：以口腔微生态为核心，用 n-Ha 羟基磷灰石与草本提取，把口腔护理做成可测量的科学。",
  theme: {
    brand: "#0891B2",
    brandDeep: "#0E7490",
    brandSoft: "#CFFAFE",
    ink: "#0F172A",
    paper: "#FFFFFF",
    accent: "#ECFDF5",
    sans: "'Inter', 'Helvetica Neue', 'Arial', 'PingFang SC', 'Microsoft YaHei', sans-serif",
  },
  nav: [
    { label: "全部产品", href: "/biosphere-oralcare/shop" },
    { label: "口腔科学", href: "/biosphere-oralcare/science" },
    { label: "成分库", href: "/biosphere-oralcare/ingredients" },
    { label: "牙医合作", href: "/biosphere-oralcare/dental-pros" },
    { label: "关于", href: "/biosphere-oralcare/about" },
    { label: "联系", href: "/biosphere-oralcare/contact" },
  ],
  announcement: "订阅计划上线：每月省 15%，随时更换",
  hero: {
    badge: "微生态口腔护理",
    title: ["把口腔菌群，", "还给平衡"],
    subtitle:
      "以口腔微生态为核心，n-Ha 羟基磷灰石与草本提取双技术路线，7 天重建菌群平衡——口腔健康，从不是抗生素的战场。",
    primary: { label: "探索产品", href: "/biosphere-oralcare/shop" },
    secondary: { label: "了解口腔科学", href: "/biosphere-oralcare/science" },
    visual: "口腔菌群可视化：平衡状态下的微生态图谱",
  },
  stats: [
    { value: "7天", label: "菌群平衡可见改善" },
    { value: "95%+", label: "活性成分保留率" },
    { value: "0氟", label: "可选无氟路线" },
    { value: "30+", label: "口腔护理研发团队" },
  ],
  leadForm: {
    title: "订阅口腔健康档案",
    desc: "获取口腔菌群科普、新品体验与专属优惠。",
    selectLabel: "你的关注",
    selectOptions: ["美白", "敏感", "儿童口腔", "牙周健康"],
    cta: "订阅",
    note: "订阅即表示同意接收品牌邮件，可随时退订。",
  },
  footer: {
    intro: "帛卉集团口腔护理科技品牌：把口腔菌群还给平衡。",
    contact: [
      { label: "客户服务", value: "care@biosphere-oralcare.com" },
      { label: "牙医合作", value: "pros@biosphere-oralcare.com" },
    ],
    linksTitle: "集团生态",
    extraLinks: [
      { label: "BIOSPHERE-AI 科技中枢", href: "/biosphere-ai" },
      { label: "BEAUTY2OEM 智造出口", href: "/beauty2oem" },
      { label: "SKIN2OEM 智造纵深", href: "/skin2oem" },
      { label: "MEDIERBA 自有品牌", href: "/medierba" },
    ],
    note: "Powered by BIOSPHERE-AI Herb-Biotech Intelligence",
    copyright: "© 2026 BIOSPHERE-ORALCARE · BIOSPHERE GROUP 帛卉集团",
  },
};

export const oralcareProducts = [
  {
    name: "平衡修护洁牙片",
    category: "洁牙片",
    img: "/images/oralcare/oral-19976568.jpg",
    desc: "微生态益生元 + n-Ha，刷牙即平衡，旅行友好。",
    points: ["微生态益生元", "n-Ha 再矿化", "0 塑料瓶身"],
    price: "¥89 / 60片",
  },
  {
    name: "微生态平衡牙膏",
    category: "牙膏",
    img: "/images/oralcare/oral-4300078.jpg",
    desc: "茶叶提取物 × 木糖醇，维护菌群平衡的日常选择。",
    points: ["草本提取", "木糖醇配方", "可选含氟/无氟"],
    price: "¥59 / 120g",
  },
  {
    name: "n-Ha 再矿化牙膏",
    category: "牙膏",
    img: "/images/oralcare/oral-5622235.jpg",
    desc: "羟基磷灰石微粒修复早期白斑，敏感肌友好。",
    points: ["n-Ha 核心成分", "早期白斑修复", "低研磨配方"],
    price: "¥79 / 120g",
  },
  {
    name: "夜间修护漱口水",
    category: "漱口水",
    img: "/images/oralcare/oral-32115957.jpg",
    desc: "夜间菌群修护，次日清晨口气清新可感。",
    points: ["0 酒精", "夜间修护配方", "便携条装"],
    price: "¥69 / 300ml",
  },
  {
    name: "儿童安全牙膏",
    category: "儿童",
    img: "/images/oralcare/oral-30518441.jpg",
    desc: "水果味低泡配方，可吞咽设计，护齿从小开始。",
    points: ["可吞咽设计", "水果风味", "儿童友好剂量"],
    price: "¥49 / 60g",
  },
  {
    name: "口腔旅行套装",
    category: "套装",
    img: "/images/oralcare/oral-10566139.jpg",
    desc: "洁牙片 + 条装漱口水，差旅场景的口腔解决方案。",
    points: ["登机友好", "7 天用量", "随身收纳盒"],
    price: "¥119 / 套",
  },
];

export const oralcareScience = {
  principles: [
    {
      title: "菌群平衡，而非杀菌",
      desc: "传统口腔护理以杀菌为目标，我们以益生元喂养有益菌，重建生态平衡——这是可测量的科学。",
    },
    {
      title: "再矿化，而非磨损",
      desc: "n-Ha 羟基磷灰石以物理化学方式修复早期釉质损伤，低研磨配方保护牙釉质。",
    },
    {
      title: "草本协同，而非刺激",
      desc: "茶叶多酚、薄荷醇与木糖醇协同，温和抑菌同时保持舒适使用感。",
    },
  ],
  evidence: [
    { value: "7天", label: "菌群多样性恢复" },
    { value: "92%", label: "使用者口气清新感提升" },
    { value: "0酒精", label: "配方全系无酒精" },
  ],
};

export const oralcareIngredients = [
  {
    name: "羟基磷灰石",
    latin: "n-Ha Hydroxyapatite",
    desc: "牙釉质同源矿物，吸附早期损伤离子并再矿化修复。",
    benefit: "再矿化 · 抗敏",
  },
  {
    name: "微生态益生元",
    latin: "Prebiotics",
    desc: "定向喂养口腔有益菌群，重建平衡生态。",
    benefit: "菌群平衡",
  },
  {
    name: "茶叶多酚",
    latin: "Tea Polyphenols",
    desc: "温和抑制有害菌附着，清新口气。",
    benefit: "抑菌 · 清新",
  },
  {
    name: "木糖醇",
    latin: "Xylitol",
    desc: "不被致龋菌利用的天然甜味剂，抑酸护齿。",
    benefit: "抑酸 · 防龋",
  },
];

export const oralcarePros = [
  {
    title: "诊所渠道合作",
    desc: "面向牙科诊所与口腔医院的产品供应，含专业教育与患者方案。",
  },
  {
    title: "口腔品牌 ODM",
    desc: "依托集团智造平台，为口腔护理品牌提供微生态线 OEM / ODM。",
  },
  {
    title: "科研合作",
    desc: "与口腔医学机构共建临床数据，以证据驱动产品迭代。",
  },
];
