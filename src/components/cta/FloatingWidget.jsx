import { useTranslation } from "react-i18next";

const bars = [38, 52, 46, 68, 60, 84, 96];

export default function FloatingWidget() {
  const { t } = useTranslation();

  return (
    <div className="relative mx-auto w-full max-w-sm">
      {/* Main card */}
      <div className="rounded-3xl bg-oatmeal p-6 shadow-2xl">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-slateCharcoal/70">{t("widget.salesAnalysis")}</p>
          <span className="flex items-center gap-2 text-xs text-slateCharcoal/60">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyberMint" />
            {t("widget.live")}
          </span>
        </div>

        <p className="mt-3 font-display text-4xl font-bold text-deepSpruce">$480,000</p>
        <p className="text-xs text-slateCharcoal/55">{t("widget.revenue")}</p>

        <div className="mt-5 flex h-28 items-end gap-2">
          {bars.map((h, i) => (
            <div
              key={i}
              style={{ height: `${h}%` }}
              className={`flex-1 rounded-t-md ${
                i === bars.length - 1 ? "bg-deepSpruce" : "bg-deepSpruce/15"
              }`}
              role="img"
              aria-label={`${t("widget.week", { n: i + 1 })}: ${h}`}
            />
          ))}
        </div>
      </div>

      {/* Floating chip: top */}
      <div className="absolute -end-3 -top-4 rounded-2xl bg-deepSpruce px-4 py-3 text-oatmeal shadow-xl sm:-end-6">
        <p className="font-display text-xl font-bold text-cyberMint">+42%</p>
        <p className="text-xs text-oatmeal/70">{t("widget.vsLast")}</p>
      </div>

      {/* Floating chip: bottom */}
      <div className="absolute -bottom-5 -start-3 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl sm:-start-6">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber text-slateCharcoal" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12l5 5L20 7" />
          </svg>
        </span>
        <div>
          <p className="text-sm font-bold text-slateCharcoal">{t("widget.reportReady")}</p>
          <p className="text-xs text-slateCharcoal/60">{t("widget.sentToTeam")}</p>
        </div>
      </div>
    </div>
  );
}