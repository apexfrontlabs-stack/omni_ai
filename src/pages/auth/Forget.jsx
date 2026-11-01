import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowLeft } from "lucide-react";
import FormField from "../../components/auth/FormField";

export default function ForgotPassword() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email });
    setSent(true);
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

            <div className="mt-10">
              <h1 className="text-3xl font-bold tracking-tight text-[#1E2229] sm:text-4xl">
                {t("auth.forgot.title")}
              </h1>
              <p className="mt-3 text-sm leading-6 text-[#1E2229]/60">{t("auth.forgot.subtitle")}</p>
            </div>

            {sent ? (
              <div className="mt-8 rounded-2xl bg-[#E2EFE9] p-5 text-[#1E2229]" role="status">
                <p className="font-bold text-[#1E352F]">{t("auth.forgot.sentTitle")}</p>
                <p className="mt-2 text-sm leading-6 text-[#1E2229]/75">
                  {t("auth.forgot.sentText", { email })}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <FormField
                  id="email"
                  label={t("auth.emailLabel")}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("auth.emailPlaceholder")}
                  autoComplete="email"
                />
                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#1E352F] px-6 py-3.5 font-bold text-white transition hover:bg-[#29483F] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#1E352F]/20"
                >
                  {t("auth.forgot.submit")}
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