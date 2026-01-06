import { CheckCircle2, Timer, Zap, ZoomIn } from "lucide-react";

import { cn } from "@/lib/utils";

interface Feature16Props {
  className?: string;
}

const Feature16 = ({ className }: Feature16Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <p className="mb-4 text-sm text-muted-foreground lg:text-base">
          WARUM MICH
        </p>
        <h2 className="text-3xl font-medium lg:text-4xl">Ihre Vorteile</h2>
        <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-lg bg-accent p-5">
            <span className="mb-8 flex size-12 items-center justify-center rounded-full bg-background">
              <Timer className="size-6" />
            </span>
            <h3 className="mb-2 text-xl font-medium">Schnell & Unkompliziert</h3>
            <p className="leading-7 text-muted-foreground">
              Innerhalb weniger Minuten analysiere ich Ihre aktuellen Tarife und finde den günstigsten Anbieter für Sie. Keine langen Wartezeiten, keine komplizierten Formulare.
            </p>
          </div>
          <div className="rounded-lg bg-accent p-5">
            <span className="mb-8 flex size-12 items-center justify-center rounded-full bg-background">
              <ZoomIn className="size-6" />
            </span>
            <h3 className="mb-2 text-xl font-medium">Gründliche Analyse</h3>
            <p className="leading-7 text-muted-foreground">
              Ich vergleiche alle verfügbaren Tarife von über 15 Energieanbietern in Österreich und garantiere Ihnen den absolut günstigsten Preis für Ihre individuellen Bedürfnisse.
            </p>
          </div>
          <div className="rounded-lg bg-accent p-5">
            <span className="mb-8 flex size-12 items-center justify-center rounded-full bg-background">
              <Zap className="size-6" />
            </span>
            <h3 className="mb-2 text-xl font-medium">Kostenlos & Persönlich</h3>
            <p className="leading-7 text-muted-foreground">
              Meine Beratung ist vollkommen kostenlos und unverbindlich. Ich nehme mir Zeit für Sie und erkläre jeden Schritt persönlich – von der Analyse bis zum Wechsel.
            </p>
          </div>
          <div className="rounded-lg bg-accent p-5">
            <span className="mb-8 flex size-12 items-center justify-center rounded-full bg-background">
              <CheckCircle2 className="size-6" />
            </span>
            <h3 className="mb-2 text-xl font-medium">Alles aus einer Hand</h3>
            <p className="leading-7 text-muted-foreground">
              Sie müssen nichts tun – ich wickle alles für Sie ab. Von der Analyse über den Anbieterwechsel bis zur Kündigung beim alten Versorger. Sie sparen Zeit und Mühe, während ich mich um alle Formalitäten kümmere.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature16 };
