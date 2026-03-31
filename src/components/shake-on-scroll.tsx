"use client";

import { useRef } from "react";
import { useInView } from "motion/react";

export function ShakeOnScroll({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -20% 0px" });

  return (
    <span
      ref={ref}
      className={`inline-block ${isInView ? "animate-shake" : ""}`}
    >
      {children}
    </span>
  );
}
