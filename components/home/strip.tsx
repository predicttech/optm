
import Link from "next/link";

export function StripSection() {
    return (
        <section className="z-50 px-6 relative w-full gap-2 flex justify-center items-center py-2">
            <p className="text-sm text-center max-w-60 md:max-w-full">
                India's first biomarker-driven pain & metabolic clinic.
                <Link href={"/"} className={"shadow-none border-none pl-3 underline"} >
                Read article
            </Link>
            </p>
            
        </section>

    );
}
