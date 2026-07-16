import {
    Stepper,
    StepperContent,
    StepperIndicator,
    StepperItem,
    StepperList,
    StepperSeparator,
    StepperTrigger,
} from "@/components/ui/stepper";

const steps1 = [
    {
        value: "1",
        day: "Day 1-3",
        title: "Biological Assessment",
        title2: "Biological Assessment",
        description: `From your first assessment to long-term recovery, every milestone is
built around measurable biological improvement. Rather than treating
pain alone, the Knee Protocol monitors inflammation, muscle health,
cartilage turnover, and movement quality—ensuring each phase moves
you closer to lasting recovery.`,
    },
    {
        value: "2",
        day: "Day 7",
        title: "Personalised Recovery Plan",
        title2: "Biological Assessment",
        description: "Plant formulation, movement therapy, and GLP-1 if indicated — all biomarker-driven.",
    },
    {
        value: "3",
        day: "Day 30/60",
        title: "Biological Progress Monitoring",
        title2: "Biological Assessment",
        description: "Protocol updated if markers haven't moved. No guessing.",
    },
    {
        value: "4",
        day: "Day 90",
        title: "Long-Term Biological Recovery",
        title2: "Biological Assessment",
        description: "Reversal confirmed in biology, not pain scores.",
    },
];


export function ProtocolSection1() {
    return (
        <section className="relative border-x max-w-5xl mx-auto border-[#D5BBEA]/60 pt-10 mx-3">

            <div className="relative flex flex-col h-full space-y-6 justify-center items-center">

                <div className="max-w-md md:max-w-3xl text-center px-8">
                    <h1
                        className="font-heading text-2xl font-semibold text-black leading-tight md:text-3xl">
                        The Knee Protocol
                    </h1>
                </div>

            </div>
            <Stepper defaultValue="1" className="w-full hidden md:flex justify-center mx-auto mt-20 max-w-3xl">
                <StepperList>
                    {steps1.map((step) => (
                        <StepperItem key={step.value} value={step.value}>
                            <StepperTrigger className="flex flex-col text-center justify-center items-center gap-6">
                                <span className="text-md font-semibold text-black uppercase">
                                    {step.day}
                                </span>

                                <StepperIndicator />
                            </StepperTrigger>

                            <StepperSeparator />
                        </StepperItem>
                    ))}
                </StepperList>
                {steps1.map((step) => (
                    <StepperContent
                        key={step.value}
                        value={step.value}
                        className="flex flex-col items-center gap-4 border-[#D5BBEA]/60 rounded-[40px] border bg-card p-10 text-card-foreground"
                    >
                        <div className="flex flex-col items-center gap-4 text-center">
                            <h3 className="font-semibold text-2xl">{step.title}</h3>
                            <p className="text-black/60">{step.description}</p>
                        </div>
                    </StepperContent>
                ))}
            </Stepper>
            <div className="h-full">
                <Stepper defaultValue="1" className="w-full md:hidden justify-center mx-auto mt-20 max-w-80">
                    <StepperList>
                        {steps1.map((step) => (
                            <StepperItem key={step.value} value={step.value}>
                                <StepperTrigger className="flex flex-col text-center justify-center items-center gap-3">

                                    <StepperIndicator />
                                </StepperTrigger>

                                <StepperSeparator />
                            </StepperItem>
                        ))}
                    </StepperList>
                    {steps1.map((step) => (
                        <StepperContent
                            key={step.value}
                            value={step.value}
                            className="flex flex-col items-center gap-4 border-[#D5BBEA]/60 rounded-xl border bg-card p-10 text-card-foreground"
                        >
                            <div className="flex flex-col items-center gap-4 text-center">
                                <p className="text-md font-semibold text-black uppercase">
                                    {step.day}
                                </p>
                                <h3 className="font-semibold text-2xl">{step.title}</h3>
                                <p className="text-black/60">{step.description}</p>
                            </div>
                        </StepperContent>
                    ))}
                </Stepper>
            </div>

        </section>
    );
}


const steps2 = [
    {
        value: "1",
        day: "Day 1-3",
        title: "Biological Assessment",
        title2: "Biological Assessment",
        description: `From your first assessment to long-term recovery, every milestone is
        built around measurable biological improvement. Rather than treating
        pain alone, the Knee Protocol monitors inflammation, muscle health,
        cartilage turnover, and movement quality—ensuring each phase moves
        you closer to lasting recovery.`,
    },

    {
        value: "2",
        day: "Day 7",
        title: "Personalised Recovery Plan",
        title2: "Biological Assessment",
        description: "Plant formulation, movement therapy, and GLP-1 if indicated — all biomarker-driven.",
    },
    {
        value: "3",
        day: "Day 30/60",
        title: "Biological Progress Monitoring",
        title2: "Biological Assessment",
        description: "Protocol updated if markers haven't moved. No guessing.",
    },
    {
        value: "4",
        day: "Day 90",
        title: "Long-Term Biological Recovery",
        title2: "Biological Assessment",
        description: "Reversal confirmed in biology, not pain scores.",
    },
];


