"use client";

import Image from "next/image";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validateName = (name: string) => {
    const re = /^[a-zA-Z ]{2,30}$/;
    return re.test(name);
  };

  const validatePhone = (phone: string) => {
    const re = /^[6-9]\d{9}$/;
    return re.test(phone);
  };

  const validateForm = () => {
    if (!validateName(name)) {
      toast.error("Please enter a valid name");
      return false;
    }

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email");
      return false;
    }

    if (!validatePhone(phone)) {
      toast.error("Please enter a valid phone number");
      return false;
    }

    if (!message.trim()) {
      toast.error("Please enter your message");
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    try {
      setLoading(true);

      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      toast.success("Message sent successfully!");

      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (error: any) {
      toast.error(error.message || "Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative py-20 m-3">
      <div className="relative flex flex-col h-full space-y-6 justify-center items-center">
        <Badge size={"sm"}>Delhi NCR · Start this week</Badge>

        <div className="max-w-md md:max-w-3xl text-center px-8">
          <h1 className="font-heading text-2xl font-semibold text-black leading-tight md:text-3xl">
            Find Out Your <br /> Biological Age. Start This Week.
          </h1>

          <p className="mt-6 text-sm leading-6 text-black/60">
            Book your MuscleAGE™, OrthoAGE™ or LegAGE™ panel at our South Delhi
            clinic. Results in 48 hours. Your protocol starts the same week.
            Board-certified specialists review everything.
          </p>
        </div>

        <div className="grid w-full md:grid-cols-2 md:gap-3 rounded-3xl bg-[#D5BBEA] max-w-5xl mt-10">
          {/* Image */}
          <div className="grid p-3 md:pr-0 gap-3 h-full w-full">
            <Image
              src="/new/contact.jpg"
              alt="Doctor"
              width={500}
              height={500}
              className="h-full aspect-square rounded-xl object-cover w-full"
            />
          </div>

          {/* Form */}
          <div className="h-full p-3 pt-0 md:pt-3 md:pl-0 w-full">
            <div className="flex rounded-xl flex-col h-full w-full bg-white aspect-square p-8">
              <div className="flex flex-col w-full gap-4 max-w-80 mx-auto justify-center h-full">
                <Input
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <Input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />

                <Textarea
                  placeholder="How can we help you?"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />

                <Button
                  className="w-full"
                  disabled={loading}
                  onClick={handleSubmit}
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}