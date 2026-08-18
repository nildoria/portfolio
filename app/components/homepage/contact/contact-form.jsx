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
      // Same-origin relative path. An absolute URL built from NEXT_PUBLIC_APP_URL
      // broke in production: the variable was unset at build time, so the browser
      // posted to "undefined/api/contact" and got a 404.
      await axios.post("/api/contact", userInput);
      toast.success("Message sent successfully!");
      setUserInput({ name: "", email: "", message: "" });
    } catch (err) {
      toast.error(err?.response?.data?.message);
    } finally {
      setIsLoading(false);
    }
  };

  const inputBase =
    "mt-2 w-full rounded-md border border-line-input bg-surface px-4 py-3 text-[0.9375rem] text-hi placeholder:text-low transition-colors duration-150 focus:border-accent";

  const labelBase = "text-xs uppercase tracking-[0.12em] text-low";

  return (
    <div className="flex flex-col gap-5">
      {/* Name */}
      <div>
        <label htmlFor="name" className={labelBase}>
          Your Name
        </label>
        <input
          id="name"
          name="name"
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
        <label htmlFor="email" className={labelBase}>
          Email Address
        </label>
        <input
          id="email"
          name="email"
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
          <p className="mt-1 text-xs text-danger">Please provide a valid email</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelBase}>
          Message
        </label>
        <textarea
          id="message"
          className={inputBase}
          maxLength="500"
          name="message"
          required
          placeholder="Tell me about your project..."
          onChange={(e) => setUserInput({ ...userInput, message: e.target.value })}
          onBlur={checkRequired}
          rows={6}
          value={userInput.message}
        />
      </div>

      {/* Error + Submit */}
      <div className="flex flex-col gap-3">
        {error.required && (
          <p className="text-xs text-danger">All fields are required</p>
        )}
        <button
          onClick={handleSendMail}
          disabled={isLoading}
          className="flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-bg transition-colors duration-150 hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isLoading ? (
            <span className="flex items-center gap-2">
              <span className="h-3 w-3 animate-spin rounded-full border-2 border-bg/30 border-t-bg" />
              Sending...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              Send message
              <TbMailForward size={17} />
            </span>
          )}
        </button>
      </div>
    </div>
  );
}

export default ContactForm;
