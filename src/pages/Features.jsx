import { CheckCircle2, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import Button from "../components/ui/Button";

const moduleKeys = [
  "dashboard",
  "congregation",
  "finance",
  "ziswaf",
  "zakatFitrah",
  "events",
  "broadcast",
  "reports",
  "qurban",
  "inventory",
  "tasks",
  "tpq",
  "prayerSchedule",
];

export default function Features() {
  const { t } = useTranslation(["features", "common"]);

  return (
    <>
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium text-brand-500">{t("features:badge")}</p>
            <h1 className="mt-2 font-display text-3xl font-extrabold text-ink-900 sm:text-4xl">
              {t("features:title")}
            </h1>
            <p className="mt-4 text-base text-ink-500">
              {t("features:subtitle")}
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {moduleKeys.map((key) => (
              <div
                key={key}
                className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-brand-100 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-2xl">
                  {t(`features:modules.${key}.emoji`)}
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-ink-900">
                  {t(`features:modules.${key}.title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {t(`features:modules.${key}.desc`)}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {[0, 1, 2, 3].map((i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-ink-500">
                      <CheckCircle2 size={13} className="mt-0.5 shrink-0 text-brand-400" />
                      {t(`features:modules.${key}.details.${i}`)}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-700 py-16">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 800 200" fill="none">
            <pattern id="feat-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M30 0 L60 30 L30 60 L0 30 Z" stroke="white" strokeWidth="0.5" fill="none"/>
            </pattern>
            <rect width="800" height="200" fill="url(#feat-pattern)" />
          </svg>
        </div>
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            {t("features:cta.title")}
          </h2>
          <p className="mt-3 text-white/70">
            {t("features:cta.subtitle")}
          </p>
          <div className="mt-6">
            <Button
              href="https://marbot.app/register"
              size="lg"
              className="bg-white text-brand-700 hover:bg-brand-50"
            >
              {t("features:cta.button")}
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
