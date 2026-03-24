import Image from "next/image";
import { AsciiCloud } from "@/components/ascii-cloud";

function Section({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="py-10 sm:py-14">
      {children}
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-mono text-xs font-medium tracking-wider uppercase text-[var(--muted)] mb-6 flex items-center gap-3">
      <span className="shrink-0 flex items-center gap-2">{children}</span>
      <span className="flex-1 border-t border-[var(--border)]" />
    </h2>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <main className="w-full mx-auto px-6 sm:px-8">
        {/* Hero */}
        <section className="pt-20 sm:pt-32 pb-16 sm:pb-24 max-w-3xl mx-auto relative">
          <div className="flex flex-col lg:block">
            <div className="mb-10 sm:mb-14 flex justify-center lg:hidden">
              <AsciiCloud />
            </div>

            <div className="hidden lg:block absolute left-[90%] top-1/2 -translate-y-1/2">
              <AsciiCloud />
            </div>

            <div className="lg:max-w-[80%]">
              <h1 className="font-mono text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-6">
                Turn your team into an AI-native shipping machine.
              </h1>

              <p className="text-base leading-relaxed text-[var(--muted)] mb-8">
                I help software companies roll AI into engineering, QA, and
                internal workflows in 2 weeks, so the team actually ships faster
                instead of just experimenting.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-start mb-10">
                <a
                  href="#contact"
                  className="font-mono text-xs font-medium px-5 py-2.5 bg-[var(--foreground)] text-[var(--background)] hover:opacity-90 transition-opacity"
                >
                  Book an intro call
                </a>
                <a
                  href="#offers"
                  className="font-mono text-xs font-medium text-[var(--muted)] hover:text-[var(--foreground)] transition-colors underline underline-offset-4"
                >
                  See the offers
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Image
                  src="/kyzo.jpg"
                  alt="Kamil Kyzo"
                  width={40}
                  height={40}
                  className="object-cover"
                />
                <div>
                  <p className="text-sm font-semibold">Kamil Kyzo</p>
                  <p className="text-xs text-[var(--muted)] flex items-center gap-1.5 flex-wrap">
                    <a href="https://www.linkedin.com/posts/kyzo_fluar-just-got-acquired-in-an-all-cash-6-activity-7441770654884020224-C1HH" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-[var(--foreground)] transition-colors">2x exited founder</a>
                    &bull;
                    <a href="https://kyzo.io" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-[var(--foreground)] transition-colors">multiple products</a>
                    &bull;
                    <a href="https://github.com/ky-zo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 underline underline-offset-2 hover:text-[var(--foreground)] transition-colors">
                      OS contributor
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-label="GitHub">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </a>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        <div className="max-w-3xl mx-auto">
{/* Problem */}
          <Section>
            <SectionLabel>
              <span
                className="inline-block size-2.5 rounded-[2px]"
                style={{
                  backgroundColor: "oklch(0.6 0.2 25)",
                  boxShadow: "0 0 6px oklch(0.6 0.2 25 / 0.6), 0 0 14px oklch(0.6 0.2 25 / 0.3)",
                }}
              />
              The Problem
            </SectionLabel>

            <p className="text-lg sm:text-xl font-semibold tracking-tight leading-snug mb-6" style={{ letterSpacing: "-0.02em" }}>
              You know AI changes everything. You&apos;re just not sure what to do about it.
            </p>

            <div className="space-y-4 text-sm text-[var(--muted)]">
              <p>
                Your engineers are curious but stretched thin. You&apos;ve seen
                the demos but can&apos;t connect them to your actual workflows.
              </p>
              <p>
                Everyone uses different tools. Nobody agrees on process. The team
                knows they&apos;re moving too slowly but doesn&apos;t know how
                to change the system.
              </p>
              <p>
                You don&apos;t need a 6-month &ldquo;AI strategy&rdquo; from a
                consulting firm. You need someone who&apos;s done this before to
                show up and start building.
              </p>
            </div>
          </Section>

{/* Approach */}
          <Section>
            <SectionLabel>
              <span
                className="inline-block size-2.5 rounded-[2px]"
                style={{
                  backgroundColor: "oklch(0.55 0.15 250)",
                  boxShadow: "0 0 6px oklch(0.55 0.15 250 / 0.6), 0 0 14px oklch(0.55 0.15 250 / 0.3)",
                }}
              />
              The Goal
            </SectionLabel>

            <p className="text-lg sm:text-xl font-semibold tracking-tight leading-snug mb-6" style={{ letterSpacing: "-0.02em" }}>
              I elevate your team into the highest speed of AI shipping.
            </p>

            <div className="space-y-4 text-sm text-[var(--muted)]">
              <p>
                No decks. No frameworks. No 90-day discovery phase.
              </p>

              <p className="text-xs font-mono tracking-wider uppercase text-[var(--muted)]">
                Including
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 border border-[var(--border)] px-3 py-1.5 text-xs font-medium text-[var(--foreground)]">
                  <svg width="14" height="14" viewBox="0 0 64 64" fill="none" aria-label="Claude"><rect width="64" height="64" rx="14" fill="#D97757"/><path d="M42.2 35.7c-2 6.7-7.8 10.3-15.5 10.3-8.5 0-15-5.8-15-14.5S18 17 26.7 17c7.5 0 13 3.8 15.2 10.1l-7 2.6c-1.3-3.8-4.2-5.8-8.2-5.8-4.8 0-8.2 3.5-8.2 7.6s3.4 7.6 8.2 7.6c4 0 6.9-2 8.3-5.9l7.2 2.5z" fill="#FFF"/></svg>
                  Claude Code
                </span>
                <span className="inline-flex items-center gap-1.5 border border-[var(--border)] px-3 py-1.5 text-xs font-medium text-[var(--foreground)]">
                  <svg width="14" height="14" viewBox="0 0 100 100" fill="none" aria-label="Cursor"><rect width="100" height="100" rx="20" fill="#000"/><path d="M30 70V30l40 20-40 20z" fill="#FFF"/></svg>
                  Cursor
                </span>
                <span className="inline-flex items-center gap-1.5 border border-[var(--border)] px-3 py-1.5 text-xs font-medium text-[var(--foreground)]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="Skills"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                  Skills
                </span>
                <span className="inline-flex items-center gap-1.5 border border-[var(--border)] px-3 py-1.5 text-xs font-medium text-[var(--foreground)]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="MCPs"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>
                  MCPs
                </span>
                <span className="inline-flex items-center gap-1.5 border border-[var(--border)] px-3 py-1.5 text-xs font-medium text-[var(--foreground)]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="Workflows"><path d="M3 3h6v6H3zM15 3h6v6h-6zM9 15h6v6H9z"/><path d="M6 9v3h3M18 9v3h-3M12 9v6"/></svg>
                  Workflows
                </span>
                <span className="inline-flex items-center gap-1.5 border border-[var(--border)] px-3 py-1.5 text-xs font-medium text-[var(--foreground)]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="Agent Orchestrators"><circle cx="12" cy="5" r="3"/><circle cx="5" cy="19" r="3"/><circle cx="19" cy="19" r="3"/><path d="M12 8v4M8.5 16.5L10 14M15.5 16.5L14 14"/></svg>
                  Agent Orchestrators
                </span>
              </div>

              <p>
                The goal is adoption and changed behavior, not information
                transfer.
              </p>
            </div>
          </Section>

{/* Offers */}
          <Section id="offers">
            <SectionLabel>
              <span
                className="inline-block size-2.5 rounded-[2px]"
                style={{
                  backgroundColor: "oklch(0.6 0.17 145)",
                  boxShadow: "0 0 6px oklch(0.6 0.17 145 / 0.6), 0 0 14px oklch(0.6 0.17 145 / 0.3)",
                }}
              />
              The Offer
            </SectionLabel>

            <div className="grid sm:grid-cols-2 gap-8 sm:gap-12">
              {/* AI Setup Sprint */}
              <div>
                <p className="text-lg font-semibold tracking-tight mb-1" style={{ letterSpacing: "-0.02em" }}>
                  AI Setup Sprint
                </p>
                <p className="font-mono text-sm text-[var(--muted)] mb-5">
                  $5,000 &bull; 2 weeks
                </p>
                <ul className="space-y-2.5 text-sm text-[var(--muted)]">
                  <li className="flex gap-3">
                    <span className="font-mono text-[var(--accent)] shrink-0">&gt;</span>
                    Audit current workflows
                  </li>
                  <li className="flex gap-3">
                    <span className="font-mono text-[var(--accent)] shrink-0">&gt;</span>
                    Set up AI tooling for engineering &amp; QA
                  </li>
                  <li className="flex gap-3">
                    <span className="font-mono text-[var(--accent)] shrink-0">&gt;</span>
                    4 hands-on workshops
                  </li>
                  <li className="flex gap-3">
                    <span className="font-mono text-[var(--accent)] shrink-0">&gt;</span>
                    Train the team on tools and patterns
                  </li>
                  <li className="flex gap-3">
                    <span className="font-mono text-[var(--accent)] shrink-0">&gt;</span>
                    Operating model for what happens next
                  </li>
                </ul>
              </div>

              {/* Fractional AI */}
              <div>
                <p className="text-lg font-semibold tracking-tight mb-1" style={{ letterSpacing: "-0.02em" }}>
                  Fractional AI Lead
                </p>
                <p className="font-mono text-sm text-[var(--muted)] mb-5">
                  $10,000/mo &bull; ongoing
                </p>
                <ul className="space-y-2.5 text-sm text-[var(--muted)]">
                  <li className="flex gap-3">
                    <span className="font-mono text-[var(--accent)] shrink-0">&gt;</span>
                    Everything in the Sprint
                  </li>
                  <li className="flex gap-3">
                    <span className="font-mono text-[var(--accent)] shrink-0">&gt;</span>
                    Ongoing implementation support
                  </li>
                  <li className="flex gap-3">
                    <span className="font-mono text-[var(--accent)] shrink-0">&gt;</span>
                    Workflow design &amp; automation
                  </li>
                  <li className="flex gap-3">
                    <span className="font-mono text-[var(--accent)] shrink-0">&gt;</span>
                    Cross-team AI adoption
                  </li>
                  <li className="flex gap-3">
                    <span className="font-mono text-[var(--accent)] shrink-0">&gt;</span>
                    Embedded in your team&apos;s rhythm
                  </li>
                </ul>
              </div>
            </div>
          </Section>

{/* Case Study */}
          <Section>
            <SectionLabel>In Practice</SectionLabel>

            <p className="text-lg sm:text-xl font-semibold tracking-tight leading-snug mb-6" style={{ letterSpacing: "-0.02em" }}>
              HeyReach: 11 engineers, 6 QA. Full AI adoption.
            </p>

            <div className="space-y-4 text-sm text-[var(--muted)]">
              <p>
                Got the engineering and QA teams using AI daily. Introduced
                Claude Code into real workflows. Created better data flow between
                customer success and development.
              </p>
              <p className="italic">
                This was not a theory exercise. It changed how the company
                operated.
              </p>
            </div>
          </Section>

{/* Fit */}
          <Section>
            <div className="grid sm:grid-cols-2 gap-12 sm:gap-16">
              <div>
                <SectionLabel>Best fit</SectionLabel>
                <ul className="space-y-2.5 text-sm">
                  <li className="flex gap-3">
                    <span className="font-mono text-[var(--accent)] shrink-0">+</span>
                    Founder-led software companies
                  </li>
                  <li className="flex gap-3">
                    <span className="font-mono text-[var(--accent)] shrink-0">+</span>
                    Teams shipping a real product
                  </li>
                  <li className="flex gap-3">
                    <span className="font-mono text-[var(--accent)] shrink-0">+</span>
                    Want implementation, not a report
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-mono text-xs font-medium tracking-wider uppercase text-[var(--muted)] mb-6 opacity-60 flex items-center gap-3">
                  <span className="shrink-0">Not a fit</span>
                  <span className="flex-1 border-t border-[var(--border)]" />
                </p>
                <ul className="space-y-2.5 text-sm text-[var(--muted)]">
                  <li className="flex gap-3">
                    <span className="font-mono shrink-0">-</span>
                    Looking for a chatbot vendor
                  </li>
                  <li className="flex gap-3">
                    <span className="font-mono shrink-0">-</span>
                    Want a strategy deck, not changed behavior
                  </li>
                  <li className="flex gap-3">
                    <span className="font-mono shrink-0">-</span>
                    No real product or workflows yet
                  </li>
                </ul>
              </div>
            </div>
          </Section>

{/* FAQ */}
          <Section>
            <SectionLabel>FAQ</SectionLabel>

            <div className="space-y-0 divide-y divide-[var(--border)]">
              <details className="group py-5 first:pt-0">
                <summary className="text-sm cursor-pointer list-none flex items-start gap-3 font-medium">
                  <span className="font-mono text-[var(--accent)] shrink-0 mt-0.5 group-open:rotate-90 transition-transform">
                    +
                  </span>
                  Why not just let the team figure this out?
                </summary>
                <p className="text-sm text-[var(--muted)] mt-4 ml-6 max-w-[50ch]">
                  Because most teams don&apos;t fail from lack of interest. They
                  fail from fragmented adoption and no clear process. A sprint
                  compresses months of experimentation into two focused weeks.
                </p>
              </details>

              <details className="group py-5">
                <summary className="text-sm cursor-pointer list-none flex items-start gap-3 font-medium">
                  <span className="font-mono text-[var(--accent)] shrink-0 mt-0.5 group-open:rotate-90 transition-transform">
                    +
                  </span>
                  Is this training or consulting?
                </summary>
                <p className="text-sm text-[var(--muted)] mt-4 ml-6 max-w-[50ch]">
                  Neither. It&apos;s an embedded operating reset. The goal is
                  changed behavior, not a slide deck.
                </p>
              </details>

              <details className="group py-5">
                <summary className="text-sm cursor-pointer list-none flex items-start gap-3 font-medium">
                  <span className="font-mono text-[var(--accent)] shrink-0 mt-0.5 group-open:rotate-90 transition-transform">
                    +
                  </span>
                  Do you work with non-software companies?
                </summary>
                <p className="text-sm text-[var(--muted)] mt-4 ml-6 max-w-[50ch]">
                  The strongest fit right now is software companies with
                  engineering and QA teams.
                </p>
              </details>
            </div>
          </Section>

{/* Final CTA */}
          <Section id="contact">
            <p className="text-lg sm:text-xl font-semibold tracking-tight leading-snug mb-4 max-w-[50ch]" style={{ letterSpacing: "-0.02em" }}>
              If your team knows AI matters but still ships the old way, this is
              the reset.
            </p>
            <a
              href="#contact"
              className="font-mono text-xs font-medium px-5 py-2.5 bg-[var(--foreground)] text-[var(--background)] hover:opacity-90 transition-opacity inline-block"
            >
              Book an intro call
            </a>
          </Section>

          {/* Footer */}
          <footer className="py-8 mt-4">
            <p className="font-mono text-xs text-[var(--muted)]">
              CAI &mdash; AI adoption for software teams
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}
