"use client"
import React from "react"

import Link from "next/link";
import { Button } from "../ui/button";
import Logo from "../logo";
import { cn } from "@/lib/utils";

const navLinks = [ 
    { name: "Why Our", href: "#conditions-we-treat" }, 
    { name: "The Science", href: "#the-science" },
];

export default function Header() {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)
    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 4)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])
    return (
        <header className="sticky z-50 mx-auto px-2 container top-2">
            <nav
                data-state={menuState && "active"}
                className={cn(
                    "sticky z-50 w-full px-3 transition-colors duration-300 md:px-4",
                    isScrolled ? "border-transparent" : ""
                )}
            >
                <div
                    className={cn(
                        "mx-auto mt-2 transition-all duration-300 flex h-12 container items-center shadow-[inset_0_1px_4px_rgba(255,255,255,0.3),inset_0_0_0_1px_rgba(255,255,255,0.2),inset_0_-2px_8px_rgba(255,255,255,0.2),0_6px_10px_rgba(0,0,0,0.05)] bg-primary/80 backdrop-blur-sm justify-between px-2 rounded-full",
                        isScrolled &&
                        " max-w-4xl"
                    )}
                > 
                    <div className="mx-auto flex w-full items-center justify-between">

                        <Link href="/" className="text-xl pl-3">
                            <Logo fill="white" className="size-16 pt-1" />
                        </Link>

                        {/* Navigation */}
                        <nav className="hidden items-center gap-8 md:flex">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-xs text-muted/80 transition hover:text-background"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                        <Link href={"https://cal.com/predict/30min"} target="_blank">
                            <Button>
                            Book Your Assessment
                            </Button>
                        </Link> 
                    </div> 
                </div>
            </nav>
        </header>
    );
}