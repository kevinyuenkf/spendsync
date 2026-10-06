import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SpendSync｜Xero-ready books from client statements and receipts",
  description:
    "For Hong Kong accounting firms: client statements and receipts turned into Xero-ready books in 24 hours. 為香港會計師行而設。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant-HK">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Noto+Sans+SC:wght@400;500;700&family=Noto+Sans+TC:wght@400;500;700&family=Plus+Jakarta+Sans:wght@500;600;700&display=swap"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
