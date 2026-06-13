import { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "../components/ui/Button";

const API_URL = "https://api.marbot.app";

const REASONS_ID = [
  "Pertanyaan umum",
  "Ingin bermitra",
  "Laporan bug",
  "Permintaan fitur",
  "Bantuan teknis",
  "Lainnya",
];

export default function Contact() {
  const { t } = useTranslation(["contact", "common"]);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const reason = form.reason?.value || "";
    const message = form.message.value.trim();
    if (!name || !email || !message) return;

    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${API_URL}/api/v1/public/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, reason: reason || null, message }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.detail || "Gagal mengirim pesan");
      }
      setSubmitted(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

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
      href: "https://wa.me/6285659289271",
    },
    {
      emoji: "📍",
      label: t("contact:info.location.label"),
      value: t("contact:info.location.value"),
    },
  ];

  if (submitted) {
    return (
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-md text-center px-4">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-50 text-3xl">
            ✅
          </div>
          <h2 className="mt-6 font-display text-2xl font-bold text-ink-900">
            Pesan Terkirim!
          </h2>
          <p className="mt-3 text-ink-500">
            Terima kasih telah menghubungi kami. Tim kami akan segera merespons.
          </p>
          <Button className="mt-6" onClick={() => setSubmitted(false)}>
            Kirim Pesan Lagi
          </Button>
        </div>
      </section>
    );
  }

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
            <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-ink-600">
                  {t("contact:form.name.label")}
                </label>
                <input
                  type="text"
                  name="name"
                  required
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
                  name="email"
                  required
                  className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-ink-900 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                  placeholder={t("contact:form.email.placeholder")}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-ink-600">Alasan</label>
                <select
                  name="reason"
                  className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-ink-900 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                >
                  <option value="">Pilih alasan (opsional)</option>
                  {REASONS_ID.map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-ink-600">
                  {t("contact:form.message.label")}
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-ink-900 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                  placeholder={t("contact:form.message.placeholder")}
                />
              </div>
              {error && (
                <p className="text-sm text-red-600">{error}</p>
              )}
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Mengirim..." : t("contact:form.submit")}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
