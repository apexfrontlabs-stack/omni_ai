import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function BackToHome() {
  const { t } = useTranslation();

  return (
    <Link
      to="/"
      className="absolute start-5 top-5 z-10 inline-flex items-center gap-2 rounded-full bg-softMint px-4 py-2 text-sm font-medium text-deepSpruce transition hover:bg-cyberMint hover:text-slateCharcoal focus:outline-none focus-visible:ring-2 focus-visible:ring-deepSpruce sm:start-8 sm:top-8"
    >
      <ArrowLeft size={16} className="rtl:rotate-180" aria-hidden="true" />
      {t("nav.backToHome")}
    </Link>
  );
}