export function ProtocolSection2() {
    return (
        <section className="relative border-x max-w-5xl mx-auto border-[#D5BBEA]/60 pt-10 mx-3">

            <div className="relative flex flex-col h-full space-y-6 justify-center items-center">
                <div className="max-w-md md:max-w-3xl text-center px-8">
                    <h1
                        className="font-heading text-2xl font-semibold text-black leading-tight md:text-3xl">
                        The Neck & Back Protocol
                    </h1>
                </div>
            </div>
            <Stepper defaultValue="1" className="w-full hidden md:flex justify-center mx-auto mt-20 max-w-3xl">
                <StepperList>
                    {steps2.map((step) => (
                        <StepperItem key={step.value} value={step.value}>
                            <StepperTrigger className="flex flex-col text-center justify-center items-center gap-6">
                                <span className="text-md font-semibold text-black uppercase">
                                    {step.day}
                                </span>
                                <StepperIndicator />
                            </StepperTrigger>
                            <StepperSeparator />
                        </StepperItem>
                    ))}
                </StepperList>
                {steps2.map((step) => (
                    <StepperContent
                        key={step.value}
                        value={step.value}
                        className="flex flex-col items-center gap-4 border-[#D5BBEA]/60 rounded-[40px] border bg-card p-10 text-card-foreground"
                    >
                        <div className="flex flex-col items-center gap-4 text-center">
                            <h3 className="font-semibold text-2xl">{step.title}</h3>
                            <p className="text-black/60">{step.description}</p>
                        </div>
                    </StepperContent>
                ))}
            </Stepper>
            <div className="h-full">
                <Stepper defaultValue="1" className="w-full md:hidden justify-center mx-auto mt-20 max-w-80">
                    <StepperList>
                        {steps2.map((step) => (
                            <StepperItem key={step.value} value={step.value}>
                                <StepperTrigger className="flex flex-col text-center justify-center items-center gap-3">
                                    <StepperIndicator />
                                </StepperTrigger>
                                <StepperSeparator />
                            </StepperItem>
                        ))}
                    </StepperList>
                    {steps2.map((step) => (
                        <StepperContent
                            key={step.value}
                            value={step.value}
                            className="flex flex-col items-center gap-4 border-[#D5BBEA]/60 rounded-xl border bg-card p-10 text-card-foreground"
                        >
                            <div className="flex flex-col items-center gap-4 text-center">
                                <p className="text-md font-semibold text-black uppercase">
                                    {step.day}
                                </p>
                                <h3 className="font-semibold text-2xl">{step.title}</h3>
                                <p className="text-black/60">{step.description}</p>
                            </div>
                        </StepperContent>
                    ))}
                </Stepper>
            </div>
        </section>
    );
}


const steps3 = [
    {
        value: "1",
        day: "Day 1-3",
        title: "Biological Assessment",
        title2: "Biological Assessment",
        description: `From your first assessment to long-term recovery, every milestone is
        built around measurable biological improvement. Rather than treating
        pain alone, the Knee Protocol monitors inflammation, muscle health,
        cartilage turnover, and movement quality—ensuring each phase moves
        you closer to lasting recovery.`,
    },

    {
        value: "2",
        day: "Day 7",
        title: "Personalised Recovery Plan",
        title2: "Biological Assessment",
        description: "Plant formulation, movement therapy, and GLP-1 if indicated — all biomarker-driven.",
    },
    {
        value: "3",
        day: "Day 30/60",
        title: "Biological Progress Monitoring",
        title2: "Biological Assessment",
        description: "Protocol updated if markers haven't moved. No guessing.",
    },
    {
        value: "4",
        day: "Day 90",
        title: "Long-Term Biological Recovery",
        title2: "Biological Assessment",
        description: "Reversal confirmed in biology, not pain scores.",
    },
];


export function ProtocolSection3() {
    return (
        <section className="relative border-x max-w-5xl mx-auto border-[#D5BBEA]/60 pt-10 mx-3">

            <div className="relative flex flex-col h-full space-y-6 justify-center items-center">
                <div className="max-w-md md:max-w-3xl text-center px-8">
                    <h1
                        className="font-heading text-2xl font-semibold text-black leading-tight md:text-3xl">
                        The Muscle longevity Protocol
                    </h1>
                </div>
            </div>
            <Stepper defaultValue="1" className="w-full hidden md:flex justify-center mx-auto mt-20 max-w-3xl">
                <StepperList>
                    {steps3.map((step) => (
                        <StepperItem key={step.value} value={step.value}>
                            <StepperTrigger className="flex flex-col text-center justify-center items-center gap-6">
                                <span className="text-md font-semibold text-black uppercase">
                                    {step.day}
                                </span>
                                <StepperIndicator />
                            </StepperTrigger>
                            <StepperSeparator />
                        </StepperItem>
                    ))}
                </StepperList>
                {steps3.map((step) => (
                    <StepperContent
                        key={step.value}
                        value={step.value}
                        className="flex flex-col items-center gap-4 border-[#D5BBEA]/60 rounded-[40px] border bg-card p-10 text-card-foreground"
                    >
                        <div className="flex flex-col items-center gap-4 text-center">
                            <h3 className="font-semibold text-2xl">{step.title}</h3>
                            <p className="text-black/60">{step.description}</p>
                        </div>
                    </StepperContent>
                ))}
            </Stepper>
            <div className="h-full">
                <Stepper defaultValue="1" className="w-full md:hidden justify-center mx-auto mt-20 max-w-80">
                    <StepperList>
                        {steps3.map((step) => (
                            <StepperItem key={step.value} value={step.value}>
                                <StepperTrigger className="flex flex-col text-center justify-center items-center gap-3">
                                    <StepperIndicator />
                                </StepperTrigger>
                                <StepperSeparator />
                            </StepperItem>
                        ))}
                    </StepperList>
                    {steps3.map((step) => (
                        <StepperContent
                            key={step.value}
                            value={step.value}
                            className="flex flex-col items-center gap-4 border-[#D5BBEA]/60 rounded-xl border bg-card p-10 text-card-foreground"
                        >
                            <div className="flex flex-col items-center gap-4 text-center">
                                <p className="text-md font-semibold text-black uppercase">
                                    {step.day}
                                </p>
                                <h3 className="font-semibold text-2xl">{step.title}</h3>
                                <p className="text-black/60">{step.description}</p>
                            </div>
                        </StepperContent>
                    ))}
                </Stepper>
            </div>
        </section>
    );
}


