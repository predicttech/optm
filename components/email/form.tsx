"use client";

import Image from "next/image";
import Link from "next/link"; 
import { useState } from "react"; 
import { Toaster } from "../ui/sonner";
import { toast } from "sonner";
import { Loader } from "lucide-react";

export function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  // create a function to validate the email
  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  // create a function to validate the name
  const validateName = (name: string) => {
    const re = /^[a-zA-Z ]{2,30}$/;
    return re.test(name);
  };

  const validateForm = () => {
    if (!validateName(name)) {
      toast.error("Please enter the valid name");
      return false;
    }
    if (!validateEmail(email)) {
      toast.error("Please enter the valid email");
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });
  
      const data = await response.json();
  
      console.log(data);
  
      if (!response.ok) {
        throw new Error(data.error);
      }
  
      alert("Email Sent");
  
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="text-extrabold flex flex-col lg:flex-row lg:justify-around items-center overflow-x-hidden mt-10 lg:mt-10 mb-10">
      <Toaster />
       
        
      <div className="flex flex-col justify-center gap-7 h-3/4">
        <div className="flex justify-center">
          <Image
            src="/customer-service.png"
            className="hover:scale-110 transition ease-in-out mb-2 mt-10"
            alt="contact"
            width={70}
            height={80}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="text-input" className="font-bold">
            Name:
          </label>
          <input
            type="text"
            id="text-input"
            className="border outline-0 border-1 h-10 rounded-md p-2 font-normal w-80 focus:border-blue-500 focus:border-2"
            placeholder="Enter the name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email-input" className="font-bold">
            Email:
          </label>
          <input
            type="email"
            id="email-input"
            className="border outline-0 border-1 h-10 rounded-md p-2 font-normal w-80 focus:border-blue-500 focus:border-2"
            placeholder="Enter the email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="textarea-input" className="font-bold">
            Message:
          </label>
          {/* @ts-ignore */}
          <textarea
            name=""
            placeholder="Enter the message"
            id="textarea-input"
            cols={30}
            rows={10}
            className="border outline-0 border-1 h-40 rounded-md p-2 font-normal w-80 focus:border-blue-500 focus:border-2"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          ></textarea>
        </div>
        <div>
          {/* @ts-ignore */}
          <button
            className="w-full font-bold bg-black text-white px-5 py-3 rounded-md border-2 transition ease-in-out mb-10 lg:mb-0"
            onClick={() => handleSubmit()}
          >
            {loading ? <Loader size={8} color="white" /> : "Send Message"}
          </button>
        </div>
      </div>
    </div>
  );
}