import { FormatsOverviewSection } from "@/components/home/formats-overview-section";
import { HeroSection } from "@/components/home/hero-section";
import { OpenStandardCta } from "@/components/home/open-standard-cta";
import { SignalSection } from "@/components/home/signal-section";
import { SupportSection } from "@/components/home/support-section";
import { ToolsOverviewSection } from "@/components/home/tools-overview-section";
import { WhyAifxSection } from "@/components/home/why-aifx-section";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export function HomePage() {
  return (
    <div id="top" className="page-grid min-h-screen">
      <SiteHeader />
      <main>
        <HeroSection />
        <WhyAifxSection />
        <FormatsOverviewSection />
        <ToolsOverviewSection />
        <SignalSection />
        <OpenStandardCta />
        <SupportSection />
      </main>
      <SiteFooter />
    </div>
  );
}
