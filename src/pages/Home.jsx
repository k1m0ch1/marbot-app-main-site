import { useTranslation } from "react-i18next";
import {
  Users,
  Wallet,
  CalendarDays,
  BookOpen,
  Megaphone,
  Shield,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import PrayerTimes from "../components/home/PrayerTimes";
import Infaq from "../components/home/Infaq";
import Gallery from "../components/home/Gallery";

const LOGIN_URL = "https://login.marbot.app";
const REGISTER_URL = "https://marbot.app/register";

const featureKeys = [
  { icon: Users, emoji: "👥", key: "congregation" },
  { icon: Wallet, emoji: "💰", key: "finance" },
  { icon: CalendarDays, emoji: "📅", key: "events" },
  { icon: BookOpen, emoji: "📄", key: "reports" },
  { icon: Megaphone, emoji: "📢", key: "broadcast" },
  { icon: Shield, emoji: "🔒", key: "security" },
];

const benefitKeys = [
  { emoji: "👨‍💼", key: "chairman" },
  { emoji: "🧮", key: "treasurer" },
  { emoji: "📝", key: "secretary" },
];

const stepKeys = [
  { step: "1", emoji: "📝", key: "register" },
  { step: "2", emoji: "👥", key: "addCongregation" },
  { step: "3", emoji: "🚀", key: "startManaging" },
];

const statKeys = ["free", "unlimited", "anytime"];

export default function Home() {
  const { t } = useTranslation(["home", "common"]);

  return (
    <>
      {/* Hero — Full screen with mosque image overlay */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        {/* Background image with dark overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-banner.png"
            alt="Marbot Masjid"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-800/80 via-brand-900/85 to-black/90" />
        </div>

        {/* Decorative mosque dome SVG pattern */}
        <div className="absolute right-0 top-0 z-0 opacity-10">
          <svg width="400" height="400" viewBox="0 0 200 200" fill="none">
            <path d="M100 20 Q60 20 60 80 L60 180 L140 180 L140 80 Q140 20 100 20Z" stroke="white" strokeWidth="1" fill="none"/>
            <circle cx="100" cy="15" r="8" stroke="white" strokeWidth="1" fill="none"/>
            <line x1="100" y1="0" x2="100" y2="7" stroke="white" strokeWidth="1"/>
            <path d="M70 80 Q70 40 100 30 Q130 40 130 80" stroke="white" strokeWidth="1" fill="none"/>
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-4 pt-20 text-center">
          <p className="font-display text-lg text-brand-300 sm:text-xl">
            {t("home:hero.bismillah")}
          </p>
          <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-400" />
            {t("home:hero.badge")}
          </div>
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            {t("home:hero.title1")}
            <br />
            {t("home:hero.title2")}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            {t("home:hero.subtitle")}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              href={REGISTER_URL}
              variant="none"
              size="lg"
              className="bg-brand-500 text-white"
            >
              {t("common:cta.registerNowFree")}
              <ArrowRight size={18} className="ml-2" />
            </Button>
            <Link
              to="/features"
              className="inline-flex items-center gap-1 rounded-lg border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              {t("common:cta.viewFeatures")}
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-12 flex items-center justify-center gap-8 sm:gap-16">
            {statKeys.map((key) => (
              <div key={key} className="text-center">
                <p className="font-display text-2xl font-bold text-white sm:text-3xl">
                  {t(`home:stats.${key}.value`)}
                </p>
                <p className="text-xs text-white/50">{t(`home:stats.${key}.label`)}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-white/40">
            {t("home:hero.noCreditCard")}
          </p>
        </div>
      </section>

      {/* Prayer Times */}
      <PrayerTimes />

      {/* Features */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium text-brand-500">{t("home:features.badge")}</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-ink-900 sm:text-4xl">
              {t("home:features.title")}
            </h2>
            <p className="mt-4 text-base text-ink-500">
              {t("home:features.subtitle")}
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featureKeys.map((f) => (
              <div
                key={f.key}
                className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-brand-100 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-2xl">
                  {f.emoji}
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-ink-900">
                  {t(`home:features.list.${f.key}.title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {t(`home:features.list.${f.key}.desc`)}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/features"
              className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
            >
              {t("home:features.viewAll")}
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits by Role */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium text-brand-500">{t("home:benefits.badge")}</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-ink-900 sm:text-4xl">
              {t("home:benefits.title")}
            </h2>
            <p className="mt-4 text-base text-ink-500">
              {t("home:benefits.subtitle")}
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {benefitKeys.map((b) => (
              <div
                key={b.key}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{b.emoji}</span>
                  <h3 className="font-display text-xl font-bold text-brand-700">
                    {t(`home:benefits.list.${b.key}.role`)}
                  </h3>
                </div>
                <ul className="mt-5 space-y-3">
                  {[0, 1, 2].map((i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-ink-600">
                      <CheckCircle2
                        size={16}
                        className="mt-0.5 shrink-0 text-brand-500"
                      />
                      {t(`home:benefits.list.${b.key}.points.${i}`)}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works — simple 3-step */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium text-brand-500">{t("home:steps.badge")}</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-ink-900 sm:text-4xl">
              {t("home:steps.title")}
            </h2>
            <p className="mt-4 text-base text-ink-500">
              {t("home:steps.subtitle")}
            </p>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {stepKeys.map((s) => (
              <div key={s.step} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-50 text-3xl">
                  {s.emoji}
                </div>
                <div className="mt-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-500 text-xs font-bold text-white">
                  {s.step}
                </div>
                <h3 className="mt-3 font-display text-lg font-bold text-ink-900">
                  {t(`home:steps.list.${s.key}.title`)}
                </h3>
                <p className="mt-2 text-sm text-ink-500">
                  {t(`home:steps.list.${s.key}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <Gallery />

      {/* Infaq */}
      <Infaq />

      {/* CTA — Emerald green background */}
      <section className="relative overflow-hidden bg-brand-700 py-20 sm:py-28">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 800 400" fill="none">
            <pattern id="islamic-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M30 0 L60 30 L30 60 L0 30 Z" stroke="white" strokeWidth="0.5" fill="none"/>
              <circle cx="30" cy="30" r="10" stroke="white" strokeWidth="0.5" fill="none"/>
            </pattern>
            <rect width="800" height="400" fill="url(#islamic-pattern)" />
          </svg>
        </div>
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-sm font-medium text-brand-300">{t("home:ctaSection.badge")}</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
            {t("home:ctaSection.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
            {t("home:ctaSection.subtitle")}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              href={REGISTER_URL}
              variant="none"
              size="lg"
              className="bg-brand-500 text-white"
            >
              {t("common:cta.registerNowFree")}
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>
          <p className="mt-4 text-sm text-white/40">
            {t("home:ctaSection.quran")}
          </p>
        </div>
      </section>
    </>
  );
}
