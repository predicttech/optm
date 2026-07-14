"use client"
import Image from "next/image";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "../ui/badge";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../ui/button";

export function TreatSection() {
    return (
        <section className="relative m-3 ">
            <div className="relative p-3 border mx-auto border-[#D5BBEA]/60 rounded-xl md:rounded-[30px] max-w-5xl">
                <div className="relative pt-10 flex flex-col h-full justify-center items-center">


                    <div className="max-w-md md:max-w-3xl text-center px-8">
                        <h1
                            className="font-heading text-2xl font-semibold text-black leading-tight md:text-3xl">
                            How We Treat
                        </h1>

                        <p className="mt-6 text-sm leading-6 text-black/60">
                            Two treatment paths. Chosen based on what your biomarkers
                            show  not a fixed protocol.
                        </p>
                    </div>
                </div>
                <div className="relative flex flex-col h-full justify-center items-center">

                    <div className="grid md:max-w-3xl my-20 md:grid-cols-2 ">
                        <div className="md:border-r md:border-0 border-b pb-10 max-w-80 text-center px-8">
                            <h1
                                className="font-heading text-md font-semibold text-black leading-tight md:text-xl">
                                Phytotherapy
                            </h1>

                            <p className="mt-6 text-sm leading-6 text-black/60">
                                Targeted, plant-based therapy addressing the specific
                                biological drivers behind your pain - inflammation, muscle
                                breakdown, joint metabolic stress. Non-surgical. No steroids.

                            </p>
                        </div>
                        <div className="max-w-80 md:pt-0 pt-10 text-center px-8">
                            <h1
                                className="font-heading text-md font-semibold text-black leading-tight md:text-xl">
                                GLP-1 Therapy
                            </h1>

                            <p className="mt-6 text-sm leading-6 text-black/60">
                                Used selectively for patients where metabolic inflammation is
                                a primary driver not a weight-loss shortcut, a targeted
                                accelerator alongside biomarker-led coaching.
                            </p>
                        </div>
                    </div>
                    <div className="my-10 hidden">
                    <Link href={"https://cal.com/predict/30min"} target="_blank">
                        <Button variant={"outline"} className={"shadow-none"} size="lg">
                        Learn Which Path Fits You
                        </Button>
                    </Link>
                </div>
                </div>
                


            </div>
        </section>
    );
}
