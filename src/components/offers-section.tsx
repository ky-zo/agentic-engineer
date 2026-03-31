import { Section, SectionLabel } from "@/components/section";
import { CalButton } from "@/components/cal-button";
import {
  AccelerateAnimation,
  MultiplyAnimation,
  PipelineAnimation,
} from "@/components/offer-animations";

export function OffersSection() {
  return (
    <Section id="offers">
      <SectionLabel>
        <span
          className="inline-block size-2.5 rounded-[2px]"
          style={{
            backgroundColor: "oklch(0.55 0.15 250)",
            boxShadow:
              "0 0 6px oklch(0.55 0.15 250 / 0.6), 0 0 14px oklch(0.55 0.15 250 / 0.3)",
          }}
        />
        The Offers
      </SectionLabel>

      <div className="grid sm:grid-cols-3 gap-6 sm:gap-10">
        {/* One-off AI consultation */}
        <div>
          <AccelerateAnimation />
          <p
            className="text-lg font-semibold tracking-tight mb-1 mt-2"
            style={{ letterSpacing: "-0.02em" }}
          >
            One-off AI
            <br />
            consultation
          </p>
          <p className="font-mono text-sm text-[var(--muted)] mb-3">
            $800 &bull; one-time
          </p>
          <p className="text-sm font-medium text-[var(--foreground)] mb-1.5">
            Solve a specific AI problem
          </p>
          <ul className="space-y-1.5 text-sm text-[var(--muted)]">
            <li className="flex gap-2">
              <span className="font-mono text-[var(--accent)] shrink-0">
                &gt;
              </span>
              Focused help with a specific AI problem or workflow
            </li>
            <li className="flex gap-2">
              <span className="font-mono text-[var(--accent)] shrink-0">
                &gt;
              </span>
              Bring your questions, blockers, or rough ideas
            </li>
          </ul>
          <a href="https://buy.stripe.com/fZufZh2BmarjcCpcdn6AM07" target="_blank" rel="noopener noreferrer" className="sm:hidden font-mono text-xs font-medium px-5 py-2.5 bg-[var(--foreground)] text-[var(--background)] hover:opacity-90 transition-opacity cursor-pointer inline-block mt-4">
            Book a consultation
          </a>
        </div>

        {/* AI workshops for your team */}
        <div>
          <MultiplyAnimation />
          <p
            className="text-lg font-semibold tracking-tight mb-1 mt-2"
            style={{ letterSpacing: "-0.02em" }}
          >
            AI workshops
            <br />
            for your team
          </p>
          <p className="font-mono text-sm text-[var(--muted)] mb-3">
            $10,000 &bull; one-time
          </p>
          <p className="text-sm font-medium text-[var(--foreground)] mb-1.5">
            Upskill your team on AI
          </p>
          <ul className="space-y-1.5 text-sm text-[var(--muted)]">
            <li className="flex gap-2">
              <span className="font-mono text-[var(--accent)] shrink-0">
                &gt;
              </span>
              Four tailored workshops to help your team adopt AI effectively
            </li>
            <li className="flex gap-2">
              <span className="font-mono text-[var(--accent)] shrink-0">
                &gt;
              </span>
              Practical guidance, workflows, and hands-on support
            </li>
          </ul>
          <CalButton className="sm:hidden font-mono text-xs font-medium px-5 py-2.5 bg-[var(--foreground)] text-[var(--background)] hover:opacity-90 transition-opacity cursor-pointer inline-block mt-4">
            Book an intro call
          </CalButton>
        </div>

        {/* AI agent orchestration system */}
        <div>
          <PipelineAnimation />
          <p
            className="text-lg font-semibold tracking-tight mb-1 mt-2"
            style={{ letterSpacing: "-0.02em" }}
          >
            AI agent
            <br />
            orchestration system
          </p>
          <p className="font-mono text-sm text-[var(--muted)] mb-3">
            $5,000/mo &bull; ongoing
          </p>
          <p className="text-sm font-medium text-[var(--foreground)] mb-1.5">
            Deploy AI agents in your business
          </p>
          <ul className="space-y-1.5 text-sm text-[var(--muted)]">
            <li className="flex gap-2">
              <span className="font-mono text-[var(--accent)] shrink-0">
                &gt;
              </span>
              Proprietary AI orchestration system
            </li>
            <li className="flex gap-2">
              <span className="font-mono text-[var(--accent)] shrink-0">
                &gt;
              </span>
              Works especially well alongside the team workshops
            </li>
          </ul>
        </div>
      </div>

      <div className="hidden sm:grid sm:grid-cols-3 gap-6 sm:gap-10 mt-6">
        <a href="https://buy.stripe.com/fZufZh2BmarjcCpcdn6AM07" target="_blank" rel="noopener noreferrer" className="font-mono text-xs font-medium px-5 py-2.5 bg-[var(--foreground)] text-[var(--background)] hover:opacity-90 transition-opacity cursor-pointer justify-self-start">
          Book a consultation
        </a>
        <CalButton className="font-mono text-xs font-medium px-5 py-2.5 bg-[var(--foreground)] text-[var(--background)] hover:opacity-90 transition-opacity cursor-pointer justify-self-start">
          Book an intro call
        </CalButton>
      </div>
    </Section>
  );
}
