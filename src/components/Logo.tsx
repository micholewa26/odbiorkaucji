import { Recycle } from "lucide-react";

/** Text logo — no image asset needed for the validation phase. */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 font-display font-bold ${className}`}>
      <Recycle className="h-6 w-6 text-primary" aria-hidden />
      <span>
        Odbiór<span className="text-primary">Kaucji</span>
        <span className="text-muted-foreground">.pl</span>
      </span>
    </span>
  );
}
