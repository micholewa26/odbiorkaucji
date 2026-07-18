interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 font-mono text-xs uppercase tracking-[0.25em] text-primary">
        {eyebrow}
      </span>
      <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
