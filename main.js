// 线索表单弹窗
const modal = document.getElementById("lead-modal");
const backdrop = document.getElementById("modal-backdrop");
const closeBtn = document.getElementById("modal-close-btn");

const heroBtn = document.getElementById("hero-start-btn");
const navBtn = document.getElementById("nav-start-btn");
const cardBtn = document.getElementById("card-start-btn");
const rewardBtn = document.getElementById("reward-start-btn");

function openLeadModal() {
  if (modal) modal.classList.add("show");
}

function closeLeadModal() {
  if (modal) modal.classList.remove("show");
}

[heroBtn, navBtn, cardBtn, rewardBtn].forEach((btn) => {
  if (btn) btn.addEventListener("click", openLeadModal);
});

if (backdrop) backdrop.addEventListener("click", closeLeadModal);
if (closeBtn) closeBtn.addEventListener("click", closeLeadModal);

// “了解流程”按钮滚动到流程区
const learnMoreBtn = document.getElementById("learn-more-btn");
if (learnMoreBtn) {
  learnMoreBtn.addEventListener("click", () => {
    const howSection = document.getElementById("how");
    if (howSection) {
      howSection.scrollIntoView({ behavior: "smooth" });
    }
  });
}

// FAQ 折叠逻辑
document.querySelectorAll(".faq-item").forEach((item) => {
  const question = item.querySelector(".faq-question");
  const toggle = item.querySelector(".faq-toggle");
  if (!question) return;
  
  question.addEventListener("click", () => {
    const isOpen = item.classList.contains("open");
    document.querySelectorAll(".faq-item").forEach((i) => {
      i.classList.remove("open");
      const q = i.querySelector(".faq-question");
      if (q) q.setAttribute("aria-expanded", "false");
    });
    if (!isOpen) {
      item.classList.add("open");
      question.setAttribute("aria-expanded", "true");
    } else {
      question.setAttribute("aria-expanded", "false");
    }
    if (toggle) {
      toggle.textContent = item.classList.contains("open") ? "－" : "＋";
    }
  });
});

// 表单假提交（前端演示）
const leadForm = document.getElementById("lead-form");
const formTip = document.getElementById("form-tip");

if (leadForm) {
  leadForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (formTip) {
      const tipText = currentLang === "zh" 
        ? "已模拟提交（当前为前端示例）。后续将接入真实后端接口。"
        : "Submission simulated (currently a frontend demo). Will be connected to real backend API later.";
      formTip.textContent = tipText;
    }
  });
}

// 页脚年份
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

/* 在线客服弹窗逻辑 */

const chatModal = document.getElementById("chat-modal");
const chatBackdrop = document.getElementById("chat-backdrop");
const chatCloseBtn = document.getElementById("chat-close-btn");
const chatFloatBtn = document.getElementById("chat-float");

function openChatModal() {
  if (chatModal) chatModal.classList.add("show");
}

function closeChatModal() {
  if (chatModal) chatModal.classList.remove("show");
}

if (chatFloatBtn) {
  chatFloatBtn.addEventListener("click", openChatModal);
}

if (chatBackdrop) {
  chatBackdrop.addEventListener("click", closeChatModal);
}

if (chatCloseBtn) {
  chatCloseBtn.addEventListener("click", closeChatModal);
}

/* 多语言翻译数据 */

