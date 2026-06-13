import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import Button from "../components/ui/Button";

const API_URL = "https://api.marbot.app";
const MAX_PHOTOS = 5;

export default function Register() {
  const { t } = useTranslation(["register", "common"]);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [photos, setPhotos] = useState([]);
  const fileInput = useRef(null);

  function addPhoto(file) {
    if (photos.length >= MAX_PHOTOS) {
      setError(`Maksimal ${MAX_PHOTOS} foto`);
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setError("Ukuran foto maksimal 5MB");
      return;
    }
    const reader = new FileReader();
    reader.onload = (ev) => {
      setPhotos((prev) => [...prev, { preview: ev.target.result, base64: ev.target.result }]);
    };
    reader.readAsDataURL(file);
  }

  function removePhoto(index) {
    setPhotos((prev) => prev.filter((_, i) => i !== index));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    if (photos.length === 0) {
      setError("Minimal 1 foto verifikasi wajib diupload");
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
      photos_data: photos.map((p) => p.base64),
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

        {/* Process Flow */}
        <div className="mt-10">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-brand-500 mb-6">
            {t("register:process.heading", "Proses Pendaftaran")}
          </p>
          <div className="relative flex flex-col gap-0 sm:flex-row sm:items-start sm:justify-between">
            {/* connector line — desktop only */}
            <div className="absolute top-6 left-0 right-0 hidden h-px bg-brand-100 sm:block" style={{ zIndex: 0 }} />
            {[
              { icon: "📝", label: t("register:process.step1", "Mengisi pendaftaran") },
              { icon: "✅", label: t("register:process.step2", "Diverifikasi oleh tim") },
              { icon: "🖥️", label: t("register:process.step3", "Jadwal demo marbot.app") },
              { icon: "🕌", label: t("register:process.step4", "Migrasi data masjid") },
              { icon: "👥", label: t("register:process.step5", "Daftarkan DKM inti") },
            ].map((step, i) => (
              <div
                key={i}
                className="relative z-10 flex sm:flex-col items-center gap-3 sm:gap-2 sm:flex-1 sm:text-center py-3 sm:py-0"
              >
                {/* mobile vertical connector */}
                {i < 4 && (
                  <div className="absolute left-6 top-full h-4 w-px bg-brand-100 sm:hidden" />
                )}
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-brand-50 border-2 border-brand-100 text-xl shadow-sm">
                  {step.icon}
                </div>
                <div className="flex flex-col sm:items-center">
                  <span className="text-xs font-semibold text-brand-600 sm:mb-0.5">
                    {i + 1}
                  </span>
                  <span className="text-sm font-medium text-ink-700 leading-tight">
                    {step.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
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
              {t("register:form.mapsLink.label")} <span className="text-red-500">*</span>
            </label>
            <input
              type="url"
              name="mosque_map_url"
              required
              className={inputClass}
              placeholder="https://maps.google.com/..."
            />
            <p className="mt-1 text-xs text-ink-400">
              {t("register:form.mapsLink.helper")}
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

          {/* Photo Verification — up to 5 */}
          <div>
            <label className="block text-sm font-medium text-ink-700">
              Foto Verifikasi <span className="text-red-500">*</span>
            </label>
            <p className="text-xs text-ink-400 mt-1 mb-2">
              Upload foto Anda bersama anggota pengurus masjid dalam salah satu kegiatan masjid. Maksimal {MAX_PHOTOS} foto.
            </p>

            <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
              {photos.map((p, i) => (
                <div key={i} className="relative group">
                  <img
                    src={p.preview}
                    alt={`Foto ${i + 1}`}
                    className="w-full aspect-square object-cover rounded-xl border border-gray-200"
                  />
                  <button
                    type="button"
                    onClick={() => removePhoto(i)}
                    className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-red-500 text-white rounded-full text-xs flex items-center justify-center hover:bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    ×
                  </button>
                  <span className="absolute bottom-1 left-1 bg-black/50 text-white text-[10px] px-1.5 py-0.5 rounded-md">
                    {i + 1}/{MAX_PHOTOS}
                  </span>
                </div>
              ))}

              {photos.length < MAX_PHOTOS && (
                <button
                  type="button"
                  onClick={() => fileInput.current?.click()}
                  className="w-full aspect-square flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-brand-500 hover:bg-brand-50/50 transition-colors"
                >
                  <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                  <span className="text-[10px] text-gray-400 mt-1">Tambah</span>
                </button>
              )}
            </div>

            <input
              ref={fileInput}
              type="file"
              accept="image/jpeg,image/png,image/webp"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) addPhoto(file);
                e.target.value = "";
              }}
            />
            <p className="text-xs text-ink-400 mt-2">
              {photos.length} dari {MAX_PHOTOS} foto · Maks 5MB per foto · JPG, PNG, WebP
            </p>
          </div>

          <Button type="submit" disabled={submitting} className="w-full">
            {submitting ? "..." : t("register:form.submit")}
          </Button>
        </form>
      </div>
    </section>
  );
}
