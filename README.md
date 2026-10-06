# SpendSync landing page

One-page site for Hong Kong accounting firms. Next.js (App Router) + Tailwind CSS v4.

## Run locally

    npm install
    npm run dev

Open http://localhost:3000

## Edit content

- `lib/i18n.ts`: all page text in English, Traditional Chinese and Simplified Chinese
- `components/hero-visual.tsx`: the hero illustration and its sample rows
- `app/page.tsx`: layout, language switcher, contact email and the trial form
- `app/globals.css`: colours and fonts

## Deploy (free)

1. Create a new empty repository on GitHub.
2. In this folder:

       git init
       git add -A && git commit -m "SpendSync landing page"
       git branch -M main
       git remote add origin https://github.com/<your-username>/<repo>.git
       git push -u origin main

3. Go to vercel.com, sign in with GitHub, choose "Add New Project", pick the repo and press Deploy.

The ledger shown on the page is illustrative sample data, not customer data.
