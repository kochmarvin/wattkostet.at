import { Mail, Phone } from "lucide-react";

import { cn } from "@/lib/utils";

interface Contact7Props {
  title?: string;
  description?: string;
  emailLabel?: string;
  emailDescription?: string;
  email?: string;
  phoneLabel?: string;
  phoneDescription?: string;
  phone?: string;
  className?: string;
}

const Contact7 = ({
  title = "Kontakt",
  description = "Nehmen Sie Kontakt mit mir auf – ich helfe Ihnen gerne dabei, bei Strom & Gas zu sparen.",
  emailLabel = "E-Mail",
  emailDescription = "Schreiben Sie mir eine Nachricht, ich antworte schnellstmöglich.",
  email = "anfrage@wattkostet.at",
  phoneLabel = "Telefon",
  phoneDescription = "Rufen Sie mich an für eine persönliche Beratung.",
  phone = "+43 676 912 8040",
  className,
}: Contact7Props) => {
  return (
    <section className={cn("bg-background py-32", className)} id="contact">
      <div className="container">
        <div className="mb-14">
          <h1 className="mt-2 mb-3 text-3xl font-semibold text-balance md:text-4xl">
            {title}
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground">
            {description}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-muted p-6">
            <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
              <Mail className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold">{emailLabel}</p>
            <p className="mb-3 text-muted-foreground">{emailDescription}</p>
            <a
              href={`mailto:${email}`}
              className="font-semibold hover:underline"
            >
              {email}
            </a>
          </div>
          <div className="rounded-lg bg-muted p-6">
            <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
              <Phone className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold">{phoneLabel}</p>
            <p className="mb-3 text-muted-foreground">{phoneDescription}</p>
            <a href={`tel:${phone}`} className="font-semibold hover:underline">
              {phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Contact7 };
