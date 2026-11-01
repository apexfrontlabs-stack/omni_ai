import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function FeatureRow({ icon, title, text, children }) {
  const { t } = useTranslation();

  return (
    <div className="grid items-center gap-8 rounded-[2rem] bg-cyberMint/10 p-6 ring-1 ring-cyberMint/25 sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12 lg:p-10">
      {/* Text */}
      <div>
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-cyberMint/40 text-deepSpruce">
          {icon}
        </span>
        <h3 className="mt-6 font-display text-2xl font-bold leading-tight text-slateCharcoal md:text-3xl">
          {title}
        </h3>
        <p className="mt-3 max-w-md leading-relaxed text-slateCharcoal/70">{text}</p>
        <Link
          to="/contact"
          className="mt-6 inline-flex rounded-full bg-white px-6 py-2.5 text-sm font-medium text-slateCharcoal shadow-sm transition hover:bg-cyberMint focus:outline-none focus-visible:ring-2 focus-visible:ring-deepSpruce"
        >
          {t("features.learnMore")}
        </Link>
      </div>

      {/* Visual */}
      <div>{children}</div>
    </div>
  );
}