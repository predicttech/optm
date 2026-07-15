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

export function MuscleAgeSection() {
    return (
        <section id="muscle-age" className="relative m-3 ">
            <div className="relative p-3 border mx-auto border-[#D5BBEA]/60 rounded-xl md:rounded-[30px] max-w-5xl">
                <div className="relative flex flex-col h-full justify-center items-center">

                    <div className="relative flex flex-col justify-center mt-10 items-center h-40 w-80">

                        <div className="border border-[#D5BBEA]/60  rounded-xl md:rounded-3xl mb-8 absolute h-32 w-32" />
                        <motion.div
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute h-fit pl-8 w-80"
                        >
                            <Image
                                src="/new/muscle.png"
                                alt="Hero"
                                width={200}
                                height={200}
                                className="object-contain   h-full w-full"
                            />
                        </motion.div>
                    </div>

                    <div className="max-w-md md:max-w-3xl text-center px-8">
                        <h1
                            className="font-heading text-2xl font-semibold text-black leading-tight md:text-3xl">
                            Discover Your Muscle Age
                        </h1>

                        <p className="mt-6 text-sm leading-6 text-black/60">
                            The Missing Insight Behind Chronic Pain

                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 items-center my-10 gap-3">
                    <div className="relative">
                        <Image
                            src="/new/muscle-age-d.jpg"
                            alt="Hero"
                            width={200}
                            height={200}
                            className="object-contain rounded-xl md:rounded-3xl border h-fit w-full"
                        />
                        <div className="absolute bottom-0 left-0 right-0 h-1/2 rounded-b-xl md:rounded-b-3xl bg-gradient-to-t from-[#133F26]/95 via-[#133F26]/60 to-transparent" />
                        <div className="bottom-0 p-8 absolute">
                            <h1 className="font-heading text-lg font-semibold text-white leading-tight md:text-xl">
                            One blood sample <br/> to estimate your Muscle Age.
                            </h1>

                            <p className="mt-3 text-sm text-white/80">
                            It isn't always the same as your chronological age.
                                The Bio-Musculo Index™ offers insights into muscle health, recovery, and overall wellbeing.
                            </p>
                        </div>
                    </div>
                    <Accordion defaultValue={["shipping"]} className=" rounded-none border-none w-full">
                        <AccordionItem value="shipping">
                            <AccordionTrigger className={" hover:no-underline"}>The silent driver
                                <Badge variant={"outline"}>
                                    Inflammatory
                                </Badge>
                            </AccordionTrigger>
                            <AccordionContent>
                                CRP and IL-6 reveal the low-grade inflammation quietly accelerating your joint pain.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="returns">
                            <AccordionTrigger className={" hover:no-underline"}>Bone & hormone balance
                                <Badge variant={"outline"}>
                                    Endocrine–Mineral
                                </Badge>
                            </AccordionTrigger>
                            <AccordionContent>
                                Osteocalcin, Vitamin D, and PTH reveal the biological processes driving bone loss and impaired bone remodeling.

                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="support">
                            <AccordionTrigger className={" hover:no-underline"}>Damage vs Repair

                                <Badge variant={"outline"}>
                                    Bone & Cartilage
                                </Badge>
                            </AccordionTrigger>
                            <AccordionContent>
                                PINP and CTX-II show whether your body is building bone faster than it's breaking down - or losing the race.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="integrity">
                            <AccordionTrigger className={" hover:no-underline"}>Muscle integrity
                                <Badge variant={"outline"}>
                                    Muscle–ECM
                                </Badge>
                            </AccordionTrigger>
                            <AccordionContent>
                                CK-MM and MDA measure real muscle breakdown and oxidative stress - the earliest sign of degeneration.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="blood">
                            <AccordionTrigger className={" hover:no-underline"}>Blood & nerve supply
                                <Badge variant={"outline"}>
                                    Neurovascular
                                </Badge>
                            </AccordionTrigger>
                            <AccordionContent>
                                VEGF and BDNF reveal how well blood and nerve signals are reaching your muscles and joints.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                </div>

                <div className="w-full flex justify-center my-6">
                    <p className="max-w-sm text-center text-sm leading-6 text-black/60">
                        MuscleAGE™ Severity ScaleBiological age gap  </p>
                </div>
            </div>
        </section>
    );
}
