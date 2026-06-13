import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu, X, Globe } from "lucide-react";

const LOGIN_URL = "https://login.marbot.app";
const REGISTER_URL = "https://marbot.app/register";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation("common");
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const bgClass = isHome
    ? scrolled
      ? "bg-brand-800/95 backdrop-blur-md shadow-lg"
      : "bg-transparent"
    : "bg-brand-800 shadow-sm";

  const navLinks = [
    { to: "/features", label: t("nav.features") },
    { to: "/about", label: t("nav.about") },
    { to: "/contact", label: t("nav.contact") },
  ];

  const toggleLang = () => {
    const next = i18n.language === "id" ? "en" : "id";
    i18n.changeLanguage(next);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bgClass}`}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2.5">
          <img
            src="/icon.png"
            alt="marbot.app"
            className="h-9 w-9 rounded-lg"
          />
          <div>
            <p className="font-display text-lg font-bold leading-tight text-white">
              marbot.app
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`rounded-lg px-3 py-2 text-sm font-medium text-white/90 transition-colors hover:text-white ${
                location.pathname === link.to ? "text-white" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/6285659289271?text=Assalamu'alaikum%2C%20saya%20tertarik%20dengan%20marbot.app"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg px-3 py-2 text-sm font-medium text-white/90 transition-colors hover:text-brand-300"
          >
            {t("nav.contactUs")}
          </a>
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Toggle language"
          >
            <Globe size={14} />
            {i18n.language === "id" ? "ID" : "EN"}
          </button>
          <a
            href={LOGIN_URL}
            className="rounded-lg px-3 py-2 text-sm font-medium text-white/90 transition-colors hover:text-white"
          >
            {t("nav.login")}
          </a>
          <a
            href={REGISTER_URL}
            className="rounded-lg border border-white/40 px-4 py-2 text-sm font-semibold text-white/90 transition-colors hover:bg-white/10 hover:text-white"
          >
            {t("nav.registerFree")}
          </a>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          open ? "max-h-[600px]" : "max-h-0"
        }`}
      >
        <nav className="border-t border-white/10 bg-brand-800 px-4 pb-4 pt-2">
          <button
            onClick={toggleLang}
            className="mb-3 flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1.5 text-xs font-semibold text-white"
          >
            <Globe size={14} />
            {i18n.language === "id" ? "Bahasa Indonesia" : "English"}
          </button>
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-white/90 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/6285659289271"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg px-3 py-2.5 text-sm font-medium text-white/90 transition-colors hover:text-brand-300"
          >
            {t("nav.contactUs")}
          </a>
          <div className="mt-3 flex flex-col gap-2">
            <a
              href={LOGIN_URL}
              className="rounded-lg px-4 py-2.5 text-center text-sm font-medium text-white/90 transition-colors hover:text-white"
            >
              {t("nav.login")}
            </a>
            <a
              href={REGISTER_URL}
              className="rounded-lg border border-white/40 px-4 py-2.5 text-center text-sm font-semibold text-white/90 transition-colors hover:bg-white/10"
            >
              {t("nav.registerFree")}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
