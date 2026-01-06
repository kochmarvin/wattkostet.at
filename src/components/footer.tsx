import React from "react";

import { cn } from "@/lib/utils";

interface Footer7Props {
    logo?: {
        url: string;
        src: string;
        alt: string;
        title: string;
    };
    className?: string;
    sections?: Array<{
        title: string;
        links: Array<{ name: string; href: string }>;
    }>;
    description?: string;
    socialLinks?: Array<{
        icon: React.ReactElement;
        href: string;
        label: string;
    }>;
    copyright?: string;
    legalLinks?: Array<{
        name: string;
        href: string;
    }>;
}

const defaultLegalLinks = [
    { name: "Impressum", href: "/imprint" },
    { name: "Datenschutzerklärung", href: "/privacy" },
];

const Footer7 = ({
    copyright = "© 2026 Wattkostet.at. Alle Rechte vorbehalten.",
    legalLinks = defaultLegalLinks,
    className,
}: Footer7Props) => {
    return (
        <section className={cn("py-32", className)}>
            <div className="container">
                <div className="mt-8 flex flex-col justify-between gap-4 border-t py-8 text-xs font-medium text-muted-foreground md:flex-row md:items-center md:text-left">
                    <p className="order-2 lg:order-1">{copyright}</p>
                    <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
                        {legalLinks.map((link, idx) => (
                            <li key={idx} className="hover:text-primary">
                                <a href={link.href}> {link.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export { Footer7 };
