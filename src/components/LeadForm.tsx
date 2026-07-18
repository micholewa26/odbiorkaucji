import { useState } from "react";
import type { FormEvent } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { FORM_ENDPOINT, form } from "../data/content";

type Status = "idle" | "sending" | "success" | "error";

const inputClass =
  "w-full rounded-md border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary";

export default function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const el = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(el),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      el.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="zgloszenie" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(152_70%_45%_/_0.1)_0%,transparent_65%)]" />
      <div className="container relative">
        <SectionHeading eyebrow={form.eyebrow} title={form.title} subtitle={form.subtitle} />

        <Reveal className="mx-auto max-w-2xl">
          {status === "success" ? (
            <div className="card-glow flex flex-col items-center gap-4 p-10 text-center">
              <CheckCircle2 className="h-12 w-12 text-primary" aria-hidden />
              <p className="text-lg">{form.success}</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="card-glow space-y-5 p-8">
              {/* Honeypot antyspamowy — ukryte pole, boty je wypełniają. */}
              <input
                type="text"
                name="firma_www"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                    Imię
                  </label>
                  <input
                    id="name"
                    name="imie"
                    required
                    autoComplete="given-name"
                    placeholder="Jan"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-medium">
                    Telefon
                  </label>
                  <input
                    id="phone"
                    name="telefon"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="600 000 000"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="jan@przyklad.pl"
                  className={inputClass}
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-3">
                <div>
                  <label htmlFor="district" className="mb-1.5 block text-sm font-medium">
                    Dzielnica
                  </label>
                  <select id="district" name="dzielnica" required className={inputClass}>
                    <option value="">Wybierz…</option>
                    {form.districts.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="bags" className="mb-1.5 block text-sm font-medium">
                    Liczba worków
                  </label>
                  <select id="bags" name="liczba_workow" required className={inputClass}>
                    {["1", "2", "3", "4", "5+"].map((n) => (
                      <option key={n} value={n}>
                        {n}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="type" className="mb-1.5 block text-sm font-medium">
                    Zgłaszam jako
                  </label>
                  <select id="type" name="typ_klienta" required className={inputClass}>
                    <option value="dom">Dom / mieszkanie</option>
                    <option value="firma">Firma / lokal</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                  Uwagi <span className="text-muted-foreground">(opcjonalnie)</span>
                </label>
                <textarea
                  id="message"
                  name="uwagi"
                  rows={3}
                  placeholder="Np. preferowane dni odbioru, kod do bramy…"
                  className={inputClass}
                />
              </div>

              <label className="flex items-start gap-3 text-xs text-muted-foreground">
                <input
                  type="checkbox"
                  name="zgoda"
                  value="tak"
                  required
                  className="mt-0.5 h-4 w-4 shrink-0 accent-[hsl(152,70%,45%)]"
                />
                <span>
                  {form.consent}{" "}
                  <a href="#/polityka-prywatnosci" className="underline hover:text-primary">
                    Polityka prywatności
                  </a>
                </span>
              </label>

              {status === "error" && (
                <p role="alert" className="rounded-md border border-red-400/40 bg-red-400/10 p-3 text-sm text-red-300">
                  {form.error}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="group inline-flex w-full items-center justify-center gap-3 rounded-md bg-primary px-8 py-4 text-lg font-medium text-primary-foreground shadow-glow transition-all hover:shadow-glow-strong disabled:opacity-60"
              >
                {status === "sending" ? (
                  <Loader2 className="h-5 w-5 animate-spin" aria-hidden />
                ) : (
                  <Send className="h-5 w-5" aria-hidden />
                )}
                {status === "sending" ? "Wysyłanie…" : form.submit}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
