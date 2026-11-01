import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import StepCard from "../features/StepCard";

const svg = (children) => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

// Icons index se steps ke saath jurte hain
const icons = [
  svg(
    <>
      <path d="M10 13a5 5 0 007 0l3-3a5 5 0 00-7-7l-1 1" />
      <path d="M14 11a5 5 0 00-7 0l-3 3a5 5 0 007 7l1-1" />
    </>
  ),
  svg(
    <>
      <path d="M4 7h10M18 7h2M4 17h2M10 17h10" />
      <circle cx="16" cy="7" r="2" />
      <circle cx="8" cy="17" r="2" />
    </>
  ),
  svg(
    <>
      <path d="M5 15c-1 1-2 4-2 6 2 0 5-1 6-2" />
      <path d="M12 15l-3-3a15 15 0 015-8 11 11 0 016-2 11 11 0 01-2 6 15 15 0 01-8 5z" />
      <circle cx="15" cy="9" r="1" />
    </>
  ),
];

export default function HowItWorks() {
  const { t } = useTranslation();
  const steps = t("howItWorks.steps", { returnObjects: true });

  return (
    <section id="how-it-works" className="bg-oatmeal py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold leading-tight text-slateCharcoal md:text-4xl">
            {t("howItWorks.title")}
          </h2>
          <p className="mt-4 text-slateCharcoal/75">{t("howItWorks.subtitle")}</p>
        </div>

        {/* Steps */}
        <div className="relative mt-14">
          {/* Connecting line (desktop only) */}
          <div
            className="absolute start-[16%] end-[16%] top-[3.25rem] hidden border-t-2 border-dashed border-deepSpruce/20 lg:block"
            aria-hidden="true"
          />

          <div className="relative grid gap-6 lg:grid-cols-3 lg:gap-8">
            {steps.map((s, i) => (
              <StepCard
                key={s.title}
                number={String(i + 1)}
                icon={icons[i]}
                title={s.title}
                text={s.text}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/pricing"
            className="inline-flex rounded-full bg-cyberMint px-8 py-4 font-bold text-slateCharcoal transition hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-deepSpruce focus-visible:ring-offset-2 focus-visible:ring-offset-oatmeal"
          >
            {t("howItWorks.cta")}
          </Link>
        </div>
      </div>
    </section>
  );
}