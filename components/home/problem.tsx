import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
import { NumberTicker } from "../ui/number-ticker";

export function ProblemSection() {
    return (
        <section className="relative py-20">

            <div className="relative flex flex-col h-full space-y-6 justify-center items-center">
                <Badge size={"sm"}>
                    Why Does Pain Return?

                </Badge>

                <div className="max-w-md md:max-w-3xl text-center px-8">
                    <h1
                        className="font-heading text-2xl font-semibold text-black leading-tight md:text-3xl">
                        Pain Is A Symptom. <br /> The Root Cause Often Goes Undetected.

                    </h1>

                    <p className="mt-6 text-sm leading-6 text-black/60">
                        Traditional treatments often focus on relieving pain. optm uses AI diagnostics, biomarker analysis, and muscle health assessment to uncover the biological factors behind recurring pain.

                    </p>
                </div>
                <div className="grid md:max-w-3xl mt-10 md:grid-cols-2 ">
                    <div className="md:border-r max-w-80 md:border-0 border-b pb-10 text-center px-8">
                        <NumberTicker
                            value={220}
                            suffix="M"
                            className="md:text-5xl text-2xl font-heading  font-semibold tracking-tighter whitespace-pre-wrap text-black"
                        />
                        <p className="mt-6 text-sm leading-6 text-black/60">
                            Indians living with chronic musculoskeletal pain. Fewer than 1 in 10 receive a root-cause diagnosis.
                        </p>

                    </div>
                    <div className="md:pt-0 max-w-80 pt-10 text-center px-8">
                        <div className="flex justify-center gap-3">
                            <h1 className="md:text-5xl text-2xl font-heading font-semibold tracking-tighter whitespace-pre-wrap text-black">
                                1 in
                            </h1> 
                            <NumberTicker
                                value={4}
                                className="md:text-5xl text-2xl font-heading font-semibold tracking-tighter whitespace-pre-wrap text-black"
                            />
                        </div>
                        <p className="mt-6 text-sm leading-6 text-black/60">
                            Urban Indian adults have uncontrolled metabolic inflammation - the same cytokines driving insulin resistance are degrading cartilage simultaneously.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}
