import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function NewsletterForm() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setDone(true);
    setEmail("");
  };

  if (done) {
    return (
      <p className="flex items-center gap-2 text-sm text-cyberMint" role="status">
        <span className="h-2 w-2 rounded-full bg-cyberMint" />
        {t("footer.thanks")}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-sm gap-2">
      <label htmlFor="newsletter-email" className="sr-only">
        {t("footer.emailLabel")}
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={t("footer.placeholder")}
        className="min-w-0 flex-1 rounded-full bg-oatmeal/10 px-5 py-3 text-sm text-oatmeal placeholder:text-oatmeal/40 focus:outline-none focus:ring-2 focus:ring-cyberMint"
      />
      <button
        type="submit"
        className="shrink-0 rounded-full bg-cyberMint px-6 py-3 text-sm font-bold text-slateCharcoal transition hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-oatmeal"
      >
        {t("footer.subscribe")}
      </button>
    </form>
  );
}