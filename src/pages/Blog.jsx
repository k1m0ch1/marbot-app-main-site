import { Calendar } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Blog() {
  const { t, i18n } = useTranslation(["blog", "common"]);

  const posts = [
    {
      slug: "cara-menyusun-laporan-kas-masjid",
      titleKey: "posts.0.title",
      excerptKey: "posts.0.excerpt",
      categoryKey: "posts.0.category",
      date: "2026-04-15",
    },
    {
      slug: "psak-109-untuk-masjid",
      titleKey: "posts.1.title",
      excerptKey: "posts.1.excerpt",
      categoryKey: "posts.1.category",
      date: "2026-04-08",
    },
    {
      slug: "tips-mengelola-ziswaf",
      titleKey: "posts.2.title",
      excerptKey: "posts.2.excerpt",
      categoryKey: "posts.2.category",
      date: "2026-03-28",
    },
    {
      slug: "digitalisasi-masjid-indonesia",
      titleKey: "posts.3.title",
      excerptKey: "posts.3.excerpt",
      categoryKey: "posts.3.category",
      date: "2026-03-15",
    },
    {
      slug: "manajemen-qurban-digital",
      titleKey: "posts.4.title",
      excerptKey: "posts.4.excerpt",
      categoryKey: "posts.4.category",
      date: "2026-03-01",
    },
    {
      slug: "peran-marbot-masjid",
      titleKey: "posts.5.title",
      excerptKey: "posts.5.excerpt",
      categoryKey: "posts.5.category",
      date: "2026-02-20",
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-brand-500">{t("blog:badge")}</p>
          <h1 className="mt-2 font-display text-3xl font-extrabold text-ink-900 sm:text-4xl">
            {t("blog:title")}
          </h1>
          <p className="mt-4 text-base text-ink-500">{t("blog:subtitle")}</p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, idx) => (
            <article
              key={post.slug}
              className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-brand-100 hover:shadow-md"
            >
              <div className="flex items-center gap-2 text-xs text-ink-400">
                <span className="rounded-full bg-brand-50 px-2.5 py-0.5 font-medium text-brand-600">
                  {t(`blog:${post.categoryKey}`)}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={12} />
                  {new Date(post.date).toLocaleDateString(
                    i18n.language === "id" ? "id-ID" : "en-US",
                    { day: "numeric", month: "long", year: "numeric" }
                  )}
                </span>
              </div>
              <h3 className="mt-3 font-display text-lg font-bold text-ink-900 transition-colors group-hover:text-brand-600">
                {t(`blog:${post.titleKey}`)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">
                {t(`blog:${post.excerptKey}`)}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-ink-400">{t("blog:comingSoon")}</p>
        </div>
      </div>
    </section>
  );
}
