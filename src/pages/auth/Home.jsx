import { useEffect, useState } from "react";

const links = [
  { label: "Features", href: "#features" },
  { label: "Enterprise", href: "#enterprise" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-deepSpruce/10 bg-oatmeal/85 shadow-sm backdrop-blur-md"
          : "bg-oatmeal"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a href="#top" className="flex items-center" aria-label="OmniAI home">
          <img
            src="/images/logo.png"
            alt="OmniAI Automation Solutions"
            className="h-14 w-auto mix-blend-multiply"
          />
        </a>

        {/* Desktop links */}
        <nav className="hidden items-center gap-9 md:flex" aria-label="Main">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="group relative font-medium text-deepSpruce transition-colors hover:text-slateCharcoal focus:outline-none focus-visible:ring-2 focus-visible:ring-cyberMint"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-cyberMint transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-5 md:flex">
          <a href="#login" className="font-medium text-slateCharcoal hover:text-deepSpruce">
            Log in
          </a>
          <a
            href="#contact"
            className="rounded-full bg-cyberMint px-6 py-2.5 text-sm font-bold text-slateCharcoal transition hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-deepSpruce focus-visible:ring-offset-2 focus-visible:ring-offset-oatmeal"
          >
            Get started
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-11 w-11 items-center justify-center rounded-full text-deepSpruce hover:bg-softMint md:hidden"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-deepSpruce/10 bg-oatmeal transition-all duration-300 md:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4" aria-label="Mobile">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 font-medium text-deepSpruce hover:bg-softMint"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-3 rounded-full bg-cyberMint px-6 py-3 text-center font-bold text-slateCharcoal"
          >
            Get started
          </a>
        </nav>
      </div>
    </header>
  );
}