import { useState } from "react";
import { useTranslation } from "react-i18next";

const inputClass =
  "w-full rounded-xl border border-deepSpruce/20 bg-oatmeal px-4 py-3 text-slateCharcoal placeholder:text-slateCharcoal/40 focus:border-deepSpruce focus:outline-none focus:ring-2 focus:ring-cyberMint";

const formatCard = (v) =>
  v.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();

const formatExpiry = (v) => {
  const d = v.replace(/\D/g, "").slice(0, 4);
  return d.length > 2 ? `${d.slice(0, 2)}/${d.slice(2)}` : d;
};

export default function PaymentForm({ price, onSuccess }) {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [card, setCard] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [error, setError] = useState(""); // translation key
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (card.replace(/\s/g, "").length < 16) return setError("payment.errors.card");
    if (expiry.length < 5) return setError("payment.errors.expiry");
    if (cvc.length < 3) return setError("payment.errors.cvc");

    setError("");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      onSuccess();
    }, 1200);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="card-name" className="mb-2 block text-sm font-medium text-slateCharcoal">
          {t("payment.nameLabel")}
        </label>
        <input
          id="card-name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={t("payment.namePlaceholder")}
          autoComplete="cc-name"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="card-number" className="mb-2 block text-sm font-medium text-slateCharcoal">
          {t("payment.cardLabel")}
        </label>
        <input
          id="card-number"
          dir="ltr"
          required
          inputMode="numeric"
          value={card}
          onChange={(e) => setCard(formatCard(e.target.value))}
          placeholder={t("payment.cardPlaceholder")}
          autoComplete="cc-number"
          className={`${inputClass} text-start`}
        />
      </div>

      <div className="grid grid-cols-2 gap-5">
        <div>
          <label htmlFor="card-expiry" className="mb-2 block text-sm font-medium text-slateCharcoal">
            {t("payment.expiryLabel")}
          </label>
          <input
            id="card-expiry"
            dir="ltr"
            required
            inputMode="numeric"
            value={expiry}
            onChange={(e) => setExpiry(formatExpiry(e.target.value))}
            placeholder={t("payment.expiryPlaceholder")}
            autoComplete="cc-exp"
            className={`${inputClass} text-start`}
          />
        </div>
        <div>
          <label htmlFor="card-cvc" className="mb-2 block text-sm font-medium text-slateCharcoal">
            {t("payment.cvcLabel")}
          </label>
          <input
            id="card-cvc"
            dir="ltr"
            required
            inputMode="numeric"
            value={cvc}
            onChange={(e) => setCvc(e.target.value.replace(/\D/g, "").slice(0, 4))}
            placeholder={t("payment.cvcPlaceholder")}
            autoComplete="cc-csc"
            className={`${inputClass} text-start`}
          />
        </div>
      </div>

      {error && (
        <p className="rounded-xl bg-amber/20 px-4 py-3 text-sm text-slateCharcoal" role="alert">
          {t(error)}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-full bg-cyberMint px-6 py-3.5 font-bold text-slateCharcoal transition hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-deepSpruce focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? t("payment.processing") : t("payment.pay", { amount: `$${price}.00` })}
      </button>

      <p className="text-center text-xs text-slateCharcoal/60">{t("payment.secure")}</p>
    </form>
  );
}