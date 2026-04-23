import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-100">
      <button
        className="flex w-full items-center justify-between py-5 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="pr-4 font-medium text-ink-900">{q}</span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-ink-400 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="pb-5 text-sm leading-relaxed text-ink-500">{a}</div>
      )}
    </div>
  );
}

export default function FAQ() {
  const { t } = useTranslation(["faq", "common"]);

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-medium text-brand-500">FAQ</p>
          <h1 className="mt-2 font-display text-3xl font-extrabold text-ink-900 sm:text-4xl">
            {t("faq:title")}
          </h1>
          <p className="mt-4 text-base text-ink-500">{t("faq:subtitle")}</p>
        </div>
        <div className="mt-12">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((idx) => (
            <FAQItem
              key={idx}
              q={t(`faq:list.${idx}.q`)}
              a={t(`faq:list.${idx}.a`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
