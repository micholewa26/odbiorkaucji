import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const links = [
  { label: "Jak to działa", href: "#jak-to-dziala" },
  { label: "Stawki", href: "#stawki" },
  { label: "Dla firm", href: "#dla-firm" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on Escape and when the viewport grows past md,
  // and lock body scroll while it is open.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    mq.addEventListener("change", onChange);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      mq.removeEventListener("change", onChange);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        solid
          ? "border-border/60 bg-background/85 backdrop-blur-lg"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav aria-label="Główna" className="container flex h-20 items-center justify-between">
        <a href="#top" aria-label="OdbiórKaucji.pl — strona główna">
          <Logo className="text-lg md:text-xl" />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#zgloszenie"
            className="rounded-md bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-all hover:shadow-glow"
          >
            Zgłoś odbiór
          </a>
        </div>

        <button
          className="text-foreground md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobilne"
          className="max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-border/60 bg-background/95 backdrop-blur-lg md:hidden"
        >
          <div className="container flex flex-col gap-1 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#zgloszenie"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-primary px-3 py-3 text-center text-sm font-medium text-primary-foreground"
            >
              Zgłoś odbiór
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
