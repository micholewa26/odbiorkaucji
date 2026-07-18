import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";
import Logo from "../components/Logo";

interface LegalLayoutProps {
  title: string;
  children: ReactNode;
}

/** Shared frame for the legal subpages (terms, privacy policy). */
export default function LegalLayout({ title, children }: LegalLayoutProps) {
  return (
    <div className="min-h-viewport">
      <header className="border-b border-border/60">
        <div className="container flex h-20 items-center justify-between">
          <a href="#top" aria-label="OdbiórKaucji.pl — strona główna">
            <Logo className="text-lg" />
          </a>
          <a
            href="#top"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Wróć na stronę główną
          </a>
        </div>
      </header>

      <main className="container max-w-3xl py-16">
        <h1 className="font-display text-3xl font-bold tracking-tight md:text-4xl">{title}</h1>
        <div className="prose-legal mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground [&_h2]:font-display [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-foreground [&_li]:mt-2 [&_ol]:list-decimal [&_ol]:pl-5 [&_ul]:list-disc [&_ul]:pl-5">
          {children}
        </div>
      </main>
    </div>
  );
}
