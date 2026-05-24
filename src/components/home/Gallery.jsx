import { useTranslation } from "react-i18next";
import { Instagram, ExternalLink } from "lucide-react";

const SCREENSHOTS = [
  { src: "/app/web-ss-1.png" },
  { src: "/app/web-ss-2.png" },
  { src: "/app/web-ss-3.png" },
  { src: "/app/web-ss-4.png" },
  { src: "/app/web-ss-5-menu.png" },
];

export default function Gallery() {
  const { t } = useTranslation("home");
  const items = t("gallery.items", { returnObjects: true });

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

        {/* Grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => {
            const ss = SCREENSHOTS[i % SCREENSHOTS.length];
            return (
              <div
                key={item.label}
                className="group relative overflow-hidden rounded-2xl bg-gray-100 aspect-[4/3] shadow-md transition-shadow hover:shadow-lg"
              >
                {/* Screenshot image */}
                <img
                  src={ss.src}
                  alt={item.label}
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                />

                {/* Label overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4">
                  <p className="font-display text-sm font-bold text-white">{item.label}</p>
                  <p className="text-xs text-white/80">{item.desc}</p>
                </div>
              </div>
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
    </section>
  );
}
