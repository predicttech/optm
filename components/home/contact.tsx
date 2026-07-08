import Image from "next/image";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

export function ContactSection() {
    return (
        <section className="relative py-20 m-3"> 
            <div className="relative flex flex-col h-full space-y-6 justify-center items-center">
                <Badge>
                    Delhi NCR · Start this week
                </Badge> 
                <div className="max-w-md md:max-w-3xl text-center px-8">
                    <h1
                        className="font-heading text-2xl font-semibold text-black leading-tight md:text-3xl">
                        Find out your <br /> biological age. Start this week.
                    </h1>
                    <p className="mt-6 text-sm leading-6 text-black/60">
                        Book your MuscleAGE™, OrthoAGE™ or LegAGE™ panel at our
                        South Delhi clinic. Results in 48 hours. Your protocol starts the same week. Board-certified specialists review everything.
                    </p> 
                </div>
                <div className="grid w-full md:gap-3 rounded-3xl bg-[#D5BBEA] max-w-5xl mt-10 md:grid-cols-2 ">
                    <div className="grid p-3 md:pr-0 gap-3 h-full w-full">
                        <Image
                            src="/new/contact.jpg"
                            alt="Doctor"
                            width={220}
                            height={220}
                            className="h-full aspect-square rounded-xl object-cover w-full"
                        />
                    </div>
                    <div className="h-full p-3 pt-0 md:pt-3 md:pl-0 w-full">
                        <div className="flex rounded-xl flex-col h-full w-full bg-white aspect-square p-8">
                             <div className="flex flex-col w-full gap-3 max-w-80 mx-auto justify-center h-full items-center">
                            <Input placeholder="Enter your name" />
                            <Input placeholder="Enter your email" />
                            <Input placeholder="Enter your phone number" /> 
                            <Textarea placeholder="How can we help you?" />
                            <Button className={"w-full"}>
                                Send
                            </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </section>
    );
}
