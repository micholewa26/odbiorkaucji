import { Package, ClipboardList, Truck, Banknote } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { steps } from "../data/content";

const icons = [Package, ClipboardList, Truck, Banknote];

export default function HowItWorks() {
  return (
    <section id="jak-to-dziala" className="py-24">
      <div className="container">
        <SectionHeading eyebrow={steps.eyebrow} title={steps.title} />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.items.map((step, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={step.title} delay={i * 0.1} className="h-full">
                <div className="card-glow h-full p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <span className="font-display text-4xl font-bold text-muted">{i + 1}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
