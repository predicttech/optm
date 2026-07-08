"use client"
import { Badge } from "../ui/badge";
import Image from "next/image";

import { Button } from "../ui/button";

export function DoctorsSection() {
    return (
        <section className="relative py-20 m-3">

            <div className="relative mx-auto flex max-w-5xl flex-col h-full space-y-6">
                <Badge>
                    Clinical team
                </Badge>

                <div className="max-w-md md:max-w-3xl">
                    <h1
                        className="font-heading text-2xl font-semibold text-black leading-tight md:text-3xl">
                        Specialists who
                        <br />
                        treat the whole system.
                    </h1>
                    <p className="mt-6 text-sm leading-6 text-black/60">
                        Pain, metabolism, movement, and plant medicine — each specialist owns one domain. Every patient protocol is designed by all of them together. No siloed treatment.
                    </p>

                </div>
                <div className="grid md:gap-3 rounded-3xl bg-primary max-w-5xl mt-10 md:grid-cols-2 ">

                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 mx-auto max-w-5xl">
                <div className="group relative h-140 overflow-hidden rounded-3xl border border-[#D5BBEA] bg-black">

                    {/* Image */}
                    <div className="flex justify-center">
                        <Image
                            src="/new/doctor.png"
                            alt="Doctor"
                            width={220}
                            height={220}
                            className="transition-transform h-full w-full duration-500 group-hover:scale-105"
                        />
                    </div>

                    {/* Sliding Content */}
                    <div
                        className=" rounded-3xl
    absolute inset-x-0
    top-[440px]
    h-full
    bg-[#D5BBEA]/20 backdrop-blur-md
    p-6
    transition-all duration-700 ease-in-out
    group-hover:top-0
  "
                    >
                        <h3 className="text-2xl text-white font-semibold">
                            Dr. Apurba Ganguly
                        </h3>

                        <p className="mt-1 text-sm uppercase text-white/60">
                            Founder & Chief Research Officer
                        </p>

                        <div
                            className="
      mt-8
      opacity-0
      translate-y-6
      transition-all
      duration-500
      delay-200
      group-hover:opacity-100
      group-hover:translate-y-0
    "
                        >
                            <p className="text-sm text-white/80 leading-6">
                                MuscleAGE™ was validated through a
                                243-participant case-control study using
                                14 biomarkers spanning inflammation,
                                metabolism, body composition,
                                physical performance and biological ageing.
                            </p>

                            <p className="mt-4 text-sm text-white/80 leading-6">
                                Published in an NIH-indexed peer-reviewed journal
                                under approved ethics protocols.
                            </p>

                            <Button className="mt-6">
                                See Profile
                            </Button>
                        </div>
                    </div>

                </div>
                <div className="group relative h-140 overflow-hidden rounded-3xl border border-[#D5BBEA] bg-black">

                    {/* Image */}
                    <div className="flex justify-center">
                        <Image
                            src="/new/doctor.png"
                            alt="Doctor"
                            width={220}
                            height={220}
                            className="transition-transform h-full w-full duration-500 group-hover:scale-105"
                        />
                    </div>

                    {/* Sliding Content */}
                    <div
                        className=" rounded-3xl
    absolute inset-x-0
    top-[440px]
    h-full
    bg-[#D5BBEA]/20 backdrop-blur-md
    p-6
    transition-all duration-700 ease-in-out
    group-hover:top-0
  "
                    >
                        <h3 className="text-2xl text-white font-semibold">
                            Dr. Apurba Ganguly
                        </h3>

                        <p className="mt-1 text-sm uppercase text-white/60">
                            Founder & Chief Research Officer
                        </p>

                        <div
                            className="
      mt-8
      opacity-0
      translate-y-6
      transition-all
      duration-500
      delay-200
      group-hover:opacity-100
      group-hover:translate-y-0
    "
                        >
                            <p className="text-sm text-white/80 leading-6">
                                MuscleAGE™ was validated through a
                                243-participant case-control study using
                                14 biomarkers spanning inflammation,
                                metabolism, body composition,
                                physical performance and biological ageing.
                            </p>

                            <p className="mt-4 text-sm text-white/80 leading-6">
                                Published in an NIH-indexed peer-reviewed journal
                                under approved ethics protocols.
                            </p>

                            <Button className="mt-6">
                                See Profile
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
