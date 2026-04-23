import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function NotFound() {
  const { t } = useTranslation("notFound");

  return (
    <section className="flex min-h-[60vh] items-center bg-white">
      <div className="mx-auto max-w-lg px-4 text-center">
        <p className="text-7xl font-extrabold text-brand-500">404</p>
        <h1 className="mt-4 font-display text-2xl font-bold text-ink-900">
          {t("title")}
        </h1>
        <p className="mt-2 text-ink-500">{t("subtitle")}</p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-lg bg-brand-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-600"
          >
            {t("common:cta.backToHome")}
          </Link>
        </div>
      </div>
    </section>
  );
}
