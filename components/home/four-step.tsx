"use client"
import { Badge } from "../ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
    CompareSlider,
    CompareSliderAfter,
    CompareSliderBefore,
    CompareSliderHandle,
} from "@/components/ui/compare-slider";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { AnomaliesCard1, AnomaliesCard12, AnomaliesCard2, AnomaliesCard22, AnomaliesCard3, AnomaliesCard32, AnomaliesCard4, AnomaliesCard42 } from "./anomalies-card";

import { ProtocolSection1, ProtocolSection2, ProtocolSection3, ProtocolSection4 } from "./protocol";
import { useState } from "react";


const biomarkers = [
    {
        title: "CTX-II",
        description:
            "A fragment of cross-linked type II collagen, reflecting cartilage degradation and enabling assessment of joint tissue turnover.",
    },
    {
        title: "COMP",
        description:
            "Cartilage oligomeric matrix protein, a biomarker of cartilage damage and osteoarthritis progression.",
    },
    {
        title: "IL-6",
        description:
            "An inflammatory cytokine associated with joint inflammation and immune response.",
    },
    {
        title: "hs-CRP",
        description:
            "High-sensitivity C-reactive protein, indicating systemic inflammation.",
    },
    {
        title: "CK-MM",
        description:
            "A skeletal muscle enzyme used to assess muscle damage.",
    },
    {
        title: "Aldolase A",
        description:
            "An enzyme involved in muscle metabolism and muscle health assessment.",
    },
    {
        title: "OrthoAGE™",
        description:
            "A proprietary score representing musculoskeletal biological age.",
    },
];


