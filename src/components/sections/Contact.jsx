import { useTranslation } from "react-i18next";
import ContactForm from "../contact/ContactForm";

const CONTACT_EMAIL = "support@yourdomain.com"; // apni asli email lagayein

const icon = (path) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {path}
  </svg>
);

// id JSON ki key hai. Email ki value tarjuma nahi hoti, baaqi JSON se.
const info = [
  {
    id: "email",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    icon: icon(
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </>
    ),
  },
  {
    id: "hours",
    icon: icon(
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
  },
  {
    id: "response",
    icon: icon(<path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />),
  },
];

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="bg-oatmeal">
      {/* Title band */}
      <div className="bg-softMint py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-deepSpruce">
            {t("contact.label")}
          </p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-bold leading-tight text-slateCharcoal md:text-5xl">
            {t("contact.title")}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-slateCharcoal/75">{t("contact.subtitle")}</p>
        </div>
      </div>

      {/* Info + form */}
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12 lg:py-20">
        {/* Left: info */}
        <div className="rounded-3xl bg-deepSpruce p-8 text-oatmeal sm:p-10">
          <h2 className="font-display text-2xl font-bold">{t("contact.detailsTitle")}</h2>
          <p className="mt-2 text-oatmeal/70">{t("contact.detailsText")}</p>

          <ul className="mt-8 space-y-6">
            {info.map((i) => (
              <li key={i.id} className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cyberMint text-slateCharcoal">
                  {i.icon}
                </span>
                <div>
                  <p className="text-sm text-oatmeal/60">{t(`contact.info.${i.id}.title`)}</p>
                  {i.href ? (
                    <a dir="ltr" href={i.href} className="block font-medium hover:text-cyberMint">
                      {i.value}
                    </a>
                  ) : (
                    <p className="font-medium">{t(`contact.info.${i.id}.value`)}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: form */}
        <div className="rounded-3xl bg-white/70 p-8 shadow-xl ring-1 ring-deepSpruce/10 sm:p-10">
          <h2 className="font-display text-2xl font-bold text-slateCharcoal">
            {t("contact.formTitle")}
          </h2>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}