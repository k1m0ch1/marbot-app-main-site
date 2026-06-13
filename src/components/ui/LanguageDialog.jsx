import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

// Separate from i18nextLng — that key is written by i18next auto-detector on every load
// even when the user has never explicitly picked a language.
const CHOSEN_KEY = "marbot_lang_chosen";

export default function LanguageDialog() {
  const { i18n } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(CHOSEN_KEY)) {
      setVisible(true);
    }
  }, []);

  function choose(lang) {
    localStorage.setItem(CHOSEN_KEY, "1");
    i18n.changeLanguage(lang);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-end justify-center sm:items-center p-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      <div className="relative w-full max-w-sm rounded-2xl bg-white shadow-2xl overflow-hidden animate-slide-up">
        <div className="bg-brand-700 px-6 py-5 text-center">
          <img src="/icon.png" alt="marbot" className="mx-auto h-12 w-12 rounded-xl mb-3" />
          <p className="text-white font-display font-bold text-lg">marbot.app</p>
          <p className="text-brand-200 text-sm mt-0.5">Pilih bahasa / Choose language</p>
        </div>
        <div className="p-5 grid grid-cols-2 gap-3">
          <button
            onClick={() => choose("id")}
            className="flex flex-col items-center gap-2 rounded-xl border-2 border-brand-100 bg-brand-50 px-4 py-4 transition-all hover:border-brand-500 hover:bg-brand-100 active:scale-95"
          >
            <span className="text-3xl">🇮🇩</span>
            <span className="font-semibold text-ink-900 text-sm">Bahasa Indonesia</span>
          </button>
          <button
            onClick={() => choose("en")}
            className="flex flex-col items-center gap-2 rounded-xl border-2 border-gray-100 bg-gray-50 px-4 py-4 transition-all hover:border-brand-500 hover:bg-brand-50 active:scale-95"
          >
            <span className="text-3xl">🇬🇧</span>
            <span className="font-semibold text-ink-900 text-sm">English</span>
          </button>
        </div>
      </div>
    </div>
  );
}
