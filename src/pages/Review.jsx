import { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "../components/ui/Button";

const API_URL = "https://api.marbot.app";

export default function Review() {
  const { t } = useTranslation(["review", "common"]);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const text = form.text.value.trim();
    const email = form.email.value.trim();
    if (!rating) return;

    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${API_URL}/api/v1/public/reviews`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          rating,
          text: text || null,
          email: email || null,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.detail || "Gagal mengirim review");
      }
      setSubmitted(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-md text-center px-4">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-50 text-3xl">
            ✅
          </div>
          <h2 className="mt-6 font-display text-2xl font-bold text-ink-900">
            {t("review:success_title")}
          </h2>
          <p className="mt-3 text-ink-500">
            {t("review:success_message")}
          </p>
          <Button className="mt-6" onClick={() => { setSubmitted(false); setRating(0); }}>
            {t("review:submit_another")}
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-medium text-brand-500">{t("review:badge")}</p>
          <h1 className="mt-2 font-display text-3xl font-extrabold text-ink-900 sm:text-4xl">
            {t("review:title")}
          </h1>
          <p className="mt-4 text-base text-ink-500">
            {t("review:subtitle")}
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm">
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Star rating */}
            <div>
              <label className="block text-sm font-medium text-ink-600">
                {t("review:rating.label")} <span className="text-red-500">*</span>
              </label>
              <div className="mt-2 flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHovered(star)}
                    onMouseLeave={() => setHovered(0)}
                    className="text-3xl transition-transform hover:scale-110 cursor-pointer"
                  >
                    <span
                      className={
                        star <= (hovered || rating)
                          ? "text-amber-400"
                          : "text-gray-300"
                      }
                    >
                      ★
                    </span>
                  </button>
                ))}
              </div>
              {rating > 0 && (
                <p className="mt-1 text-xs text-ink-400">
                  {t(`review:rating.${rating}`)}
                </p>
              )}
            </div>

            {/* Review text */}
            <div>
              <label className="block text-sm font-medium text-ink-600">
                {t("review:text.label")}
              </label>
              <textarea
                name="text"
                rows={4}
                className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-ink-900 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                placeholder={t("review:text.placeholder")}
              />
            </div>

            {/* Email (optional) */}
            <div>
              <label className="block text-sm font-medium text-ink-600">
                {t("review:email.label")}
              </label>
              <input
                type="email"
                name="email"
                className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-ink-900 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                placeholder={t("review:email.placeholder")}
              />
              <p className="mt-1 text-xs text-ink-400">
                {t("review:email.hint")}
              </p>
            </div>

            {error && (
              <p className="text-sm text-red-600">{error}</p>
            )}
            <Button type="submit" className="w-full" disabled={loading || !rating}>
              {loading ? t("review:submitting") : t("review:submit")}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
