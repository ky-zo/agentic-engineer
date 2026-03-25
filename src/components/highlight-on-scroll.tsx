"use client";

import { useRef } from "react";
import { useInView } from "motion/react";

export function HighlightOnScroll({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -80% 0px" });

  return (
    <span
      ref={ref}
      className="highlight-on-scroll"
      data-in-view={isInView}
    >
      {children}
    </span>
  );
}
