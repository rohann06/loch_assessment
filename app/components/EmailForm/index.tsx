"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";

const EmailForm = () => {
  const [email, setEmail] = useState("");

  //Submitting the email for check
  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    toast.success("Entered email is correct....");
    setEmail("");
    
  };

  return (
    <>
      <form
        onSubmit={handleEmailSubmit}
        className=" mt-5 mb-8 flex flex-col items-start gap-y-5"
      >
        <div className=" w-[340px] rounded-lg border h-[59px] p-4 shadow-md hover:border-black">
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Your email address"
            className=" flex-1 border-0 focus-visible:ring-0 focus-visible:ring-transparent rounded-lg px-2 outline-none w-full"
          />
        </div>

        <button
          type="submit"
          className=" w-[340px] bg-black p-4 rounded-lg text-white"
        >
          Get Started
        </button>
      </form>
    </>
  );
};

export default EmailForm;
