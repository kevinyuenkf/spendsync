"use client";

import { useEffect, useState, useSyncExternalStore, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, FileUp, Languages, MapPin, ScanSearch, ShieldCheck, Sparkles, Table } from "lucide-react";
import { HeroVisual } from "@/components/hero-visual";
import { COPY, DEFAULT_LOCALE, LOCALES, LOCALE_LABEL, type Locale } from "@/lib/i18n";

// TODO (before deploy): point the form at a real endpoint (see handleSubmit).
const CONTACT_EMAIL = "kevinyuen.spendsync@gmail.com";

const STEP_ICONS = [FileUp, ScanSearch, Table];

/* ---------- language store: saved choice, else browser language ---------- */
const STORAGE_KEY = "spendsync-locale";
const CHANGE_EVENT = "spendsync-locale-change";

function detectLocale(): Locale {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved && (LOCALES as readonly string[]).includes(saved)) return saved as Locale;
  } catch {
    // Storage can be blocked (private mode); fall through to the browser language.
  }
  const lang = (navigator.language || "").toLowerCase();
  if (lang.startsWith("zh-cn") || lang.startsWith("zh-sg") || lang.includes("hans")) return "zh-CN";
  if (lang.startsWith("zh")) return "zh-HK";
  return "en";
}

function subscribe(onChange: () => void) {
  window.addEventListener(CHANGE_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(CHANGE_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

function setLocale(locale: Locale) {
  try {
    window.localStorage.setItem(STORAGE_KEY, locale);
  } catch {
    // Ignore: the choice just won't be remembered.
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

function useLocale(): Locale {
  return useSyncExternalStore(subscribe, detectLocale, () => DEFAULT_LOCALE);
}

function Logo() {
  return (
    <span className="flex items-center gap-2 text-base font-semibold tracking-tight text-slate-900">
      <span aria-hidden className="grid h-7 w-7 place-items-center rounded-lg bg-blue-700 text-white">
        <CheckCircle2 className="h-4 w-4" />
      </span>
      SpendSync
    </span>
  );
}

function LanguageSwitcher({ locale }: { locale: Locale }) {
  return (
    <div role="group" aria-label="Language" className="flex items-center gap-1 rounded-lg border border-slate-200 bg-white p-1">
      <Languages aria-hidden className="ml-1.5 hidden h-4 w-4 text-slate-400 sm:block" />
      {LOCALES.map((l) => (
        <button
          key={l}
          type="button"
          lang={l}
          aria-pressed={l === locale}
          onClick={() => setLocale(l)}
          className={
            l === locale
              ? "rounded-md bg-slate-900 px-2.5 py-1 text-sm font-semibold text-white"
              : "rounded-md px-2.5 py-1 text-sm font-medium text-slate-600 transition hover:bg-slate-100"
          }
        >
          {LOCALE_LABEL[l]}
        </button>
      ))}
    </div>
  );
}

export default function Home() {
  const locale = useLocale();
  const t = COPY[locale];
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  // Keep <html lang> in step with the chosen language (screen readers, fonts).
  useEffect(() => {
    document.documentElement.lang = locale === "en" ? "en" : locale === "zh-CN" ? "zh-Hans" : "zh-Hant-HK";
  }, [locale]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO (before deploy): replace this block with a POST to a real endpoint
    // (Formspree, a Supabase table, or a Next.js Route Handler).
    // Until then it opens the visitor's email app with a pre-filled request.
    const subject = encodeURIComponent(t.cta.emailSubject);
    const body = encodeURIComponent(t.cta.emailBody + email);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  // Simplified Chinese reads better with the SC face first.
  const fontFamily =
    locale === "zh-CN"
      ? '"Plus Jakarta Sans", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", system-ui, sans-serif'
      : undefined;
  const cjk = locale !== "en";

  return (
    <main className="min-h-screen bg-white text-slate-900" style={{ fontFamily }}>
      {/* Nav */}
      <header className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-5">
        <Logo />
        <div className="flex items-center gap-3">
          <LanguageSwitcher locale={locale} />
          <a
            href="#trial"
            className="hidden whitespace-nowrap rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700 md:block"
          >
            {t.nav.cta}
          </a>
        </div>
      </header>

      {/* 1. Hero + 2. Product visual */}
      <section className="bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-5 pb-20 pt-8 md:pt-14 lg:flex-row lg:items-center lg:gap-14">
          <div className="lg:w-[44%]">
            <p className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-800">
              <MapPin aria-hidden className="h-3.5 w-3.5" />
              {t.hero.badge}
            </p>

            <h1
              className={`mt-5 text-balance font-bold tracking-tight text-slate-900 ${
                cjk ? "text-3xl leading-snug sm:text-[2.6rem] sm:leading-[1.3]" : "text-4xl leading-tight sm:text-5xl"
              }`}
            >
              {t.hero.h1}
            </h1>

            <h2 className="mt-5 text-pretty text-lg font-normal leading-relaxed text-slate-600">{t.hero.h2}</h2>

            <div className="mt-8 flex flex-col items-stretch gap-4 sm:items-start">
              <a
                href="#how-it-works"
                className="inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-blue-700 px-6 text-base font-semibold text-white shadow-lg shadow-blue-700/25 transition hover:bg-blue-800"
              >
                {t.hero.primary}
                <ArrowRight aria-hidden className="h-4 w-4" />
              </a>
              <span className="inline-flex items-center justify-center gap-2 text-sm text-slate-500">
                <Sparkles aria-hidden className="h-4 w-4 text-blue-600" />
                {t.hero.note}
              </span>
            </div>
          </div>

          <div className="min-w-0 lg:w-[56%]">
            <HeroVisual t={t.visual} />
          </div>
        </div>
      </section>

      {/* 3. How it works */}
      <section id="how-it-works" className="mx-auto max-w-6xl scroll-mt-8 px-5 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">{t.how.eyebrow}</p>
          <p className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">{t.how.title}</p>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {t.how.steps.map(({ title, body }, index) => {
            const Icon = STEP_ICONS[index];
            return (
              <li key={title} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-blue-50 text-blue-700">
                    <Icon aria-hidden className="h-6 w-6" />
                  </span>
                  <span className="font-mono text-sm text-slate-400">
                    {t.how.step} {index + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold">{title}</h3>
                <p className="mt-2 leading-relaxed text-slate-600">{body}</p>
              </li>
            );
          })}
        </ol>

        {/* Data handling */}
        <div className="mt-6 rounded-2xl bg-slate-50 p-7 ring-1 ring-slate-200">
          <h3 className="flex items-center gap-2 text-base font-semibold">
            <ShieldCheck aria-hidden className="h-5 w-5 text-blue-700" />
            {t.data.title}
          </h3>
          <ul className="mt-4 grid gap-4 md:grid-cols-3">
            {t.data.points.map((point) => (
              <li key={point} className="text-[15px] leading-relaxed text-slate-600">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. Lead capture */}
      <section id="trial" className="scroll-mt-8 px-5 pb-10">
        <div className="mx-auto max-w-6xl rounded-3xl bg-slate-900 px-6 py-16 text-center sm:px-10">
          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">{t.cta.title}</h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-slate-300">{t.cta.body}</p>

          <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-xl flex-col gap-3 md:flex-row">
            <label htmlFor="work-email" className="sr-only">
              {t.cta.label}
            </label>
            <input
              id="work-email"
              type="email"
              required
              autoComplete="email"
              placeholder={t.cta.placeholder}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setSent(false);
              }}
              className="h-12 w-full flex-1 rounded-lg border border-slate-600 bg-slate-800 px-4 text-base text-white placeholder:text-slate-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/40"
            />
            <button
              type="submit"
              className="h-12 shrink-0 whitespace-nowrap rounded-lg bg-blue-600 px-6 text-base font-semibold text-white transition hover:bg-blue-500"
            >
              {t.cta.button}
            </button>
          </form>

          <p aria-live="polite" className="mt-4 min-h-5 text-sm text-slate-400">
            {sent ? t.cta.sent : t.cta.hint}
          </p>
        </div>

        <footer className="mx-auto mt-8 flex max-w-6xl flex-col items-center justify-between gap-2 text-sm text-slate-500 md:flex-row">
          <Logo />
          <p>
            {t.footer.place} · {CONTACT_EMAIL}
          </p>
        </footer>
      </section>
    </main>
  );
}
