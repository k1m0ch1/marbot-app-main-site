import { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "../components/ui/Button";

const API_URL = "https://api.marbot.app";

export default function Register() {
  const { t } = useTranslation(["register", "common"]);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [photoPreview, setPhotoPreview] = useState(null);
  const [photoBase64, setPhotoBase64] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    if (!photoBase64) {
      setError("Foto verifikasi wajib diupload");
      setSubmitting(false);
      return;
    }

    const form = e.target;
    const data = {
      contact_name: form.contact_name.value,
      email: form.email.value,
      phone: form.phone.value,
      mosque_name: form.mosque_name.value,
      mosque_address: form.mosque_address.value || null,
      mosque_map_url: form.mosque_map_url.value || null,
      is_mosque_admin: form.isAdmin?.value === "yes",
      role: form.role?.value || null,
      referral: form.referral?.value || null,
      message: form.message?.value || null,
      photo_data: photoBase64,
    };

    try {
      const res = await fetch(`${API_URL}/api/v1/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({ detail: "Registration failed" }));
        throw new Error(body.detail || "Registration failed");
      }
      setSubmitted(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "mt-1 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-ink-900 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20";
  const selectClass = inputClass;

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
          <p className="mt-3 text-ink-500">
            {t("register:success.subtitle")}
          </p>
          <p className="mt-2 text-sm text-ink-400">
            {t("register:success.checkEmail")}
          </p>
          <div className="mt-6">
            <Button href="/">
              {t("register:success.backToHome")}
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

        {error && (
          <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            {error}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-5 rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm sm:p-8"
        >
          {/* Contact Name + Phone */}
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-ink-700">
                {t("register:form.name.label")} <span className="text-red-500">*</span>
              </label>
              <input type="text" name="contact_name" required className={inputClass} placeholder={t("register:form.name.placeholder")} />
            </div>
            <div>
              <label className="block text-sm font-medium text-ink-700">
                {t("register:form.phone.label")} <span className="text-red-500">*</span>
              </label>
              <input type="tel" name="phone" required className={inputClass} placeholder={t("register:form.phone.placeholder")} />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-ink-700">
              {t("register:form.email.label")} <span className="text-red-500">*</span>
            </label>
            <input type="email" name="email" required className={inputClass} placeholder={t("register:form.email.placeholder")} />
          </div>

          {/* Mosque Name + Address */}
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-ink-700">
                {t("register:form.mosqueName.label")} <span className="text-red-500">*</span>
              </label>
              <input type="text" name="mosque_name" required className={inputClass} placeholder={t("register:form.mosqueName.placeholder")} />
            </div>
            <div>
              <label className="block text-sm font-medium text-ink-700">
                {t("register:form.mosqueLocation.label")} <span className="text-red-500">*</span>
              </label>
              <input type="text" name="mosque_address" required className={inputClass} placeholder={t("register:form.mosqueLocation.placeholder")} />
            </div>
          </div>

          {/* Google Maps Link */}
          <div>
            <label className="block text-sm font-medium text-ink-700">
              Google Maps Link <span className="text-red-500">*</span>
            </label>
            <input
              type="url"
              name="mosque_map_url"
              required
              className={inputClass}
              placeholder="https://maps.google.com/..."
            />
            <p className="mt-1 text-xs text-ink-400">
              Buka Google Maps → cari masjid Anda → klik Share → salin link
            </p>
          </div>

          {/* Is Admin */}
          <div>
            <label className="block text-sm font-medium text-ink-700">
              {t("register:form.isMosqueAdmin.label")} <span className="text-red-500">*</span>
            </label>
            <div className="mt-2 flex gap-4">
              <label className="flex items-center gap-2 text-sm text-ink-600">
                <input type="radio" name="isAdmin" value="yes" required className="accent-brand-500" />
                {t("register:form.isMosqueAdmin.options.yes")}
              </label>
              <label className="flex items-center gap-2 text-sm text-ink-600">
                <input type="radio" name="isAdmin" value="no" className="accent-brand-500" />
                {t("register:form.isMosqueAdmin.options.no")}
              </label>
            </div>
          </div>

          {/* Role + Referral */}
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-ink-700">
                {t("register:form.role.label")}
              </label>
              <select name="role" className={selectClass}>
                <option value="">{t("register:form.role.placeholder")}</option>
                <option value="chairman">{t("register:form.role.options.chairman")}</option>
                <option value="treasurer">{t("register:form.role.options.treasurer")}</option>
                <option value="secretary">{t("register:form.role.options.secretary")}</option>
                <option value="marbot">{t("register:form.role.options.marbot")}</option>
                <option value="other">{t("register:form.role.options.other")}</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-ink-700">
                {t("register:form.referralSource.label")}
              </label>
              <select name="referral" className={selectClass}>
                <option value="">{t("register:form.referralSource.placeholder")}</option>
                <option value="google">{t("register:form.referralSource.options.google")}</option>
                <option value="socialMedia">{t("register:form.referralSource.options.socialMedia")}</option>
                <option value="friendRecommendation">{t("register:form.referralSource.options.friendRecommendation")}</option>
                <option value="whatsapp">{t("register:form.referralSource.options.whatsapp")}</option>
                <option value="other">{t("register:form.referralSource.options.other")}</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-ink-700">
              {t("register:form.additionalMessage.label")}
            </label>
            <textarea
              name="message"
              rows={3}
              className={inputClass}
              placeholder={t("register:form.additionalMessage.placeholder")}
            />
          </div>

          {/* Photo Verification */}
          <div>
            <label className="block text-sm font-medium text-ink-700">
              Foto Verifikasi <span className="text-red-500">*</span>
            </label>
            <p className="text-xs text-ink-400 mt-1 mb-2">
              Upload foto Anda bersama anggota pengurus masjid dalam salah satu kegiatan masjid. Foto ini sebagai bukti bahwa Anda benar-benar bagian dari pengurus masjid.
            </p>
            {photoPreview ? (
              <div className="relative inline-block">
                <img src={photoPreview} alt="Preview" className="max-h-48 rounded-xl border border-gray-200" />
                <button
                  type="button"
                  onClick={() => { setPhotoPreview(null); setPhotoBase64(null); }}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full text-xs flex items-center justify-center hover:bg-red-600"
                >
                  ×
                </button>
              </div>
            ) : (
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-brand-500 hover:bg-brand-50/50 transition-colors">
                <div className="flex flex-col items-center justify-center text-ink-400">
                  <svg className="w-8 h-8 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  <span className="text-sm">Klik untuk upload foto</span>
                </div>
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (!file) return;
                    if (file.size > 5 * 1024 * 1024) {
                      setError("Ukuran foto maksimal 5MB");
                      return;
                    }
                    const reader = new FileReader();
                    reader.onload = (ev) => {
                      setPhotoPreview(ev.target.result);
                      setPhotoBase64(ev.target.result);
                    };
                    reader.readAsDataURL(file);
                  }}
                />
              </label>
            )}
          </div>

          <Button type="submit" disabled={submitting} className="w-full">
            {submitting ? "..." : t("register:form.submit")}
          </Button>
        </form>
      </div>
    </section>
  );
}
