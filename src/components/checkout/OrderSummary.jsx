import { useTranslation } from "react-i18next";

export default function OrderSummary({ plan, planKey }) {
  const { t } = useTranslation();
  const planName = t(`pricing.plans.${planKey}.name`);
  const features = t(`pricing.plans.${planKey}.features`, { returnObjects: true });

  return (
    <aside className="rounded-3xl bg-deepSpruce p-8 text-oatmeal shadow-xl">
      <p className="text-sm text-oatmeal/60">{t("order.title")}</p>
      <h2 className="mt-1 font-display text-2xl font-bold">
        {t("order.planTitle", { plan: planName })}
      </h2>

      <ul className="mt-6 space-y-3">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-3 text-sm text-oatmeal/90">
            <span
              className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyberMint text-slateCharcoal"
              aria-hidden="true"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12l5 5L20 7" />
              </svg>
            </span>
            {f}
          </li>
        ))}
      </ul>

      <dl className="mt-8 space-y-3 border-t border-oatmeal/15 pt-6 text-sm">
        <div className="flex justify-between">
          <dt className="text-oatmeal/70">{t("order.monthly", { plan: planName })}</dt>
          <dd dir="ltr">${plan.price}.00</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-oatmeal/70">{t("order.tax")}</dt>
          <dd dir="ltr">$0.00</dd>
        </div>
        <div className="flex justify-between border-t border-oatmeal/15 pt-4 font-display text-lg font-bold">
          <dt>{t("order.total")}</dt>
          <dd dir="ltr" className="text-cyberMint">${plan.price}.00</dd>
        </div>
      </dl>

      <p className="mt-6 text-xs text-oatmeal/60">{t("order.billed")}</p>
    </aside>
  );
}