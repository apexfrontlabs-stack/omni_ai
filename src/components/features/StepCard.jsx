export default function StepCard({ number, icon, title, text }) {
  return (
    <article className="relative rounded-3xl bg-softMint p-8 ring-1 ring-deepSpruce/10">
      {/* Step number */}
      <span className="absolute right-6 top-6 font-display text-5xl font-bold text-deepSpruce/10">
        {number}
      </span>

      {/* Icon */}
      <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-deepSpruce text-cyberMint">
        {icon}
      </span>

      <h3 className="mt-6 font-display text-xl font-bold text-slateCharcoal">
        {title}
      </h3>
      <p className="mt-3 leading-relaxed text-slateCharcoal/70">{text}</p>
    </article>
  );
}