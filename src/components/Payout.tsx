import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { media } from "../data/content";

/** Drugi film — moment wypłaty kaucji w aplikacji bankowej. */
export default function Payout() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(152_70%_45%_/_0.08)_0%,transparent_55%)]" />
      <div className="container relative">
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
          <Reveal>
            <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 font-mono text-xs uppercase tracking-[0.25em] text-primary">
              Wypłata
            </span>
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
              Przelew na konto, nie bon do sklepu
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Po przeliczeniu opakowań dostajesz rozliczenie na maila, a kaucja
              trafia przelewem na Twoje konto. Żadnych voucherów, terminów
              ważności i stania przy automacie.
            </p>
            <a
              href="#zgloszenie"
              className="group mt-8 inline-flex items-center gap-3 rounded-md bg-primary px-8 py-4 text-lg font-medium text-primary-foreground shadow-glow transition-all hover:shadow-glow-strong"
            >
              Zgłoś odbiór
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            {/* Zoom z przesunięciem w lewo kadruje znak wodny generatora. */}
            <div className="aspect-video overflow-hidden rounded-xl border border-primary/30 shadow-glow">
              <video
                className="h-full w-full origin-left scale-110 object-cover"
                src={media.payout.video}
                poster={media.payout.poster}
                muted
                loop
                playsInline
                autoPlay
                preload="metadata"
                aria-label={media.payout.caption}
              />
            </div>
            <p className="mt-3 text-center text-sm text-muted-foreground">
              {media.payout.caption}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
