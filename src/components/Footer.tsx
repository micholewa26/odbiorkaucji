import Logo from "./Logo";
import { site } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="container flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <Logo className="text-base" />
        <nav aria-label="Prawne" className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
          <a href="#/regulamin" className="text-muted-foreground transition-colors hover:text-primary">
            Regulamin
          </a>
          <a
            href="#/polityka-prywatnosci"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            Polityka prywatności
          </a>
          <a
            href={`mailto:${site.email}`}
            className="font-mono text-muted-foreground transition-colors hover:text-primary"
          >
            {site.email}
          </a>
        </nav>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
