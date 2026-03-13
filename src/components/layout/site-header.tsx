import { navItems } from "@/data/home-content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 px-5 pt-4 sm:px-7 lg:px-8">
      <div className="glass-panel mx-auto flex w-full max-w-[var(--content-max-width)] items-center justify-between rounded-full border border-[color:var(--line)] px-4 py-2.5 sm:px-5">
        <a
          href="#top"
          className="flex items-center gap-3 rounded-full px-2 py-1 transition hover:bg-white/[0.03] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300"
          aria-label="AIFX Standard homepage"
        >
          <span className="text-[1.85rem] font-semibold tracking-[0.16em] text-white sm:text-[2rem]">
            AIFX
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="anchor-link text-sm text-white/70 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="https://github.com/AI-First-Exchange"
          target="_blank"
          rel="noreferrer"
          className="button-secondary inline-flex items-center rounded-full border border-[color:var(--line)] px-4 py-2 text-sm font-medium text-white transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300"
        >
          GitHub
        </a>
      </div>
    </header>
  );
}
