"use client";

import * as React from "react";

import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import { HeroSection1, HeroSection2, HeroSection3 } from "./hero";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import { Pause, Play } from "lucide-react";

export function CarouselHero() {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);
    const [count, setCount] = React.useState(0);
    const [isPlaying, setIsPlaying] = React.useState(true);

    const toggleAutoplay = () => {
        if (plugin.current.isPlaying()) {
            plugin.current.stop();
            setIsPlaying(false);
        } else {
            plugin.current.play();
            setIsPlaying(true);
        }
    };

    const plugin = React.useRef(
        Autoplay({
            delay: 7000,
            stopOnInteraction: true,
        })
    );

    React.useEffect(() => {
        if (!api) return;

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap());

        const onSelect = () => {
            setCurrent(api.selectedScrollSnap());
        };

        api.on("select", onSelect);
        api.on("reInit", onSelect);

        return () => {
            api.off("select", onSelect);
            api.off("reInit", onSelect);
        };
    }, [api]);

    return (
        <Carousel
            plugins={[plugin.current]}
            setApi={setApi}
            opts={{
                loop: true,
            }}
            className="relative -mt-17"
        >
            <CarouselContent className="h-[800px] md:h-[920px]">
                <CarouselItem>
                    <HeroSection1 />
                </CarouselItem>

                <CarouselItem>
                    <HeroSection2 />
                </CarouselItem>

                <CarouselItem>
                    <HeroSection3 />
                </CarouselItem>
            </CarouselContent>

            {/* Navigation */}
            <div className="absolute hidden md:flex bottom-8 right-8 z-50 flex items-center gap-3">
                <CarouselPrevious className="static size-12 shadow-none translate-y-0" />
                <CarouselNext className="static size-12 shadow-none translate-y-0" />
            </div>

            <div className="absolute bottom-8 right-8 z-50 hidden items-center gap-3 md:flex">
                <button
                    onClick={toggleAutoplay}
                    className="flex size-12 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur transition hover:bg-black/50"
                    aria-label={isPlaying ? "Pause autoplay" : "Play autoplay"}
                >
                    {isPlaying ? (
                        // Pause Icon
                        <Pause strokeWidth={1} className="size-4"/>
                    ) : (
                        // Play Icon
                        <Play strokeWidth={1} className="size-4"/>
                    )}
                </button>

                <CarouselPrevious className="static size-12 translate-y-0 shadow-none" />
                <CarouselNext className="static size-12 translate-y-0 shadow-none" />
            </div>
        </Carousel>
    );
}