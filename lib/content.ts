// All site copy and sample data live here so they can be edited in one place.
export const CONTACT = {
  name: "Kevin Yuen",
  phone: "6023 4863",
  email: "kevinyuen.spendsync@gmail.com",
};

export const NAV = [
  { href: "#how", label: "運作方式" },
  { href: "#deliverables", label: "交付內容" },
  { href: "#status", label: "測試程度" },
  { href: "#trial", label: "免費試用" },
];

export type LedgerRow = {
  date: string;
  amount: string;
  payee: string;
  reference: string;
  status: "matched" | "missing" | "review" | "none";
};

// Illustrative sample data for a fictional company. Not customer data.
export const LEDGER: LedgerRow[] = [
  { date: "01/09/2026", amount: "-18,500.00", payee: "Harbour Properties Ltd", reference: "RENT SEP", status: "matched" },
  { date: "03/09/2026", amount: "12,400.00", payee: "FPS CHAN T** M**", reference: "FRN2609031188", status: "none" },
  { date: "05/09/2026", amount: "-486.00", payee: "Office Supplies Co", reference: "", status: "matched" },
  { date: "08/09/2026", amount: "-5,000.00", payee: "Cloud Hosting Inc", reference: "INV 88213", status: "missing" },
  { date: "10/09/2026", amount: "-264.00", payee: "Kwun Tong Cafe", reference: "", status: "matched" },
  { date: "12/09/2026", amount: "-177.20", payee: "Ride Hailing HK", reference: "", status: "missing" },
  { date: "18/09/2026", amount: "-1,350.00", payee: "Express Courier HK", reference: "0918", status: "review" },
];
