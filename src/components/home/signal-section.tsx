import signalItems from "@/data/aifx-signal.json";
import { SectionShell } from "@/components/layout/section-shell";
import { Card } from "@/components/ui/card";

type SignalItem = {
  id: string;
  title: string;
  source: string;
  date: string;
  summary: string;
  href: string;
};

const items = signalItems as SignalItem[];

export function SignalSection() {
  return (
    <SectionShell
      id="signal"
      eyebrow="AIFX Signal"
      title="AI Creator Industry Watch"
      description="A compact read on provenance, packaging, and AI media trust."
      className="pb-10"
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {items.slice(0, 3).map((item) => {
          const external = item.href.startsWith("http");

          return (
            <Card key={item.id} className="signal-compact p-0">
              <a
                href={item.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className="block rounded-[1.75rem] px-5 py-5 transition hover:bg-white/[0.025] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300"
              >
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-3 text-[0.7rem] font-medium tracking-[0.18em] text-sky-100/64 uppercase">
                    <span>{item.source}</span>
                    <span className="h-1 w-1 rounded-full bg-white/25" />
                    <time dateTime={item.date}>{item.date}</time>
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-6 text-[var(--muted)]">
                    {item.summary}
                  </p>
                  <span className="anchor-link w-fit text-sm font-medium text-sky-200">
                    Read signal
                  </span>
                </div>
              </a>
            </Card>
          );
        })}
      </div>
    </SectionShell>
  );
}
