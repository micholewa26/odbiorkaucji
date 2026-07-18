import { ChevronDown } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { faq } from "../data/content";

export default function Faq() {
  return (
    <section id="faq" className="py-24">
      <div className="container">
        <SectionHeading eyebrow={faq.eyebrow} title={faq.title} />

        <div className="mx-auto max-w-3xl space-y-3">
          {faq.items.map((item, i) => (
            <Reveal key={item.q} delay={i * 0.05}>
              <details className="group rounded-xl border border-border bg-card open:border-primary/40">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-medium [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <ChevronDown
                    className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
                    aria-hidden
                  />
                </summary>
                <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
