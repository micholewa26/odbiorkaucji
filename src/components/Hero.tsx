import { ArrowRight, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { hero, media, site } from "../data/content";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(152_70%_45%_/_0.15)_0%,transparent_60%)]" />

      <div className="container relative pb-20 pt-32">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
            <MapPin className="h-4 w-4" aria-hidden />
            {hero.badge} — {site.city}
          </span>

          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-glow md:text-6xl">
            {hero.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            {hero.subtitle}
          </p>

          {/* Film z odbioru: autoplay bez dźwięku; lekki zoom z przesunięciem
              w lewo kadruje znak wodny generatora przy prawej krawędzi. */}
          <div className="mx-auto mt-10 aspect-video max-w-2xl overflow-hidden rounded-xl border border-primary/30 shadow-glow">
            <video
              className="h-full w-full origin-left scale-110 object-cover"
              src={media.handover.video}
              poster={media.handover.poster}
              autoPlay
              muted
              loop
              playsInline
              aria-label={media.handover.caption}
            />
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#zgloszenie"
              className="group inline-flex items-center gap-3 rounded-md bg-primary px-8 py-4 text-lg font-medium text-primary-foreground shadow-glow transition-all hover:shadow-glow-strong"
            >
              {hero.cta}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#jak-to-dziala"
              className="rounded-md border border-primary/50 px-8 py-4 text-lg font-medium text-primary transition-all hover:border-primary hover:bg-primary/10"
            >
              {hero.ctaSecondary}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
