import { useTranslation } from "react-i18next";

// Sirf numbers, mahine ke naam JSON se aate hain
const data = [
  { actual: 48 },
  { actual: 56 },
  { actual: 52 },
  { actual: 66 },
  { actual: 74 },
  { forecast: 82 },
  { forecast: 91 },
];

export default function PredictiveChartCard() {
  const { t } = useTranslation();
  const months = t("predictiveCard.months", { returnObjects: true });

  return (
    <div className="rounded-3xl bg-white/60 p-6 shadow-xl ring-1 ring-deepSpruce/10">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-slateCharcoal/60">{t("predictiveCard.forecastFor")}</p>
          <p className="mt-1 font-display text-4xl font-bold text-deepSpruce">$91.4k</p>
        </div>
        <span className="rounded-full bg-amber px-3 py-1 text-sm font-bold text-slateCharcoal">
          {t("predictiveCard.predicted")}
        </span>
      </div>

      {/* Bars */}
      <div className="mt-6 flex h-44 items-end gap-3">
        {data.map((b, i) => {
          const value = b.actual ?? b.forecast;
          const isForecast = b.forecast !== undefined;
          return (
            <div key={i} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
              <div
                style={{ height: `${value}%` }}
                className={`w-full rounded-t-lg ${
                  isForecast
                    ? "border-2 border-dashed border-cyberMint bg-cyberMint/25"
                    : "bg-deepSpruce"
                }`}
                role="img"
                aria-label={`${months[i]}: ${value}${
                  isForecast ? ` (${t("predictiveCard.forecast")})` : ""
                }`}
              />
              <span className="text-xs text-slateCharcoal/60">{months[i]}</span>
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="mt-5 flex gap-6 border-t border-deepSpruce/10 pt-4 text-sm text-slateCharcoal/70">
        <span className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-sm bg-deepSpruce" /> {t("predictiveCard.actual")}
        </span>
        <span className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-sm border-2 border-dashed border-cyberMint bg-cyberMint/25" />{" "}
          {t("predictiveCard.forecast")}
        </span>
      </div>
    </div>
  );
}