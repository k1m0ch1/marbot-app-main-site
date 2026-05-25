import { useTranslation } from "react-i18next";

export default function Infaq() {
  const { t } = useTranslation("infaq");

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand-50 text-4xl">
          🤲
        </div>
        <h1 className="mt-8 font-display text-3xl font-extrabold text-ink-900 sm:text-4xl">
          {t("title")}
        </h1>
        <p className="mt-4 text-base text-ink-500 leading-relaxed">
          {t("subtitle")}
        </p>
        <div className="mt-10 inline-flex items-center gap-2 rounded-full bg-brand-50 px-5 py-2.5 text-sm font-semibold text-brand-600">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-500"></span>
          </span>
          {t("badge")}
        </div>
      </div>
    </section>
  );
}
