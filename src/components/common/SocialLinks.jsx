const socials = [
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.4c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V21H9z" fill="currentColor" />
    ),
  },
  {
    label: "X",
    href: "#",
    icon: (
      <path d="M18.2 2H21l-6.5 7.4L22 22h-6l-4.7-6.1L5.9 22H3l7-8L2.5 2h6.1l4.2 5.6L18.2 2zm-1 18h1.6L7.9 3.8H6.2L17.2 20z" fill="currentColor" />
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
      </>
    ),
  },
];

export default function SocialLinks() {
  return (
    <ul className="flex items-center gap-3">
      {socials.map((s) => (
        <li key={s.label}>
          <a
            href={s.href}
            aria-label={s.label}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-oatmeal/10 text-oatmeal transition hover:bg-cyberMint hover:text-slateCharcoal focus:outline-none focus-visible:ring-2 focus-visible:ring-cyberMint"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              {s.icon}
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}