const translations = {
  zh: {
    // 页面标题
    "page.title": "Geliv · 礼品卡交易平台",
    // 导航
    "nav.rates": "报价列表",
    "nav.how": "流程",
    "nav.features": "优势",
    "nav.reward": "活动",
    "nav.faq": "FAQ",
    // 语言选择器
    "lang.select": "选择语言",
    "lang.current": "中文",
    // Hero 区域
    "hero.title": "专注礼品卡与支付解决方案",
    "hero.titleHighlight": "安全高价 ",
    "hero.titleSep": "·",
    "hero.titleEnd": "一站式服务",
    "hero.subtitle": "避免低价、避免中介、避免被骗<br>我们提供更透明、更稳定的回收体验。",
    "hero.meta1": "✅ 团队长期深耕礼品卡交易和支付通道变现。",
    "hero.meta2": "✅ 让你的礼品卡获得更高价值。",
    "hero.card.title": "新用户认证 · 领取 500 奈拉",
    "hero.step1.title": "真实用户",
    "hero.step1.desc": "仅限真实有礼品卡交易记录的用户",
    "hero.step2.title": "交易记录",
    "hero.step2.desc": "最近真实礼品卡交易聊天记录",
    "hero.step3.title": "限领一次",
    "hero.step3.desc": "通过后，奖励发放至你指定的钱包",
    "hero.card.button": "立即参与奖励",
    // 报价列表
    "rates.title": "报价列表",
    "rates.more": "更多卡种",
    "rates.moreNote": "提交信息后，由专属客服提供你的专属报价表",
    // 优势亮点
    "features.title": "为交易者设计的系统化通道",
    "features.card1.title": "风控友好",
    "features.card1.desc": "通过网页完成筛选与沟通，避免大量冷加造成 WhatsApp 封号。",
    "features.card2.title": "价格透明",
    "features.card2.desc": "核心卡种公开区间价，成交价由专属客服实时确认。",
    "features.card3.title": "稳定长期",
    "features.card3.desc": "你只需要对接一个入口，我们帮你匹配多家平台与支付通道。",
    // FAQ
    "faq.title": "常见问题",
    "faq.q1": "我上传的聊天截图，会被泄露吗？",
    "faq.a1": "我们只用于内部风控与评级，不会展示给任何第三方。你也可以适当遮挡头像、昵称等隐私信息。",
    "faq.q2": "500 奈拉奖励什么时候发？",
    "faq.a2": "审核通过后 24 小时内，我们会通过你留的联系方式与您确认，并发放奖励。",
    "faq.q3": "一定要留 WhatsApp 吗？",
    "faq.a3": "不强制。你可以先留手机号或邮箱，等通过审核后再选择更稳定的沟通方式。",
    "faq.q4": "我交易不算特别频繁，也可以合作吗？",
    "faq.a4": "可以，只要是持续真实交易，我们都会根据频率与卡种匹配合适的方案。",
    // 表单
    "modal.title": "提交信息 · 获取专属通道",
    "modal.subtitle": "请填写真实信息，便于我们审核并与您联系。当前为前端示例，后续会接入真实系统。",
    "form.phone": "手机号（必填）",
    "form.phonePlaceholder": "请输入你的手机号码",
    "form.cardType": "主要礼品卡类型",
    "form.select": "请选择",
    "form.steam": "Steam / 游戏卡",
    "form.other": "其他类型礼品卡",
    "form.amount": "单笔常见面额（约）",
    "form.amountPlaceholder": "例如：100",
    "form.frequency": "月均交易频率",
    "form.freq1": "每月 1–5 笔",
    "form.freq2": "每月 5–20 笔",
    "form.freq3": "每月 20 笔以上",
    "form.contact": "可选：你的 WhatsApp / Telegram",
    "form.contactPlaceholder": "可选填写，降低沟通成本",
    "form.screenshot": "上传聊天截图（示意，需后端支持）",
    "form.screenshotNote": "当前为前端展示，真实文件上传将由后端接口实现。",
    "form.submit": "提交信息（示例，不会真正发送）",
    // 聊天
    "chat.title": "在线客服（示例）",
    "chat.subtitle": "这里可以接第三方在线聊天组件，或接入 WhatsApp / Telegram 跳转。",
    "chat.float": "在线客服",
    "chat.floatLabel": "打开在线客服",
    "chat.message1": "你好，这里是 Geliv 客服，请简单描述你的礼品卡类型与大致金额。",
    "chat.message2": "示例：我这边主要是 US Apple 100–500 面额，偶尔有 Amazon。",
    "chat.inputPlaceholder": "当前仅展示 UI，暂未接入真实客服…",
    "chat.send": "发送",
    "chat.tips": "真实环境中可以嵌入 Tawk.to、Crisp 等客服组件，或一键跳转 WhatsApp 对话链接。"
  },
  en: {
    // 页面标题
    "page.title": "Geliv · Gift Card Trading Platform",
    // 导航
    "nav.rates": "Rates",
    "nav.how": "Process",
    "nav.features": "Advantages",
    "nav.reward": "Rewards",
    "nav.faq": "FAQ",
    // 语言选择器
    "lang.select": "Select Language",
    "lang.current": "English",
    // Hero 区域
    "hero.title": "Gift Card & Payment Solutions",
    "hero.titleHighlight": "Secure & High Value ",
    "hero.titleSep": "·",
    "hero.titleEnd": "One-Stop Service",
    "hero.subtitle": "Avoid low prices, avoid intermediaries, avoid scams<br>We provide a more transparent and stable redemption experience.",
    "hero.meta1": "✅ Our team has long been dedicated to gift card trading and payment channel monetization.",
    "hero.meta2": "✅ Get higher value for your gift cards.",
    "hero.card.title": "New User Verification · Get 500 Naira",
    "hero.step1.title": "Real Users",
    "hero.step1.desc": "Only for users with real gift card transaction records",
    "hero.step2.title": "Transaction Records",
    "hero.step2.desc": "Recent real gift card transaction chat records",
    "hero.step3.title": "One-Time Only",
    "hero.step3.desc": "After approval, rewards will be sent to your designated wallet",
    "hero.card.button": "Join Rewards Now",
    // 报价列表
    "rates.title": "Rate List",
    "rates.more": "More",
    "rates.moreNote": "A dedicated customer service will provide your exclusive quotation list",
    // 优势亮点
    "features.title": "Systematic Channel Designed for Traders",
    "features.card1.title": "Risk Control Friendly",
    "features.card1.desc": "Complete screening and communication through the webpage to avoid a large number of cold additions causing WhatsApp account bans.",
    "features.card2.title": "Transparent Pricing",
    "features.card2.desc": "Public price range for core card types, transaction price confirmed in real-time by dedicated customer service.",
    "features.card3.title": "Stable and Long-term",
    "features.card3.desc": "You only need to connect to one entry point, and we will help you match multiple platforms and payment channels.",
    // FAQ
    "faq.title": "Frequently Asked Questions",
    "faq.q1": "Will my uploaded chat screenshots be leaked?",
    "faq.a1": "We only use them for internal risk control and rating, and will not show them to any third party. You can also appropriately cover privacy information such as avatars and nicknames.",
    "faq.q2": "When will the 500 Naira reward be issued?",
    "faq.a2": "Within 24 hours after approval, we will contact you through your contact information to confirm and issue the reward.",
    "faq.q3": "Do I have to provide WhatsApp?",
    "faq.a3": "Not mandatory. You can provide a phone number or email first, and choose a more stable communication method after approval.",
    "faq.q4": "Can I cooperate if my trading frequency is not very high?",
    "faq.a4": "Yes, as long as it's continuous real trading, we will match appropriate solutions based on frequency and card types.",
    // 表单
    "modal.title": "Submit Information · Get Exclusive Channel",
    "modal.subtitle": "Please fill in real information to facilitate our review and contact with you. This is currently a frontend example and will be connected to a real system later.",
    "form.phone": "Phone Number (Required)",
    "form.phonePlaceholder": "Please enter your phone number",
    "form.cardType": "Main Gift Card Type",
    "form.select": "Please select",
    "form.steam": "Steam / Game Cards",
    "form.other": "Other Gift Card Types",
    "form.amount": "Common Single Amount (Approx.)",
    "form.amountPlaceholder": "e.g.: 100",
    "form.frequency": "Monthly Trading Frequency",
    "form.freq1": "1–5 transactions per month",
    "form.freq2": "5–20 transactions per month",
    "form.freq3": "More than 20 transactions per month",
    "form.contact": "Optional: Your WhatsApp / Telegram",
    "form.contactPlaceholder": "Optional, to reduce communication costs",
    "form.screenshot": "Upload Chat Screenshot (Demo, requires backend support)",
    "form.screenshotNote": "Currently frontend display, real file upload will be implemented by backend API.",
    "form.submit": "Submit Information (Demo, will not actually send)",
    // 聊天
    "chat.title": "Online Customer Service (Demo)",
    "chat.subtitle": "Here you can integrate third-party online chat components, or connect to WhatsApp / Telegram redirects.",
    "chat.float": "Online Service",
    "chat.floatLabel": "Open Online Customer Service",
    "chat.message1": "Hello, this is Geliv customer service. Please briefly describe your gift card type and approximate amount.",
    "chat.message2": "Example: I mainly have US Apple $100–500 denominations, occasionally Amazon.",
    "chat.inputPlaceholder": "Currently UI display only, real customer service not connected yet…",
    "chat.send": "Send",
    "chat.tips": "In a real environment, you can embed customer service components like Tawk.to, Crisp, etc., or redirect to WhatsApp conversation links."
  }
};

