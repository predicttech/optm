import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export function ApproachSection() {
    return (
        <section className="relative bg-primary py-20">

            <div className="relative flex flex-col h-full space-y-6 justify-center items-center">

                <div className="max-w-md md:max-w-3xl text-center px-8">
                    <h1
                        className="font-heading text-2xl font-semibold text-white leading-tight md:text-3xl">
                        Our approach
                    </h1>
                </div>

            </div>

            <div className="mt-20 md:flex grid gap-2 mx-auto max-w-5xl">
                <Card className="relative  bg-transparent shadow-none ring-0 mx-auto w-full max-w-sm pt-0">
                    <img
                        src="/new/hero-1.jpg"
                        alt="Event cover"
                        className="relative border border-[#D5BBEA] rounded-3xl z-20 w-full object-cover"
                    />
                    <CardHeader>
                        <CardTitle className="text-white text-xl font-semibold">
                            The 4-Step Protocol
                        </CardTitle>
                        <CardDescription className="text-white/80">
                            Our systematic approach moves patients from guesswork to proven outcomes through Assessment, Personalised Protocol formulation, Biomarker Monitoring, and Outcome Reporting.
                        </CardDescription>
                    </CardHeader> 
                </Card>
                <Card className="relative  bg-transparent shadow-none ring-0 mx-auto w-full max-w-sm pt-0">
                    <img
                        src="/new/hero-1.jpg"
                        alt="Event cover"
                        className="relative border border-[#D5BBEA] rounded-3xl z-20 w-full object-cover"
                    />
                    <CardHeader>
                        <CardTitle className="text-white text-xl font-semibold">
                            The 4-Step Protocol
                        </CardTitle>
                        <CardDescription className="text-white/80">
                            Our systematic approach moves patients from guesswork to proven outcomes through Assessment, Personalised Protocol formulation, Biomarker Monitoring, and Outcome Reporting.
                        </CardDescription>
                    </CardHeader> 
                </Card>
                <Card className="relative  bg-transparent shadow-none ring-0 mx-auto w-full max-w-sm pt-0">
                    <img
                        src="/new/hero-1.jpg"
                        alt="Event cover"
                        className="relative border border-[#D5BBEA] rounded-3xl z-20 w-full object-cover"
                    />
                    <CardHeader>
                        <CardTitle className="text-white text-xl font-semibold">
                            The 4-Step Protocol
                        </CardTitle>
                        <CardDescription className="text-white/80">
                            Our systematic approach moves patients from guesswork to proven outcomes through Assessment, Personalised Protocol formulation, Biomarker Monitoring, and Outcome Reporting.
                        </CardDescription>
                    </CardHeader> 
                </Card>
            </div>


        </section>
    );
}
