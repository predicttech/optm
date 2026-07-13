"use client"
import { Badge } from "../ui/badge";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "../ui/button";
import { useState } from "react";

export function ScienceSection() {
    const [openCard, setOpenCard] = useState<number | null>(null);
    return (
        <section className="relative py-20 pb-40 m-3">

            <div className="relative mx-auto flex max-w-5xl flex-col h-full space-y-6">
                <Badge size={"sm"}>
                    The science
                </Badge>

                <div className="max-w-md md:max-w-3xl">
                    <h1
                        className="font-heading text-2xl font-semibold text-black leading-tight md:text-3xl">
                        The Science
                        <br />
                        Behind Better Movement.
                    </h1>
                    <p className="mt-6 text-sm leading-6 text-black/60">
                        Understanding begins with evidence.
                    </p>

                </div>
                <div className="grid md:gap-3 rounded-3xl bg-primary max-w-5xl mt-10 md:grid-cols-2 ">

                </div>
            </div>

            <Carousel className="w-full max-w-5xl mx-auto">
                <CarouselContent className="-ml-1">

                    <CarouselItem className="basis-1/1 pl-1 lg:basis-1/3">
                        <div className="group relative overflow-hidden rounded-3xl border border-[#D5BBEA] bg-[#D5BBEA]/10 h-[400px]">
                            {/* Default Content */}
                            <div className="p-6 justify-between flex flex-col h-full transition-all duration-600 group-hover:scale-[0.98]">
                                <div className=" space-y-6">
                                    <Badge>
                                        MuscleAGE™ · COASI
                                    </Badge>


                                    <img
                                        src="/logos/nih.png"
                                        alt="After"
                                        className="w-60 h-fit object-cover"
                                    />


                                    <h2 className="text-xl font-semibold">
                                        Published in a peer-reviewed NIH-indexed journal and conducted under approved ethics protocols.

                                    </h2>

                                    <p className="text-sm">
                                        Geriatr Gerontol Int. 2026  <br /> Jun;26(6):e70608.
                                        <br /> doi: 10.1111/ggi.70608.

                                    </p>
                                </div>
                                <Button
                                    variant={"outline"}
                                    className="mt-4 shadow-none md:hidden w-full"
                                    onClick={() =>
                                        setOpenCard(openCard === 0 ? null : 0)
                                    }
                                >
                                    {openCard === 0 ? "Hide Details" : "View Details"}
                                </Button>
                            </div>


                            <div
                                className={`
        absolute inset-0
        bg-[#D5BBEA]/20
        backdrop-blur-md
        p-6
        transition-transform
        duration-500
        ease-out

        md:translate-y-full
        md:group-hover:translate-y-0

        ${openCard === 0
                                        ? "translate-y-0"
                                        : "translate-y-full"
                                    }
    `}
                            >
                                <div className="flex h-full flex-col justify-between">
                                    <div className=" space-y-4">

                                        <h2 className="text-xl font-semibold">
                                            Published in a peer-reviewed NIH-indexed journal and conducted under approved ethics protocols.

                                        </h2>

                                        <p className="text-sm">
                                            MuscleAGE was validated through a 243-participant case-control study using 14 biomarkers spanning inflammation, metabolism, body composition, physical performance, and biological ageing.

                                        </p> 
                                    </div>
                                    <div className="w-full flex flex-col gap-4">
                                        <Button>
                                            See report
                                        </Button>
                                        <Button
                                            variant="outline"
                                            className="md:hidden shadow-none"
                                            onClick={() => setOpenCard(null)}
                                        >
                                            Close
                                        </Button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="basis-1/1 pl-1 lg:basis-1/3">
                        <div className="group relative overflow-hidden rounded-3xl border border-[#D5BBEA] bg-[#D5BBEA]/10 h-[400px]">
                            {/* Default Content */}
                            <div className="p-6 justify-between flex flex-col h-full transition-all duration-600 group-hover:scale-[0.98]">
                                <div className=" space-y-6">
                                    <Badge>
                                    Bio-Musculo Index™ · Diagnostic Protocol
                                    </Badge>


                                    <img
                                        src="/logos/nih.png"
                                        alt="After"
                                        className="w-60 h-fit object-cover"
                                    />


                                    <h2 className="text-xl font-semibold">
                                    Published in a peer-reviewed journal

                                    </h2>

                                    <p className="text-sm">
                                    Ganguly A. Caspian J Intern Med. 2019;10(1):25-35. doi: 10.22088/cjim.10.1.25. PMID: 30858938


                                    </p>
                                </div>
                                <Button
                                    variant={"outline"}
                                    className="mt-4 shadow-none md:hidden w-full"
                                    onClick={() =>
                                        setOpenCard(openCard === 0 ? null : 0)
                                    }
                                >
                                    {openCard === 0 ? "Hide Details" : "View Details"}
                                </Button>
                            </div>


                            <div
                                className={`
        absolute inset-0
        bg-[#D5BBEA]/20
        backdrop-blur-md
        p-6
        transition-transform
        duration-500
        ease-out

        md:translate-y-full
        md:group-hover:translate-y-0

        ${openCard === 0
                                        ? "translate-y-0"
                                        : "translate-y-full"
                                    }
    `}
                            >
                                <div className="flex h-full flex-col justify-between">
                                    <div className=" space-y-4">

                                        <h2 className="text-xl font-semibold">
                                            Published in a peer-reviewed NIH-indexed journal and conducted under approved ethics protocols.

                                        </h2>

                                        
                                        <p className="text-sm">
                                        297 patients with osteoarthritic disorders vs. 315 without, cross-sectional study. CRP, CK-MM, and AldoA evaluated as diagnostic biomarkers. Diagnostic accuracy (AUC) of 0.91 for AldoA.

                                        </p>
                                    </div>
                                    <div className="w-full flex flex-col gap-4">
                                        <Button>
                                            See report
                                        </Button>
                                        <Button
                                            variant="outline"
                                            className="md:hidden shadow-none"
                                            onClick={() => setOpenCard(null)}
                                        >
                                            Close
                                        </Button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="basis-1/1 pl-1 lg:basis-1/3">
                        <div className="group relative overflow-hidden rounded-3xl border border-[#D5BBEA] bg-[#D5BBEA]/10 h-[400px]">
                            {/* Default Content */}
                            <div className="p-6 justify-between flex flex-col h-full transition-all duration-600 group-hover:scale-[0.98]">
                                <div className=" space-y-6">
                                    <Badge>
                                    OPTM Method™ · Treatment Protocol

                                    </Badge>


                                    <img
                                        src="/logos/nih.png"
                                        alt="After"
                                        className="w-60 h-fit object-cover"
                                    />


                                    <h2 className="text-xl font-semibold">
                                    Published in a peer-reviewed, PubMed-indexed journal
                                    </h2>

                                    <p className="text-sm">
                                    Ganguly A. Caspian J Intern Med. 2019;10(2):183-196. PMID: 31363397


                                    </p>
                                </div>
                                <Button
                                    variant={"outline"}
                                    className="mt-4 shadow-none md:hidden w-full"
                                    onClick={() =>
                                        setOpenCard(openCard === 0 ? null : 0)
                                    }
                                >
                                    {openCard === 0 ? "Hide Details" : "View Details"}
                                </Button>
                            </div>


                            <div
                                className={`
        absolute inset-0
        bg-[#D5BBEA]/20
        backdrop-blur-md
        p-6
        transition-transform
        duration-500
        ease-out

        md:translate-y-full
        md:group-hover:translate-y-0

        ${openCard === 0
                                        ? "translate-y-0"
                                        : "translate-y-full"
                                    }
    `}
                            >
                                <div className="flex h-full flex-col justify-between">
                                    <div className=" space-y-4">

                                        <h2 className="text-xl font-semibold">
                                        Published in a peer-reviewed, PubMed-indexed journal

                                        </h2>

                                        <p className="text-sm">
                                        153-patient study, average age 59.9 years. Topical phytotherapeutic protocol normalized elevated CK-MM and AldoA within 6 weeks (p&lt;0.0001), with significant improvement across VAS, WOMAC, and KOOS scores.

                                        </p>

                                       
                                    </div>
                                    <div className="w-full flex flex-col gap-4">
                                        <Button>
                                            See report
                                        </Button>
                                        <Button
                                            variant="outline"
                                            className="md:hidden shadow-none"
                                            onClick={() => setOpenCard(null)}
                                        >
                                            Close
                                        </Button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="basis-1/1 pl-1 lg:basis-1/3">
                        <div className="group relative overflow-hidden rounded-3xl border border-[#D5BBEA] bg-[#D5BBEA]/10 h-[400px]">
                            {/* Default Content */}
                            <div className="p-6 justify-between flex flex-col h-full transition-all duration-600 group-hover:scale-[0.98]">
                                <div className=" space-y-6">
                                    <Badge>
                                        MuscleAGE™ · COASI
                                    </Badge>


                                    <img
                                        src="/logos/nih.png"
                                        alt="After"
                                        className="w-60 h-fit object-cover"
                                    />


                                    <h2 className="text-xl font-semibold">
                                        Published in a peer-reviewed NIH-indexed journal and conducted under approved ethics protocols.

                                    </h2>

                                    <p className="text-sm">
                                        Geriatr Gerontol Int. 2026  <br /> Jun;26(6):e70608.
                                        <br /> doi: 10.1111/ggi.70608.

                                    </p>
                                </div>
                                <Button
                                    variant={"outline"}
                                    className="mt-4 shadow-none md:hidden w-full"
                                    onClick={() =>
                                        setOpenCard(openCard === 0 ? null : 0)
                                    }
                                >
                                    {openCard === 0 ? "Hide Details" : "View Details"}
                                </Button>
                            </div>


                            <div
                                className={`
        absolute inset-0
        bg-[#D5BBEA]/20
        backdrop-blur-md
        p-6
        transition-transform
        duration-500
        ease-out

        md:translate-y-full
        md:group-hover:translate-y-0

        ${openCard === 0
                                        ? "translate-y-0"
                                        : "translate-y-full"
                                    }
    `}
                            >
                                <div className="flex h-full flex-col justify-between">
                                    <div className=" space-y-4">

                                        <h2 className="text-xl font-semibold">
                                            Published in a peer-reviewed NIH-indexed journal and conducted under approved ethics protocols.

                                        </h2>

                                        <p className="text-sm">
                                            MuscleAGE was validated through a 243-participant case-control study using 14 biomarkers spanning inflammation, metabolism, body composition, physical performance, and biological ageing.

                                        </p>

                                        <p className="text-sm">
                                            Published in a peer-reviewed NIH-indexed journal
                                            and conducted under approved ethics protocols.
                                        </p>
                                    </div>
                                    <div className="w-full flex flex-col gap-4">
                                        <Button>
                                            See report
                                        </Button>
                                        <Button
                                            variant="outline"
                                            className="md:hidden shadow-none"
                                            onClick={() => setOpenCard(null)}
                                        >
                                            Close
                                        </Button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <div className="absolute w-full flex -bottom-20 right-0 z-50 flex md:justify-end justify-center items-center gap-3">
                    <CarouselPrevious className="static size-12 shadow-none translate-y-0" />
                    <CarouselNext className="static size-12 shadow-none translate-y-0" />
                </div>
            </Carousel>
        </section>
    );
}
