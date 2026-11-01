import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";

const inputClass =
  "w-full rounded-xl border border-[#1E352F]/15 bg-white px-4 py-3.5 pe-12 text-sm text-[#1E2229] outline-none transition placeholder:text-[#1E2229]/35 focus:border-[#1E352F] focus:ring-4 focus:ring-[#1E352F]/5";
const eyeBtn =
  "absolute inset-y-0 end-0 flex items-center px-4 text-[#1E352F]/55 hover:text-[#1E352F]";

export default function ResetPassword() {
  const { t } = useTranslation();
  const [params] = useSearchParams();
  const token = params.get("token");

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState(""); // translation key
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 8) return setError("auth.errors.tooShort");
    if (password !== confirm) return setError("auth.errors.mismatch");
    if (!token) return setError("auth.errors.missingToken");

    setError("");
    console.log({ token, password });
    setDone(true);
  };

  return (
    <main className="h-screen overflow-hidden bg-[#F5F2EB]">
      <div className="grid h-screen grid-cols-1 overflow-hidden md:grid-cols-2">
        <section className="flex h-screen items-center justify-center overflow-y-auto px-5 py-6 sm:px-10 lg:px-14">
          <div className="w-full max-w-[400px]">
            <Link
              to="/login"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#1E352F]/65 transition hover:text-[#1E352F]"
            >
              <ArrowLeft size={16} className="rtl:rotate-180" />
              {t("auth.backToLogin")}
            </Link>

            <div className="mt-8">
              <h1 className="text-3xl font-bold tracking-tight text-[#1E2229] sm:text-4xl">
                {t("auth.reset.title")}
              </h1>
              <p className="mt-3 text-sm leading-6 text-[#1E2229]/60">{t("auth.reset.subtitle")}</p>
            </div>

            {done ? (
              <div className="mt-8 space-y-5">
                <div className="rounded-2xl bg-[#E2EFE9] p-5" role="status">
                  <p className="font-bold text-[#1E352F]">{t("auth.reset.doneTitle")}</p>
                  <p className="mt-2 text-sm leading-6 text-[#1E2229]/75">{t("auth.reset.doneText")}</p>
                </div>
                <Link
                  to="/login"
                  className="block w-full rounded-xl bg-[#1E352F] px-6 py-3.5 text-center font-bold text-white transition hover:bg-[#29483F]"
                >
                  {t("auth.reset.goToLogin")}
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div>
                  <label htmlFor="password" className="mb-2 block text-sm font-semibold text-[#1E2229]">
                    {t("auth.reset.newPassword")}
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder={t("auth.minChars")}
                      autoComplete="new-password"
                      required
                      className={inputClass}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((p) => !p)}
                      aria-label={showPassword ? t("auth.hidePassword") : t("auth.showPassword")}
                      className={eyeBtn}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <div>
                  <label htmlFor="confirm" className="mb-2 block text-sm font-semibold text-[#1E2229]">
                    {t("auth.reset.confirmPassword")}
                  </label>
                  <div className="relative">
                    <input
                      id="confirm"
                      name="confirm"
                      type={showConfirm ? "text" : "password"}
                      value={confirm}
                      onChange={(e) => setConfirm(e.target.value)}
                      placeholder={t("auth.reset.confirmPlaceholder")}
                      autoComplete="new-password"
                      required
                      className={inputClass}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirm((p) => !p)}
                      aria-label={showConfirm ? t("auth.reset.hideConfirm") : t("auth.reset.showConfirm")}
                      className={eyeBtn}
                    >
                      {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
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
                  className="w-full rounded-xl bg-[#1E352F] px-6 py-3.5 font-bold text-white transition hover:bg-[#29483F] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#1E352F]/20"
                >
                  {t("auth.reset.submit")}
                </button>
              </form>
            )}

            <p className="mt-8 text-center text-sm text-[#1E2229]/55">
              {t("auth.rememberPassword")}{" "}
              <Link to="/login" className="font-bold text-[#1E352F] hover:underline">
                {t("auth.logIn")}
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