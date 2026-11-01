import { useState } from "react";
import { useTranslation } from "react-i18next";

const industries = [
  { id: "retail", bars: [40, 55, 48, 70, 62, 85, 78] },
  { id: "finance", bars: [30, 45, 52, 48, 66, 72, 90] },
  { id: "healthcare", bars: [60, 52, 68, 58, 74, 70, 88] },
];

export default function Industries() {
  const { t } = useTranslation();
  const [active, setActive] = useState("retail");

  const current = industries.find((i) => i.id === active);
  const base = `industries.items.${active}.dashboard`;
  const kpis = t(`${base}.kpis`, { returnObjects: true });
  const feed = t(`${base}.feed`, { returnObjects: true });

  return (
    <section id="industries" className="bg-softMint py-14 lg:py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[1fr_1.2fr] lg:gap-14">
        {/* LEFT: heading + accordion */}
        <div>
          <h2 className="font-display text-3xl font-bold leading-tight text-slateCharcoal md:text-4xl">
            {t("industries.title")}
          </h2>
          <p className="mt-4 max-w-md text-slateCharcoal/75">{t("industries.subtitle")}</p>

          <ul className="mt-7 divide-y divide-deepSpruce/15 border-y border-deepSpruce/15">
            {industries.map((i) => {
              const isOpen = i.id === active;
              return (
                <li key={i.id}>
                  <button
                    type="button"
                    onClick={() => setActive(i.id)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between py-4 text-start focus:outline-none focus-visible:ring-2 focus-visible:ring-deepSpruce"
                  >
                    <span
                      className={`font-display text-xl font-bold transition-colors ${
                        isOpen ? "text-deepSpruce" : "text-slateCharcoal/50"
                      }`}
                    >
                      {t(`industries.items.${i.id}.name`)}
                    </span>
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-full text-lg font-bold transition ${
                        isOpen
                          ? "rotate-45 bg-cyberMint text-slateCharcoal"
                          : "bg-oatmeal text-deepSpruce"
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]"
                    }`}
                  >
                    <p className="overflow-hidden text-slateCharcoal/75">
                      {t(`industries.items.${i.id}.text`)}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* RIGHT: dashboard mockup */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl bg-deepSpruce shadow-2xl">
            {/* Window bar */}
            <div className="flex items-center gap-2 border-b border-oatmeal/10 px-5 py-3">
              <span className="h-3 w-3 rounded-full bg-oatmeal/20" />
              <span className="h-3 w-3 rounded-full bg-oatmeal/20" />
              <span className="h-3 w-3 rounded-full bg-oatmeal/20" />
              <span dir="ltr" className="ms-3 text-sm text-oatmeal/60">
                omniai.app / {current.id}
              </span>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-xl font-bold text-oatmeal">
                  {t(`${base}.title`)}
                </h3>
                <span className="flex items-center gap-2 text-sm text-oatmeal/70">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-cyberMint" />
                  {t("industries.live")}
                </span>
              </div>

              {/* KPIs */}
              <dl className="mt-5 grid grid-cols-3 gap-3">
                {kpis.map((k) => (
                  <div key={k.label} className="rounded-2xl bg-oatmeal/10 p-4">
                    <dd className="font-display text-2xl font-bold text-cyberMint">{k.value}</dd>
                    <dt className="mt-1 text-xs text-oatmeal/60">{k.label}</dt>
                  </div>
                ))}
              </dl>

              {/* Bar chart */}
              <div className="mt-5 flex h-32 items-end gap-2 rounded-2xl bg-oatmeal/5 p-4">
                {current.bars.map((h, idx) => (
                  <div
                    key={`${active}-${idx}`}
                    style={{ height: `${h}%` }}
                    className={`flex-1 rounded-t-md transition-all duration-500 ${
                      idx === current.bars.length - 1 ? "bg-cyberMint" : "bg-oatmeal/25"
                    }`}
                  />
                ))}
              </div>

              {/* Activity feed */}
              <ul className="mt-5 space-y-2">
                {feed.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-3 rounded-xl bg-oatmeal/10 px-4 py-2.5 text-sm text-oatmeal"
                  >
                    <span className="h-2 w-2 shrink-0 rounded-full bg-cyberMint" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Amber badge */}
          <span className="absolute -end-2 -top-3 rounded-full bg-amber px-3 py-1.5 text-sm font-bold text-slateCharcoal shadow-md">
            {t("industries.liveDemo")}
          </span>
        </div>
      </div>
    </section>
  );
}