import {
  ArrowRight,
  Check,
  CircleDashed,
  FileSpreadsheet,
  FileStack,
  Keyboard,
  ListChecks,
  Mail,
  Phone,
  ReceiptText,
  ScanSearch,
  SearchX,
  ShieldCheck,
} from "lucide-react";
import { LedgerMock } from "@/components/ledger-mock";
import { CONTACT, NAV } from "@/lib/content";

const mailto = `mailto:${CONTACT.email}?subject=${encodeURIComponent("SpendSync 免費試用")}`;

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mx-auto w-fit rounded-full border border-teal/20 bg-white/70 px-3.5 py-1 text-xs font-medium tracking-wide text-teal">
      {children}
    </p>
  );
}

function SectionHeading({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {sub && <p className="mt-4 text-pretty leading-relaxed text-ink-soft">{sub}</p>}
    </div>
  );
}

const PROBLEMS = [
  { icon: FileStack, title: "文件格式不一", body: "PDF 月結單、手機拍的收據、電郵發票,全部混在一起交來。" },
  { icon: Keyboard, title: "逐張人手輸入", body: "同事把日期、商戶、金額一筆一筆打進系統。" },
  { icon: SearchX, title: "欠單要逐筆追", body: "銀行有支出,但客戶沒有交收據,要自己對出來再追。" },
];

const STEPS = [
  { icon: FileStack, title: "客戶文件交來", body: "PDF 月結單、收據相片、發票,照原樣交來即可。" },
  { icon: ScanSearch, title: "抽取及配對", body: "逐筆抽取月結單交易,再把收據配對到對應的交易。" },
  { icon: FileSpreadsheet, title: "帳目交回", body: "收到 Xero 匯入檔,以及一份欠收據清單。" },
];

const DELIVERABLES = [
  {
    icon: FileSpreadsheet,
    title: "帳目匯入檔",
    points: ["月結單每一筆交易", "與月結單上的總數核對", "總數不符會明確標示"],
  },
  {
    icon: ReceiptText,
    title: "收據明細",
    points: ["商戶、日期、金額、貨幣", "建議分類", "讀取把握度低的另行標示"],
  },
  {
    icon: ListChecks,
    title: "欠收據清單",
    points: ["銀行有支出但找不到收據", "附日期、金額、商戶", "可直接轉發給客戶追單"],
  },
];

const TESTED = [
  "兩份信用卡月結單,共 91 筆交易,全部抽取,與月結單總數一致",
  "8 張收據及簽賬記錄,7 張配對到月結單交易",
  "兩筆金額相同的交易,能以參考編號、日期和商戶分辨",
];
const NOT_TESTED = [
  "手寫收據,例如的士收據",
  "褪色、摺皺,或一張相片內有多張收據",
  "公司往來戶口月結單及 FPS 截圖",
  "按貴行的會計科目表分類",
];

const TRIAL = [
  { title: "選一位客戶、一個月", body: "把該月的月結單和收據交來。帳戶號碼可以先遮蓋。" },
  { title: "24 小時內交回", body: "收到一個 Excel 檔,包含三樣交付內容。" },
  { title: "貴行同事核對", body: "與原本人手入數的結果比較,告訴我哪裡不合用。" },
];

const DATA_POLICY = [
  "文件只用於完成該次試用,不會用於其他用途,亦不會交給其他人。",
  "抽取過程使用第三方人工智能服務,其伺服器位於香港以外。如不接受,請先遮蓋帳戶號碼及個人資料,或不要交來。",
  "交付後 7 天內刪除所有文件及結果;亦可隨時要求即時刪除。",
];

