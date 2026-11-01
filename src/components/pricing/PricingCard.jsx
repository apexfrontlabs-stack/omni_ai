import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Check({ featured }) {
  return (
    <span
      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
        featured ? "bg-cyberMint text-slateCharcoal" : "bg-deepSpruce text-cyberMint"
      }`}
      aria-hidden="true"
    >
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12l5 5L20 7" />
      </svg>
    </span>
  );
}

export default function PricingCard({
  name,
  price,
  period,
  description,
  features,
  cta,
  to = "/checkout",
  featured = false,
}) {
  const { t } = useTranslation();

  return (
    <article
      className={`relative flex cursor-pointer flex-col rounded-3xl p-8 transition duration-300 hover:-translate-y-1 hover:shadow-2xl ${
        featured
          ? "bg-deepSpruce text-oatmeal shadow-2xl lg:-my-4 lg:py-12"
          : "bg-oatmeal text-slateCharcoal ring-1 ring-deepSpruce/10"
      }`}
    >
      {featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-amber px-4 py-1 text-xs font-bold text-slateCharcoal">
          {t("pricing.popular")}
        </span>
      )}

      <h3 className="font-display text-xl font-bold">{name}</h3>
      <p className={`mt-2 text-sm ${featured ? "text-oatmeal/70" : "text-slateCharcoal/65"}`}>
        {description}
      </p>

      <p className="mt-6 flex items-end gap-1">
        <span className="font-display text-5xl font-bold">{price}</span>
        <span className={`pb-1.5 text-sm ${featured ? "text-oatmeal/60" : "text-slateCharcoal/55"}`}>
          {period}
        </span>
      </p>

      <ul className="mt-8 flex-1 space-y-3.5">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-3 text-sm">
            <Check featured={featured} />
            <span className={featured ? "text-oatmeal/90" : "text-slateCharcoal/85"}>{f}</span>
          </li>
        ))}
      </ul>

      <Link
        to={to}
        className={`mt-10 inline-flex items-center justify-center rounded-full px-6 py-3.5 font-bold transition after:absolute after:inset-0 after:rounded-3xl after:content-[''] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
          featured
            ? "bg-cyberMint text-slateCharcoal hover:brightness-95 focus-visible:ring-cyberMint focus-visible:ring-offset-deepSpruce"
            : "border border-deepSpruce/25 text-deepSpruce hover:bg-deepSpruce hover:text-oatmeal focus-visible:ring-deepSpruce focus-visible:ring-offset-oatmeal"
        }`}
      >
        {cta}
      </Link>
    </article>
  );
}