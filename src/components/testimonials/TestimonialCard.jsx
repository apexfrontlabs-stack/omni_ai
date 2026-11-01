import Stars from "./Stars";

export default function TestimonialCard({
  highlight,
  highlightLabel,
  rating = 5,
  quote,
  name = "",
  role,
  photo,
  dark = false,
}) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

  return (
    <article
      className={`flex h-full flex-col rounded-3xl p-6 ${
        dark
          ? "bg-deepSpruce text-oatmeal"
          : "bg-softMint text-slateCharcoal ring-1 ring-deepSpruce/10"
      }`}
    >
      {/* Big highlight */}
      <div>
        <p
          className={`font-display text-5xl font-bold leading-none ${
            dark ? "text-cyberMint" : "text-deepSpruce"
          }`}
        >
          {highlight}
        </p>
        <p
          className={`mt-1.5 text-sm font-medium ${
            dark ? "text-oatmeal/70" : "text-slateCharcoal/65"
          }`}
        >
          {highlightLabel}
        </p>
      </div>

      {/* Rating + quote */}
      <div className="mt-5 flex-1">
        <Stars rating={rating} dark={dark} />
        <blockquote
          className={`mt-3 text-[15px] leading-relaxed ${
            dark ? "text-oatmeal/90" : "text-slateCharcoal/85"
          }`}
        >
          “{quote}”
        </blockquote>
      </div>

      {/* Profile */}
      <div
        className={`mt-5 flex items-center gap-3 border-t pt-4 ${
          dark ? "border-oatmeal/15" : "border-deepSpruce/15"
        }`}
      >
        {photo ? (
          <img
            src={photo}
            alt={name}
            className="h-10 w-10 rounded-full object-cover"
          />
        ) : (
          <span
            className={`flex h-10 w-10 items-center justify-center rounded-full font-display text-sm font-bold ${
              dark
                ? "bg-cyberMint text-slateCharcoal"
                : "bg-deepSpruce text-cyberMint"
            }`}
            aria-hidden="true"
          >
            {initials}
          </span>
        )}
        <div className="min-w-0">
          <p className="truncate font-display text-sm font-bold">{name}</p>
          <p
            className={`truncate text-xs ${
              dark ? "text-oatmeal/60" : "text-slateCharcoal/60"
            }`}
          >
            {role}
          </p>
        </div>
      </div>
    </article>
  );
}