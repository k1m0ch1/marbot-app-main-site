import { useTranslation } from "react-i18next";
import { Camera, Instagram, ExternalLink } from "lucide-react";

const ITEM_META = [
  { emoji: "📊", color: "from-brand-700 to-brand-900" },
  { emoji: "👥", color: "from-emerald-700 to-emerald-900" },
  { emoji: "📄", color: "from-teal-700 to-teal-900" },
  { emoji: "📢", color: "from-green-700 to-green-900" },
  { emoji: "📅", color: "from-brand-600 to-brand-800" },
  { emoji: "🔐", color: "from-emerald-600 to-emerald-800" },
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
            const meta = ITEM_META[i];
            return (
              <div
                key={item.label}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${meta.color} aspect-[4/3] shadow-md`}
              >
                {/* Geometric pattern overlay */}
                <div className="absolute inset-0 opacity-5">
                  <svg width="100%" height="100%" viewBox="0 0 60 60">
                    <defs>
                      <pattern id={`gp-${i}`} x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                        <path d="M15 0 L30 15 L15 30 L0 15 Z" stroke="white" strokeWidth="0.5" fill="none" />
                        <circle cx="15" cy="15" r="5" stroke="white" strokeWidth="0.5" fill="none" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#gp-${i})`} />
                  </svg>
                </div>

                {/* Browser chrome mock */}
                <div className="absolute inset-4 rounded-xl bg-white/10 backdrop-blur-[1px]">
                  <div className="flex h-6 items-center gap-1.5 border-b border-white/10 px-3">
                    <div className="h-2 w-2 rounded-full bg-white/30" />
                    <div className="h-2 w-2 rounded-full bg-white/30" />
                    <div className="h-2 w-2 rounded-full bg-white/30" />
                  </div>
                  <div className="flex h-[calc(100%-24px)] items-center justify-center">
                    <span className="text-5xl">{meta.emoji}</span>
                  </div>
                </div>

                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="font-display text-sm font-bold text-white">{item.label}</p>
                  <p className="text-xs text-white/70">{item.desc}</p>
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
            href="https://login.marbot.app"
            className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
          >
            <ExternalLink size={16} />
            {t("gallery.tryDashboard")}
          </a>
        </div>

        {/* Upload CTA */}
        <div className="mt-8 rounded-2xl border border-dashed border-brand-200 bg-brand-50/50 p-6 text-center">
          <Camera size={28} className="mx-auto text-brand-400" />
          <p className="mt-3 text-sm font-medium text-ink-700">{t("gallery.uploadQuestion")}</p>
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
