import { SectionShell } from "@/components/layout/section-shell";
import { Card } from "@/components/ui/card";
import { FormatIcon } from "@/components/ui/format-icon";
import { InfoChip } from "@/components/ui/info-chip";
import { formatCards } from "@/data/home-content";

export function FormatsOverviewSection() {
  return (
    <SectionShell
      id="formats"
      eyebrow="Formats Overview"
      title="Introducing AIFX"
      description="Purpose-built container modules for the main categories of AI-generated media."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {formatCards.map((format) => (
          <Card
            key={format.id}
            className="format-module group flex h-full flex-col justify-between gap-8 p-6 sm:p-7"
          >
            <div className="space-y-5">
              <div className="flex items-center justify-between gap-4">
                <div className="inline-flex rounded-full border border-sky-300/18 bg-sky-300/8 px-3 py-1 text-xs font-semibold tracking-[0.24em] text-sky-100/88 uppercase">
                  {format.name}
                </div>
                <FormatIcon kind={format.icon} />
              </div>
              <div className="space-y-2.5">
                <h3 className="text-[1.55rem] font-semibold tracking-tight text-white">
                  {format.title}
                </h3>
                <p className="text-[0.98rem] leading-7 text-[var(--muted)]">
                  {format.description}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4 border-t border-white/10 pt-4">
              <div className="flex flex-wrap gap-2 text-xs text-white/68">
                <InfoChip label="Media" description={format.mediaHint} />
                <InfoChip
                  label="Provenance"
                  description={format.provenanceHint}
                />
              </div>
              <a
                href={format.learnMoreHref}
                className="anchor-link w-fit text-sm font-medium text-sky-200 transition group-hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300"
              >
                Learn more
              </a>
            </div>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}
