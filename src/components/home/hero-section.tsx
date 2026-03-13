import { SectionShell } from "@/components/layout/section-shell";
import { HeroOrbit } from "@/components/ui/hero-orbit";

export function HeroSection() {
  return (
    <SectionShell className="pt-12 sm:pt-18 lg:pt-22">
      <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(430px,0.96fr)] lg:gap-20">
        <div className="max-w-3xl">
          <p className="section-kicker mb-5 text-sm font-semibold uppercase">
            Open Standard for AI Media
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-[4.8rem] lg:leading-[1.02]">
            The Standard for AI-Generated Media
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted-strong)] sm:text-xl">
            AIFX is an open standard for packaging AI-generated music, images,
            video, and creative projects with declared authorship, provenance
            metadata, and verifiable integrity.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#tools"
              className="button-primary inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300"
            >
              Download Tools
            </a>
            <a
              href="#formats"
              className="button-accent inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300"
            >
              Explore Formats
            </a>
          </div>

        </div>

        <div className="hero-chamber glass-panel rounded-[2.5rem] border border-[color:var(--line)] p-6 shadow-[0_30px_90px_rgba(2,6,16,0.42)] sm:p-8">
          <HeroOrbit />
        </div>
      </div>
    </SectionShell>
  );
}
