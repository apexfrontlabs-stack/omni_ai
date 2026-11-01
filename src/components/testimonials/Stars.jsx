import { useTranslation } from "react-i18next";

export default function Stars({ rating = 5, dark = false }) {
  const { t } = useTranslation();

  return (
    <div
      className="flex gap-1"
      role="img"
      aria-label={t("testimonials.starsLabel", { rating })}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          className={
            i < rating
              ? "fill-amber text-amber"
              : dark
              ? "fill-oatmeal/20 text-oatmeal/20"
              : "fill-deepSpruce/15 text-deepSpruce/15"
          }
          aria-hidden="true"
        >
          <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.3 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8L12 2z" />
        </svg>
      ))}
    </div>
  );
}