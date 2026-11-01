import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const statValues = ["500+", "2M+", "99.9%"];

const taskList = [
  { key: "invoice", status: "running" },
  { key: "lead", status: "running" },
  { key: "support", status: "running" },
  { key: "report", status: "scheduled" },
];

const statusDot = { running: "bg-cyberMint", scheduled: "bg-amber" };

export default function About() {
  const { t } = useTranslation();
  const values = t("about.values", { returnObjects: true });
  const statLabels = t("about.stats", { returnObjects: true });

  return (
    <section id="about" className="bg-oatmeal py-14 lg:py-16">
      <div className="mx-auto grid max-w-7xl items-stretch gap-10 px-6 lg:grid-cols-2 lg:gap-14">
        {/* LEFT: dashboard panel */}
        <div className="relative flex">
          <div className="relative flex w-full flex-col overflow-hidden rounded-[2rem] bg-deepSpruce p-7 pb-16">
            <span
              className="absolute -end-20 -top-20 h-64 w-64 rounded-full bg-cyberMint/20 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative flex flex-1 flex-col">
              <p className="text-sm text-oatmeal/60">{t("about.panel.running")}</p>
              <p className="mt-1 font-display text-4xl font-bold text-oatmeal">1,248</p>

              <ul className="mt-5 space-y-2.5">
                {taskList.map((task) => (
                  <li
                    key={task.key}
                    className="flex items-center justify-between rounded-2xl bg-oatmeal/10 px-4 py-3 backdrop-blur"
                  >
                    <span className="font-medium text-oatmeal">
                      {t(`about.panel.tasks.${task.key}`)}
                    </span>
                    <span className="flex items-center gap-2 text-sm text-oatmeal/70">
                      <span className={`h-2 w-2 rounded-full ${statusDot[task.status]}`} />
                      {t(`about.panel.status.${task.status}`)}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto border-t border-oatmeal/15 pt-4">
                <p className="font-display text-2xl font-bold text-cyberMint">
                  {t("about.panel.hours")}
                </p>
                <p className="text-sm text-oatmeal/60">{t("about.panel.saved")}</p>
              </div>
            </div>
          </div>

          {/* Floating card */}
          <div className="absolute -bottom-5 end-5 max-w-[15rem] rounded-2xl bg-oatmeal p-4 shadow-xl">
            <p className="font-display text-xl font-bold text-deepSpruce">
              {t("about.since.title")}
            </p>
            <p className="mt-1 text-sm text-slateCharcoal/70">{t("about.since.text")}</p>
          </div>
        </div>

        {/* RIGHT: content */}
        <div className="flex flex-col justify-center">
          <h2 className="font-display text-3xl font-bold leading-tight text-slateCharcoal md:text-4xl">
            {t("about.title")}
          </h2>

          <p className="mt-4 max-w-xl leading-relaxed text-slateCharcoal/80">
            {t("about.text")}
          </p>

          <ul className="mt-6 space-y-4">
            {values.map((v) => (
              <li key={v.title} className="flex gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyberMint text-xs font-bold text-slateCharcoal">
                  ✓
                </span>
                <div>
                  <h3 className="font-display font-bold text-deepSpruce">{v.title}</h3>
                  <p className="text-sm text-slateCharcoal/75">{v.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <dl className="mt-7 grid grid-cols-3 gap-4 border-t border-deepSpruce/15 pt-5">
            {statValues.map((value, i) => (
              <div key={value}>
                <dt className="sr-only">{statLabels[i]}</dt>
                <dd className="font-display text-2xl font-bold text-deepSpruce">{value}</dd>
                <p className="text-sm text-slateCharcoal/70">{statLabels[i]}</p>
              </div>
            ))}
          </dl>

          <Link
            to="/contact"
            className="mt-6 inline-flex w-fit rounded-full bg-cyberMint px-7 py-3 font-bold text-slateCharcoal transition hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-deepSpruce focus-visible:ring-offset-2 focus-visible:ring-offset-oatmeal"
          >
            {t("about.cta")}
          </Link>
        </div>
      </div>
    </section>
  );
}