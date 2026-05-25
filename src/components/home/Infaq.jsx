import { useTranslation } from "react-i18next";
import { Server, Code2, HeartHandshake } from "lucide-react";

const USE_ICONS = [Server, Code2, HeartHandshake];

export default function Infaq() {
  const { t } = useTranslation("home");
  const uses = t("infaq.uses", { returnObjects: true });

  return (
    <section className="bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-sm italic text-brand-600">
            {t("infaq.arabicQuote")}
          </p>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-ink-900 sm:text-4xl">
            {t("infaq.title")}
          </h2>
          <p
            className="mt-4 text-base leading-relaxed text-ink-500"
            dangerouslySetInnerHTML={{ __html: t("infaq.subtitle") }}
          />
        </div>

        {/* Use cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {uses.map((u, i) => {
            const Icon = USE_ICONS[i];
            return (
              <div
                key={u.title}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50">
                  <Icon size={22} className="text-brand-600" />
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-ink-900">{u.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{u.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Coming soon */}
        <div className="mt-10 rounded-2xl border border-brand-100 bg-white p-8 shadow-sm text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-50 text-3xl">
            🤲
          </div>
          <p className="mt-4 font-display text-lg font-bold text-brand-800">
            {t("infaq.comingSoonTitle")}
          </p>
          <p className="mt-2 text-sm text-ink-500 leading-relaxed">
            {t("infaq.comingSoonDesc")}
          </p>
        </div>
      </div>
    </section>
  );
}
