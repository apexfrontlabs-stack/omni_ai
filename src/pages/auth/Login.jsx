import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowLeft, Eye, EyeOff, Loader2, Sparkles } from "lucide-react";

export default function Login() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      console.log({ email, password });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = (provider) => {
    console.log(`${provider} login requires OAuth integration.`);
  };

  const inputClass =
    "w-full rounded-xl border border-[#1E352F]/15 bg-white px-4 py-3.5 text-sm text-[#1E2229] outline-none transition placeholder:text-[#1E2229]/35 focus:border-[#1E352F] focus:ring-4 focus:ring-[#1E352F]/5";

  return (
    <main className="min-h-screen bg-[#F5F2EB]">
      <div className="grid min-h-screen md:grid-cols-2">
        <section className="flex h-screen items-center justify-center overflow-hidden px-5 py-10 sm:px-10 lg:px-14">
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

            <div className="mb-4 mt-10 text-center sm:mt-12">
              <h2 className="text-3xl font-bold tracking-tight text-[#1E2229] sm:text-4xl">
                {t("auth.login.title")}
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#1E2229]/60">{t("auth.login.subtitle")}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
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
                <div className="mb-2 flex items-center justify-between gap-3">
                  <label htmlFor="password" className="text-sm font-semibold text-[#1E2229]">
                    {t("auth.passwordLabel")}
                  </label>
                  <Link to="/forgot-password" className="text-xs font-semibold text-[#1E352F] hover:underline">
                    {t("auth.login.forgot")}
                  </Link>
                </div>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder={t("auth.login.passwordPlaceholder")}
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

              <div className="flex items-center gap-2">
                <input
                  id="remember"
                  name="remember"
                  type="checkbox"
                  className="h-4 w-4 rounded border-[#1E352F]/30 accent-[#1E352F]"
                />
                <label htmlFor="remember" className="text-sm text-[#1E2229]/65">
                  {t("auth.login.remember")}
                </label>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#1E352F] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#29483F] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#1E352F]/20 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isLoading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    {t("auth.login.loading")}
                  </>
                ) : (
                  t("auth.login.submit")
                )}
              </button>
            </form>

            <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-[#1E352F]/15" />
              <span className="text-[11px] font-medium uppercase tracking-wider text-[#1E2229]/45">
                {t("auth.login.orContinue")}
              </span>
              <div className="h-px flex-1 bg-[#1E352F]/15" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => handleSocialLogin("Google")}
                className="flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#1E352F]/15 bg-white px-3 text-sm font-semibold text-[#1E2229] transition hover:border-[#1E352F]/40 hover:bg-white/70"
              >
                <svg viewBox="0 0 48 48" className="h-5 w-5" aria-hidden="true">
                  <path fill="#4285F4" d="M43.6 24.5c0-1.4-.1-2.8-.4-4.1H24v7.8h11a9.4 9.4 0 0 1-4.1 6.2v5.1h6.6c3.9-3.6 6.1-8.9 6.1-15Z" />
                  <path fill="#34A853" d="M24 44c5.5 0 10.1-1.8 13.5-4.9l-6.6-5.1c-1.8 1.2-4.1 1.9-6.9 1.9-5.3 0-9.8-3.6-11.4-8.4H5.8v5.3A20 20 0 0 0 24 44Z" />
                  <path fill="#FBBC05" d="M12.6 27.5a12 12 0 0 1 0-7v-5.3H5.8a20 20 0 0 0 0 17.6l6.8-5.3Z" />
                  <path fill="#EA4335" d="M24 12.1c3 0 5.7 1 7.8 3.1l5.8-5.8A19.4 19.4 0 0 0 24 4 20 20 0 0 0 5.8 15.2l6.8 5.3c1.6-4.8 6.1-8.4 11.4-8.4Z" />
                </svg>
                Google
              </button>
              <button
                type="button"
                onClick={() => handleSocialLogin("Facebook")}
                className="flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#1E352F]/15 bg-white px-3 text-sm font-semibold text-[#1E2229] transition hover:border-[#1E352F]/40 hover:bg-white/70"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                  <path fill="#1877F2" d="M24 12a12 12 0 1 0-13.9 11.85v-8.38H7.08V12h3.02V9.36c0-2.98 1.78-4.64 4.52-4.64 1.31 0 2.69.23 2.69.23v2.95h-1.52c-1.49 0-1.95.93-1.95 1.88V12h3.32l-.53 3.47h-2.79v8.38A12 12 0 0 0 24 12Z" />
                </svg>
                Facebook
              </button>
            </div>

            <p className="mt-7 text-center text-sm text-[#1E2229]/60">
              {t("auth.login.noAccount")}{" "}
              <Link to="/register" className="font-bold text-[#1E352F] hover:underline">
                {t("auth.login.createAccount")}
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