export default function Home() {
  return (
    <main className="overflow-x-clip">
      {/* Hero */}
      <div className="relative px-3 pt-3 sm:px-4 sm:pt-4">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-b from-mint-soft via-mint/70 to-mint pb-0">
          <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-white/70 blur-3xl" />

          <header className="relative mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 pt-5 sm:pt-6">
            <nav className="flex w-full items-center justify-between gap-4 rounded-full bg-ink px-3 py-2.5 pl-5 text-white shadow-lg shadow-ink/20">
              <a href="#" className="flex items-center gap-2 text-[15px] font-semibold tracking-tight">
                <span aria-hidden className="grid h-6 w-6 place-items-center rounded-full bg-mint text-ink">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                SpendSync
              </a>
              <ul className="hidden items-center gap-7 text-sm text-white/75 md:flex">
                {NAV.map((item) => (
                  <li key={item.href}>
                    <a className="transition hover:text-white" href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink transition hover:bg-mint">
                聯絡試用
              </a>
            </nav>
          </header>

          <div className="relative mx-auto max-w-3xl px-5 pt-16 text-center sm:pt-20">
            <Eyebrow>為香港會計師行而設</Eyebrow>
            <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.2] tracking-tight sm:text-6xl sm:leading-[1.15]">
              月結單和收據交來,
              <br className="hidden sm:block" />
              24 小時內變成 Xero 帳目
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-ink-soft sm:text-lg">
              同事不用再逐張人手輸入,並會得到一份「銀行有支出但沒有收據」的清單,可以直接向客戶追單。
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="#trial" className="inline-flex h-12 items-center gap-2 rounded-full bg-ink px-6 text-[15px] font-semibold text-white transition hover:bg-ink/85">
                免費試用 <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
              <a href="#deliverables" className="inline-flex h-12 items-center rounded-full px-5 text-[15px] font-semibold text-ink underline-offset-4 hover:underline">
                看看交付內容
              </a>
            </div>
          </div>

          <div className="relative mx-auto mt-12 max-w-5xl px-3 sm:mt-16 sm:px-6">
            <div className="translate-y-6">
              <LedgerMock />
            </div>
          </div>
        </div>
      </div>

      {/* Problem */}
      <section className="mx-auto max-w-5xl px-5 pt-28 sm:pt-32">
        <SectionHeading eyebrow="問題" title="月底入數,最花時間的不是會計" />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {PROBLEMS.map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-3xl bg-slate-50 p-7">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-ink shadow-sm ring-1 ring-line">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="mt-2 leading-relaxed text-ink-soft">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="mx-auto max-w-5xl px-5 pt-28">
        <SectionHeading eyebrow="運作方式" title="文件交來,帳目交回" sub="貴行同事毋須改變現有工作流程,只是省去人手輸入的步驟。" />
        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {STEPS.map(({ icon: Icon, title, body }, i) => (
            <li key={title} className="relative rounded-3xl border border-line p-7">
              <div className="flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-mint-soft text-teal">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <span className="font-mono text-sm text-ink-soft">0{i + 1}</span>
              </div>
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="mt-2 leading-relaxed text-ink-soft">{body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Deliverables */}
      <section id="deliverables" className="mt-28 bg-mint-soft/70 py-24">
        <div className="mx-auto max-w-5xl px-5">
          <SectionHeading eyebrow="交付內容" title="每次交付包含三樣東西" sub="一個 Excel 檔,三張工作表。支出為負數、收款為正數,符合 Xero 匯入要求。" />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {DELIVERABLES.map(({ icon: Icon, title, points }) => (
              <div key={title} className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-line">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-ink text-mint">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-[15px] text-ink-soft">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-teal" aria-hidden />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing status */}
      <section id="status" className="mx-auto max-w-5xl px-5 pt-28">
        <SectionHeading eyebrow="測試程度" title="目前測試到甚麼程度" sub="這是一個開發中的工具,以下如實說明。免費試用正是為了在真實客戶文件上驗證。" />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-line p-7">
            <h3 className="flex items-center gap-2 text-lg font-semibold">
              <Check className="h-5 w-5 text-teal" aria-hidden /> 已用真實文件測試
            </h3>
            <ul className="mt-5 space-y-3">
              {TESTED.map((t) => (
                <li key={t} className="flex items-start gap-2.5 leading-relaxed text-ink-soft">
                  <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-dashed border-line bg-slate-50 p-7">
            <h3 className="flex items-center gap-2 text-lg font-semibold">
              <CircleDashed className="h-5 w-5 text-ink-soft" aria-hidden /> 尚未測試
            </h3>
            <ul className="mt-5 space-y-3">
              {NOT_TESTED.map((t) => (
                <li key={t} className="flex items-start gap-2.5 leading-relaxed text-ink-soft">
                  <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Trial */}
      <section id="trial" className="mx-auto max-w-5xl px-5 pt-28">
        <SectionHeading eyebrow="免費試用" title="三個步驟,不涉及費用或承諾" sub="目的是讓貴行同事親自核對準確度。" />
        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {TRIAL.map(({ title, body }, i) => (
            <li key={title} className="rounded-3xl bg-slate-50 p-7">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-ink font-mono text-sm text-white">{i + 1}</span>
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="mt-2 leading-relaxed text-ink-soft">{body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-5 rounded-3xl border border-line p-7 sm:p-9">
          <h3 className="flex items-center gap-2 text-lg font-semibold">
            <ShieldCheck className="h-5 w-5 text-teal" aria-hidden /> 客戶資料如何處理
          </h3>
          <ul className="mt-5 grid gap-4 md:grid-cols-3">
            {DATA_POLICY.map((t) => (
              <li key={t} className="text-[15px] leading-relaxed text-ink-soft">{t}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-3 pb-3 pt-28 sm:px-4 sm:pb-4">
        <div className="relative overflow-hidden rounded-[2rem] bg-ink px-6 py-16 text-center text-white sm:py-20">
          <div aria-hidden className="pointer-events-none absolute -bottom-48 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-teal/40 blur-3xl" />
          <div className="relative mx-auto max-w-xl">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">想試一位客戶的文件?</h2>
            <p className="mt-4 leading-relaxed text-white/70">直接聯絡 {CONTACT.name},或先通 10 分鐘電話了解。</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href={mailto} className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-6 text-[15px] font-semibold text-ink transition hover:bg-mint">
                <Mail className="h-4 w-4" aria-hidden /> 電郵聯絡
              </a>
              <a href={`tel:+852${CONTACT.phone.replace(/\s/g, "")}`} className="inline-flex h-12 items-center gap-2 rounded-full border border-white/25 px-6 text-[15px] font-semibold transition hover:bg-white/10">
                <Phone className="h-4 w-4" aria-hidden /> {CONTACT.phone}
              </a>
            </div>
            <p className="mt-6 select-all break-all font-mono text-sm text-white/60">{CONTACT.email}</p>
          </div>
          <p className="relative mt-14 text-xs text-white/45">SpendSync · 香港 · 由 {CONTACT.name} 個人開發及營運</p>
        </div>
      </section>
    </main>
  );
}
