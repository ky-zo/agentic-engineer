export function TopBar() {
  return (
    <header className="max-w-3xl mx-auto w-full pt-5 pb-4">
      <div className="flex items-center justify-between font-mono text-[11px] tracking-wider uppercase text-[var(--muted)]">
        <span className="font-semibold text-[var(--foreground)]">
          Agentic Engineer
        </span>
        <span className="hidden sm:block">
          Fractional AI · Product Co-founder
        </span>
        <span className="flex items-center gap-2">
          <span
            className="inline-block size-1.5 rounded-full bg-green-600 shadow-[0_0_6px_rgb(22_163_74/0.4)] animate-[pulse-dot_4s_ease-in-out_infinite]"
          />
          2 slots open
        </span>
      </div>
      <div className="mt-4 border-t border-dotted border-[var(--border)]" />
    </header>
  );
}
