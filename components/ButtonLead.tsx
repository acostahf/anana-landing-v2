"use client";

import React, { useState, useRef } from "react";
import { toast } from "react-hot-toast";
import apiClient from "@/libs/api";

// This component is used to collect the emails from the landing page
// You'd use this if your product isn't ready yet or you want to collect leads
// For instance: A popup to send a freebie, joining a waitlist, etc.
// It calls the /api/lead/route.js route and store a Lead document in the database
const ButtonLead = ({ extraStyle }: { extraStyle?: string }) => {
    const inputRef = useRef(null);
    const [email, setEmail] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isDisabled, setIsDisabled] = useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e?.preventDefault();

        setIsLoading(true);
        try {
            await apiClient.post("/lead", { email });

            toast.success("Thanks for joining the waitlist!");

            // just remove the focus on the input
            inputRef.current.blur();
            setEmail("");
            setIsDisabled(true);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <form
            className={`w-full flex flex-col gap-3 md:flex-row md:justify-between md:items-center md:flex-grow-0 md:flex-shrink-0 md:w-[568px] relative md:pl-6 md:pr-1 md:py-1 rounded-[20px] md:bg-[#1d1128]/75 md:border border-[#1451c7] ${
                extraStyle ? extraStyle : ""
            }`}
            onSubmit={handleSubmit}
        >
            <input
                required
                type="email"
                value={email}
                ref={inputRef}
                autoComplete="email"
                placeholder="Enter your email..."
                className="font-lora px-4 py-3 md:p-0 rounded-2xl bg-[#1d1128]/75 border border-[#1451c7] md:flex-grow-0 flex-shrink-0 text-base text-center md:text-left text-white placeholder:opacity-60 md:bg-transparent md:border-none focus:outline-none"
                onChange={(e) => setEmail(e.target.value)}
            />

            <button
                className="font-sans relative border-none hover:bg-[#1451c7]/75 min-w-[183px] px-8 py-2 rounded-2xl bg-[#1451c7] text-white disabled:bg-[#1451c7]/75 disabled:text-white transform transition-transform duration-150 ease-in-out"
                type="submit"
                disabled={isDisabled || isLoading}
                onMouseDown={(e) =>
                    (e.currentTarget.style.transform = "scale(0.95)")
                }
                onMouseUp={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                }
                onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                }
            >
                {isLoading ? (
                    <span className="loading loading-spinner loading-xs"></span>
                ) : (
                    "Join the waitlist"
                )}
            </button>
        </form>
    );
};

export default ButtonLead;
