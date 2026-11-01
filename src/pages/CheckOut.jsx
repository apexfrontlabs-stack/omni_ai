import { useState } from "react";
import { Link, Navigate, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import BackToHome from "../components/common/BackToHome";
import OrderSummary from "../components/checkout/OrderSummary";
import PaymentForm from "../components/checkout/PaymentForm";
import { paidPlans } from "../../src/data/Plans";

export default function Checkout() {
  const { t } = useTranslation();
  const [params] = useSearchParams();
  const planKey = params.get("plan");
  const plan = paidPlans[planKey];
  const [paid, setPaid] = useState(false);

  if (!plan) return <Navigate to="/pricing" replace />;

  const planName = t(`pricing.plans.${planKey}.name`);

  return (
    <main className="relative min-h-screen bg-oatmeal px-6 py-24">
      <BackToHome />
      <div className="mx-auto max-w-5xl">
        {paid ? (
          <div className="mx-auto max-w-md rounded-3xl bg-white/70 p-10 text-center shadow-xl ring-1 ring-deepSpruce/10">
            <span
              className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-cyberMint text-slateCharcoal"
              aria-hidden="true"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12l5 5L20 7" />
              </svg>
            </span>
            <h1 className="mt-5 font-display text-3xl font-bold text-slateCharcoal">
              {t("checkout.successTitle")}
            </h1>
            <p className="mt-3 text-slateCharcoal/75">{t("checkout.successText", { plan: planName })}</p>
            <Link
              to="/login"
              className="mt-8 inline-flex rounded-full bg-cyberMint px-8 py-3.5 font-bold text-slateCharcoal transition hover:brightness-95"
            >
              {t("checkout.continue")}
            </Link>
          </div>
        ) : (
          <>
            <h1 className="font-display text-3xl font-bold text-slateCharcoal md:text-4xl">
              {t("checkout.title")}
            </h1>
            <p className="mt-2 text-slateCharcoal/70">{t("checkout.subtitle", { plan: planName })}</p>

            <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-3xl bg-white/70 p-8 shadow-xl ring-1 ring-deepSpruce/10 sm:p-10">
                <h2 className="font-display text-xl font-bold text-slateCharcoal">
                  {t("checkout.paymentDetails")}
                </h2>
                <div className="mt-6">
                  <PaymentForm price={plan.price} onSuccess={() => setPaid(true)} />
                </div>
              </div>
              <OrderSummary plan={plan} />
            </div>
          </>
        )}
      </div>
    </main>
  );
}