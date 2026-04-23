import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { MapPin, ChevronDown } from "lucide-react";

const PRAYER_KEYS = ["Fajr", "Sunrise", "Dhuhr", "Asr", "Maghrib", "Isha"];

const CITIES = [
  "Jakarta", "Bandung", "Surabaya", "Medan", "Yogyakarta",
  "Semarang", "Makassar", "Palembang", "Depok", "Bogor",
  "Tangerang", "Bekasi", "Malang", "Denpasar",
];

function parseMinutes(timeStr) {
  const [h, m] = timeStr.split(":").map(Number);
  return h * 60 + m;
}

export default function PrayerTimes() {
  const { t } = useTranslation("home");
  const [city, setCity] = useState("Jakarta");
  const [showCities, setShowCities] = useState(false);
  const [times, setTimes] = useState(null);
  const [hijri, setHijri] = useState(null);
  const [loading, setLoading] = useState(true);
  const [nextKey, setNextKey] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.aladhan.com/v1/timingsByCity?city=${city}&country=Indonesia&method=20`)
      .then((r) => r.json())
      .then((data) => {
        if (data.code === 200) {
          setTimes(data.data.timings);
          setHijri(data.data.date.hijri);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [city]);

  useEffect(() => {
    if (!times) return;
    const nowMins = new Date().getHours() * 60 + new Date().getMinutes();
    const upcoming = PRAYER_KEYS.find((k) => parseMinutes(times[k]) > nowMins);
    setNextKey(upcoming ?? PRAYER_KEYS[0]);
  }, [times]);

  const months = t("prayerTimes.hijriMonths", { returnObjects: true });
  const hijriLabel = hijri
    ? `${hijri.day} ${months[parseInt(hijri.month.number, 10) - 1]} ${hijri.year} H`
    : null;

  return (
    <section className="bg-brand-800 py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header row */}
        <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-sm italic text-brand-300">
              {t("prayerTimes.arabicQuote")}
            </p>
            <h2 className="mt-1 font-display text-2xl font-bold text-white">
              {t("prayerTimes.title")}
            </h2>
            {hijriLabel && (
              <p className="mt-0.5 text-xs text-white/40">{hijriLabel}</p>
            )}
          </div>

          {/* City picker */}
          <div className="relative">
            <button
              onClick={() => setShowCities((v) => !v)}
              className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 hover:bg-white/10"
            >
              <MapPin size={14} className="text-brand-400" />
              {city}
              <ChevronDown size={14} />
            </button>
            {showCities && (
              <div className="absolute right-0 top-full z-10 mt-1 max-h-48 w-44 overflow-y-auto rounded-xl border border-white/10 bg-brand-900 shadow-xl">
                {CITIES.map((c) => (
                  <button
                    key={c}
                    onClick={() => { setCity(c); setShowCities(false); }}
                    className={`block w-full px-4 py-2 text-left text-sm hover:bg-white/10 ${
                      c === city ? "font-semibold text-brand-400" : "text-white/70"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Prayer cards */}
        {loading ? (
          <div className="flex justify-center py-8">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-brand-400 border-t-transparent" />
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
            {PRAYER_KEYS.map((key) => {
              const isNext = key === nextKey;
              return (
                <div
                  key={key}
                  className={`rounded-2xl p-4 text-center ${
                    isNext
                      ? "bg-brand-500 ring-2 ring-brand-400/60 shadow-lg shadow-brand-900/50"
                      : "bg-white/5"
                  }`}
                >
                  <p className={`text-xs font-medium ${isNext ? "text-brand-100" : "text-white/50"}`}>
                    {t(`prayerTimes.prayers.${key}`)}
                  </p>
                  <p className={`mt-1.5 font-display text-lg font-bold tabular-nums ${isNext ? "text-white" : "text-white/80"}`}>
                    {times?.[key] ?? "--:--"}
                  </p>
                  {isNext && (
                    <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-brand-200">
                      {t("prayerTimes.next")}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
