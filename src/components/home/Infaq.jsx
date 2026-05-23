import { useTranslation } from "react-i18next";
import { Server, Code2, HeartHandshake, Copy, Check } from "lucide-react";
import { useState } from "react";

const USE_ICONS = [Server, Code2, HeartHandshake];

const ACCOUNTS = [
  {
    bank: "Bank Syariah Indonesia (BSI)",
    number: "7123456789",
    name: "Yayasan Digital Marbot",
  },
  {
    bank: "BCA",
    number: "1234567890",
    name: "Yayasan Digital Marbot",
  },
];

function CopyButton({ text }) {
  const { t } = useTranslation("home");
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={copy}
      className="ml-2 rounded-lg p-1 text-brand-500 hover:bg-brand-50"
      title={t("infaq.copyAccountNumber")}
    >
      {copied ? <Check size={14} className="text-green-600" /> : <Copy size={14} />}
    </button>
  );
}

export default function Infaq() {
  const { t } = useTranslation("home");
  const uses = t("infaq.uses", { returnObjects: true });

  return (
    <section className="bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-sm italic text-brand-600">
            {t("infaq.arabicQuote")}
          </p>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-ink-900 sm:text-4xl">
            {t("infaq.title")}
          </h2>
          <p
            className="mt-4 text-base leading-relaxed text-ink-500"
            dangerouslySetInnerHTML={{ __html: t("infaq.subtitle") }}
          />
        </div>

        {/* Use cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {uses.map((u, i) => {
            const Icon = USE_ICONS[i];
            return (
              <div
                key={u.title}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50">
                  <Icon size={22} className="text-brand-600" />
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-ink-900">{u.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{u.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Bank accounts */}
        <div className="mt-10 rounded-2xl border border-brand-100 bg-white p-8 shadow-sm">
          <h3 className="mb-6 text-center font-display text-lg font-bold text-brand-800">
            {t("infaq.transferTitle")}
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {ACCOUNTS.map((acc) => (
              <div
                key={acc.bank}
                className="rounded-xl border border-brand-100 bg-brand-50/50 p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                  {acc.bank}
                </p>
                <div className="mt-2 flex items-center">
                  <p className="font-mono text-xl font-bold text-ink-900">{acc.number}</p>
                  <CopyButton text={acc.number} />
                </div>
                <p className="mt-1 text-sm text-ink-500">
                  {t("infaq.aN")} {acc.name}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-ink-400">
            {t("infaq.confirmVia")}{" "}
            <a
              href="https://wa.me/6281234567890?text=Assalamu%27alaikum%2C+saya+sudah+infaq+ke+program+marbot.app"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-brand-600 hover:underline"
            >
              {t("infaq.whatsapp")}
            </a>{" "}
            · {t("infaq.closing")}
          </p>
        </div>
      </div>
    </section>
  );
}
