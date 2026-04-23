import { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "../components/ui/Button";

export default function Register() {
  const { t } = useTranslation(["register", "common"]);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-lg px-4 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-50 text-4xl">
            ✅
          </div>
          <h1 className="mt-6 font-display text-2xl font-bold text-ink-900">
            {t("register:success.title")}
          </h1>
          <p className="mt-3 text-ink-500">{t("register:success.message")}</p>
          <div className="mt-6">
            <Button href="https://login.marbot.app">
              {t("common:cta.startFree")}
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-medium text-brand-500">{t("register:badge")}</p>
          <h1 className="mt-2 font-display text-3xl font-extrabold text-ink-900 sm:text-4xl">
            {t("register:title")}
          </h1>
          <p className="mt-4 text-base text-ink-500">{t("register:subtitle")}</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-5 rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-ink-700">
                {t("register:form.name")} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-ink-900 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                placeholder={t("register:form.namePlaceholder")}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-ink-700">
                {t("register:form.phone")} <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                required
                className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-ink-900 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                placeholder={t("register:form.phonePlaceholder")}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-ink-700">
              {t("register:form.email")} <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              required
              className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-ink-900 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
              placeholder={t("register:form.emailPlaceholder")}
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-ink-700">
                {t("register:form.mosqueName")} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-ink-900 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                placeholder={t("register:form.mosqueNamePlaceholder")}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-ink-700">
                {t("register:form.mosqueLocation")} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-ink-900 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                placeholder={t("register:form.mosqueLocationPlaceholder")}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-ink-700">
              {t("register:form.isMosqueAdmin")} <span className="text-red-500">*</span>
            </label>
            <div className="mt-2 flex gap-4">
              <label className="flex items-center gap-2 text-sm text-ink-600">
                <input
                  type="radio"
                  name="isAdmin"
                  value="yes"
                  required
                  className="accent-brand-500"
                />
                {t("register:form.yes")}
              </label>
              <label className="flex items-center gap-2 text-sm text-ink-600">
                <input
                  type="radio"
                  name="isAdmin"
                  value="no"
                  className="accent-brand-500"
                />
                {t("register:form.no")}
              </label>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-ink-700">
                {t("register:form.role")}
              </label>
              <select className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-ink-900 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20">
                {[0, 1, 2, 3, 4].map((i) => (
                  <option key={i} value={t(`register:form.roleOptions.${i}`)}>
                    {t(`register:form.roleOptions.${i}`)}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-ink-700">
                {t("register:form.referralSource")}
              </label>
              <select className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-ink-900 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20">
                {[0, 1, 2, 3, 4].map((i) => (
                  <option key={i} value={t(`register:form.referralOptions.${i}`)}>
                    {t(`register:form.referralOptions.${i}`)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-ink-700">
              {t("register:form.additionalMessage")}
            </label>
            <textarea
              rows={3}
              className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-ink-900 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
              placeholder={t("register:form.messagePlaceholder")}
            />
          </div>

          <Button type="submit" className="w-full">
            {t("register:form.submit")}
          </Button>
        </form>
      </div>
    </section>
  );
}
