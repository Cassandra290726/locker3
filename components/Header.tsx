export function Header() {
  return (
    <header className="locker-gradient shadow-md">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-3 px-4 py-6 sm:px-6 sm:py-7 lg:px-8">
        <h1 className="text-4xl font-black tracking-tight text-slate-900 drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)] sm:text-5xl">
          Locker
        </h1>
        <span
          className="h-1 w-14 rounded-full bg-slate-900/20 sm:w-16"
          aria-hidden
        />
      </div>
    </header>
  );
}
