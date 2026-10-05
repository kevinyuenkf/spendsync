import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SpendSync｜月結單和收據,24 小時內變成 Xero 帳目",
  description:
    "為香港會計師行而設:把客戶交來的月結單和收據整理成可匯入 Xero 的帳目,並列出欠收據的支出。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant-HK">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Noto+Sans+TC:wght@400;500;700&family=Plus+Jakarta+Sans:wght@500;600;700&display=swap"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
