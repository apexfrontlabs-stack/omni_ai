import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import NewsletterForm from "./NewsLetterForm";
import SocialLinks from "./SocialLinks";

// title aur label ab keys hain, text JSON se aata hai
const columns = [
  {
    titleKey: "footer.product",
    links: [
      { labelKey: "nav.features", to: "/features" },
      { labelKey: "nav.industries", to: "/industries" },
      { labelKey: "nav.pricing", to: "/pricing" },
    ]
  },
  {
    titleKey: "footer.company",
    links: [
      { labelKey: "nav.about", to: "/about" },
      { labelKey: "nav.contact", to: "/contact" },
    ],
  },
  {
    titleKey: "footer.account",
    links: [
      { labelKey: "nav.login", to: "/login" },
      { labelKey: "footer.signup", to: "/register" },
      { labelKey: "footer.forgotPassword", to: "/forgot-password" },
    ],
  },
];

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-deepSpruce text-oatmeal">
      <div className="mx-auto max-w-7xl px-6 pb-5 pt-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          {/* Brand + newsletter */}
          <div>
            <Link
              to="/"
              className="inline-block rounded-2xl bg-oatmeal px-4 py-2"
              aria-label="OmniAI"
            >
              <img
                src="/images/logo.webp"
                alt="OmniAI Automation Solutions"
                className="h-12 w-auto mix-blend-multiply"
              />
            </Link>
            <p className="mt-5 max-w-sm text-oatmeal/70">{t("footer.tagline")}</p>

            <p className="mt-8 font-display font-bold">{t("footer.newsletterTitle")}</p>
            <p className="mb-3 mt-1 text-sm text-oatmeal/60">{t("footer.newsletterText")}</p>
            <NewsletterForm />

            <div className="mt-8">
              <SocialLinks />
            </div>
          </div>

          {/* Link columns */}
          <nav className="grid grid-cols-2 gap-8 sm:grid-cols-3" aria-label="Footer">
            {columns.map((c) => (
              <div key={c.titleKey}>
                <h3 className="font-display font-bold">{t(c.titleKey)}</h3>
                <ul className="mt-4 space-y-3">
                  {c.links.map((l) => (
                    <li key={l.labelKey}>
                      <Link
                        to={l.to}
                        className="text-sm text-oatmeal/70 transition hover:text-cyberMint focus:outline-none focus-visible:text-cyberMint"
                      >
                        {t(l.labelKey)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Back to top */}
        <div className="mt-10 flex justify-end">
          <button
            type="button"
            onClick={scrollToTop}
            className="rounded-full bg-oatmeal px-4 py-2 font-medium text-deepSpruce shadow-md transition-all duration-300 hover:bg-cyberMint focus:outline-none focus-visible:ring-2 focus-visible:ring-cyberMint"
          >
            {t("footer.backToTop")} ↑
          </button>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-oatmeal/15 pt-6 text-sm text-oatmeal/60">
          <p className="flex flex-wrap gap-x-1.5">
  <span dir="ltr">© {new Date().getFullYear()} </span>
  <span>{t("footer.rights")}</span>
</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-cyberMint">
              {t("footer.privacy")}
            </Link>
            <Link to="/term" className="hover:text-cyberMint">
              {t("footer.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}