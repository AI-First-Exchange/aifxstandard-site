import { SectionShell } from "@/components/layout/section-shell";
import { Card } from "@/components/ui/card";

export function OpenStandardCta() {
  return (
    <SectionShell id="open-standard" className="pb-14 pt-8">
      <Card className="cta-minimal overflow-hidden p-8 sm:p-10 lg:p-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-5">
            <p className="section-kicker text-xs font-semibold uppercase">
              Open Standard
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Open Standard. Open Source.
            </h2>
            <p className="text-base leading-8 text-[var(--muted)] sm:text-lg">
              AIFX is built to be inspectable, portable, and easy to adopt
              across creative workflows and software platforms.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="https://github.com/AI-First-Exchange"
              target="_blank"
              rel="noreferrer"
              className="button-primary inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-slate-950 transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300"
            >
              View on GitHub
            </a>
            <a
              href="#formats"
              className="button-secondary inline-flex items-center justify-center rounded-full border border-[color:var(--line)] px-6 py-3 text-sm font-semibold text-white transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300"
            >
              Read the Docs
            </a>
          </div>
        </div>
      </Card>
    </SectionShell>
  );
}
