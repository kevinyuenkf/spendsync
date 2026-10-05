import { FileSpreadsheet, FileText, Image as ImageIcon, LayoutList, TriangleAlert } from "lucide-react";
import { LEDGER, type LedgerRow } from "@/lib/content";

const STATUS: Record<LedgerRow["status"], { label: string; className: string } | null> = {
  matched: { label: "已配對", className: "bg-mint-soft text-teal" },
  missing: { label: "欠收據", className: "bg-flag-soft text-flag ring-1 ring-flag/40" },
  review: { label: "待覆核", className: "bg-slate-100 text-slate-600" },
  none: null,
};

const FILES = [
  { icon: FileText, name: "銀行月結單 9 月.pdf" },
  { icon: ImageIcon, name: "IMG_4401.jpg" },
  { icon: ImageIcon, name: "IMG_4402.jpg" },
  { icon: FileText, name: "速遞發票 0918.pdf" },
];

/** The product preview shown under the hero: files in, ledger out. */
export function LedgerMock() {
  const missing = LEDGER.filter((r) => r.status === "missing").length;
  return (
    <div className="rounded-3xl border border-white/70 bg-white/80 p-3 shadow-2xl shadow-teal/10 backdrop-blur sm:p-4">
      <div className="grid gap-3 lg:grid-cols-[220px_minmax(0,1fr)]">
        {/* Left rail: what the client sent */}
        <div className="flex flex-col gap-3">
          <div className="rounded-2xl bg-white p-4 ring-1 ring-line">
            <p className="flex items-center gap-2 text-xs font-semibold text-ink-soft">
              <LayoutList className="h-4 w-4" aria-hidden /> 客戶交來
            </p>
            <ul className="mt-3 space-y-2">
              {FILES.map(({ icon: Icon, name }) => (
                <li key={name} className="flex items-center gap-2 truncate rounded-lg bg-mint-soft/60 px-2.5 py-2 text-xs text-ink">
                  <Icon className="h-3.5 w-3.5 shrink-0 text-teal" aria-hidden />
                  <span className="truncate">{name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-flag-soft p-4 ring-1 ring-flag/30">
            <p className="flex items-center gap-2 text-xs font-semibold text-flag">
              <TriangleAlert className="h-4 w-4" aria-hidden /> 欠收據
            </p>
            <p className="mt-2 font-mono text-3xl font-medium text-ink">{missing} 項</p>
            <p className="mt-1 text-xs text-ink-soft">銀行有支出,但找不到收據</p>
          </div>
        </div>

        {/* Ledger */}
        <div className="min-w-0 rounded-2xl bg-white ring-1 ring-line">
          <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-3">
            <p className="flex items-center gap-2 text-sm font-semibold">
              <FileSpreadsheet className="h-4 w-4 text-teal" aria-hidden /> 交回:Xero 匯入格式
            </p>
            <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] text-ink-soft">示例數據</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] text-left text-[13px]">
              <thead className="text-xs text-ink-soft">
                <tr>
                  <th className="px-4 py-2.5 font-medium">Date</th>
                  <th className="px-4 py-2.5 text-right font-medium">Amount</th>
                  <th className="px-4 py-2.5 font-medium">Payee</th>
                  <th className="px-4 py-2.5 font-medium">Reference</th>
                  <th className="px-4 py-2.5 font-medium">收據</th>
                </tr>
              </thead>
              <tbody>
                {LEDGER.map((row) => {
                  const status = STATUS[row.status];
                  return (
                    <tr key={row.date + row.payee} className={row.status === "missing" ? "bg-flag-soft/60" : undefined}>
                      <td className="whitespace-nowrap border-t border-line px-4 py-2.5 font-mono tabular-nums">{row.date}</td>
                      <td className="whitespace-nowrap border-t border-line px-4 py-2.5 text-right font-mono tabular-nums">{row.amount}</td>
                      <td className="whitespace-nowrap border-t border-line px-4 py-2.5">{row.payee}</td>
                      <td className="whitespace-nowrap border-t border-line px-4 py-2.5 font-mono text-xs text-ink-soft">{row.reference}</td>
                      <td className="whitespace-nowrap border-t border-line px-4 py-2.5">
                        {status && <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${status.className}`}>{status.label}</span>}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
