import { useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Instagram, ExternalLink, X, ChevronLeft, ChevronRight, Monitor, Smartphone } from "lucide-react";

const WEB_SCREENSHOTS = [
  { src: "/app/web-ss-1.png" },
  { src: "/app/web-ss-2.png" },
  { src: "/app/web-ss-3.png" },
  { src: "/app/web-ss-4.png" },
  { src: "/app/web-ss-5-menu.png" },
];

const MOBILE_SCREENSHOTS = [
  { src: "/app/4.jpeg" },
  { src: "/app/6.jpeg" },
  { src: "/app/3.jpeg" },
  { src: "/app/5.jpeg" },
  { src: "/app/2.jpeg" },
];

function Lightbox({ images, labels, current, onClose, onPrev, onNext }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative mx-4 flex max-h-[90vh] max-w-5xl flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
        >
          <X size={24} />
        </button>

        <img
          src={images[current]}
          alt={labels[current]}
          className="max-h-[80vh] w-auto rounded-xl shadow-2xl"
        />
        <p className="mt-3 text-sm font-medium text-white">{labels[current]}</p>

        {images.length > 1 && (
          <>
            <button
              onClick={onPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={onNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            >
              <ChevronRight size={28} />
            </button>
          </>
        )}

        <div className="mt-3 flex gap-1.5">
          {images.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 w-1.5 rounded-full ${i === current ? "bg-white" : "bg-white/40"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  const { t } = useTranslation("home");
  const webItems = t("gallery.items", { returnObjects: true });
  const mobileItems = t("gallery.mobileItems", { returnObjects: true });

  const [tab, setTab] = useState("web");
  const [lightboxIdx, setLightboxIdx] = useState(-1);

  const isWeb = tab === "web";
  const screenshots = isWeb ? WEB_SCREENSHOTS : MOBILE_SCREENSHOTS;
  const items = isWeb ? webItems : mobileItems;

  const images = items.map((_, i) => screenshots[i % screenshots.length].src);
  const labels = items.map((item) => item.label);

  const open = useCallback((i) => setLightboxIdx(i), []);
  const close = useCallback(() => setLightboxIdx(-1), []);
  const prev = useCallback(() => setLightboxIdx((i) => (i > 0 ? i - 1 : images.length - 1)), [images.length]);
  const next = useCallback(() => setLightboxIdx((i) => (i < images.length - 1 ? i + 1 : 0)), [images.length]);

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-brand-500">{t("gallery.badge")}</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-ink-900 sm:text-4xl">
            {t("gallery.title")}
          </h2>
          <p className="mt-4 text-base text-ink-500">{t("gallery.subtitle")}</p>
        </div>

        {/* Tab switcher */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex rounded-xl border border-gray-200 bg-gray-50 p-1 gap-1">
            <button
              onClick={() => { setTab("web"); setLightboxIdx(-1); }}
              className={`flex items-center gap-2 rounded-lg px-5 py-2 text-sm font-semibold transition-all ${
                isWeb
                  ? "bg-white text-brand-600 shadow-sm"
                  : "text-ink-500 hover:text-ink-700"
              }`}
            >
              <Monitor size={15} />
              {t("gallery.tabWeb")}
            </button>
            <button
              onClick={() => { setTab("mobile"); setLightboxIdx(-1); }}
              className={`flex items-center gap-2 rounded-lg px-5 py-2 text-sm font-semibold transition-all ${
                !isWeb
                  ? "bg-white text-brand-600 shadow-sm"
                  : "text-ink-500 hover:text-ink-700"
              }`}
            >
              <Smartphone size={15} />
              {t("gallery.tabMobile")}
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className={`mt-10 grid gap-5 ${isWeb ? "sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"}`}>
          {items.map((item, i) => {
            const ss = screenshots[i % screenshots.length];
            return (
              <button
                key={item.label}
                onClick={() => open(i)}
                className={`group relative overflow-hidden rounded-2xl bg-gray-100 shadow-md transition-shadow hover:shadow-lg cursor-pointer text-left ${
                  isWeb ? "aspect-[4/3]" : "aspect-[9/19.5]"
                }`}
              >
                <img
                  src={ss.src}
                  alt={item.label}
                  className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-3">
                  <p className="font-display text-xs font-bold text-white leading-tight">{item.label}</p>
                  <p className={`text-white/80 leading-tight ${isWeb ? "text-xs mt-0.5" : "text-[10px] mt-0.5 hidden sm:block"}`}>{item.desc}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Social links */}
        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="https://www.instagram.com/marbot.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-ink-700 shadow-sm hover:border-brand-200 hover:bg-brand-50 hover:text-brand-700"
          >
            <Instagram size={16} />
            {t("gallery.followInstagram")}
          </a>
          <a
            href="https://marbot.app/register"
            className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
          >
            <ExternalLink size={16} />
            {t("gallery.tryDashboard")}
          </a>
        </div>

        {/* Upload CTA */}
        <div className="mt-8 rounded-2xl border border-dashed border-brand-200 bg-brand-50/50 p-6 text-center">
          <p className="mt-1 text-sm font-medium text-ink-700">{t("gallery.uploadQuestion")}</p>
          <p className="mt-1 text-xs text-ink-400">
            {t("gallery.uploadDesc").split("WhatsApp")[0]}
            <a
              href="https://wa.me/6281234567890?text=Assalamu%27alaikum%2C+kami+mau+berbagi+dokumentasi+penggunaan+marbot.app"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-brand-600 hover:underline"
            >
              WhatsApp
            </a>
            {t("gallery.uploadDesc").split("WhatsApp")[1]}
          </p>
        </div>
      </div>

      {lightboxIdx >= 0 && (
        <Lightbox
          images={images}
          labels={labels}
          current={lightboxIdx}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </section>
  );
}
