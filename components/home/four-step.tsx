
import Image from "next/image";
import { Badge } from "../ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
    Gauge,
    GaugeIndicator,
    GaugeLabel,
    GaugeRange,
    GaugeTrack,
    GaugeValueText,
} from "@/components/ui/gauge";
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
import { AnomaliesCard1 } from "./anomalies-card";
import { Button } from "../ui/button";


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
    return (
        <section className="relative m-3">
            <Tabs defaultValue="1">
                <div className="relative w-full mx-auto max-w-5xl border border-b-0 py-10 mx-auto border-[#D5BBEA]/60 rounded-t-xl md:rounded-t-[30px]">
                    <div className="relative mt-10 flex flex-col h-full justify-center items-center">
                        <Badge>
                            The OPTM Method
                        </Badge>

                        <div className="max-w-md mt-8 md:max-w-3xl text-center px-8">
                            <h1
                                className="font-heading text-2xl font-semibold text-black leading-tight md:text-3xl">
                                The OPTM Method. <br /> Four steps. No guesswork.
                            </h1>

                            <p className="mt-6 text-sm leading-6 text-black/60">
                                An evidence-based protocol — not generic physio,
                                not a surgery referral.
                            </p>
                        </div>
                    </div>
                    <div className="mt-10">
                        <div className="overflow-x-auto mx-10 rounded-full">
                            <TabsList className="mx-auto flex w-max md:w-fit gap-2 whitespace-nowrap">
                                <TabsTrigger value="1">Knee pain</TabsTrigger>
                                <TabsTrigger value="2">Back pain</TabsTrigger>
                                <TabsTrigger value="3">Muscle longevity</TabsTrigger>
                                <TabsTrigger value="4">Obesity & GLP-1</TabsTrigger>
                            </TabsList>
                        </div>
                    </div>
                </div>
                <TabsContent value="1" className={"relative h-full -mt-3 w-full mx-auto max-w-7xl"}>

                    <CompareSlider
                        defaultValue={40}
                        className="relative hidden md:block w-full aspect-[16/8] overflow-hidden rounded-none md:rounded-[30px]"
                    >
                        <div className="absolute left-0 right-0 z-1 h-full w-1/2 rounded-none md:rounded-[30px] bg-gradient-to-r from-[#133F26]/95 via-[#133F26]/60 to-transparent" />
                        <div className="top-0 z-1 p-8 lg:max-w-100 max-w-80  absolute">
                            <p className="mt-3 text-sm text-white/80">
                                OrthoAGETM programme
                            </p>
                            <h1 className="font-heading pt-4 text-lg font-semibold text-white leading-tight md:text-2xl">
                                Knee pain is a biological problem. Treat the biology.
                            </h1>

                            <p className="mt-3 text-sm text-white/80">
                                Most knee pain protocols rely on imaging and pain scores. OPTM measures cartilage turnover, inflammatory load, muscle imbalance, and joint metabolic stress — then builds a reversal protocol around those numbers.
                            </p>
                        </div>

                        <Gauge className="absolute md:hidden lg:block z-30 bottom-6 left-8" value={94} size={80} thickness={8}>
                            <GaugeIndicator className="bg-white/10 rounded-full backdrop-blur-sm">
                                <GaugeTrack className="bg-white" />
                                <GaugeRange stroke="#D5BBEA" />
                            </GaugeIndicator>
                            <GaugeValueText className="text-white">
                                98
                            </GaugeValueText>

                            <GaugeLabel>
                                <div className="absolute left-24 w-44 top-2 text-left text-sm text-white">
                                    of patients report significant pain reduction, driven by biology.
                                </div>
                            </GaugeLabel>
                        </Gauge>


                        <CompareSliderBefore>
                            <img
                                src="/img/knee-pain-d-p.jpg"
                                alt="Before"
                                className="w-full h-full object-cover"
                            />
                            <div className="flex absolute right-6 top-6 border-[#D5BBEA]/60 justify-center">
                                <AnomaliesCard1 />
                            </div>


                        </CompareSliderBefore>

                        <CompareSliderAfter>
                            <img
                                src="/img/knee-pain-d-r.jpg"
                                alt="After"
                                className="w-full h-full object-cover"
                            />
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
                                OrthoAGETM programme
                            </p>
                            <h1 className="font-heading pt-4  text-lg font-semibold text-white leading-tight md:text-xl">
                                Knee pain is a biological problem. Treat the biology.
                            </h1>

                            <p className="mt-3 text-sm text-white/80">
                                Most knee pain protocols rely on imaging and pain scores. OPTM measures cartilage turnover, inflammatory load, muscle imbalance, and joint metabolic stress — then builds a reversal protocol around those numbers.
                            </p>

                        </div>

                        <CompareSliderBefore>
                            <img
                                src="/img/knee-pain-p-p.jpg"
                                alt="Before"
                                className="w-full h-full object-cover"
                            />
                            <div className="flex absolute px-6 left-1/2 w-full -translate-x-1/2 -bottom-30 border-[#D5BBEA]/60 justify-center">
                                <AnomaliesCard1 />
                            </div>
                        </CompareSliderBefore>

                        <CompareSliderAfter>
                            <img
                                src="/img/knee-pain-p-r.jpg"
                                alt="After"
                                className="w-full h-full object-cover"
                            />
                        </CompareSliderAfter>
                        <CompareSliderHandle />
                    </CompareSlider>

                </TabsContent>
                <TabsContent value="2" className={"relative h-full -mt-3 w-full mx-auto max-w-7xl"}>

                    <CompareSlider
                        defaultValue={40}
                        className="relative hidden md:block w-full aspect-[16/8] overflow-hidden rounded-none md:rounded-[30px]"
                    >
                        <div className="absolute left-0 right-0 z-1 h-full w-1/2 rounded-none md:rounded-[30px] bg-gradient-to-r from-[#133F26]/95 via-[#133F26]/60 to-transparent" />
                        <div className="top-0 z-1 p-8 lg:max-w-100 max-w-80  absolute">
                            <p className="mt-3 text-sm text-white/80">
                                LegAGETM + OrthoAGETM programme
                            </p>
                            <h1 className="font-heading pt-4 text-lg font-semibold text-white leading-tight md:text-2xl">
                                Back pain has a molecular driver. Most clinics never look for it.
                            </h1>

                            <p className="mt-3 text-sm text-white/80">
                                Disc degeneration, nerve sensitisation, and chronic spinal pain are not purely structural. Inflammatory cytokines degrade disc matrix biology and sensitise pain receptors simultaneously. OPTM identifies the dominant driver — and targets it directly.
                            </p>
                        </div>

                        <Gauge className="absolute md:hidden lg:block z-30 bottom-6 left-8" value={94} size={80} thickness={8}>
                            <GaugeIndicator className="bg-white/10 rounded-full backdrop-blur-sm">
                                <GaugeTrack className="bg-white" />
                                <GaugeRange stroke="#D5BBEA" />
                            </GaugeIndicator>
                            <GaugeValueText className="text-white">
                                98
                            </GaugeValueText>

                            <GaugeLabel>
                                <div className="absolute left-24 w-44 top-2 text-left text-sm text-white">
                                    of patients report significant pain reduction, driven by biology.
                                </div>
                            </GaugeLabel>
                        </Gauge>


                        <CompareSliderBefore>
                            <img
                                src="/img/back-pain-d-p.jpg"
                                alt="Before"
                                className="w-full h-full object-cover"
                            />
                            <div className="flex absolute right-6 top-6 border-[#D5BBEA]/60 justify-center">
                                <AnomaliesCard1 />
                            </div>


                        </CompareSliderBefore>

                        <CompareSliderAfter>
                            <img
                                src="/img/back-pain-d-r.jpg"
                                alt="After"
                                className="w-full h-full object-cover"
                            />
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
                                LegAGETM + OrthoAGETM programme
                            </p>
                            <h1 className="font-heading pt-4  text-lg font-semibold text-white leading-tight md:text-xl">
                                Back pain has a molecular driver. Most clinics never look for it.
                            </h1>

                            <p className="mt-3 text-sm text-white/80">
                                Disc degeneration, nerve sensitisation, and chronic spinal pain are not purely structural. Inflammatory cytokines degrade disc matrix biology and sensitise pain receptors simultaneously. OPTM identifies the dominant driver — and targets it directly.
                            </p>

                        </div>

                        <CompareSliderBefore>
                            <img
                                src="/img/back-pain-p-p.jpg"
                                alt="Before"
                                className="w-full h-full object-cover"
                            />
                            <div className="flex absolute px-6 left-1/2 w-full -translate-x-1/2 -bottom-30 border-[#D5BBEA]/60 justify-center">
                                <AnomaliesCard1 />
                            </div>
                        </CompareSliderBefore>

                        <CompareSliderAfter>
                            <img
                                src="/img/back-pain-p-r.jpg"
                                alt="After"
                                className="w-full h-full object-cover"
                            />
                        </CompareSliderAfter>
                        <CompareSliderHandle />
                    </CompareSlider>

                </TabsContent>
                <TabsContent value="3" className={"relative h-full -mt-3 w-full mx-auto max-w-7xl"}>

                    <CompareSlider
                        defaultValue={40}
                        className="relative hidden md:block w-full aspect-[16/8] overflow-hidden rounded-none md:rounded-[30px]"
                    >
                        <div className="absolute left-0 right-0 z-1 h-full w-1/2 rounded-none md:rounded-[30px] bg-gradient-to-r from-[#133F26]/95 via-[#133F26]/60 to-transparent" />
                        <div className="top-0 z-1 p-8 lg:max-w-100 max-w-80  absolute">
                            <p className="mt-3 text-sm text-white/80">
                                MuscleAGETM programme
                            </p>
                            <h1 className="font-heading pt-4 text-lg font-semibold text-white leading-tight md:text-2xl">
                                Your muscles have a biological age. Now you can measure it.
                            </h1>

                            <p className="mt-3 text-sm text-white/80">
                                Sarcopenia, frailty, and functional decline begin years before they are clinically visible. MuscleAGE™ detects the molecular signature of muscle aging across ECM degradation, inflammatory burden, neurovascular decline, and hormonal shift — and builds a reversal protocol while there is still time to act.

                            </p>
                        </div>

                        <Gauge className="absolute md:hidden lg:block z-30 bottom-6 left-8" value={94} size={80} thickness={8}>
                            <GaugeIndicator className="bg-white/10 rounded-full backdrop-blur-sm">
                                <GaugeTrack className="bg-white" />
                                <GaugeRange stroke="#D5BBEA" />
                            </GaugeIndicator>
                            <GaugeValueText className="text-white">
                                98
                            </GaugeValueText>

                            <GaugeLabel>
                                <div className="absolute left-24 w-44 top-2 text-left text-sm text-white">
                                    of patients report significant pain reduction, driven by biology.
                                </div>
                            </GaugeLabel>
                        </Gauge>


                        <CompareSliderBefore>
                            <img
                                src="/img/muscle-pain-d-p.jpg"
                                alt="Before"
                                className="w-full h-full object-cover"
                            />
                            <div className="flex absolute right-6 top-6 border-[#D5BBEA]/60 justify-center">
                                <AnomaliesCard1 />
                            </div>


                        </CompareSliderBefore>

                        <CompareSliderAfter>
                            <img
                                src="/img/muscle-pain-d-r.jpg"
                                alt="After"
                                className="w-full h-full object-cover"
                            />
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
                                MuscleAGETM programme
                            </p>
                            <h1 className="font-heading pt-4  text-lg font-semibold text-white leading-tight md:text-xl">
                                Your muscles have a biological age. Now you can measure it.
                            </h1>

                            <p className="mt-3 text-sm text-white/80">
                                Sarcopenia, frailty, and functional decline begin years before they are clinically visible. MuscleAGE™ detects the molecular signature of muscle aging across ECM degradation, inflammatory burden, neurovascular decline, and hormonal shift — and builds a reversal protocol while there is still time to act.

                            </p>

                        </div>

                        <CompareSliderBefore>
                            <img
                                src="/img/muscle-pain-p-p.jpg"
                                alt="Before"
                                className="w-full h-full object-cover"
                            />
                            <div className="flex absolute px-6 left-1/2 w-full -translate-x-1/2 -bottom-30 border-[#D5BBEA]/60 justify-center">
                                <AnomaliesCard1 />
                            </div>
                        </CompareSliderBefore>

                        <CompareSliderAfter>
                            <img
                                src="/img/muscle-pain-p-r.jpg"
                                alt="After"
                                className="w-full h-full object-cover"
                            />
                        </CompareSliderAfter>
                        <CompareSliderHandle />
                    </CompareSlider>

                </TabsContent>
                <TabsContent value="4" className={"relative h-full -mt-3 w-full mx-auto max-w-7xl"}>

                    <CompareSlider
                        defaultValue={40}
                        className="relative hidden md:block w-full aspect-[16/8] overflow-hidden rounded-none md:rounded-[30px]"
                    >
                        <div className="absolute left-0 right-0 z-1 h-full w-1/2 rounded-none md:rounded-[30px] bg-gradient-to-r from-[#133F26]/95 via-[#133F26]/60 to-transparent" />
                        <div className="top-0 z-1 p-8 lg:max-w-100 max-w-80  absolute">
                            <p className="mt-3 text-sm text-white/80">
                                MuscleAGETM programme
                            </p>
                            <h1 className="font-heading pt-4 text-lg font-semibold text-white leading-tight md:text-2xl">
                                GLP-1 prescribed on muscle age. Not BMI alone.
                            </h1>

                            <p className="mt-3 text-sm text-white/80">
                                Between 25–60% of weight lost on GLP-1 can come from lean mass. OPTM's proprietary MuscleAGE™ technology measures your muscle biological age before GLP-1 begins, predicts lean mass loss before it happens, and builds a protocol that ensures you lose fat — not function.

                            </p>
                        </div>

                        <Gauge className="absolute md:hidden lg:block z-30 bottom-6 left-8" value={94} size={80} thickness={8}>
                            <GaugeIndicator className="bg-white/10 rounded-full backdrop-blur-sm">
                                <GaugeTrack className="bg-white" />
                                <GaugeRange stroke="#D5BBEA" />
                            </GaugeIndicator>
                            <GaugeValueText className="text-white">
                                98
                            </GaugeValueText>

                            <GaugeLabel>
                                <div className="absolute left-24 w-44 top-2 text-left text-sm text-white">
                                    of patients report significant pain reduction, driven by biology.
                                </div>
                            </GaugeLabel>
                        </Gauge>


                        <CompareSliderBefore>
                            <img
                                src="/img/glp-d-p.jpg"
                                alt="Before"
                                className="w-full h-full object-cover"
                            />
                            <div className="flex absolute right-6 top-6 border-[#D5BBEA]/60 justify-center">
                                <AnomaliesCard1 />
                            </div>


                        </CompareSliderBefore>

                        <CompareSliderAfter>
                            <img
                                src="/img/glp-d-r.jpg"
                                alt="After"
                                className="w-full h-full object-cover"
                            />
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
                                MuscleAGETM programme
                            </p>
                            <h1 className="font-heading pt-4  text-lg font-semibold text-white leading-tight md:text-xl">
                                GLP-1 prescribed on muscle age. Not BMI alone.
                            </h1>

                            <p className="mt-3 text-sm text-white/80">
                                Between 25–60% of weight lost on GLP-1 can come from lean mass. OPTM's proprietary MuscleAGE™ technology measures your muscle biological age before GLP-1 begins, predicts lean mass loss before it happens, and builds a protocol that ensures you lose fat — not function.


                            </p>

                        </div>

                        <CompareSliderBefore>
                            <img
                                src="/img/glp-p-p.jpg"
                                alt="Before"
                                className="w-full h-full object-cover"
                            />
                            <div className="flex absolute px-6 left-1/2 w-full -translate-x-1/2 -bottom-30 border-[#D5BBEA]/60 justify-center">
                                <AnomaliesCard1 />
                            </div>
                        </CompareSliderBefore>

                        <CompareSliderAfter>
                            <img
                                src="/img/glp-p-r.jpg"
                                alt="After"
                                className="w-full h-full object-cover"
                            />
                        </CompareSliderAfter>
                        <CompareSliderHandle />
                    </CompareSlider>

                </TabsContent>
            </Tabs>
            <div className="w-full border border-t-0 py-10 border-[#D5BBEA]/60 rounded-b-xl md:rounded-b-[30px] mx-auto max-w-5xl flex flex-col gap-1 justify-center mb-6">

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

                <div className="mt-8 flex justify-center">
                    <Button size="lg">
                    Book Your AI Pain Assessment
                    </Button>
                </div>
            </div>
        </section>
    );
}
