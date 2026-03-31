"use client";

import { useInView } from "motion/react";
import { useRef } from "react";

const signals = [
  "AI-native companies are pulling away, and the gap is getting harder to close.",
  "Your team is experimenting with AI, but the company hasn't made the mental shift.",
  "Opportunities are slipping by because the team can't move fast enough, and hiring more people won't close the gap.",
  "Competitors with smaller teams are shipping faster because they've already made the shift.",
];

function SignalItem({ signal }: { signal: string }) {
  const ref = useRef<HTMLLIElement>(null);
  const isInView = useInView(ref, { margin: "0px 0px -30% 0px" });

  return (
    <li ref={ref} className="flex gap-3">
      <span
        className="problem-dot mt-2 inline-block size-1.5 shrink-0 rounded-[1px]"
        data-in-view={isInView}
      />
      <span>{signal}</span>
    </li>
  );
}

export function ProblemSignalsList() {
  return (
    <ul className="space-y-2 pl-4 text-base text-[var(--muted)]">
      {signals.map((signal) => (
        <SignalItem key={signal} signal={signal} />
      ))}
    </ul>
  );
}
