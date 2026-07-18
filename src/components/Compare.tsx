import { X, Check } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { compare } from "../data/content";

export default function Compare() {
  return (
    <section className="py-24">
      <div className="container">
        <SectionHeading eyebrow={compare.eyebrow} title={compare.title} />

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          <Reveal className="h-full">
            <div className="h-full rounded-xl border border-border bg-card/50 p-8">
              <h3 className="font-display text-lg font-semibold text-muted-foreground">
                {compare.classic.heading}
              </h3>
              <ul className="mt-6 space-y-4">
                {compare.classic.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-red-400/70" aria-hidden />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="h-full">
            <div className="h-full rounded-xl border border-primary/40 bg-card p-8 shadow-glow">
              <h3 className="font-display text-lg font-semibold text-primary">
                {compare.ours.heading}
              </h3>
              <ul className="mt-6 space-y-4">
                {compare.ours.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
