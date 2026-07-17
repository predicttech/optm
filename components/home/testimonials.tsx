
import { Badge } from "../ui/badge";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
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
                <div className="grid md:gap-3 rounded-3xl bg-primary mt-10">

                    <Carousel className="h-full p-3 w-full max-w-100 sm:max-w-full">
                        <CarouselContent>
                            <CarouselItem className="lg:basis-1/2">
                                <div className="grid md:grid-cols-[52%_48%] h-full w-full gap-3 md:gap-6 rounded-xl bg-white p-8 md:p-10">
                                    <div className="flex h-full w-full flex-col ">
                                        <div className="flex gap-4 items-center">

                                            <div className="">
                                                <p className="text-lg font-medium text-black">
                                                    Mr. Manish Agarwal
                                                </p>
                                                <p className="mt-1 text-sm text-black/60">
                                                    Chronic Knee Pain • 10 Years
                                                </p>
                                            </div>
                                        </div>

                                        <Separator className={"my-6"} />

                                        {/* Headline */}
                                        <div>
                                            <h2 className="font-heading text-lg lg:text-xl font-semibold text-black">
                                                "Pain had slowly taken away my freedom to move.
                                                At optm, they treated the biology behind my pain-not just the symptoms."
                                            </h2>
                                        </div>

                                        {/* Metrics */}
                                        <div className="mt-8 flex flex-wrap gap-6">
                                            <div>
                                                <p className="text-xs uppercase tracking-wide text-black/50">
                                                    MuscleAGE™
                                                </p>
                                                <p className="mt-2 text-sm lg:text-lg font-semibold text-black">
                                                    76 → 61
                                                </p>
                                            </div>

                                            <div>
                                                <p className="text-xs uppercase tracking-wide text-black/50">
                                                    Pain Score
                                                </p>
                                                <p className="mt-2 text-sm lg:text-lg font-semibold text-black">
                                                    8/10 → 3/10
                                                </p>
                                            </div>

                                            <div>
                                                <p className="text-xs uppercase tracking-wide text-black/50">
                                                    Program
                                                </p>
                                                <p className="mt-2 text-sm lg:text-lg font-semibold text-black">
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
                                                <div>✓ Muscle Infrastructure Failure</div>
                                                <div>✓ Spinal Compensation & Postural Imbalance</div>
                                                <div>✓ Compounding Damage (Disc / Nerve / Joint)</div>
                                            </div>
                                        </div>
                                    </div>

                                    <video className="h-auto rounded-xl w-80 aspect-[9/16] object-contain"
                                        autoPlay
                                        controls
                                        muted
                                        loop >
                                        <source src="/insta/manish.mp4" type="video/mp4" />
                                    </video>

                                </div>
                            </CarouselItem>

                            <CarouselItem className="lg:basis-1/2">
                                <div className="grid md:grid-cols-[52%_48%] h-full w-full gap-3 md:gap-6 rounded-xl bg-white p-8 md:p-10">
                                    <div className="flex h-full w-full flex-col ">
                                        <div className="flex gap-4 items-center">

                                            <div className="">
                                                <p className="text-lg font-medium text-black">
                                                    Mrs. Sengupta
                                                </p>
                                                <p className="mt-1 text-sm text-black/60">
                                                    Chronic Knee Pain • 7 Years
                                                </p>
                                            </div>
                                        </div>

                                        <Separator className={"my-6"} />

                                        {/* Headline */}
                                        <div>
                                            <h2 className="font-heading text-lg lg:text-xl font-semibold text-black">
                                                "I had been living with pain for years.
                                                At optm, I finally understood the reason behind it—and today, I can move with confidence again."

                                            </h2>
                                        </div>

                                        {/* Metrics */}
                                        <div className="mt-8 flex flex-wrap gap-6">
                                            <div>
                                                <p className="text-xs uppercase tracking-wide text-black/50">
                                                    MuscleAGE™
                                                </p>
                                                <p className="mt-2 text-sm lg:text-lg font-semibold text-black">
                                                    73 → 59
                                                </p>
                                            </div>

                                            <div>
                                                <p className="text-xs uppercase tracking-wide text-black/50">
                                                    Pain Score
                                                </p>
                                                <p className="mt-2 text-sm lg:text-lg font-semibold text-black">
                                                    8/10 → 2/10
                                                </p>
                                            </div>

                                            <div>
                                                <p className="text-xs uppercase tracking-wide text-black/50">
                                                    Program
                                                </p>
                                                <p className="mt-2 text-sm lg:text-lg font-semibold text-black">
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

                                    <video className="h-auto rounded-xl w-80 aspect-[9/16] object-contain"
                                        autoPlay
                                        controls
                                        muted
                                        loop >
                                        <source src="/insta/4.mp4" type="video/mp4" />
                                    </video>

                                </div>
                            </CarouselItem>

                            <CarouselItem className="lg:basis-1/2">
                                <div className="grid md:grid-cols-[52%_48%] h-full w-full gap-3 md:gap-6 rounded-xl bg-white p-8 md:p-10">
                                    <div className="flex h-full w-full flex-col ">
                                        <div className="flex gap-4 items-center">

                                            <div className="">
                                                <p className="text-lg font-medium text-black">
                                                    Mrs. Laxmi subraniam, 69 years old
                                                </p>
                                                <p className="mt-1 text-sm text-black/60">
                                                    Chronic Knee Pain • 12 Years
                                                </p>
                                            </div>
                                        </div>

                                        <Separator className={"my-6"} />

                                        {/* Headline */}
                                        <div>
                                            <h2 className="font-heading text-lg lg:text-xl font-semibold text-black">
                                                "My scans showed damaged knees, but optm looked beyond the scans.
                                                By treating the biology behind my pain, they helped me regain movement without letting pain control my life."

                                            </h2>
                                        </div>

                                        {/* Metrics */}
                                        <div className="mt-8 flex flex-wrap gap-6">
                                            <div>
                                                <p className="text-xs uppercase tracking-wide text-black/50">
                                                    MuscleAGE™
                                                </p>
                                                <p className="mt-2 text-sm lg:text-lg font-semibold text-black">
                                                    77 → 62
                                                </p>
                                            </div>

                                            <div>
                                                <p className="text-xs uppercase tracking-wide text-black/50">
                                                    Pain Score
                                                </p>
                                                <p className="mt-2 text-sm lg:text-lg font-semibold text-black">
                                                    9/10 → 2/10
                                                </p>
                                            </div>

                                            <div>
                                                <p className="text-xs uppercase tracking-wide text-black/50">
                                                    Program
                                                </p>
                                                <p className="mt-2 text-sm lg:text-lg font-semibold text-black">
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
                                                <div>✓ Elevated Inflammatory Markers</div>
                                                <div>✓ Early Muscle Degeneration</div>
                                                <div>✓ Impaired Joint Function</div>
                                            </div>
                                        </div>
                                    </div>

                                    <video className="h-auto rounded-xl w-80 aspect-[9/16] object-contain"
                                        autoPlay
                                        controls
                                        muted
                                        loop >
                                        <source src="/insta/2.mp4" type="video/mp4" />
                                    </video>

                                </div>
                            </CarouselItem>

                            <CarouselItem className="lg:basis-1/2">
                                <div className="grid md:grid-cols-[52%_48%] h-full w-full gap-3 md:gap-6 rounded-xl bg-white p-8 md:p-10">
                                    <div className="flex h-full w-full flex-col ">
                                        <div className="flex gap-4 items-center">

                                            <div className="">
                                                <p className="text-lg font-medium text-black">
                                                    Mrs. Renu Chhabra
                                                </p>
                                                <p className="mt-1 text-sm text-black/60">
                                                    Chronic Joint Pain
                                                </p>
                                            </div>
                                        </div>

                                        <Separator className={"my-6"} />

                                        {/* Headline */}
                                        <div>
                                            <h2 className="font-heading text-lg lg:text-xl font-semibold text-black">
                                                "I took treatment at optm and today I am feeling much better. I have complete trust in optm because the treatment is completely natural, without medicines or side effects. I will continue with optm and recommend everyone to experience this approach."

                                            </h2>
                                        </div>

                                        {/* Metrics */}
                                        <div className="mt-8 flex flex-wrap gap-6">
                                            <div>
                                                <p className="text-xs uppercase tracking-wide text-black/50">
                                                    MuscleAGE™
                                                </p>
                                                <p className="mt-2 text-sm lg:text-lg font-semibold text-black">
                                                    74 → 58
                                                </p>
                                            </div>

                                            <div>
                                                <p className="text-xs uppercase tracking-wide text-black/50">
                                                    Pain Score
                                                </p>
                                                <p className="mt-2 text-sm lg:text-lg font-semibold text-black">
                                                    8/10 → 2/10

                                                </p>
                                            </div>

                                            <div>
                                                <p className="text-xs uppercase tracking-wide text-black/50">
                                                    Program
                                                </p>
                                                <p className="mt-2 text-sm lg:text-lg font-semibold text-black">
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
                                                <div>✓ Muscle Weakness & Functional Decline</div>
                                                <div>✓ Elevated Inflammatory Biomarkers</div>
                                                <div>✓ Reduced Mobility & Muscle Recovery</div>
                                            </div>
                                        </div>
                                    </div>

                                    <video className="h-auto rounded-xl w-80 aspect-[9/16] object-contain"
                                        autoPlay
                                        controls
                                        muted
                                        loop >
                                        <source src="/insta/5.mp4" type="video/mp4" />
                                    </video>

                                </div>
                            </CarouselItem>

                            <CarouselItem className="lg:basis-1/2">
                                <div className="grid md:grid-cols-[52%_48%] h-full w-full gap-3 md:gap-6 rounded-xl bg-white p-8 md:p-10">
                                    <div className="flex h-full w-full flex-col ">
                                        <div className="flex gap-4 items-center">

                                            <div className="">
                                                <p className="text-lg font-medium text-black">
                                                    Mrs. Rajesh Yadav
                                                </p>
                                                <p className="mt-1 text-sm text-black/60">
                                                    Knee Osteoarthritis • 2.5 Years
                                                </p>
                                            </div>
                                        </div>

                                        <Separator className={"my-6"} />

                                        {/* Headline */}
                                        <div>
                                            <h2 className="font-heading text-lg lg:text-xl font-semibold text-black">

                                                "When surgery seemed like the only option, optm helped me discover the biological cause of my knee pain. Within 42 days, I experienced meaningful recovery through a completely non-surgical, natural treatment approach."

                                            </h2>
                                        </div>

                                        {/* Metrics */}
                                        <div className="mt-8 flex flex-wrap gap-6">
                                            <div>
                                                <p className="text-xs uppercase tracking-wide text-black/50">
                                                    MuscleAGE™
                                                </p>
                                                <p className="mt-2 text-sm lg:text-lg font-semibold text-black">
                                                    73 → 58
                                                </p>
                                            </div>

                                            <div>
                                                <p className="text-xs uppercase tracking-wide text-black/50">
                                                    Pain Score
                                                </p>
                                                <p className="mt-2 text-sm lg:text-lg font-semibold text-black">
                                                    9/10 → 2/10

                                                </p>
                                            </div>

                                            <div>
                                                <p className="text-xs uppercase tracking-wide text-black/50">
                                                    Program
                                                </p>
                                                <p className="mt-2 text-sm lg:text-lg font-semibold text-black">
                                                    42 Days
                                                </p>
                                            </div>
                                        </div>

                                        {/* Findings */}
                                        <div className="mt-8 rounded-lg w-fit bg-neutral-50 p-5">
                                            <p className="mb-3 text-sm font-semibold text-black">
                                                Key Findings
                                            </p>

                                            <div className="space-y-2 text-sm text-black/80">
                                                <div>✓ Muscle Weakness & Functional Decline</div>
                                                <div>✓ Elevated Inflammatory Biomarkers</div>
                                                <div>✓ Reduced Mobility & Muscle Recovery</div>
                                            </div>
                                        </div>
                                    </div>

                                    <video className="h-auto rounded-xl w-80 aspect-[9/16] object-contain"
                                        autoPlay
                                        controls
                                        muted
                                        loop >
                                        <source src="/insta/3.mp4" type="video/mp4" />
                                    </video> 
                                </div>
                            </CarouselItem>

                        </CarouselContent>
                        <div className="absolute -bottom-20 z-50 left-1/2 flex -translate-x-1/2 items-center gap-3">
                            <CarouselPrevious className="static size-12 translate-y-0 shadow-none" />
                            <CarouselNext className="static size-12 translate-y-0 shadow-none" />
                        </div>
                    </Carousel> 
                </div>
            </div>
        </section>
    );
}
