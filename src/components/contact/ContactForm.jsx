import { useState } from "react";
import { useTranslation } from "react-i18next";

// Ye keys hain, tarjuma nahi. Form mein yahi save hoti hain.
const topicKeys = ["general", "sales", "demo", "support", "partnership"];

const inputClass =
  "w-full rounded-xl border border-deepSpruce/20 bg-oatmeal px-4 py-3 text-slateCharcoal placeholder:text-slateCharcoal/40 focus:border-deepSpruce focus:outline-none focus:ring-2 focus:ring-cyberMint";

export default function ContactForm() {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    topic: topicKeys[0],
    message: "",
  });
  const [sent, setSent] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setSent(true);
  };

  if (sent) {
    return (
      <div className="rounded-2xl bg-softMint p-8 text-center" role="status">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-cyberMint text-slateCharcoal" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12l5 5L20 7" />
          </svg>
        </span>
        <p className="mt-4 font-display text-xl font-bold text-deepSpruce">
          {t("contactForm.sentTitle")}
        </p>
        <p className="mt-2 text-slateCharcoal/75">
          {t("contactForm.sentText", { name: form.name, email: form.email })}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-slateCharcoal">
            {t("contactForm.name")}
          </label>
          <input id="name" required value={form.name} onChange={update("name")} placeholder={t("contactForm.namePlaceholder")} autoComplete="name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-slateCharcoal">
            {t("contactForm.email")}
          </label>
          <input id="email" type="email" required value={form.email} onChange={update("email")} placeholder={t("contactForm.emailPlaceholder")} autoComplete="email" className={inputClass} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="mb-2 block text-sm font-medium text-slateCharcoal">
            {t("contactForm.company")}{" "}
            <span className="text-slateCharcoal/50">{t("contactForm.optional")}</span>
          </label>
          <input id="company" value={form.company} onChange={update("company")} placeholder={t("contactForm.companyPlaceholder")} autoComplete="organization" className={inputClass} />
        </div>
        <div>
          <label htmlFor="topic" className="mb-2 block text-sm font-medium text-slateCharcoal">
            {t("contactForm.topic")}
          </label>
          <select id="topic" value={form.topic} onChange={update("topic")} className={inputClass}>
            {topicKeys.map((k) => (
              <option key={k} value={k}>
                {t(`contactForm.topics.${k}`)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-slateCharcoal">
          {t("contactForm.message")}
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={update("message")}
          placeholder={t("contactForm.messagePlaceholder")}
          className={`${inputClass} resize-y`}
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-cyberMint px-8 py-3.5 font-bold text-slateCharcoal transition hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-deepSpruce focus-visible:ring-offset-2 sm:w-auto"
      >
        {t("contactForm.send")}
      </button>
    </form>
  );
}