export function FourStepSection() {

    const [tab, setTab] = useState("1");

    const handleTabChange = (value: string) => {
        setTab(value);

        document
            .getElementById("the-optm-method")
            ?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
    };

    return (
        <section id="the-optm-method" className="relative h-full m-3">

            <Tabs onValueChange={handleTabChange} defaultValue="1" value={tab} >
                <div className="relative w-full mx-auto py-10 mx-auto border-[#D5BBEA]/60 rounded-t-xl h-full md:rounded-t-[30px]">
                    <div className="relative pt-20 h-full mx-auto max-w-5xl border-t border-[#D5BBEA]/60 rounded-t-xl md:rounded-t-[30px] mt-10 flex flex-col h-full justify-center items-center">
                        <Badge size={"sm"}>
                            optm Platform
                        </Badge>
                        <div className="max-w-md mt-8 md:max-w-3xl text-center px-8">
                            <h1
                                className="font-heading text-2xl font-semibold text-black leading-tight md:text-3xl">
                                The optm Method. <br /> One Platform. Multiple Recovery Pathways.
                            </h1>
                            <p className="mt-6 text-sm leading-6 text-black/60">
                                An evidence-based protocol - not generic physio,
                                not a surgery referral.
                            </p>
                        </div>
                    </div>
                    <div className="sticky my-10 top-20 z-20 backdrop-blur-sm overflow-x-auto w-fit mx-auto rounded-full">
                        <TabsList className="mx-auto flex w-max md:w-fit gap-2 whitespace-nowrap">
                            <TabsTrigger value="1" type="button">Knee</TabsTrigger>
                            <TabsTrigger value="2" type="button">Neck & Back</TabsTrigger>
                            <TabsTrigger value="3" type="button">Muscle longevity</TabsTrigger>
                            <TabsTrigger value="4" type="button">Obesity & GLP-1</TabsTrigger>
                        </TabsList>
                    </div>

                    {/* tabIndex={-1} on every TabsContent below prevents the browser
                        from scrolling the newly-activated panel into view on click */}

                    <TabsContent value="1" tabIndex={-1} className={"relative h-full -mt-3 w-full mx-auto max-w-7xl"}>

                        <CompareSlider
                            defaultValue={40}
                            className="relative hidden md:block w-full aspect-[16/8] overflow-hidden rounded-none md:rounded-[30px]"
                        >
                            <div className="absolute left-0 right-0 z-1 h-full w-1/2 rounded-none md:rounded-[30px] bg-gradient-to-r from-[#133F26]/95 via-[#133F26]/60 to-transparent" />
                            <div className="top-0 z-1 p-8 lg:max-w-100 max-w-80  absolute">
                                <p className="mt-3 text-sm text-white/80">
                                    Measure What Imaging Can't.
                                </p>
                                <h1 className="font-heading pt-4 text-lg font-semibold text-white leading-tight md:text-2xl">
                                    Measure What Imaging Can't.
                                </h1>
                                <p className="mt-3 text-sm text-white/80">
                                    Knee pain is more than cartilage wear. OrthoAGE™ evaluates the biological environment surrounding the joint including cartilage turnover, muscle health, inflammatory activity and movement stability to build a personalised recovery strategy.
                                </p>
                            </div>
                            <div className="absolute md:hidden lg:block z-30 bottom-6 left-8">
                                <img
                                    src="/img/glp-graph.svg"
                                    alt="After"
                                    className="w-60 h-full object-contain"
                                />
                            </div>


                            <CompareSliderBefore>
                                <img
                                    src="/img/knee-pain-dp.jpg"
                                    alt="Before"
                                    className="w-full h-full object-cover"
                                />
                                <div className="flex absolute right-6 top-6 border-[#D5BBEA]/60 justify-center">
                                    <AnomaliesCard1 />
                                </div>


                            </CompareSliderBefore>

                            <CompareSliderAfter>
                                <img
                                    src="/img/knee-pain-dr.jpg"
                                    alt="After"
                                    className="w-full h-full object-cover"
                                />
                                <div className="flex absolute right-6 top-6 border-[#D5BBEA]/60 justify-center">
                                    <AnomaliesCard12 />
                                </div>
                            </CompareSliderAfter>
                            <CompareSliderHandle />
                        </CompareSlider>

                        <CompareSlider
                            orientation="vertical"
                            interaction="drag"
                            defaultValue={60}
                            className="relative block md:hidden w-full aspect-[8/16] overflow-hidden rounded-none md:rounded-[30px]"
                        >
                            <div className="absolute z-1 top-0 left-0 right-0 h-1/3 rounded-b-xl md:rounded-b-3xl bg-gradient-to-b from-[#133F26]/95 via-[#133F26]/60 to-transparent" />
                            <div className="top-0 z-1 p-8 max-w-full absolute">
                                <p className="mt-3  text-sm text-white/80">
                                    OrthoAGE™ programme
                                </p>
                                <h1 className="font-heading pt-4  text-lg font-semibold text-white leading-tight md:text-xl">
                                    Measure What Imaging Can't.

                                </h1>

                                <p className="mt-3 text-sm text-white/80">
                                    Knee pain is more than cartilage wear. OrthoAGE™ evaluates the biological environment surrounding the joint including cartilage turnover, muscle health, inflammatory activity and movement stability to build a personalised recovery strategy.

                                </p>

                            </div>

                            <CompareSliderBefore>
                                <img
                                    src="/img/knee-pain-pp.jpg"
                                    alt="Before"
                                    className="w-full h-full object-cover"
                                />
                                <div className="flex absolute px-6 left-1/2 w-full -translate-x-1/2 -bottom-30 border-[#D5BBEA]/60 justify-center">
                                    <AnomaliesCard1 />
                                </div>
                            </CompareSliderBefore>

                            <CompareSliderAfter>
                                <img
                                    src="/img/knee-pain-pr.jpg"
                                    alt="After"
                                    className="w-full h-full object-cover"
                                />
                                <div className="flex absolute px-6 left-1/2 w-full -translate-x-1/2 -bottom-30 border-[#D5BBEA]/60 justify-center">
                                    <AnomaliesCard12 />
                                </div>
                            </CompareSliderAfter>
                            <CompareSliderHandle />
                        </CompareSlider>
                        <ProtocolSection1 />
                    </TabsContent>
                    <TabsContent value="2" tabIndex={-1} className={"relative h-full -mt-3 w-full mx-auto max-w-7xl"}>

                        <CompareSlider
                            defaultValue={40}
                            className="relative hidden md:block w-full aspect-[16/8] overflow-hidden rounded-none md:rounded-[30px]"
                        >
                            <div className="absolute left-0 right-0 z-1 h-full w-1/2 rounded-none md:rounded-[30px] bg-gradient-to-r from-[#133F26]/95 via-[#133F26]/60 to-transparent" />
                            <div className="top-0 z-1 p-8 lg:max-w-100 max-w-80  absolute">
                                <p className="mt-3 text-sm text-white/80">
                                    OrthoAGE™ Programme
                                </p>
                                <h1 className="font-heading pt-4 text-lg font-semibold text-white leading-tight md:text-2xl">
                                    Look Beyond The Spine.
                                    Understand The Biology Behind Movement.
                                </h1>

                                <p className="mt-3 text-sm text-white/80">
                                    Persistent neck and back pain isn't always explained by imaging alone. OrthoAGE™ evaluates the biological systems that support the spine-including muscle health, inflammatory activity, movement patterns and joint function-to identify the underlying drivers of pain before building a personalised recovery pathway.
                                </p>
                            </div>

                            <div className="absolute md:hidden lg:block z-30 bottom-6 left-8">
                                <img
                                    src="/img/glp-graph.svg"
                                    alt="After"
                                    className="w-60 h-full object-contain"
                                />
                            </div>


                            <CompareSliderBefore>
                                <img
                                    src="/img/back-pain-dp.jpg"
                                    alt="Before"
                                    className="w-full h-full object-cover"
                                />
                                <div className="flex absolute right-6 top-6 border-[#D5BBEA]/60 justify-center">
                                    <AnomaliesCard2 />
                                </div>


                            </CompareSliderBefore>

                            <CompareSliderAfter>
                                <img
                                    src="/img/back-pain-dr.jpg"
                                    alt="After"
                                    className="w-full h-full object-cover"
                                />
                                <div className="flex absolute right-6 top-6 border-[#D5BBEA]/60 justify-center">
                                    <AnomaliesCard22 />
                                </div>
                            </CompareSliderAfter>
                            <CompareSliderHandle />
                        </CompareSlider>

                        <CompareSlider
                            orientation="vertical"
                            interaction="drag"
                            defaultValue={60}
                            className="relative block md:hidden w-full aspect-[8/16] overflow-hidden rounded-none md:rounded-[30px]"
                        >
                            <div className="absolute z-1 top-0 left-0 right-0 h-1/3 rounded-b-xl md:rounded-b-3xl bg-gradient-to-b from-[#133F26]/95 via-[#133F26]/60 to-transparent" />
                            <div className="top-0 z-1 p-8 max-w-full absolute">
                                <p className="mt-3  text-sm text-white/80">
                                    OrthoAGE™ Programme
                                </p>
                                <h1 className="font-heading pt-4  text-lg font-semibold text-white leading-tight md:text-xl">
                                    Look Beyond The Spine.
                                    Understand The Biology Behind Movement.

                                </h1>

                                <p className="mt-3 text-sm text-white/80">
                                    Persistent neck and back pain isn't always explained by imaging alone. OrthoAGE™ evaluates the biological systems that support the spine—including muscle health, inflammatory activity, movement patterns and joint function—to identify the underlying drivers of pain before building a personalised recovery pathway.
                                </p>

                            </div>

                            <CompareSliderBefore>
                                <img
                                    src="/img/back-pain-pp.jpg"
                                    alt="Before"
                                    className="w-full h-full object-cover"
                                />
                                <div className="flex absolute px-6 left-1/2 w-full -translate-x-1/2 -bottom-30 border-[#D5BBEA]/60 justify-center">
                                    <AnomaliesCard2 />
                                </div>
                            </CompareSliderBefore>

                            <CompareSliderAfter>
                                <img
                                    src="/img/back-pain-pr.jpg"
                                    alt="After"
                                    className="w-full h-full object-cover"
                                />
                                <div className="flex absolute px-6 left-1/2 w-full -translate-x-1/2 -bottom-30 border-[#D5BBEA]/60 justify-center">
                                    <AnomaliesCard22 />
                                </div>
                            </CompareSliderAfter>
                            <CompareSliderHandle />
                        </CompareSlider>
                        <ProtocolSection2 />
                    </TabsContent>
                    <TabsContent value="3" tabIndex={-1} className={"relative h-full -mt-3 w-full mx-auto max-w-7xl"}>

                        <CompareSlider
                            defaultValue={40}
                            className="relative hidden md:block w-full aspect-[16/8] overflow-hidden rounded-none md:rounded-[30px]"
                        >
                            <div className="absolute left-0 right-0 z-1 h-full w-1/2 rounded-none md:rounded-[30px] bg-gradient-to-r from-[#133F26]/95 via-[#133F26]/60 to-transparent" />
                            <div className="top-0 z-1 p-8 lg:max-w-100 max-w-80  absolute">
                                <p className="mt-3 text-sm text-white/80">
                                    MuscleAGE™ Programme
                                </p>
                                <h1 className="font-heading pt-4 text-lg font-semibold text-white leading-tight md:text-2xl">
                                    Healthy Muscles. Lifelong Movement.

                                </h1>

                                <p className="mt-3 text-sm text-white/80">
                                    MuscleAGE™ measures biological muscle health using advanced biomarkers associated with muscle integrity, inflammation and functional ageing to help preserve strength over time.

                                </p>
                            </div>

                            <div className="absolute md:hidden lg:block z-30 bottom-6 left-8">
                                <img
                                    src="/img/glp-graph.svg"
                                    alt="After"
                                    className="w-60 h-full object-contain"
                                />

                            </div>


                            <CompareSliderBefore>
                                <img
                                    src="/img/muscle-pain-dp.jpg"
                                    alt="Before"
                                    className="w-full h-full object-cover"
                                />

                                <div className="flex absolute right-6 top-6 border-[#D5BBEA]/60 justify-center">
                                    <AnomaliesCard2 />
                                </div>

                            </CompareSliderBefore>

                            <CompareSliderAfter>
                                <img
                                    src="/img/muscle-pain-dr.jpg"
                                    alt="After"
                                    className="w-full h-full object-cover"
                                />
                                <div className="flex absolute right-6 top-6 border-[#D5BBEA]/60 justify-center">
                                    <AnomaliesCard32 />
                                </div>
                            </CompareSliderAfter>
                            <CompareSliderHandle />
                        </CompareSlider>

                        <CompareSlider
                            orientation="vertical"
                            interaction="drag"
                            defaultValue={60}
                            className="relative block md:hidden w-full aspect-[8/16] overflow-hidden rounded-none md:rounded-[30px]"
                        >
                            <div className="absolute z-1 top-0 left-0 right-0 h-1/3 rounded-b-xl md:rounded-b-3xl bg-gradient-to-b from-[#133F26]/95 via-[#133F26]/60 to-transparent" />
                            <div className="top-0 z-1 p-8 max-w-full absolute">
                                <p className="mt-3  text-sm text-white/80">
                                    MuscleAGE™ Programme
                                </p>
                                <h1 className="font-heading pt-4  text-lg font-semibold text-white leading-tight md:text-xl">
                                    Healthy Muscles. Lifelong Movement.

                                </h1>

                                <p className="mt-3 text-sm text-white/80">
                                    MuscleAGE™ measures biological muscle health using advanced biomarkers associated with muscle integrity, inflammation and functional ageing to help preserve strength over time.
                                </p>

                            </div>

                            <CompareSliderBefore>
                                <img
                                    src="/img/muscle-pain-pp.jpg"
                                    alt="Before"
                                    className="w-full h-full object-cover"
                                />
                                <div className="flex absolute px-6 left-1/2 w-full -translate-x-1/2 -bottom-30 border-[#D5BBEA]/60 justify-center">
                                    <AnomaliesCard3 />
                                </div>
                            </CompareSliderBefore>

                            <CompareSliderAfter>
                                <img
                                    src="/img/muscle-pain-pr.jpg"
                                    alt="After"
                                    className="w-full h-full object-cover"
                                />
                                <div className="flex absolute px-6 left-1/2 w-full -translate-x-1/2 -bottom-30 border-[#D5BBEA]/60 justify-center">
                                    <AnomaliesCard32 />
                                </div>
                            </CompareSliderAfter>
                            <CompareSliderHandle />
                        </CompareSlider>
                        <ProtocolSection3 />
                    </TabsContent>
                    <TabsContent value="4" tabIndex={-1} className={"relative h-full -mt-3 w-full mx-auto max-w-7xl"}>

                        <CompareSlider
                            defaultValue={40}
                            className="relative hidden md:block w-full aspect-[16/8] overflow-hidden rounded-none md:rounded-[30px]"
                        >
                            <div className="absolute left-0 right-0 z-1 h-full w-1/2 rounded-none md:rounded-[30px] bg-gradient-to-r from-[#133F26]/95 via-[#133F26]/60 to-transparent" />
                            <div className="top-0 z-1 p-8 lg:max-w-100 max-w-80  absolute">
                                <p className="mt-3 text-sm text-white/80">
                                    MuscleAGE™ Programme
                                </p>
                                <h1 className="font-heading pt-4 text-lg font-semibold text-white leading-tight md:text-2xl">
                                    Protect Muscle While You Lose Weight.

                                </h1>

                                <p className="mt-3 text-sm text-white/80">
                                    Weight loss is only one part of the journey. MuscleAGE™ monitors biological markers associated with muscle preservation, inflammation and metabolic health to support healthier long-term outcomes.

                                </p>
                            </div>

                            <div className="absolute md:hidden lg:block z-30 bottom-6 left-8">
                                <img
                                    src="/img/graph-glp.svg"
                                    alt="After"
                                    className="w-60 h-full object-contain"
                                />
                            </div>


                            <CompareSliderBefore>
                                <img
                                    src="/img/glp-dp.jpg"
                                    alt="Before"
                                    className="w-full h-full object-cover"
                                />
                                <div className="flex absolute right-6 top-6 border-[#D5BBEA]/60 justify-center">
                                    <AnomaliesCard4 />
                                </div>


                            </CompareSliderBefore>

                            <CompareSliderAfter>
                                <img
                                    src="/img/glp-dr.jpg"
                                    alt="After"
                                    className="w-full h-full object-cover"
                                />
                                <div className="flex absolute right-6 top-6 border-[#D5BBEA]/60 justify-center">
                                    <AnomaliesCard42 />
                                </div>
                            </CompareSliderAfter>
                            <CompareSliderHandle />
                        </CompareSlider>

                        <CompareSlider
                            orientation="vertical"
                            interaction="drag"
                            defaultValue={60}
                            className="relative block md:hidden w-full aspect-[8/16] overflow-hidden rounded-none md:rounded-[30px]"
                        >
                            <div className="absolute z-1 top-0 left-0 right-0 h-1/3 rounded-b-xl md:rounded-b-3xl bg-gradient-to-b from-[#133F26]/95 via-[#133F26]/60 to-transparent" />
                            <div className="top-0 z-1 p-8 max-w-full absolute">
                                <p className="mt-3  text-sm text-white/80">
                                    MuscleAGE™ Programme

                                </p>
                                <h1 className="font-heading pt-4  text-lg font-semibold text-white leading-tight md:text-xl">
                                    Protect Muscle While You Lose Weight.

                                </h1>

                                <p className="mt-3 text-sm text-white/80">
                                    Weight loss is only one part of the journey. MuscleAGE™ monitors biological markers associated with muscle preservation, inflammation and metabolic health to support healthier long-term outcomes.


                                </p>

                            </div>

                            <CompareSliderBefore>
                                <img
                                    src="/img/glp-pp.jpg"
                                    alt="Before"
                                    className="w-full h-full object-cover"
                                />
                                <div className="flex absolute px-6 left-1/2 w-full -translate-x-1/2 -bottom-30 border-[#D5BBEA]/60 justify-center">
                                    <AnomaliesCard4 />
                                </div>
                            </CompareSliderBefore>

                            <CompareSliderAfter>
                                <img
                                    src="/img/glp-pr.jpg"
                                    alt="After"
                                    className="w-full h-full object-cover"
                                />
                                <div className="flex absolute px-6 left-1/2 w-full -translate-x-1/2 -bottom-30 border-[#D5BBEA]/60 justify-center">
                                    <AnomaliesCard42 />
                                </div>
                            </CompareSliderAfter>
                            <CompareSliderHandle />
                        </CompareSlider>
                        <ProtocolSection4 />
                    </TabsContent>

                    <div className="w-full border border-t-0 py-10 border-[#D5BBEA]/60 rounded-b-xl md:rounded-b-[30px] mx-auto max-w-5xl flex flex-wrap gap-1 justify-center mb-6">

                        <div className="hidden md:flex flex-wrap gap-1 justify-center">
                            {biomarkers.map((item, index) => (
                                <HoverCard key={index}>
                                    <HoverCardTrigger delay={40} className={"cursor-pointer"}>
                                        <Badge variant="outline" className="cursor-pointer">
                                            {item.title}
                                        </Badge>
                                    </HoverCardTrigger>
                                    <HoverCardContent>
                                        <p className="text-sm">{item.description}</p>
                                    </HoverCardContent>
                                </HoverCard>
                            ))}
                        </div>
                        {biomarkers.map((item) => (
                            <div key={item.title} className="md:hidden">
                                <Popover>
                                    <PopoverTrigger>
                                        <Badge
                                            variant="outline"
                                            className="cursor-pointer"
                                        >
                                            {item.title}
                                        </Badge>
                                    </PopoverTrigger>

                                    <PopoverContent className="w-60 shadow-none">
                                        <p className="text-sm text-black/60">
                                            {item.description}
                                        </p>
                                    </PopoverContent>
                                </Popover>
                            </div>
                        ))}
                    </div>

                </div>


            </Tabs>
        </section>
    );
}