import { SectionShell } from "@/components/layout/section-shell";
import { Card } from "@/components/ui/card";

const placeholderCards = [
  {
    title: "AI Provenance Standards Emerging",
    body: "Monitoring industry movement around AI content verification and authorship metadata.",
  },
  {
    title: "Creator Tooling Evolution",
    body: "Tracking tools and workflows shaping the future of AI-generated media.",
  },
  {
    title: "AI Media Infrastructure",
    body: "Watching the platforms and protocols building the next generation creator ecosystem.",
  },
];

export function SignalSection() {
  return (
    <SectionShell
      id="signal"
      title="AIFX Signal — AI Creator Industry Watch"
      className="pb-10"
    >
      <div className="space-y-6">
        <Card className="signal-compact p-6 sm:p-7">
          <div className="max-w-3xl space-y-4">
            <p className="text-[1.02rem] leading-7 text-white/90 sm:text-[1.05rem]">
              AIFX Signal will provide curated updates on AI-generated media,
              provenance standards, and creator tooling.
            </p>
            <p className="text-sm leading-7 text-[var(--muted)] sm:text-[0.98rem]">
              This section will soon be powered by an automated agent that
              monitors developments across the AI creator ecosystem and
              highlights relevant signals for the community.
            </p>
            <p className="section-kicker pt-1 text-[0.72rem] font-semibold uppercase">
              Signal agent launching soon.
            </p>
          </div>
        </Card>

        <div className="grid gap-4 lg:grid-cols-3">
          {placeholderCards.map((card) => (
            <Card key={card.title} className="signal-compact h-full p-5 sm:p-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-sky-200/70" />
                  <div className="h-px flex-1 bg-gradient-to-r from-sky-200/25 to-transparent" />
                </div>
                <h3 className="text-base font-semibold tracking-tight text-white">
                  {card.title}
                </h3>
                <p className="text-sm leading-6 text-[var(--muted)]">
                  {card.body}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
