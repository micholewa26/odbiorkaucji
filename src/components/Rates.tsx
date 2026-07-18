import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { pricing, rates } from "../data/content";

const zl = (n: number) =>
  n.toLocaleString("pl-PL", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " zł";

export default function Rates() {
  const [items, setItems] = useState(pricing.minItems);

  const deposit = items * pricing.deposit;
  const fee = items * pricing.serviceFee;
  const payout = deposit - fee;

  return (
    <section id="stawki" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,hsl(152_70%_45%_/_0.08)_0%,transparent_55%)]" />
      <div className="container relative">
        <SectionHeading eyebrow={rates.eyebrow} title={rates.title} subtitle={rates.subtitle} />

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          <Reveal className="h-full">
            <div className="card-glow h-full p-8">
              <h3 className="font-display text-lg font-semibold">Stawki kaucji</h3>
              <ul className="mt-6 space-y-4">
                {rates.items.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-center justify-between gap-4 border-b border-border/60 pb-4 last:border-0 last:pb-0"
                  >
                    <span className="text-sm text-muted-foreground">{item.label}</span>
                    <span className="font-display text-lg font-bold text-primary">
                      {item.value}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-muted-foreground">{rates.feeNote}</p>
              <p className="mt-3 text-sm text-muted-foreground">{rates.glassNote}</p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="h-full">
            <div className="card-glow h-full p-8">
              <h3 className="font-display text-lg font-semibold">Policz swoją wypłatę</h3>
              <div className="mt-6 flex items-center justify-between gap-4">
                <span className="text-sm text-muted-foreground">Puszki i butelki:</span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setItems((n) => Math.max(pricing.minItems, n - pricing.stepItems))}
                    aria-label="Mniej opakowań"
                    className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-14 text-center font-display text-xl font-bold">{items}</span>
                  <button
                    onClick={() => setItems((n) => Math.min(pricing.maxItems, n + pricing.stepItems))}
                    aria-label="Więcej opakowań"
                    className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <dl className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Kaucja</dt>
                  <dd className="font-medium">{zl(deposit)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Opłata serwisowa</dt>
                  <dd className="font-medium">−{zl(fee)}</dd>
                </div>
                <div className="flex justify-between border-t border-border/60 pt-3">
                  <dt className="font-semibold">Na Twoje konto</dt>
                  <dd className="font-display text-xl font-bold text-primary">{zl(payout)}</dd>
                </div>
              </dl>
              <p className="mt-4 text-xs text-muted-foreground">
                Wyliczenie przykładowe (kaucja 0,50 zł za sztukę). Ostateczna kwota
                zależy od liczby opakowań przyjętych po weryfikacji.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
