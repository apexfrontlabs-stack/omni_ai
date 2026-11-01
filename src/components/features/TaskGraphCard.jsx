import { useTranslation } from "react-i18next";

const data = [20, 34, 30, 48, 44, 66, 62, 88];
const W = 300;
const H = 120;

const pts = data.map((v, i) => [(i * W) / (data.length - 1), H - 10 - v]);
const line = pts.map(([x, y]) => `${x},${y}`).join(" ");
const area = `0,${H} ${line} ${W},${H}`;

const tasks = [
  { nameKey: "onboarding", statusKey: "done", done: true },
  { nameKey: "sync", statusKey: "inProgress", done: false },
  { nameKey: "contracts", statusKey: "done", done: true },
];

export default function TaskGraphCard() {
  const { t } = useTranslation();

  return (
    <div className="rounded-3xl bg-deepSpruce p-6 shadow-xl">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-oatmeal/60">{t("taskCard.completed")}</p>
          <p className="mt-1 font-display text-4xl font-bold text-oatmeal">8,420</p>
        </div>
        <span className="rounded-full bg-cyberMint px-3 py-1 text-sm font-bold text-slateCharcoal">
          +18%
        </span>
      </div>

      {/* Line graph */}
      <svg viewBox={`0 0 ${W} ${H}`} className="mt-5 h-36 w-full" role="img" aria-label={t("taskCard.trendAria")}>
        <defs>
          <linearGradient id="taskFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#00F5A0" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#00F5A0" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon points={area} fill="url(#taskFill)" />
        <polyline points={line} fill="none" stroke="#00F5A0" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
        <circle cx={pts[pts.length - 1][0]} cy={pts[pts.length - 1][1]} r="4.5" fill="#00F5A0" />
      </svg>

      {/* Task list */}
      <ul className="mt-4 space-y-2">
        {tasks.map((task) => (
          <li key={task.nameKey} className="flex items-center justify-between rounded-xl bg-oatmeal/10 px-4 py-2.5 text-sm">
            <span className="text-oatmeal">{t(`taskCard.${task.nameKey}`)}</span>
            <span className="flex items-center gap-2 text-oatmeal/70">
              <span className={`h-2 w-2 rounded-full ${task.done ? "bg-cyberMint" : "bg-amber"}`} />
              {t(`taskCard.${task.statusKey}`)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}