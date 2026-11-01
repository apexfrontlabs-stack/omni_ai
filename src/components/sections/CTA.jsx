import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import FloatingWidget from "../cta/FloatingWidget";

export default function CTA() {
  const { t } = useTranslation();

  return (
    <section id="cta" className="bg-oatmeal px-6 py-16 lg:py-24">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-cyberMint px-8 py-14 sm:px-12 lg:px-16">
        {/* Soft shapes */}
        <span className="absolute -end-24 -top-24 h-72 w-72 rounded-full bg-white/30 blur-2xl" aria-hidden="true" />
        <span className="absolute -bottom-24 start-1/3 h-64 w-64 rounded-full bg-softMint/60 blur-2xl" aria-hidden="true" />

        <div className="relative grid items-center gap-14 lg:grid-cols-2">
          {/* Text */}
          <div>
            <h2 className="font-display text-4xl font-bold leading-[1.1] text-slateCharcoal md:text-5xl">
              {t("cta.title")}
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-slateCharcoal/80">
              {t("cta.text")}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/pricing"
                className="rounded-full bg-slateCharcoal px-8 py-4 font-bold text-oatmeal transition hover:bg-deepSpruce focus:outline-none focus-visible:ring-2 focus-visible:ring-slateCharcoal focus-visible:ring-offset-2 focus-visible:ring-offset-cyberMint"
              >
                {t("cta.primary")}
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-slateCharcoal/30 px-8 py-4 font-medium text-slateCharcoal transition hover:bg-white/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-slateCharcoal"
              >
                {t("cta.secondary")}
              </Link>
            </div>

            <p className="mt-5 text-sm text-slateCharcoal/70">{t("cta.note")}</p>
          </div>

          {/* Floating widget */}
          <div className="pb-6 lg:ps-8">
            <FloatingWidget />
          </div>
        </div>
      </div>
    </section>
  );
}