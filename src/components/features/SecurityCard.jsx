import { useTranslation } from "react-i18next";

const logs = [
  { whoKey: "emailSara", whatKey: "signedIn", ok: true },
  { whoKey: "unknown", whatKey: "blocked", ok: false },
  { whoKey: "emailAli", whatKey: "verified2", ok: true },
];

export default function SecurityCards() {
  const { t } = useTranslation();

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {/* Auth card */}
      <div className="rounded-3xl bg-deepSpruce p-6 text-oatmeal shadow-xl">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyberMint text-slateCharcoal" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="5" y="11" width="14" height="9" rx="2" />
            <path d="M8 11V8a4 4 0 018 0v3" />
          </svg>
        </div>
        <h4 className="mt-4 font-display text-lg font-bold">{t("securityCard.signIn")}</h4>

        <div className="mt-4 space-y-2.5">
          <div dir="ltr" className="rounded-xl bg-oatmeal/10 px-4 py-2.5 text-start text-sm text-oatmeal/70">
            sara@company.com
          </div>
          <div className="rounded-xl bg-oatmeal/10 px-4 py-2.5 text-sm tracking-widest text-oatmeal/70">
            ••••••••••
          </div>
          <div className="flex items-center justify-between rounded-xl border border-cyberMint/40 px-4 py-2.5 text-sm">
            <span>{t("securityCard.twoStep")}</span>
            <span className="font-bold text-cyberMint">{t("securityCard.verified")}</span>
          </div>
        </div>
      </div>

      {/* Analytics card */}
      <div className="flex flex-col rounded-3xl bg-softMint p-6 shadow-xl ring-1 ring-deepSpruce/10">
        <p className="text-sm text-slateCharcoal/60">{t("securityCard.threats")}</p>
        <p className="mt-1 font-display text-4xl font-bold text-deepSpruce">1,204</p>

        <ul className="mt-5 flex-1 space-y-2">
          {logs.map((l) => (
            <li key={l.who ?? l.whoKey} className="flex items-center gap-3 rounded-xl bg-oatmeal px-3 py-2.5 text-sm">
              <span className={`h-2 w-2 shrink-0 rounded-full ${l.ok ? "bg-cyberMint" : "bg-amber"}`} />
              <span className="min-w-0 flex-1">
                <span className="block truncate font-medium text-slateCharcoal">
                  {l.who ?? t(`securityCard.${l.whoKey}`)}
                </span>
                <span className="text-xs text-slateCharcoal/60">
                  {t(`securityCard.${l.whatKey}`)}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}