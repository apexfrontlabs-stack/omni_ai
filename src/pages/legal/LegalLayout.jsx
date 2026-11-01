import { useTranslation } from "react-i18next";
import PageLayout from "../../components/common/PageLayout";

export default function LegalLayout({ title, updated, intro, sections }) {
  const { t } = useTranslation();
  return (
    <PageLayout>
      <section className="bg-softMint py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-deepSpruce">
            {t("legal.label")}
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-slateCharcoal md:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-sm text-slateCharcoal/60">{t("legal.lastUpdated", { date: updated })}</p>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slateCharcoal/75">{intro}</p>
        </div>
      </section>

      <section className="bg-oatmeal py-12 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[16rem_1fr]">
          <aside className="hidden lg:block">
            <nav className="sticky top-28" aria-label={t("legal.onThisPage")}>
              <p className="font-display text-sm font-bold text-deepSpruce">{t("legal.onThisPage")}</p>
              <ul className="mt-4 space-y-1 border-s border-deepSpruce/15">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="-ms-px block border-s-2 border-transparent py-1.5 ps-4 text-sm text-slateCharcoal/65 transition hover:border-cyberMint hover:text-slateCharcoal"
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <article className="max-w-3xl">
            <div className="space-y-12">
              {sections.map((s) => (
                <section key={s.id} id={s.id} className="scroll-mt-28">
                  <h2 className="font-display text-2xl font-bold text-deepSpruce">{s.title}</h2>
                  <div className="mt-4 space-y-4 leading-7 text-slateCharcoal/80">{s.content}</div>
                </section>
              ))}
            </div>
            <p className="mt-14 border-t border-deepSpruce/15 pt-6 text-sm text-slateCharcoal/55">
              {t("legal.rights", { year: new Date().getFullYear() })}
            </p>
          </article>
        </div>
      </section>
    </PageLayout>
  );
}