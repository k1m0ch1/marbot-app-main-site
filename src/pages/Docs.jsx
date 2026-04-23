import { useTranslation } from "react-i18next";
import Button from "../components/ui/Button";

export default function Docs() {
  const { t } = useTranslation(["docs", "common"]);

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-brand-500">{t("docs:badge")}</p>
          <h1 className="mt-2 font-display text-3xl font-extrabold text-ink-900 sm:text-4xl">
            {t("docs:title")}
          </h1>
          <p className="mt-4 text-base text-ink-500">{t("docs:subtitle")}</p>
        </div>

        <div className="mx-auto mt-14 max-w-3xl">
          <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 text-center shadow-sm">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-3xl">
              📖
            </div>
            <h3 className="mt-4 font-display text-lg font-bold text-ink-900">
              {t("docs:comingSoon.title")}
            </h3>
            <p className="mt-2 text-sm text-ink-500">
              {t("docs:comingSoon.desc")}
            </p>
            <div className="mt-6">
              <Button href="https://login.marbot.app" size="md">
                {t("common:cta.tryNow")}
              </Button>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[0, 1, 2, 3, 4, 5].map((idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
            >
              <h3 className="font-display font-bold text-ink-900">
                {t(`docs:sections.${idx}.title`)}
              </h3>
              <ul className="mt-3 space-y-1.5">
                {[0, 1, 2, 3].map((itemIdx) => (
                  <li key={itemIdx} className="text-sm text-ink-500">
                    {t(`docs:sections.${idx}.items.${itemIdx}`)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
