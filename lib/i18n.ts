// All page copy in three languages. Edit text here; the layout lives in app/page.tsx.
export const LOCALES = ["en", "zh-HK", "zh-CN"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "zh-HK";
export const LOCALE_LABEL: Record<Locale, string> = { en: "EN", "zh-HK": "繁", "zh-CN": "简" };

export type Copy = {
  nav: { cta: string };
  hero: { badge: string; h1: string; h2: string; primary: string; note: string };
  visual: {
    filesTitle: string; statement: string; receiptPhoto: string; invoice: string;
    ledgerTitle: string; sample: string; receipt: string;
    matched: string; missing: string; review: string;
    missingTitle: string; missingCount: string; missingNote: string; alt: string;
  };
  how: { eyebrow: string; title: string; step: string; steps: { title: string; body: string }[] };
  data: { title: string; points: string[] };
  cta: {
    title: string; body: string; label: string; placeholder: string; button: string;
    hint: string; sent: string; emailSubject: string; emailBody: string;
  };
  footer: { place: string };
};

export const COPY: Record<Locale, Copy> = {
  en: {
    nav: { cta: "Request a Free Trial" },
    hero: {
      badge: "Designed for Hong Kong SME CPA Firms.",
      h1: "Stop Typing In Client Receipts. Get Xero-Ready Books Back in 24 Hours.",
      h2: "Send us a client's statements and receipts. SpendSync reads, matches and formats them for your ledger, and lists every payment that has no receipt.",
      primary: "See How it Works",
      note: "Free trial · now onboarding pilot firms",
    },
    visual: {
      filesTitle: "Client sends", statement: "Bank statement Sep.pdf", receiptPhoto: "Receipt photo", invoice: "Courier invoice 0918.pdf",
      ledgerTitle: "You get back: Xero import format", sample: "Sample data", receipt: "Receipt",
      matched: "Matched", missing: "No receipt", review: "Review",
      missingTitle: "Missing receipts", missingCount: "2 items", missingNote: "Paid from the bank, no receipt found",
      alt: "Illustration: a client's statement and receipt files on the left become a ledger table on the right, with two payments flagged as missing a receipt.",
    },
    how: {
      eyebrow: "How it works",
      title: "From a pile of documents to a ledger in three steps",
      step: "Step",
      steps: [
        { title: "Send the Documents", body: "Pick one client and one month. Send the statements and receipts as they are." },
        { title: "Extraction & Matching", body: "SpendSync reads the merchant, date and amount, then matches each receipt to its bank line." },
        { title: "Ledger Returned", body: "Within 24 hours you get an Excel file formatted for Xero, plus a missing-receipt list." },
      ],
    },
    data: {
      title: "How client data is handled",
      points: [
        "Files are used only to complete your trial and are never shared.",
        "Extraction uses a third-party AI service hosted outside Hong Kong. You can mask account numbers first.",
        "Everything is deleted within 7 days of delivery, or immediately on request.",
      ],
    },
    cta: {
      title: "Try it on one client, free",
      body: "Leave your work email and we'll be in touch to set up a trial. No fees, no commitment.",
      label: "Work email", placeholder: "Enter Work Email", button: "Request a Free Trial",
      hint: "No spam. We only use your email to reply about the trial.",
      sent: "Your email app should have opened. Send that message to complete your request.",
      emailSubject: "SpendSync free trial request",
      emailBody: "Please contact me about a free trial.\n\nWork email: ",
    },
    footer: { place: "Hong Kong" },
  },
  "zh-HK": {
    nav: { cta: "申請免費試用" },
    hero: {
      badge: "專為香港中小型會計師行而設",
      h1: "不用再逐張輸入客戶收據,24 小時內收到可匯入 Xero 的帳目",
      h2: "把客戶的月結單和收據交來,SpendSync 會讀取、配對並整理成帳目格式,同時列出每一筆沒有收據的支出。",
      primary: "了解運作方式",
      note: "免費試用 · 現正接受會計師行試用",
    },
    visual: {
      filesTitle: "客戶交來", statement: "銀行月結單 9 月.pdf", receiptPhoto: "收據相片", invoice: "速遞發票 0918.pdf",
      ledgerTitle: "交回:Xero 匯入格式", sample: "示例數據", receipt: "收據",
      matched: "已配對", missing: "欠收據", review: "待覆核",
      missingTitle: "欠收據", missingCount: "2 項", missingNote: "銀行有支出,但找不到收據",
      alt: "示意圖:左邊是客戶交來的月結單和收據檔案,右邊是整理好的帳目表,其中兩筆支出標示為欠收據。",
    },
    how: {
      eyebrow: "運作方式",
      title: "由一堆文件到一份帳目,只需三個步驟",
      step: "步驟",
      steps: [
        { title: "交來文件", body: "選一位客戶、一個月,把月結單和收據照原樣交來。" },
        { title: "讀取及配對", body: "SpendSync 讀取商戶、日期和金額,再把每張收據配對到對應的銀行交易。" },
        { title: "交回帳目", body: "24 小時內收到符合 Xero 格式的 Excel 檔,以及一份欠收據清單。" },
      ],
    },
    data: {
      title: "客戶資料如何處理",
      points: [
        "文件只用於完成該次試用,不會交給其他人。",
        "讀取過程使用第三方人工智能服務,伺服器位於香港以外。可先遮蓋帳戶號碼。",
        "交付後 7 天內刪除所有資料,亦可隨時要求即時刪除。",
      ],
    },
    cta: {
      title: "先用一位客戶免費試用",
      body: "留下工作電郵,我們會聯絡你安排試用。不涉及費用或任何承諾。",
      label: "工作電郵", placeholder: "輸入工作電郵", button: "申請免費試用",
      hint: "不會發送推廣訊息,電郵只用於回覆試用事宜。",
      sent: "你的電郵程式應已開啟,請發送該封郵件以完成申請。",
      emailSubject: "SpendSync 免費試用申請",
      emailBody: "請就免費試用聯絡我。\n\n工作電郵:",
    },
    footer: { place: "香港" },
  },
  "zh-CN": {
    nav: { cta: "申请免费试用" },
    hero: {
      badge: "专为香港中小型会计师事务所而设",
      h1: "不用再逐张录入客户收据,24 小时内收到可导入 Xero 的账目",
      h2: "把客户的月结单和收据交给我们,SpendSync 会读取、匹配并整理成账目格式,同时列出每一笔没有收据的支出。",
      primary: "了解运作方式",
      note: "免费试用 · 现正接受会计师事务所试用",
    },
    visual: {
      filesTitle: "客户提交", statement: "银行月结单 9 月.pdf", receiptPhoto: "收据照片", invoice: "快递发票 0918.pdf",
      ledgerTitle: "交回:Xero 导入格式", sample: "示例数据", receipt: "收据",
      matched: "已匹配", missing: "缺收据", review: "待复核",
      missingTitle: "缺收据", missingCount: "2 项", missingNote: "银行有支出,但找不到收据",
      alt: "示意图:左边是客户提交的月结单和收据文件,右边是整理好的账目表,其中两笔支出标示为缺收据。",
    },
    how: {
      eyebrow: "运作方式",
      title: "从一堆文件到一份账目,只需三个步骤",
      step: "步骤",
      steps: [
        { title: "提交文件", body: "选一位客户、一个月,把月结单和收据原样交来。" },
        { title: "读取及匹配", body: "SpendSync 读取商户、日期和金额,再把每张收据匹配到对应的银行交易。" },
        { title: "交回账目", body: "24 小时内收到符合 Xero 格式的 Excel 文件,以及一份缺收据清单。" },
      ],
    },
    data: {
      title: "客户资料如何处理",
      points: [
        "文件只用于完成该次试用,不会交给其他人。",
        "读取过程使用第三方人工智能服务,服务器位于香港以外。可先遮盖账户号码。",
        "交付后 7 天内删除所有资料,也可随时要求立即删除。",
      ],
    },
    cta: {
      title: "先用一位客户免费试用",
      body: "留下工作邮箱,我们会联系你安排试用。不涉及费用或任何承诺。",
      label: "工作邮箱", placeholder: "输入工作邮箱", button: "申请免费试用",
      hint: "不会发送推广信息,邮箱只用于回复试用事宜。",
      sent: "你的邮件程序应已打开,请发送该封邮件以完成申请。",
      emailSubject: "SpendSync 免费试用申请",
      emailBody: "请就免费试用联系我。\n\n工作邮箱:",
    },
    footer: { place: "香港" },
  },
};
