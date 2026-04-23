import { useTranslation } from "react-i18next";

export default function Privacy() {
  const { t } = useTranslation("privacy");

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mb-10">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-2xl">
              🔒
            </div>
            <h1 className="font-display text-3xl font-extrabold text-ink-900">
              {t("title")}
            </h1>
          </div>
          <p className="mt-2 text-sm text-ink-400">{t("lastUpdated")}</p>
        </div>

        <div className="prose prose-sm max-w-none space-y-6 text-ink-600">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((idx) => (
            <div key={idx}>
              <h2 className="text-lg font-semibold text-ink-900">
                {t(`sections.${idx}.title`)}
              </h2>
              <p className="mt-2 text-sm leading-relaxed">
                {t(`sections.${idx}.content`)}
              </p>
              {t(`sections.${idx}.items.0`) && (
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                  {[0, 1, 2, 3].map(
                    (itemIdx) =>
                      t(`sections.${idx}.items.${itemIdx}`) !==
                        `sections.${idx}.items.${itemIdx}` && (
                        <li key={itemIdx}>
                          {t(`sections.${idx}.items.${itemIdx}`)}
                        </li>
                      )
                  )}
                </ul>
              )}
              {t(`sections.${idx}.note`) && t(`sections.${idx}.note`) !== `sections.${idx}.note` && (
                <p className="mt-2 text-sm leading-relaxed">
                  {t(`sections.${idx}.note`)}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
