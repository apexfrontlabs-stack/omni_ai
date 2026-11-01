import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const links = [
  { key: "home", to: "/" },
  { key: "about", to: "/about" },
  { key: "industries", to: "/industries" },
  { key: "features", to: "/features" },
  { key: "pricing", to: "/pricing" },
  { key: "contact", to: "/contact" },
];

const languages = [
  { code: "en", label: "English" },
  { code: "ar", label: "العربية" },
  { code: "de", label: "Deutsch" },
  { code: "fr", label: "Français" },
  { code: "zh", label: "中文" },
];

function LanguageSwitcher({ className = "" }) {
  const { i18n, t } = useTranslation();

  return (
    <select
      value={i18n.resolvedLanguage}
      onChange={(e) => i18n.changeLanguage(e.target.value)}
      aria-label={t("nav.language")}
      className={`rounded-full border border-deepSpruce/20 bg-oatmeal px-3 py-1.5 text-sm font-medium text-deepSpruce focus:outline-none focus-visible:ring-2 focus-visible:ring-cyberMint ${className}`}
    >
      {languages.map((l) => (
        <option key={l.code} value={l.code}>
          {l.label}
        </option>
      ))}
    </select>
  );
}

export default function Navbar() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-deepSpruce/10 bg-oatmeal/85 shadow-sm backdrop-blur-md"
          : "bg-oatmeal"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center" aria-label="OmniAI">
          <img
            src="/images/logo.webp"
            alt="OmniAI Automation Solutions"
            className="h-14 w-auto mix-blend-multiply"
          />
        </Link>

        {/* Desktop links */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {links.map((l) => (
            <NavLink
              key={l.key}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `group relative font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyberMint ${
                  isActive
                    ? "text-slateCharcoal"
                    : "text-deepSpruce hover:text-slateCharcoal"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {t(`nav.${l.key}`)}
                  <span
                    className={`absolute -bottom-1 start-0 h-0.5 bg-cyberMint transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSwitcher />
          <Link
            to="/login"
            className="font-medium text-slateCharcoal hover:text-deepSpruce"
          >
            {t("nav.login")}
          </Link>
          <Link
            to="/pricing"
            className="rounded-full bg-cyberMint px-6 py-2.5 text-sm font-bold text-slateCharcoal transition hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-deepSpruce focus-visible:ring-offset-2 focus-visible:ring-offset-oatmeal"
          >
            {t("nav.getStarted")}
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? t("nav.closeMenu") : t("nav.openMenu")}
          className="flex h-11 w-11 items-center justify-center rounded-full text-deepSpruce hover:bg-softMint lg:hidden"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-deepSpruce/10 bg-oatmeal transition-all duration-300 lg:hidden ${
          open ? "max-h-[34rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4" aria-label="Mobile">
          {links.map((l) => (
            <NavLink
              key={l.key}
              to={l.to}
              end={l.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `rounded-xl px-3 py-3 font-medium hover:bg-softMint ${
                  isActive ? "bg-softMint text-slateCharcoal" : "text-deepSpruce"
                }`
              }
            >
              {t(`nav.${l.key}`)}
            </NavLink>
          ))}

          <div className="px-3 py-3">
            <LanguageSwitcher className="w-full" />
          </div>

          <Link
            to="/login"
            onClick={() => setOpen(false)}
            className="rounded-xl px-3 py-3 font-medium text-slateCharcoal hover:bg-softMint"
          >
            {t("nav.login")}
          </Link>
          <Link
            to="/pricing"
            onClick={() => setOpen(false)}
            className="mt-3 rounded-full bg-cyberMint px-6 py-3 text-center font-bold text-slateCharcoal"
          >
            {t("nav.getStarted")}
          </Link>
        </nav>
      </div>
    </header>
  );
}