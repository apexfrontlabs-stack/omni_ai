import { useTranslation } from "react-i18next";
import FeatureRow from "../features/FeatureRow";
import TaskGraphCard from "../features/TaskGraphCard";
import PredictiveChartCard from "../features/PridictiveChartCard";
import SecurityCards from "../features/SecurityCard";

const icon = (path) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {path}
  </svg>
);

const icons = {
  bolt: icon(<path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />),
  chart: icon(<path d="M4 20V4M4 20h16M8 16v-4M12 16V8M16 16v-6" />),
  lock: icon(
    <>
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V8a4 4 0 018 0v3" />
    </>
  ),
};

// id JSON ki key hai, Visual us row ka card
const rows = [
  { id: "tasks", icon: icons.bolt, Visual: TaskGraphCard },
  { id: "analytics", icon: icons.chart, Visual: PredictiveChartCard },
  { id: "security", icon: icons.lock, Visual: SecurityCards },
];

export default function Features() {
  const { t } = useTranslation();

  return (
    <section id="features" className="bg-softMint py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold leading-tight text-slateCharcoal md:text-4xl">
            {t("features.title")}
          </h2>
          <p className="mt-4 text-slateCharcoal/75">{t("features.subtitle")}</p>
        </div>

        <div className="mt-12 space-y-6">
          {rows.map(({ id, icon, Visual }) => (
            <FeatureRow
              key={id}
              icon={icon}
              title={t(`features.items.${id}.title`)}
              text={t(`features.items.${id}.text`)}
            >
              <Visual />
            </FeatureRow>
          ))}
        </div>
      </div>
    </section>
  );
}