
import { Badge } from "../ui/badge";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "../ui/separator";

export function TestimonialsSection() {
    return (
        <section className="relative py-20 m-3">

            <div className="relative flex flex-col h-full space-y-6 justify-center items-center">
                <Badge size={"sm"}>
                    Patient Stories
                </Badge>

                <div className="max-w-md md:max-w-3xl text-center px-8">
                    <h1
                        className="font-heading text-2xl font-semibold text-black leading-tight md:text-3xl">
                        Recovery, Backed by Biology.
                    </h1>
                    <p className="mt-6 text-sm leading-6 text-black/60">
                        Every patient story begins with understanding the biology behind pain.
                    </p>

                </div>
                <div className="grid md:gap-3 rounded-3xl bg-primary max-w-5xl mt-10">

                    <Carousel className="h-full p-3 pt-0 md:pt-3 overflow-hidden w-full">
                        <CarouselContent>
                            <CarouselItem>
                                <div className="flex h-full w-full flex-col rounded-xl bg-white p-8 md:p-10 aspect-video">

                                    <div className="flex gap-4 items-center">
                                        <Avatar className={"h-24 w-24"}>
                                            <AvatarImage src="/avatar/avatar-1.jpg" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                        <div className="">
                                        <p className="text-lg font-medium text-black">
                                            Priya, 44
                                        </p>
                                        <p className="mt-1 text-sm text-black/60">
                                            Chronic Knee Pain • 6 Years
                                        </p>
                                        </div>
                                    </div>

                                    <Separator className={"my-6"} />

                                    {/* Headline */}
                                    <div>
                                        <h2 className="font-heading text-2xl font-semibold text-black">
                                            "My pain wasn't permanent.
                                            <br />
                                            It was measurable."
                                        </h2>
                                    </div>

                                    {/* Metrics */}
                                    <div className="mt-8 grid grid-cols-3 gap-6">
                                        <div>
                                            <p className="text-xs uppercase tracking-wide text-black/50">
                                                MuscleAGE™
                                            </p>
                                            <p className="mt-2 text-2xl font-semibold text-black">
                                                71 <span className="text-black/40">→</span> 58
                                            </p>
                                        </div>

                                        <div>
                                            <p className="text-xs uppercase tracking-wide text-black/50">
                                                Pain Score
                                            </p>
                                            <p className="mt-2 text-2xl font-semibold text-black">
                                                8/10 <span className="text-black/40">→</span> 2/10
                                            </p>
                                        </div>

                                        <div>
                                            <p className="text-xs uppercase tracking-wide text-black/50">
                                                Program
                                            </p>
                                            <p className="mt-2 text-2xl font-semibold text-black">
                                                12 Weeks
                                            </p>
                                        </div>
                                    </div>

                                    {/* Findings */}
                                    <div className="mt-8 rounded-lg w-fit bg-neutral-50 p-5">
                                        <p className="mb-3 text-sm font-semibold text-black">
                                            Key Findings
                                        </p>

                                        <div className="space-y-2 text-sm text-black/80">
                                            <div>✓ Elevated CRP</div>
                                            <div>✓ Stage 1 Sarcopenia</div>
                                            <div>✓ Low Vitamin D</div>
                                        </div>
                                    </div>

                                </div>
                            </CarouselItem>
                            <CarouselItem>
                                <div className="flex h-full w-full flex-col rounded-xl bg-white p-8 md:p-10 aspect-video">

                                    <div className="flex gap-4 items-center">
                                        <Avatar className={"h-24 w-24"}>
                                            <AvatarImage src="/avatar/avatar-3.jpg" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                        <div className="">
                                        <p className="text-lg font-medium text-black">
                                            Rajan, 58
                                        </p>
                                        <p className="mt-1 text-sm text-black/60">
                                        Chronic Knee Pain • 4 Years
                                        </p>
                                        </div>
                                    </div>

                                    <Separator className={"my-6"} />

                                    {/* Headline */}
                                    <div>
                                        <h2 className="font-heading text-2xl font-semibold text-black">
                                        "The surgeon was surprised. So was I."

                                        </h2>
                                    </div>

                                    {/* Metrics */}
                                    <div className="mt-8 grid grid-cols-3 gap-6">
                                        <div>
                                            <p className="text-xs uppercase tracking-wide text-black/50">
                                                MuscleAGE™
                                            </p>
                                            <p className="mt-2 text-2xl font-semibold text-black">
                                            74 → <span className="text-black/40">→</span> 61
                                            </p>
                                        </div>

                                        <div>
                                            <p className="text-xs uppercase tracking-wide text-black/50">
                                                Pain Score
                                            </p>
                                            <p className="mt-2 text-2xl font-semibold text-black">
                                                7/10 <span className="text-black/40">→</span> 3/10
                                            </p>
                                        </div>

                                        <div>
                                            <p className="text-xs uppercase tracking-wide text-black/50">
                                                Program
                                            </p>
                                            <p className="mt-2 text-2xl font-semibold text-black">
                                                16 Weeks
                                            </p>
                                        </div>
                                    </div>

                                    {/* Findings */}
                                    <div className="mt-8 rounded-lg w-fit bg-neutral-50 p-5">
                                        <p className="mb-3 text-sm font-semibold text-black">
                                            Key Findings
                                        </p>

                                        <div className="space-y-2 text-sm text-black/80">
                                            <div>✓ Quadriceps Atrophy</div>
                                            <div>✓ Hamstring Imbalance                                            </div>
                                            <div>✓ Surgery Deferred                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </CarouselItem>
                            <CarouselItem>
                                <div className="flex h-full w-full flex-col rounded-xl bg-white p-8 md:p-10 aspect-video">

                                    <div className="flex gap-4 items-center">
                                        <Avatar className={"h-24 w-24"}>
                                            <AvatarImage src="/avatar/avatar-2.jpg" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                        <div className="">
                                        <p className="text-lg font-medium text-black">
                                            Anika, 37
                                        </p>
                                        <p className="mt-1 text-sm text-black/60">
                                        Neck & Shoulder Pain • 5 Years

                                        </p>
                                        </div>
                                    </div>

                                    <Separator className={"my-6"} />

                                    {/* Headline */}
                                    <div>
                                        <h2 className="font-heading text-2xl font-semibold text-black">
                                        "I thought it was stress. It was structure."

                                        </h2>
                                    </div>

                                    {/* Metrics */}
                                    <div className="mt-8 grid grid-cols-3 gap-6">
                                        <div>
                                            <p className="text-xs uppercase tracking-wide text-black/50">
                                                MuscleAGE™
                                            </p>
                                            <p className="mt-2 text-2xl font-semibold text-black">
                                                52 <span className="text-black/40">→</span> 41
                                            </p>
                                        </div>

                                        <div>
                                            <p className="text-xs uppercase tracking-wide text-black/50">
                                                Pain Score
                                            </p>
                                            <p className="mt-2 text-2xl font-semibold text-black">
                                                6/10 <span className="text-black/40">→</span> 1/10
                                            </p>
                                        </div>

                                        <div>
                                            <p className="text-xs uppercase tracking-wide text-black/50">
                                                Program
                                            </p>
                                            <p className="mt-2 text-2xl font-semibold text-black">
                                                8 Weeks
                                            </p>
                                        </div>
                                    </div>

                                    {/* Findings */}
                                    <div className="mt-8 rounded-lg w-fit bg-neutral-50 p-5">
                                        <p className="mb-3 text-sm font-semibold text-black">
                                            Key Findings
                                        </p>

                                        <div className="space-y-2 text-sm text-black/80">
                                            <div>✓ Elevated CRP</div>
                                            <div>✓ Stage 1 Sarcopenia</div>
                                            <div>✓ Low Vitamin D</div>
                                        </div>
                                    </div>

                                </div>
                            </CarouselItem>

                        </CarouselContent>
                        <div className="mt-3 w-full md:absolute flex bottom-6 right-6 z-50 flex md:justify-end justify-center items-center gap-3">
                            <CarouselPrevious className="static size-12 shadow-none translate-y-0" />
                            <CarouselNext className="static size-12 shadow-none translate-y-0" />
                        </div>
                    </Carousel>

                </div>
            </div>
        </section>
    );
}
