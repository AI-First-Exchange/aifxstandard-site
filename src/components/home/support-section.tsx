import { SectionShell } from "@/components/layout/section-shell";
import { Card } from "@/components/ui/card";

export function SupportSection() {
  return (
    <SectionShell
      id="support"
      eyebrow="Support the Standard"
      title="Support the AIFX Standard"
      description="AIFX is an open standard for packaging AI-generated media with declared authorship, provenance metadata, and verifiable integrity."
      className="pb-10"
    >
      <Card className="max-w-3xl p-7 sm:p-8">
        <div className="space-y-5">
          <p className="text-[0.98rem] leading-7 text-[var(--muted)] sm:text-[1.02rem]">
            Support helps fund development of the formats, tools, and
            documentation that power the AIFX ecosystem.
          </p>
          <a
            href="https://github.com/sponsors/AI-First-Exchange"
            target="_blank"
            rel="noreferrer"
            className="button-secondary inline-flex items-center rounded-full border border-[color:var(--line)] px-6 py-3 text-sm font-semibold text-white transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300"
          >
            Support on GitHub
          </a>
        </div>
      </Card>
    </SectionShell>
  );
}
