"use client";
// @flow strict
import { isValidEmail } from "@/utils/check-email";
import axios from "axios";
import { useState } from "react";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";

function ContactForm() {
  const [error, setError] = useState({ email: false, required: false });
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState({ name: "", email: "", message: "" });

  const checkRequired = () => {
    if (userInput.email && userInput.message && userInput.name) {
      setError({ ...error, required: false });
    }
  };

  const handleSendMail = async (e) => {
    e.preventDefault();
    if (!userInput.email || !userInput.message || !userInput.name) {
      setError({ ...error, required: true });
      return;
    } else if (error.email) {
      return;
    } else {
      setError({ ...error, required: false });
    }
    try {
      setIsLoading(true);
      await axios.post(`${process.env.NEXT_PUBLIC_APP_URL}/api/contact`, userInput);
      toast.success("Message sent successfully!");
      setUserInput({ name: "", email: "", message: "" });
    } catch (err) {
      toast.error(err?.response?.data?.message);
    } finally {
      setIsLoading(false);
    }
  };

  const inputBase = [
    "w-full rounded-xl px-4 py-3 text-sm text-white font-mono",
    "bg-[#07070f] border border-[#1a1a3e]",
    "outline-none ring-0 transition-all duration-300",
    "placeholder:text-zinc-600",
    "focus:border-[#ff2d78] focus:shadow-[0_0_0_2px_rgba(255,45,120,0.12)]",
  ].join(" ");

  const labelBase = "text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-1.5 block";

  return (
    <div className="w-full rounded-2xl overflow-hidden border border-[#1a1a3e]"
      style={{ background: "linear-gradient(135deg,#0a0a18 0%,#0e0e1f 100%)" }}>

      {/* Top gradient bar */}
      <div className="h-[2px] w-full"
        style={{ background: "linear-gradient(90deg,#ff2d78,#8b2cff,#00e5ff)" }}/>

      {/* Mac-style header */}
      <div className="flex items-center gap-2 px-5 py-3 border-b border-[#1a1a3e]">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]"/>
        <span className="w-3 h-3 rounded-full bg-[#febc2e]"/>
        <span className="w-3 h-3 rounded-full bg-[#28c840]"/>
        <span className="ml-3 text-[10px] font-mono text-zinc-500 tracking-widest">// send_message.js</span>
      </div>

      <div className="p-6 flex flex-col gap-5">
        {/* Name */}
        <div>
          <label className={labelBase}>Your Name</label>
          <input
            className={inputBase}
            type="text"
            maxLength="100"
            required
            placeholder="John Doe"
            onChange={(e) => setUserInput({ ...userInput, name: e.target.value })}
            onBlur={checkRequired}
            value={userInput.name}
          />
        </div>

        {/* Email */}
        <div>
          <label className={labelBase}>Email Address</label>
          <input
            className={inputBase}
            type="email"
            maxLength="100"
            required
            placeholder="john@example.com"
            value={userInput.email}
            onChange={(e) => setUserInput({ ...userInput, email: e.target.value })}
            onBlur={() => {
              checkRequired();
              setError({ ...error, email: !isValidEmail(userInput.email) });
            }}
          />
          {error.email && (
            <p className="mt-1 text-xs text-red-400 font-mono">⚠ Please provide a valid email</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className={labelBase}>Message</label>
          <textarea
            className={inputBase}
            maxLength="500"
            name="message"
            required
            placeholder="Tell me about your project..."
            onChange={(e) => setUserInput({ ...userInput, message: e.target.value })}
            onBlur={checkRequired}
            rows="5"
            value={userInput.message}
          />
        </div>

        {/* Error + Submit */}
        <div className="flex flex-col gap-3">
          {error.required && (
            <p className="text-xs text-red-400 font-mono">⚠ All fields are required</p>
          )}
          <button
            onClick={handleSendMail}
            disabled={isLoading}
            className="group flex items-center justify-center gap-2 w-full py-3 rounded-xl font-mono text-xs uppercase tracking-widest text-white font-semibold transition-all duration-300 disabled:opacity-60"
            style={{ background: "linear-gradient(90deg,#ff2d78,#8b2cff)" }}>
            {isLoading ? (
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin"/>
                Sending...
              </span>
            ) : (
              <span className="flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                Send Message
                <TbMailForward size={17}/>
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;