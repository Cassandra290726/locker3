export function Footer() {
  return (
    <footer className="locker-gradient mt-auto shadow-[0_-4px_14px_rgba(0,0,0,0.08)]">
      <div className="mx-auto max-w-6xl px-4 py-5 text-center sm:px-6 sm:py-6 lg:px-8">
        <p className="flex flex-col items-center gap-1.5 text-slate-900 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-2 sm:gap-y-0">
          <span className="text-base font-semibold tracking-tight drop-shadow-[0_1px_1px_rgba(255,255,255,0.85)] sm:text-lg">
            Cassandra Cabrera Acevedo
          </span>
          <span
            className="hidden text-slate-600/80 sm:inline"
            aria-hidden
          >
            ·
          </span>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-800 sm:text-sm">
            6CPGM
          </span>
        </p>
      </div>
    </footer>
  );
}
