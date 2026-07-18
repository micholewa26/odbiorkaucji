import { Building2, CalendarCheck, FileSpreadsheet, Users } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { business } from "../data/content";

const icons = [CalendarCheck, Users, FileSpreadsheet, Building2];

export default function Business() {
  return (
    <section id="dla-firm" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="container relative">
        <SectionHeading
          eyebrow={business.eyebrow}
          title={business.title}
          subtitle={business.subtitle}
        />

        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
          {business.points.map((point, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={point} delay={i * 0.08}>
                <div className="card-glow flex items-center gap-4 p-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <p className="text-sm">{point}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-12 text-center">
          <a
            href="#zgloszenie"
            className="inline-block rounded-md border border-primary/50 px-8 py-3 font-medium text-primary transition-all hover:border-primary hover:bg-primary/10"
          >
            {business.cta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
