import { useTranslation } from "react-i18next";
import PricingCard from "../pricing/PricingCard";

// Sirf wo cheezein jo tarjuma nahi hoti
const plans = [
  { id: "starter", price: "$0", to: "/checkout?plan=starter" },
  { id: "pro", price: "$49", to: "/checkout?plan=pro", featured: true },
  { id: "enterprise", price: "$99", to: "/checkout?plan=enterprise" },
];

export default function Pricing() {
  const { t } = useTranslation();

  return (
    <section id="pricing" className="bg-softMint py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold leading-tight text-slateCharcoal md:text-4xl">
            {t("pricing.title")}
          </h2>
          <p className="mt-4 text-slateCharcoal/75">{t("pricing.subtitle")}</p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-3 lg:items-stretch">
          {plans.map((p) => (
            <PricingCard
              key={p.id}
              name={t(`pricing.plans.${p.id}.name`)}
              description={t(`pricing.plans.${p.id}.description`)}
              features={t(`pricing.plans.${p.id}.features`, { returnObjects: true })}
              cta={t(`pricing.plans.${p.id}.cta`)}
              period={t("pricing.perMonth")}
              price={p.price}
              to={p.to}
              featured={p.featured}
            />
          ))}
        </div>
      </div>
    </section>
  );
}