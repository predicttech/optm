
import { Dithering } from "@paper-design/shaders-react"

interface MarketingLayoutProps {
    children: React.ReactNode
}

export default async function MarketingLayout({
    children,
}: MarketingLayoutProps) {
    return (
        <>
            <Dithering className="absolute top-0 -z-50 w-full h-full"
                colorBack="#ffffff00"
                colorFront="#D5BBEA"
                shape="wave"
                type="8x8"
                size={1}
                speed={0.2}
                scale={0.8}
                rotation={180}
                offsetY={-0.4}
            />
            <main className="flex-1 border-b">{children}</main>

        </>
    )
}