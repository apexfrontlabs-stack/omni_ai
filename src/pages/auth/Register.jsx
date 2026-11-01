import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";
import { ArrowLeft, Eye, EyeOff, Loader2, Sparkles } from "lucide-react";

const planPrices = { starter: "$0" };

const inputClass =
  "w-full rounded-xl border border-[#1E352F]/15 bg-white px-4 py-3.5 text-sm text-[#1E2229] outline-none transition placeholder:text-[#1E2229]/35 focus:border-[#1E352F] focus:ring-4 focus:ring-[#1E352F]/5";

export default function Register() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const planKey = params.get("plan");
  const planPrice = planPrices[planKey];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(""); // translation key

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.length < 8) {
      setError("auth.errors.tooShort");
      return;
    }
    setError("");
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      console.log({ name, email, password, plan: planKey });
      navigate("/login");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#F5F2EB]">
      <div className="grid min-h-screen md:grid-cols-2">
        <section className="flex min-h-screen items-center justify-center overflow-y-auto px-5 py-10 sm:px-10 lg:px-14">
          <div className="w-full max-w-[400px]">
            <div className="flex items-center justify-between">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#1E352F]/65 transition hover:text-[#1E352F]"
              >
                <ArrowLeft size={16} className="rtl:rotate-180" />
                {t("nav.backToHome")}
              </Link>
              <Link to="/" className="flex items-center gap-2 font-bold text-[#1E352F] md:hidden">
                <Sparkles size={19} />
                OmniAI
              </Link>
            </div>

            <div className="mb-6 mt-10 text-center sm:mt-12">
              <h2 className="text-3xl font-bold tracking-tight text-[#1E2229] sm:text-4xl">
                {t("auth.register.title")}
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#1E2229]/60">{t("auth.register.subtitle")}</p>
            </div>

            {planPrice && (
              <div className="mb-5 flex items-center justify-between rounded-xl bg-[#E2EFE9] px-4 py-3">
                <div>
                  <p className="text-xs text-[#1E2229]/60">{t("auth.register.selectedPlan")}</p>
                  <p className="text-sm font-bold text-[#1E352F]">
                    {t(`pricing.plans.${planKey}.name`)}{" "}
                    <span className="font-normal text-[#1E2229]/70">
                      · {planPrice} {t("pricing.perMonth")}
                    </span>
                  </p>
                </div>
                <Link to="/pricing" className="text-sm font-medium text-[#1E352F] underline underline-offset-4">
                  {t("auth.register.change")}
                </Link>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-semibold text-[#1E2229]">
                  {t("auth.register.nameLabel")}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t("auth.register.namePlaceholder")}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold text-[#1E2229]">
                  {t("auth.emailLabel")}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("auth.emailPlaceholder")}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="password" className="mb-2 block text-sm font-semibold text-[#1E2229]">
                  {t("auth.passwordLabel")}
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder={t("auth.minChars")}
                    className={`${inputClass} pe-12`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((p) => !p)}
                    aria-label={showPassword ? t("auth.hidePassword") : t("auth.showPassword")}
                    className="absolute inset-y-0 end-0 flex items-center px-4 text-[#1E352F]/55 hover:text-[#1E352F]"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {error && (
                <p className="rounded-xl bg-amber/20 px-4 py-3 text-sm text-[#1E2229]" role="alert">
                  {t(error)}
                </p>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#1E352F] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#29483F] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#1E352F]/20 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isLoading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    {t("auth.register.loading")}
                  </>
                ) : (
                  t("auth.register.submit")
                )}
              </button>

              <p className="text-center text-xs text-[#1E2229]/55">
                <Trans
                  i18nKey="auth.register.agree"
                  components={{
                    terms: <Link to="/term" className="font-semibold text-[#1E352F] underline underline-offset-4" />,
                    privacy: <Link to="/privacy" className="font-semibold text-[#1E352F] underline underline-offset-4" />,
                  }}
                />
              </p>
            </form>

            <p className="mt-7 text-center text-sm text-[#1E2229]/60">
              {t("auth.register.haveAccount")}{" "}
              <Link to="/login" className="font-bold text-[#1E352F] hover:underline">
                {t("auth.register.signIn")}
              </Link>
            </p>
          </div>
        </section>

        <section className="hidden h-screen overflow-hidden md:block">
          <img src="/images/omniai-bg.webp" alt={t("auth.bgAlt")} className="h-full w-full object-cover" />
        </section>
      </div>
    </main>
  );
}