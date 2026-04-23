import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation("common");

  const navLinks = [
    { to: "/", label: t("footer.home") },
    { to: "/features", label: t("nav.features") },
    { to: "/about", label: t("nav.about") },
    { to: "/contact", label: t("nav.contact") },
  ];

  const productLinks = [
    { to: "/docs", label: t("nav.docs") },
    { to: "/blog", label: t("nav.blog") },
    { to: "/faq", label: t("nav.faq") },
  ];

  const legalLinks = [
    { to: "/privacy", label: t("footer.privacyPolicy") },
    { to: "/terms", label: t("footer.termsConditions") },
  ];

  return (
    <footer className="bg-brand-800 text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <img src="/icon.png" alt="marbot.app" className="h-9 w-9 rounded-lg" />
              <div>
                <p className="font-display text-lg font-bold leading-tight text-white">
                  marbot.app
                </p>
                <p className="text-[10px] leading-tight text-white/50">
                  {t("footer.tagline")}
                </p>
              </div>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              {t("footer.description")}
            </p>
            <p className="mt-4 text-sm italic text-brand-300">
              إِنَّمَا يَعْمُرُ مَسَاجِدَ اللَّهِ
            </p>
            <p className="text-xs text-white/40">QS. At-Taubah: 18</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">
              {t("footer.navigation")}
            </h3>
            <ul className="mt-3 space-y-2">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">
              {t("footer.product")}
            </h3>
            <ul className="mt-3 space-y-2">
              {productLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">
              {t("footer.legal")}
            </h3>
            <ul className="mt-3 space-y-2">
              {legalLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} marbot.app — {t("footer.copyright")}
          </p>
          <p className="mt-1 text-xs text-white/30">{t("footer.madeFor")}</p>
        </div>
      </div>
    </footer>
  );
}
