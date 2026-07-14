

import Image from "next/image";

export function TrustSection() {
    return (
        <section className="md:flex grid grid-cols-2 my-10 md:justify-between gap-y-10 gap-x-4 md:gap-10 lg:mx-auto max-w-5xl text-center p-3 md:px-16">
            <div className="flex flex-col space-y-2 justify-center items-center">
                <Image
                    src="/new/pub-med.jpg"
                    alt="Hero"
                    width={200}
                    height={200}
                    className="object-contain h-full w-28"
                />
                <h3 className="font-medium">34+ </h3>
                <p className="text-sm w-40">Years of Research Built into Biological Insight.</p>
            </div>
            <div className="flex flex-col space-y-2 justify-center items-center">
                <div className='flex flex-col w-full h-full justify-center items-center'>

                    <div className='flex -space-x-3 justify-center items-center'>
                        <Image
                            src="/new/wiley.png"
                            alt="Hero"
                            width={100}
                            height={100}
                            className="object-contain   h-auto w-20 border rounded-full"
                        />
                        <Image
                            src="/new/nature.jpg"
                            alt="Hero"
                            width={100}
                            height={100}
                            className="object-contain   rounded-full h-14 w-14"
                        />
                        <Image
                            src="/new/aging.png"
                            alt="Hero"
                            width={100}
                            height={100}
                            className="object-contain   h-auto w-16 border rounded-full"
                        />
                    </div>
                </div>
                <h3 className="font-medium">Wiley · Nature · Aging  </h3>
                <p className="text-sm w-32">Peer-reviewed research.
                </p>
            </div>
            <div className="flex flex-col space-y-2 justify-center items-center">
                <Image
                    src="/new/hms.jpg"
                    alt="Hero"
                    width={200}
                    height={200}
                    className="object-contain   h-full w-20"
                />
                <h3 className="font-medium">120+ </h3>
                <p className="text-sm w-50"> Published Studies in Research & Development.                </p>
            </div>
            <div className="flex flex-col space-y-2 justify-center items-center">
                <Image
                    src="/logos/muscle-logo.jpg"
                    alt="Hero"
                    width={200}
                    height={200}
                    className="object-contain   h-full w-16"
                />
                <h3 className="font-medium">MuscleAGE™</h3>
                <p className="text-sm w-40">Advanced Muscle Biomarker Intelligence.                </p>
            </div>

        </section>
    )
}