/* 语言切换功能 */

let currentLang = localStorage.getItem("preferred-language") || "zh";

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("preferred-language", lang);
  
  // 更新 HTML lang 属性
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  
  // 更新页面标题
  const titleElement = document.querySelector('title[data-i18n="page.title"]');
  if (titleElement) {
    titleElement.textContent = translations[lang]["page.title"];
  }
  
  // 更新所有带有 data-i18n 的元素
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[lang][key]) {
      if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
        // 对于输入框，更新 value 或 placeholder
        const attr = element.getAttribute("data-i18n-attr");
        if (attr) {
          element.setAttribute(attr, translations[lang][key]);
        } else {
          element.value = translations[lang][key];
        }
      } else {
        // 对于其他元素，更新文本内容（支持 HTML）
        element.innerHTML = translations[lang][key];
      }
    }
  });
  
  // 更新所有带有 data-i18n-attr 的元素属性
  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    const attr = element.getAttribute("data-i18n-attr");
    const key = element.getAttribute("data-i18n-attr-value");
    if (attr && key && translations[lang][key]) {
      element.setAttribute(attr, translations[lang][key]);
    }
  });
}

/* 语言选择器逻辑 */

const langBtn = document.getElementById("lang-btn");
const langSelector = document.querySelector(".lang-selector");
const langDropdown = document.getElementById("lang-dropdown");
const langCurrent = document.querySelector(".lang-current");
const langOptions = document.querySelectorAll(".lang-option");

