
import { cn } from "@/lib/utils";

interface Stats8Props {
    className?: string;
    heading?: string;
    description?: string;
    link?: {
        text: string;
        url: string;
    };
    stats?: Array<{
        id: string;
        value: string;
        label: string;
    }>;
}

const Stats8 = ({
    heading = "Ihre Ersparnis in Zahlen",
    description = "Durchschnittliche Ergebnisse unserer Kunden bei der Tarifoptimierung für Strom und Gas",

    stats = [
        {
            id: "stat-1",
            value: "€700",
            label: "durchschnittliche jährliche Ersparnis",
        },
        {
            id: "stat-2",
            value: "60%",
            label: "durchschnittliche Kostenreduktion",
        },
        {
            id: "stat-3",
            value: "100+",
            label: "zufriedene Kunden in ganz Österreich",
        },
        {
            id: "stat-4",
            value: "15+",
            label: "Energieanbieter im Vergleich",
        },
    ],
    className,
}: Stats8Props) => {
    return (
        <section className={cn("py-32 bg-accent", className)}>
            <div className="container">
                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl font-bold md:text-4xl">{heading}</h2>
                    <p>{description}</p>
                </div>
                <div className="mt-14 grid gap-x-5 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat) => (
                        <div key={stat.id} className="flex flex-col gap-5">
                            <div className="text-6xl font-bold">{stat.value}</div>
                            <p>{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export { Stats8 };
