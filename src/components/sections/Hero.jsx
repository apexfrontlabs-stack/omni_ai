import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="top" className="relative isolate overflow-hidden">
      {/* Background image */}
      <img
        src="/images/card-bg.webp"
        alt=""
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      {/* Readability overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-oatmeal via-oatmeal/70 to-transparent rtl:bg-gradient-to-l" />

      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
        {/* LEFT: content */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-softMint px-4 py-1.5 text-sm font-medium text-deepSpruce">
            <span className="h-2 w-2 rounded-full bg-cyberMint" />
            {t("hero.badge")}
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-slateCharcoal sm:text-6xl lg:text-7xl">
            {t("hero.title")}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slateCharcoal/80">
            {t("hero.subtitle")}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/pricing"
              className="rounded-full bg-cyberMint px-8 py-4 font-bold text-slateCharcoal shadow-lg shadow-cyberMint/30 transition hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-deepSpruce focus-visible:ring-offset-2 focus-visible:ring-offset-oatmeal"
            >
              {t("hero.cta")}
            </Link>
            <Link
              to="/features"
              className="rounded-full border border-deepSpruce/30 bg-oatmeal/60 px-8 py-4 font-medium text-deepSpruce backdrop-blur transition hover:bg-oatmeal"
            >
              {t("hero.secondary")}
            </Link>
          </div>
        </div>

        {/* RIGHT: floating glass cards */}
        <div className="relative hidden h-[420px] lg:block">
          {/* Card 1: Time saved */}
          <div className="absolute end-4 top-4 z-20 w-72 rounded-3xl border border-white/50 bg-white/60 p-6 shadow-xl backdrop-blur-xl">
            <p className="text-sm text-slateCharcoal/70">{t("hero.cards.timeSaved")}</p>
            <p className="mt-2 font-display text-4xl font-bold text-deepSpruce">
              {t("hero.cards.hours")}
            </p>
            <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-deepSpruce/10">
              <div className="h-full w-3/4 rounded-full bg-cyberMint" />
            </div>
            <p className="mt-2 text-xs text-slateCharcoal/60">{t("hero.cards.hoursReturned")}</p>
          </div>

          {/* Card 2: Automation status */}
          <div className="absolute start-0 top-[175px] z-30 w-72 rounded-3xl border border-white/50 bg-white/70 p-5 shadow-xl backdrop-blur-xl">
            <div className="flex items-center justify-between gap-3">
              <p className="font-semibold text-slateCharcoal">{t("hero.cards.workflow")}</p>
              <span className="rounded-full bg-softMint px-3 py-1 text-xs font-semibold text-deepSpruce">
                {t("hero.cards.active")}
              </span>
            </div>
            <p className="mt-3 text-sm text-slateCharcoal/70">{t("hero.cards.invoice")}</p>
            <div className="mt-3 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cyberMint" />
              <p className="text-xs text-slateCharcoal/60">{t("hero.cards.running")}</p>
            </div>
          </div>

          {/* Card 3: Tasks completed */}
          <div className="absolute bottom-4 end-0 z-40 w-72 rounded-3xl border border-white/50 bg-white/70 p-5 shadow-xl backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <p className="font-medium text-slateCharcoal">{t("hero.cards.tasksCompleted")}</p>
              <span className="rounded-full bg-amber px-2.5 py-1 text-xs font-bold text-slateCharcoal">
                {t("hero.cards.today")}
              </span>
            </div>
            <p className="mt-2 font-display text-3xl font-bold text-deepSpruce">
              {t("hero.cards.tasks")}
            </p>
            <p className="mt-2 text-sm text-slateCharcoal/70">{t("hero.cards.routineWork")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}