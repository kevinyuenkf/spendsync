# SpendSync landing page

One-page site for Hong Kong accounting firms. Next.js (App Router) + Tailwind CSS v4.

## Run locally

    npm install
    npm run dev

Open http://localhost:3000

## Edit content

- `lib/content.ts`: contact details, nav links, sample ledger rows
- `app/page.tsx`: section copy
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
# spendsync
# spendsync
