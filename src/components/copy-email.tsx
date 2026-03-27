"use client";

import { useState, useCallback } from "react";

export function CopyEmail({
  email,
  className,
}: {
  email: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleClick = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      const textarea = document.createElement("textarea");
      textarea.value = email;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [email]);

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${className} relative cursor-pointer`}
    >
      <span
        className="inline-flex items-center gap-1.5 transition-all duration-300"
        style={{
          opacity: copied ? 0 : 1,
          transform: copied ? "translateY(4px)" : "translateY(0)",
        }}
      >
        {email}
      </span>
      <span
        className="absolute inset-0 inline-flex items-center justify-start transition-all duration-300"
        style={{
          opacity: copied ? 1 : 0,
          transform: copied ? "translateY(0)" : "translateY(-4px)",
        }}
      >
        copied!
      </span>
    </button>
  );
}
