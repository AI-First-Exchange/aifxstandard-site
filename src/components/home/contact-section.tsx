import { SectionShell } from "@/components/layout/section-shell";
import { Card } from "@/components/ui/card";

const contactGroups = [
  {
    label: "MEDIA & PRESS",
    content: (
      <a
        href="mailto:press@aifxstandard.org"
        className="anchor-link text-sm text-white transition hover:text-[rgba(194,214,255,0.96)]"
      >
        press@aifxstandard.org
      </a>
    ),
  },
  {
    label: "CREATOR & COMMUNITY",
    content: (
      <a
        href="mailto:media@aifxstandard.org"
        className="anchor-link text-sm text-white transition hover:text-[rgba(194,214,255,0.96)]"
      >
        media@aifxstandard.org
      </a>
    ),
  },
  {
    label: "FOLLOW",
    content: (
      <div className="space-y-2">
        <a
          href="https://youtube.com/@AIFXStandard"
          target="_blank"
          rel="noreferrer"
          className="anchor-link block text-sm text-white transition hover:text-[rgba(194,214,255,0.96)]"
        >
          YouTube — @AIFXStandard
        </a>
        <a
          href="https://x.com/jcmbo369"
          target="_blank"
          rel="noreferrer"
          className="anchor-link block text-sm text-white transition hover:text-[rgba(194,214,255,0.96)]"
        >
          X — @jcmbo369
        </a>
      </div>
    ),
  },
  {
    label: "Founder",
    content: <p className="text-sm text-white">Joseph Simon</p>,
  },
];

export function ContactSection() {
  return (
    <SectionShell id="contact" title="Contact" className="py-10 sm:py-12 lg:py-14">
      <Card className="p-6 sm:p-7">
        <div className="grid gap-6 md:grid-cols-2 md:gap-x-10 md:gap-y-7">
          {contactGroups.map((group) => (
            <div key={group.label} className="space-y-2">
              <p className="section-kicker text-[0.7rem] font-semibold uppercase">
                {group.label}
              </p>
              {group.content}
            </div>
          ))}
        </div>
      </Card>
    </SectionShell>
  );
}