// 切换下拉菜单
if (langBtn && langSelector) {
  langBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    langSelector.classList.toggle("open");
  });
}

// 选择语言
langOptions.forEach((option) => {
  option.addEventListener("click", (e) => {
    e.stopPropagation();
    const lang = option.getAttribute("data-lang");
    
    // 切换语言
    setLanguage(lang);
    
    // 更新当前显示
    if (lang === "zh") {
      langCurrent.textContent = "中文";
    } else if (lang === "en") {
      langCurrent.textContent = "English";
    }
    
    // 更新激活状态
    langOptions.forEach((opt) => opt.classList.remove("active"));
    option.classList.add("active");
    
    // 关闭下拉菜单
    langSelector.classList.remove("open");
  });
});

// 点击外部关闭下拉菜单
document.addEventListener("click", (e) => {
  if (langSelector && !langSelector.contains(e.target)) {
    langSelector.classList.remove("open");
  }
});

// 页面加载时应用保存的语言
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("preferred-language") || "zh";
  setLanguage(savedLang);
  
  // 更新语言选择器的显示
  const option = document.querySelector(`.lang-option[data-lang="${savedLang}"]`);
  if (option) {
    langOptions.forEach((opt) => opt.classList.remove("active"));
    option.classList.add("active");
    if (savedLang === "zh") {
      langCurrent.textContent = "中文";
    } else if (savedLang === "en") {
      langCurrent.textContent = "English";
    }
  }
});
