import { CalButton } from "@/components/cal-button";
import { CopyEmail } from "@/components/copy-email";

export function FooterSection() {
  return (
    <footer className="py-8 mt-4">
      <p className="font-mono text-xs text-[var(--muted)] flex flex-wrap items-center gap-1.5">
        <CopyEmail
          email="ai@kyzo.io"
          className="underline underline-offset-2 hover:text-[var(--foreground)] transition-colors"
        />
        <span>&bull;</span>
        <a
          href="https://x.com/ky__zo"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-[var(--foreground)] transition-colors"
        >
          @ky__zo
        </a>
        <span>&bull;</span>
        <CalButton className="underline underline-offset-2 hover:text-[var(--foreground)] transition-colors">
          Book a call
        </CalButton>
        <span>&bull;</span>
        <a
          href="https://github.com/ky-zo/agentic-engineer"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-[var(--foreground)] transition-colors"
        >
          GitHub Repo
        </a>
      </p>
    </footer>
  );
}
