import { SectionShell } from "@/components/layout/section-shell";
import { HeroOrbit } from "@/components/ui/hero-orbit";

export function HeroSection() {
  return (
    <SectionShell className="pt-10 sm:pt-14 lg:pt-16">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(390px,0.92fr)] lg:gap-16">
        <div className="max-w-3xl">
          <p className="section-kicker mb-4 text-[0.82rem] font-semibold uppercase">
            Open Standard for AI Media
          </p>
          <h1 className="max-w-4xl text-[clamp(2.9rem,6.2vw,4.35rem)] font-semibold tracking-[-0.04em] text-white leading-[1.03]">
            The Standard for AI-Generated Media
          </h1>
          <p className="mt-6 max-w-xl text-[1.02rem] leading-7 text-[var(--muted-strong)] sm:text-[1.12rem] sm:leading-8">
            AIFX is an open standard for packaging AI-generated music, images,
            video, and creative projects with declared authorship, provenance
            metadata, and verifiable integrity.
          </p>

          <div className="mt-8 flex flex-col gap-3.5 sm:flex-row">
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

        <div className="hero-chamber glass-panel rounded-[2.25rem] border border-[color:var(--line)] p-5 shadow-[0_30px_90px_rgba(2,6,16,0.42)] sm:p-6">
          <HeroOrbit />
        </div>
      </div>
    </SectionShell>
  );
}
