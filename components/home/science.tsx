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
import Link from "next/link";

export function ScienceSection() {
    const [openCard, setOpenCard] = useState<number | null>(null);
    return (
        <section id="the-science" className="relative py-20 pb-40 m-3">

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
                        <div className="group relative overflow-hidden rounded-3xl border border-[#D5BBEA] bg-[#D5BBEA]/10 h-[350px]">
                            {/* Default Content */}
                            <div className="p-6 justify-between flex flex-col h-full transition-all duration-600 group-hover:scale-[0.98]">
                                <div className=" space-y-6">
                                    <Badge>
                                        KNEEAGE™
                                    </Badge>
                                    <img
                                        src="/logos/science.png"
                                        alt="After"
                                        className="w-40 h-fit object-cover" />
                                    <h2 className="text-xl font-semibold">
                                        Early Knee Health Assessment
                                    </h2>
                                    <p className="text-sm">
                                        Research exploring gait patterns and inter-limb asymmetry to identify early changes associated with knee osteoarthritis before radiographic evidence.
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
                            <div className={` absolute inset-0 bg-[#D5BBEA]/20 backdrop-blur-md p-6 transition-transform duration-500 ease-out md:translate-y-full md:group-hover:translate-y-0
                             ${openCard === 0 ? "translate-y-0" : "translate-y-full"} `}
                            >
                                <div className="flex h-full flex-col justify-between">
                                    <div className=" space-y-4">
                                        <h2 className="text-xl font-semibold">
                                            Scientific Contribution
                                        </h2>
                                        <ul className="mt-4 space-y-2 text-black/60">
                                            <li>• Gait Analysis</li>
                                            <li>• Movement Symmetry</li>
                                            <li>• Functional Assessment</li>
                                            <li>• Early Detection</li>
                                        </ul>
                                    </div>
                                    <div className="w-full flex flex-col gap-4">
                                        <Link href={"https://www.sciencedirect.com/science/article/abs/pii/S0966636226001037?"} target="_blank">
                                            <Button>
                                                Read Publication
                                            </Button>
                                        </Link>
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
                        <div className="group relative overflow-hidden rounded-3xl border border-[#D5BBEA] bg-[#D5BBEA]/10 h-[350px]">
                            {/* Default Content */}
                            <div className="p-6 justify-between flex flex-col h-full transition-all duration-600 group-hover:scale-[0.98]">
                                <div className=" space-y-6">
                                    <Badge>
                                        ORTHOAGE™ • COASI
                                    </Badge>
                                    <img
                                        src="/logos/wiley.png"
                                        alt="After"
                                        className="w-24 h-fit object-cover" />
                                    <h2 className="text-xl font-semibold">
                                        Estimating Musculoskeletal Biological Age
                                    </h2>
                                    <p className="text-sm">
                                        A published framework for estimating how biological musculoskeletal ageing differs from chronological age using multidomain biomarkers.
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
                            <div className={` absolute inset-0 bg-[#D5BBEA]/20 backdrop-blur-md p-6 transition-transform duration-500 ease-out md:translate-y-full md:group-hover:translate-y-0
                             ${openCard === 0 ? "translate-y-0" : "translate-y-full"} `}
                            >
                                <div className="flex h-full flex-col justify-between">
                                    <div className=" space-y-4">
                                        <h2 className="text-xl font-semibold">
                                            Scientific Contribution
                                        </h2>
                                        <ul className="mt-4 space-y-2 text-black/60">
                                            <li>• Biological Age</li>
                                            <li>• 5 Biological Domains</li>
                                            <li>• Risk Stratification</li>
                                            <li>• Musculoskeletal Ageing</li>
                                        </ul>
                                    </div>
                                    <div className="w-full flex flex-col gap-4">
                                        <Link href={"https://onlinelibrary.wiley.com/doi/abs/10.1111/ggi.70608"} target="_blank">
                                            <Button>
                                                Read Publication
                                            </Button>
                                        </Link>
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
                        <div className="group relative overflow-hidden rounded-3xl border border-[#D5BBEA] bg-[#D5BBEA]/10 h-[350px]">
                            {/* Default Content */}
                            <div className="p-6 justify-between flex flex-col h-full transition-all duration-600 group-hover:scale-[0.98]">
                                <div className=" space-y-6">
                                    <Badge>
                                        MUSCLEAGE™
                                    </Badge>
                                    <img
                                        src="/logos/nih.png"
                                        alt="After"
                                        className="w-60 h-fit object-cover" />
                                    <h2 className="text-xl font-semibold">
                                        Muscle Biomarker Intelligence
                                    </h2>
                                    <p className="text-sm">
                                        Published research evaluating CRP, CK-MM and Aldolase A as biomarkers associated with muscle health and osteoarthritic disorders.
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
                            <div className={` absolute inset-0 bg-[#D5BBEA]/20 backdrop-blur-md p-6 transition-transform duration-500 ease-out md:translate-y-full md:group-hover:translate-y-0
                             ${openCard === 0 ? "translate-y-0" : "translate-y-full"} `}
                            >
                                <div className="flex h-full flex-col justify-between">
                                    <div className=" space-y-4">
                                        <h2 className="text-xl font-semibold">
                                            Scientific Contribution
                                        </h2>
                                        <ul className="mt-4 space-y-2 text-black/60">
                                            <li>• CRP</li>
                                            <li>• CK-MM</li>
                                            <li>• Aldolase A</li>
                                            <li>• Biomarker Analysis</li>
                                        </ul>
                                    </div>
                                    <div className="w-full flex flex-col gap-4">
                                        <Link href={"https://pmc.ncbi.nlm.nih.gov/articles/PMC6619472/"} target="_blank">
                                            <Button>
                                                Read Publication
                                            </Button>
                                        </Link>
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
                        <div className="group relative overflow-hidden rounded-3xl border border-[#D5BBEA] bg-[#D5BBEA]/10 h-[350px]">
                            {/* Default Content */}
                            <div className="p-6 justify-between flex flex-col h-full transition-all duration-600 group-hover:scale-[0.98]">
                                <div className=" space-y-6">
                                    <Badge>
                                        ORTHOAGE™
                                    </Badge>
                                    <img
                                        src="/logos/PubMed.webp"
                                        alt="After"
                                        className="w-26 h-fit object-cover" />
                                    <h2 className="text-xl font-semibold">
                                        Spine & Joint Assessment
                                    </h2>
                                    <p className="text-sm">
                                        Research evaluating a diagnostic approach integrating lumbar disc disease, knee osteoarthritis and musculoskeletal biomarkers.
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
                            <div className={` absolute inset-0 bg-[#D5BBEA]/20 backdrop-blur-md p-6 transition-transform duration-500 ease-out md:translate-y-full md:group-hover:translate-y-0
                             ${openCard === 0 ? "translate-y-0" : "translate-y-full"} `}
                            >
                                <div className="flex h-full flex-col justify-between">
                                    <div className=" space-y-4">
                                        <h2 className="text-xl font-semibold">
                                            Scientific Contribution
                                        </h2>
                                        <ul className="mt-4 space-y-2 text-black/60">
                                            <li>• Spine Health</li>
                                            <li>• Joint Function</li>
                                            <li>• Biomarker Assessment</li>
                                            <li>• Clinical Evaluation</li>
                                        </ul>
                                    </div>
                                    <div className="w-full flex flex-col gap-4">
                                        <Link href={"https://pubmed.ncbi.nlm.nih.gov/29534559/"} target="_blank">
                                            <Button>
                                                Read Publication
                                            </Button>
                                        </Link>
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
                        <div className="group relative overflow-hidden rounded-3xl border border-[#D5BBEA] bg-[#D5BBEA]/10 h-[350px]">
                            {/* Default Content */}
                            <div className="p-6 justify-between flex flex-col h-full transition-all duration-600 group-hover:scale-[0.98]">
                                <div className=" space-y-6">
                                    <Badge>
                                        MUSCLEAGE™
                                    </Badge>
                                    <img
                                        src="/logos/nih.png"
                                        alt="After"
                                        className="w-60 h-fit object-cover" />
                                    <h2 className="text-xl font-semibold">
                                        Muscle Health & Recovery
                                    </h2>
                                    <p className="text-sm">
                                        Clinical research investigating muscle degeneration in osteoarthritis and evaluating biological approaches to support recovery.
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
                            <div className={` absolute inset-0 bg-[#D5BBEA]/20 backdrop-blur-md p-6 transition-transform duration-500 ease-out md:translate-y-full md:group-hover:translate-y-0
                             ${openCard === 0 ? "translate-y-0" : "translate-y-full"} `}
                            >
                                <div className="flex h-full flex-col justify-between">
                                    <div className=" space-y-4">
                                        <h2 className="text-xl font-semibold">
                                            Scientific Contribution
                                        </h2>
                                        <ul className="mt-4 space-y-2 text-black/60">
                                            <li>• Muscle Function</li>
                                            <li>• Recovery Biology</li>
                                            <li>• Clinical Protocol</li>
                                            <li>• Muscle Integrity</li>
                                        </ul>
                                    </div>
                                    <div className="w-full flex flex-col gap-4">

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
                        <div className="group relative overflow-hidden rounded-3xl border border-[#D5BBEA] bg-[#D5BBEA]/10 h-[350px]">
                            {/* Default Content */}
                            <div className="p-6 justify-between flex flex-col h-full transition-all duration-600 group-hover:scale-[0.98]">
                                <div className=" space-y-6">
                                    <Badge>
                                        PRECISION RECOVERY
                                    </Badge>
                                    <img
                                        src="/logos/nih.png"
                                        alt="After"
                                        className="w-60 h-fit object-cover" />
                                    <h2 className="text-xl font-semibold">
                                        Biological Recovery Support
                                    </h2>
                                    <p className="text-sm">
                                        Registry-based clinical research evaluating phytotherapeutic interventions as part of a personalised recovery approach.
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
                            <div className={` absolute inset-0 bg-[#D5BBEA]/20 backdrop-blur-md p-6 transition-transform duration-500 ease-out md:translate-y-full md:group-hover:translate-y-0
                             ${openCard === 0 ? "translate-y-0" : "translate-y-full"} `}
                            >
                                <div className="flex h-full flex-col justify-between">
                                    <div className=" space-y-4">
                                        <h2 className="text-xl font-semibold">
                                            Scientific Contribution
                                        </h2>
                                        <ul className="mt-4 space-y-2 text-black/60">
                                            <li>• Clinical Registry</li>
                                            <li>• Recovery Monitoring</li>
                                            <li>• Pain Management</li>
                                            <li>• Functional Improvement</li>
                                        </ul>
                                    </div>
                                    <div className="w-full flex flex-col gap-4">

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
