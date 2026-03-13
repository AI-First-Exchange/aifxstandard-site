import { SectionShell } from "@/components/layout/section-shell";
import { Card } from "@/components/ui/card";
import { whyAifxCards } from "@/data/home-content";

export function WhyAifxSection() {
  return (
    <SectionShell
      id="why-aifx"
      eyebrow="Why AIFX Exists"
      title="AI Media Needs Provenance"
      description="AIFX addresses the gaps between file delivery, authorship declarations, and the metadata needed to verify how AI-generated work was made."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {whyAifxCards.map((card) => (
          <Card key={card.title} className="provenance-card h-full p-6 sm:p-7">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="signal-pulse h-2.5 w-2.5 rounded-full bg-sky-300" />
                <div className="h-px flex-1 bg-gradient-to-r from-sky-200/30 to-transparent" />
              </div>
              <h3 className="text-[1.4rem] font-semibold tracking-tight text-white">
                {card.title}
              </h3>
              <p className="text-base leading-7 text-[var(--muted)]">
                {card.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}
