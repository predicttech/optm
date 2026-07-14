import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";

export function MeasureSection() {
    return (
        <section id="what-we-measure" className="relative py-20">

            <div className="relative flex flex-col h-full space-y-6 justify-center items-center">
                <Badge size={"sm"}>
                    Biological Insights
                </Badge>

                <div className="max-w-md md:max-w-3xl text-center px-8">
                    <h1
                        className="font-heading text-2xl font-semibold text-black leading-tight md:text-3xl">
                        What We Measure

                    </h1>

                    <p className="mt-6 text-sm leading-6 text-black/60">
                        Three panels. One diagnostic system. Each built for a
                        different parts of the body's biological age.

                    </p>
                </div>
                <div className="grid md:max-w-4xl mt-10 md:grid-cols-3">
                    <div className="  pb-10 text-center p-8">
                        <h1
                            className="font-heading text-xl font-semibold text-black leading-tight md:text-2xl">
                            MuscleAGE™
                        </h1>
                        <p className="mt-6 text-sm leading-6 text-black/60">
                            For chronic pain, early joint stiffness, and recovery that's
                            slower than it should be.  </p>
                        <p className="mt-6 text-sm leading-6 underline text-black/60">
                            Best for: adults 30–50 with recurring pain
                        </p>
                    </div>
                    <div className="border-x  pb-10 text-center p-8">
                        <h1
                            className="font-heading text-xl font-semibold text-black leading-tight md:text-2xl">
                            OrthoAGE™
                        </h1>
                        <p className="mt-6 text-sm leading-6 text-black/60">
                            For joint-specific decline  knees, hips, shoulders  where
                            imaging looks fine but function doesn't.
                        </p>
                        <p className="mt-6 text-sm leading-6 underline text-black/60">
                            Best for: adults 50+ managing arthritis or joint pain

                        </p>
                    </div>
                    <div className="  pb-10 text-center p-8">
                        <h1
                            className="font-heading text-xl font-semibold text-black leading-tight md:text-2xl">
                            LegAGE™

                        </h1>
                        <p className="mt-6 text-sm leading-6 text-black/60">
                            For athletes and runners tracks tissue fatigue and injury
                            risk before it shows up on race day.
                        </p>
                        <p className="mt-6 text-sm leading-6 underline text-black/60">
                            Best for: runners, cyclists, footballers 30–40

                        </p>
                    </div>
                </div>
            </div>


        </section>
    );
}
