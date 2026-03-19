import { ContactSection } from "@/components/home/contact-section";
import { FormatsOverviewSection } from "@/components/home/formats-overview-section";
import { HeroSection } from "@/components/home/hero-section";
import { InstallingToolsSection } from "@/components/home/installing-tools-section";
import { OpenStandardCta } from "@/components/home/open-standard-cta";
import { SignalSection } from "@/components/home/signal-section";
import { SupportSection } from "@/components/home/support-section";
import { ToolsOverviewSection } from "@/components/home/tools-overview-section";
import { WhyAifxSection } from "@/components/home/why-aifx-section";
import { SectionShell } from "@/components/layout/section-shell";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Card } from "@/components/ui/card";

function FounderMessageSection() {
  return (
    <SectionShell
      title="Message from the Founder"
      description="A brief introduction to why AIFX was created and the vision for AI-generated media."
    >
      <Card className="p-6 sm:p-7">
        <div className="mx-auto max-w-xs overflow-hidden rounded-xl border border-white/8">
          <iframe
            src="https://www.youtube.com/embed/QvDwGafTaaw"
            title="Message from the Founder"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="aspect-[9/16] h-full w-full"
          />
        </div>
      </Card>
    </SectionShell>
  );
}

export function HomePage() {
  return (
    <div id="top" className="page-grid min-h-screen">
      <SiteHeader />
      <main>
        <HeroSection />
        <WhyAifxSection />
        <FormatsOverviewSection />
        <ToolsOverviewSection />
        <InstallingToolsSection />
        <FounderMessageSection />
        <SignalSection />
        <OpenStandardCta />
        <SupportSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
