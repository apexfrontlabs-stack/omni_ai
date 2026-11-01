import { useTranslation } from "react-i18next";
import TestimonialCard from "../testimonials/TestimonialCard";

const people = [
  { name: "Sara Khan", photo: "/images/person -1.webp" },
  { name: "Ali Raza", photo: "/images/person -3.webp", dark: true },
  { name: "Hina Malik", photo: "/images/person -2.webp" },
];

export default function Testimonials() {
  const { t } = useTranslation();
  const reviews = t("testimonials.reviews", { returnObjects: true });

  return (
    <section id="testimonials" className="bg-oatmeal py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold leading-tight text-slateCharcoal md:text-4xl">
            {t("testimonials.title")}
          </h2>
          <p className="mt-4 text-slateCharcoal/75">{t("testimonials.subtitle")}</p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <TestimonialCard
              key={people[i].name}
              highlight={r.highlight}
              highlightLabel={r.label}
              rating={5}
              quote={r.quote}
              role={r.role}
              name={r.name}
              photo={people[i].photo}
              dark={people[i].dark}
            />
          ))}
        </div>
      </div>
    </section>
  );
}