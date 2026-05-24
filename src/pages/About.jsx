import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import Button from "../components/ui/Button";

const valueKeys = ["freeForever", "openSource", "missionDriven", "privacy"];

export default function About() {
  const { t } = useTranslation(["about", "common"]);

  return (
    <>
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-medium text-brand-500">{t("about:badge")}</p>
            <h1 className="mt-2 font-display text-3xl font-extrabold text-ink-900 sm:text-4xl">
              {t("about:title")}
            </h1>

            <div className="mt-6 space-y-5 text-base leading-relaxed text-ink-600">
              <p>{t("about:story.paragraphs.0")}</p>
              <p>{t("about:story.paragraphs.1")}</p>
            </div>

            {/* Founder photo — inserted after paragraph 2 */}
            <div className="my-10 overflow-hidden rounded-2xl shadow-md">
              <img
                src="/founder.jpg"
                alt={t("about:story.photoCaption")}
                className="w-full object-cover"
              />
              <p className="bg-gray-50 px-4 py-2 text-center text-xs text-ink-400">
                {t("about:story.photoCaption")}
              </p>
            </div>

            <div className="space-y-5 text-base leading-relaxed text-ink-600">
              <p>{t("about:story.paragraphs.2")}</p>
              <p>{t("about:story.paragraphs.3")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium text-brand-500">{t("about:values.badge")}</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-ink-900 sm:text-4xl">
              {t("about:values.title")}
            </h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {valueKeys.map((key) => (
              <div
                key={key}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-2xl">
                  {t(`about:values.list.${key}.emoji`)}
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-ink-900">
                  {t(`about:values.list.${key}.title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {t(`about:values.list.${key}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-700 py-16">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 800 200" fill="none">
            <pattern id="about-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M30 0 L60 30 L30 60 L0 30 Z" stroke="white" strokeWidth="0.5" fill="none" />
            </pattern>
            <rect width="800" height="200" fill="url(#about-pattern)" />
          </svg>
        </div>
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            {t("about:cta.title")}
          </h2>
          <p className="mt-3 text-white/70">{t("about:cta.subtitle")}</p>
          <div className="mt-6">
            <Button
              href="https://marbot.app/register"
              variant="none"
              size="lg"
              className="bg-white text-brand-700"
            >
              {t("common:cta.registerNowFree")}
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
