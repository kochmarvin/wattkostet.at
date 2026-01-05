import { Star } from "lucide-react";

import { cn } from "@/lib/utils";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface Hero3Props {
    heading?: string;
    description?: string;
    buttons?: {
        primary?: {
            text: string;
            url: string;
            className?: string;
        };
        secondary?: {
            text: string;
            url: string;
        };
    };
    reviews?: {
        count: number;
        avatars: {
            src: string;
            alt: string;
        }[];
        rating?: number;
    };
    className?: string;
}

const Hero3 = ({

    description = "Als unabhängiger Energieberater ermögliche ich durch meine Zusammenarbeit mit zahlreichen Energieanbietern in Österreich bessere Konditionen als marktübliche Tarife und gebe diese direkt an meine Kunden weiter. Persönlich, kostenlos und vertrauensvoll.",
    buttons = {
        primary: {
            text: "Jetzt kontaktieren",
            url: "#contact",
        },
        secondary: {
            text: "Mehr erfahren",
            url: "#",
        },
    },
    reviews = {
        count: 100,
        rating: 5.0,
        avatars: [
            {
                src: "/profile.png",
                alt: "Avatar 1",
            },
            {
                src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
                alt: "Avatar 2",
            },
            {
                src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
                alt: "Avatar 3",
            },
            {
                src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
                alt: "Avatar 4",
            },
            {
                src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp",
                alt: "Avatar 5",
            },
        ],
    },
    className,
}: Hero3Props) => {
    return (
        <section className={cn("py-24 relative overflow-hidden", className)}>
            <div className="container grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
                <div className="relative mx-auto flex flex-col items-center text-center md:ml-auto lg:max-w-3xl lg:items-start lg:text-left">

                    <h1 className="my-6 text-4xl font-bold text-pretty lg:text-6xl xl:text-7xl">
                        <span className="relative">
                            <img
                                src="/yasko.png"
                                alt="placeholder hero"
                                className="rounded-md absolute bottom-full left-1/2 -translate-x-1/2 pointer-none w-full sm:hidden"
                            />Strom & Gas
                        </span>
                        <br />
                        günstiger
                    </h1>
                    <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
                        {description}
                    </p>
                    <div className="mb-12 flex w-fit flex-col items-center gap-4 sm:flex-row">
                        <span className="inline-flex items-center -space-x-4">
                            {reviews.avatars.map((avatar, index) => (
                                <Avatar key={index} className="size-12 border">
                                    <AvatarImage src={avatar.src} alt={avatar.alt} />
                                </Avatar>
                            ))}
                        </span>
                        <div>
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, index) => (
                                    <Star
                                        key={index}
                                        className="size-5 fill-yellow-400 text-yellow-400"
                                    />
                                ))}
                                <span className="mr-1 font-semibold">
                                    {reviews.rating?.toFixed(1)}
                                </span>
                            </div>
                            <p className="text-left font-medium text-muted-foreground">
                                von {reviews.count}+ Kunden
                            </p>
                        </div>
                    </div>
                    <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
                        {buttons.primary && (
                            <Button asChild className="w-full sm:w-auto">
                                <a href={buttons.primary.url}>{buttons.primary.text}</a>
                            </Button>
                        )}
                    </div>
                </div>
                <div className="flex">
                    {/* <Crown className="size-10 absolute top-20 right-[22.5%] rotate-[25deg] text-amber-600" /> */}
                    <div className="hidden md:block rounded-md absolute bottom-0 left-1/2 lg:left-1/3 pointer-none w-3/4 z-10">
                        <div className="relative">

                            <img
                                src="/yasko.png"
                                alt="placeholder hero"

                            />

                            <div className="absolute right-0 top-0 left-2/3 -translate-x-1/2 h-full -z-10 w-2/3 ">
                                {/* <div className="flex items-center gap-2 flex-wrap">
                                    {Array.from({ length: 1000 }).map((_, index) => {
                                        return (
                                            <>
                                                {
                                                    index % 2 == 0 ? (
                                                        <Zap key={index} className="size-5 text-amber-600 rotate-[15deg] opacity-15" />
                                                    ) : <Lightbulb key={index} className="size-5 text-amber-600 rotate-[15deg] opacity-15" />

                                                }
                                            </>
                                        )
                                    })}
                                </div> */}



                            </div>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="animate-pulse rotate-20 size-20 text-amber-300 absolute top-32 right-[40%]">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                            </svg>



                            {/* <div className="hidden md:block absolute -bottom-32 left-1/5 pointer-none rounded-full bg-gradient-to-r from-gray-50 to-yellow-400 rotate-180 opacity-50  size-96 -z-10">
                            </div> */}
                        </div>

                    </div>
                </div>
            </div>
        </section >
    );
};

export { Hero3 };
