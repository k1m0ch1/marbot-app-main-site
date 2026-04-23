import { useTranslation } from "react-i18next";
import Button from "../components/ui/Button";

export default function Contact() {
  const { t } = useTranslation(["contact", "common"]);

  const contactItems = [
    {
      emoji: "✉️",
      label: t("contact:info.email.label"),
      value: t("contact:info.email.value"),
    },
    {
      emoji: "💬",
      label: t("contact:info.whatsapp.label"),
      value: t("contact:info.whatsapp.value"),
      href: "https://wa.me/6281234567890",
    },
    {
      emoji: "📍",
      label: t("contact:info.location.label"),
      value: t("contact:info.location.value"),
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-brand-500">{t("contact:badge")}</p>
          <h1 className="mt-2 font-display text-3xl font-extrabold text-ink-900 sm:text-4xl">
            {t("contact:title")}
          </h1>
          <p className="mt-4 text-base text-ink-500">{t("contact:subtitle")}</p>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-8 sm:grid-cols-2">
          <div className="space-y-6">
            {contactItems.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-2xl">
                  {item.emoji}
                </div>
                <div>
                  <h3 className="font-display font-bold text-ink-900">{item.label}</h3>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block text-sm text-brand-600 hover:underline"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm text-ink-500">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm">
            <h3 className="font-display text-lg font-bold text-ink-900">
              {t("contact:form.title")}
            </h3>
            <form className="mt-4 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-ink-600">
                  {t("contact:form.name.label")}
                </label>
                <input
                  type="text"
                  className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-ink-900 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                  placeholder={t("contact:form.name.placeholder")}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-ink-600">
                  {t("contact:form.email.label")}
                </label>
                <input
                  type="email"
                  className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-ink-900 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                  placeholder={t("contact:form.email.placeholder")}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-ink-600">
                  {t("contact:form.message.label")}
                </label>
                <textarea
                  rows={4}
                  className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-ink-900 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                  placeholder={t("contact:form.message.placeholder")}
                />
              </div>
              <Button type="submit" className="w-full">
                {t("contact:form.submit")}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
