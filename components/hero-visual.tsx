import { ArrowRight, FileSpreadsheet, FileText, FolderOpen, Image as ImageIcon, TriangleAlert } from "lucide-react";
import type { Copy } from "@/lib/i18n";

type Status = "matched" | "missing" | "review" | null;

// Illustrative sample rows for a fictional company. Not customer data.
const ROWS: { date: string; amount: string; payee: string; status: Status }[] = [
  { date: "01/09/2026", amount: "-18,500.00", payee: "Harbour Properties Ltd", status: "matched" },
  { date: "05/09/2026", amount: "-486.00", payee: "Office Supplies Co", status: "matched" },
  { date: "08/09/2026", amount: "-5,000.00", payee: "Cloud Hosting Inc", status: "missing" },
  { date: "10/09/2026", amount: "-264.00", payee: "Kwun Tong Cafe", status: "matched" },
  { date: "12/09/2026", amount: "-177.20", payee: "Ride Hailing HK", status: "missing" },
  { date: "18/09/2026", amount: "-1,350.00", payee: "Express Courier HK", status: "review" },
];

const PILL: Record<Exclude<Status, null>, string> = {
  matched: "bg-emerald-50 text-emerald-700",
  missing: "bg-amber-100 text-amber-800 ring-1 ring-amber-300",
  review: "bg-slate-100 text-slate-600",
};

/** Product illustration for the hero: client documents in, ledger out. */
export function HeroVisual({ t }: { t: Copy["visual"] }) {
  const files = [
    { icon: FileText, name: t.statement },
    { icon: ImageIcon, name: `${t.receiptPhoto} 1.jpg` },
    { icon: ImageIcon, name: `${t.receiptPhoto} 2.jpg` },
    { icon: FileText, name: t.invoice },
  ];
  return (
    <figure
      aria-label={t.alt}
      className="rounded-3xl bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 p-4 shadow-2xl shadow-blue-900/20 sm:p-6"
    >
      <div className="flex flex-col gap-4">
        {/* Top row: files in, missing-receipt summary */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-stretch">
          <div className="min-w-0 flex-1 rounded-2xl bg-white p-4">
            <p className="flex items-center gap-2 text-xs font-semibold text-slate-500">
              <FolderOpen aria-hidden className="h-4 w-4" /> {t.filesTitle}
            </p>
            <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {files.map(({ icon: Icon, name }) => (
                <li key={name} className="flex min-w-0 items-center gap-2 rounded-lg bg-slate-50 px-2.5 py-2 text-xs text-slate-700 ring-1 ring-slate-200">
                  <Icon aria-hidden className="h-3.5 w-3.5 shrink-0 text-blue-700" />
                  <span className="truncate">{name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div aria-hidden className="hidden items-center text-white/70 sm:flex">
            <ArrowRight className="h-5 w-5" />
          </div>
          <div className="rounded-2xl bg-amber-50 p-4 ring-1 ring-amber-200 sm:w-44">
            <p className="flex items-center gap-2 text-xs font-semibold text-amber-800">
              <TriangleAlert aria-hidden className="h-4 w-4" /> {t.missingTitle}
            </p>
            <p className="mt-2 font-mono text-2xl font-medium text-slate-900">{t.missingCount}</p>
            <p className="mt-1 text-xs leading-snug text-slate-600">{t.missingNote}</p>
          </div>
        </div>

        {/* Ledger */}
        <div className="min-w-0 rounded-2xl bg-white">
          <div className="flex items-center justify-between gap-3 border-b border-slate-200 px-4 py-3">
            <p className="flex min-w-0 items-center gap-2 text-sm font-semibold text-slate-900">
              <FileSpreadsheet aria-hidden className="h-4 w-4 shrink-0 text-blue-700" />
              <span className="truncate">{t.ledgerTitle}</span>
            </p>
            <span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-1 text-[11px] text-slate-500">{t.sample}</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[440px] text-left text-[13px] text-slate-800">
              <thead className="text-xs text-slate-500">
                <tr>
                  <th className="px-4 py-2 font-medium">Date</th>
                  <th className="px-4 py-2 text-right font-medium">Amount</th>
                  <th className="px-4 py-2 font-medium">Payee</th>
                  <th className="px-4 py-2 font-medium">{t.receipt}</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row) => (
                  <tr key={row.date} className={row.status === "missing" ? "bg-amber-50" : undefined}>
                    <td className="whitespace-nowrap border-t border-slate-100 px-4 py-2 font-mono tabular-nums">{row.date}</td>
                    <td className="whitespace-nowrap border-t border-slate-100 px-4 py-2 text-right font-mono tabular-nums">{row.amount}</td>
                    <td className="whitespace-nowrap border-t border-slate-100 px-4 py-2">{row.payee}</td>
                    <td className="whitespace-nowrap border-t border-slate-100 px-4 py-2">
                      {row.status && (
                        <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${PILL[row.status]}`}>{t[row.status]}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </figure>
  );
}