const steps4 = [
    {
        value: "1",
        day: "Day 1-3",
        title: "Biological Assessment",
        title2: "Biological Assessment",
        description: `From your first assessment to long-term recovery, every milestone is
        built around measurable biological improvement. Rather than treating
        pain alone, the Knee Protocol monitors inflammation, muscle health,
        cartilage turnover, and movement quality—ensuring each phase moves
        you closer to lasting recovery.`,
    },

    {
        value: "2",
        day: "Day 7",
        title: "Personalised Recovery Plan",
        title2: "Biological Assessment",
        description: "Plant formulation, movement therapy, and GLP-1 if indicated — all biomarker-driven.",
    },
    {
        value: "3",
        day: "Day 30/60",
        title: "Biological Progress Monitoring",
        title2: "Biological Assessment",
        description: "Protocol updated if markers haven't moved. No guessing.",
    },
    {
        value: "4",
        day: "Day 90",
        title: "Long-Term Biological Recovery",
        title2: "Biological Assessment",
        description: "Reversal confirmed in biology, not pain scores.",
    },
];


export function ProtocolSection4() {
    return (
        <section className="relative border-x max-w-5xl mx-auto border-[#D5BBEA]/60 pt-10 mx-3">

            <div className="relative flex flex-col h-full space-y-6 justify-center items-center">
                <div className="max-w-md md:max-w-3xl text-center px-8">
                    <h1
                        className="font-heading text-2xl font-semibold text-black leading-tight md:text-3xl">
                        The Obesity & GLP-1 Protocol
                    </h1>
                </div>
            </div>
            <Stepper defaultValue="1" className="w-full hidden md:flex justify-center mx-auto mt-20 max-w-3xl">
                <StepperList>
                    {steps4.map((step) => (
                        <StepperItem key={step.value} value={step.value}>
                            <StepperTrigger className="flex flex-col text-center justify-center items-center gap-6">
                                <span className="text-md font-semibold text-black uppercase">
                                    {step.day}
                                </span>
                                <StepperIndicator />
                            </StepperTrigger>
                            <StepperSeparator />
                        </StepperItem>
                    ))}
                </StepperList>
                {steps4.map((step) => (
                    <StepperContent
                        key={step.value}
                        value={step.value}
                        className="flex flex-col items-center gap-4 border-[#D5BBEA]/60 rounded-[40px] border bg-card p-10 text-card-foreground"
                    >
                        <div className="flex flex-col items-center gap-4 text-center">
                            <h3 className="font-semibold text-2xl">{step.title}</h3>
                            <p className="text-black/60">{step.description}</p>
                        </div>
                    </StepperContent>
                ))}
            </Stepper>
            <div className="h-full">
                <Stepper defaultValue="1" className="w-full md:hidden justify-center mx-auto mt-20 max-w-80">
                    <StepperList>
                        {steps4.map((step) => (
                            <StepperItem key={step.value} value={step.value}>
                                <StepperTrigger className="flex flex-col text-center justify-center items-center gap-3">
                                    <StepperIndicator />
                                </StepperTrigger>
                                <StepperSeparator />
                            </StepperItem>
                        ))}
                    </StepperList>
                    {steps4.map((step) => (
                        <StepperContent
                            key={step.value}
                            value={step.value}
                            className="flex flex-col items-center gap-4 border-[#D5BBEA]/60 rounded-xl border bg-card p-10 text-card-foreground"
                        >
                            <div className="flex flex-col items-center gap-4 text-center">
                                <p className="text-md font-semibold text-black uppercase">
                                    {step.day}
                                </p>
                                <h3 className="font-semibold text-2xl">{step.title}</h3>
                                <p className="text-black/60">{step.description}</p>
                            </div>
                        </StepperContent>
                    ))}
                </Stepper>
            </div>
        </section>
    );
}