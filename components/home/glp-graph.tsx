"use client";

const points = [
    { x: 170, y: 520, subtitle: "Atlas", },
    { x: 310, y: 390, subtitle: "Stronger Results", },
    { x: 490, y: 240, subtitle: "your whole health", },
    { x: 800, y: 105, subtitle: "Done Right", },
] as const;

const path =
    "M170,520 C216.67,476.67 256.67,436.67 310,390 " +
    "C363.33,343.33 425,287.5 490,240 " +
    "C555,192.5 630,150 700,105";

export function GLPGraph() {
    return (
        <div className="pointer-events-none h-100 w-100 absolute bottom-0 z-[2]">
            <svg
                viewBox="0 0 900 700"
                className="absolute inset-0 h-full w-full"
                preserveAspectRatio="xMidYMid slice"
            >
                <defs>
                    <linearGradient id="curve" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
                        <stop offset="100%" stopColor="rgba(255,255,255,0.95)" />
                    </linearGradient>

                    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="1.2" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                <path d={path} stroke="url(#curve)" strokeWidth="1" fill="none" strokeLinecap="round" />

                {points.map((point) => (
                    <g key={point.title} filter="url(#glow)">
                        <circle cx={point.x} cy={point.y} r="4.5" fill="white" opacity="0.18" />
                        <circle cx={point.x} cy={point.y} r="2" fill="white" />
                    </g>
                ))}
            </svg>

            {points.map((point) => (
                <div
                    key={point.title}
                    className="absolute w-[90px] drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]"
                    style={{
                        left: `${(point.x / 900) * 100}%`,
                        top: `${(point.y / 700) * 100}%`,
                        transform: `translate(${point.align === "right" ? "-100%" : "5px"}, 5px)`,
                        textAlign: point.align === "right" ? "right" : "left",
                    }}
                >
                    <p className="text-[8px] font-light leading-tight text-white/70">{point.title}</p>
                    <h3 className="mt-0.5 font-serif text-[11px] italic leading-tight text-white">
                        {point.subtitle}
                    </h3>
                </div>
            ))}
        </div>
    );
}