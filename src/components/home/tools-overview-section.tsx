import { ProductVisual } from "@/components/ui/product-visual";
import { SectionShell } from "@/components/layout/section-shell";
import { Card } from "@/components/ui/card";
import { toolCards } from "@/data/home-content";

function PlatformIcon({ platform }: { platform: string }) {
  return (
    <span
      className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-white/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-5.5 w-5.5"
        fill="currentColor"
        role="presentation"
      >
        {platform === "mac" ? (
          <path d="M15.2 12.7c0-2 1.6-3 1.7-3.1-1-1.4-2.6-1.6-3.1-1.6-1.3-.1-2.5.8-3.1.8-.6 0-1.6-.8-2.6-.8-1.4 0-2.7.8-3.4 2-.7 1.2-1.1 3.1-.3 4.9.4.9.9 1.9 1.6 2.8.7.8 1.4 1.6 2.4 1.5.9 0 1.3-.6 2.5-.6 1.1 0 1.5.6 2.5.6 1 0 1.7-.8 2.4-1.6.7-.9 1-1.7 1.4-2.6-.1 0-2-.8-2-2.3Zm-2.2-6c.5-.6.9-1.4.8-2.2-.7 0-1.6.5-2.1 1.1-.5.5-.9 1.4-.8 2.1.8.1 1.6-.4 2.1-1Z" />
        ) : null}
        {platform === "windows" ? (
          <path d="M3 5.1 10.8 4v7.2H3V5.1Zm8.9-1.3L21 2.5v8.7h-9.1V3.8ZM3 12.3h7.8v7.2L3 18.4v-6.1Zm8.9 0H21V21l-9.1-1.3v-7.4Z" />
        ) : null}
        {platform === "linux" ? (
          <path d="M12 3.3c-2 0-3.5 1.7-3.5 3.8 0 .9.3 1.8.8 2.5-.9.8-1.6 2-1.8 3.4l-.6 4c-.1.8.4 1.5 1.2 1.7l1.9.4.9 1.6c.2.4.6.6 1.1.6s.9-.2 1.1-.6l.9-1.6 1.9-.4c.8-.2 1.3-.9 1.2-1.7l-.6-4c-.2-1.4-.9-2.6-1.8-3.4.5-.7.8-1.6.8-2.5 0-2.1-1.5-3.8-3.5-3.8Zm-1.2 3.5c.3 0 .6.3.6.7s-.3.7-.6.7-.6-.3-.6-.7.3-.7.6-.7Zm2.4 0c.3 0 .6.3.6.7s-.3.7-.6.7-.6-.3-.6-.7.3-.7.6-.7ZM10 10.9c.6.4 1.2.5 2 .5s1.4-.1 2-.5c.2.8.2 1.8-.1 2.6-.5 1.2-1.3 1.9-1.9 1.9s-1.4-.7-1.9-1.9c-.3-.8-.3-1.8-.1-2.6Z" />
        ) : null}
      </svg>
    </span>
  );
}

export function ToolsOverviewSection() {
  return (
    <SectionShell
      id="tools"
      eyebrow="Tools Overview"
      title="Build and Verify AIFX Packages"
      description="Real tools for packaging, validating, and viewing AI-generated media with declared provenance."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {toolCards.map((tool) => (
          <Card
            key={tool.name}
            className="tool-showcase flex h-full flex-col gap-8 p-7 sm:p-8"
          >
            <div className="flex flex-1 flex-col gap-7">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="section-kicker text-xs font-semibold uppercase">
                  {tool.name === "AIFX Desktop"
                    ? "Create & Validate"
                    : "Secure Viewing"}
                </p>
                <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-[0.72rem] font-semibold tracking-[0.18em] text-emerald-100 uppercase">
                  {tool.status}
                </span>
              </div>

              <div className="grid flex-1 gap-6 md:grid-cols-[minmax(8.5rem,10.5rem)_minmax(0,1fr)] md:items-center">
                <ProductVisual
                  src={tool.imageSrc}
                  alt={tool.imageAlt}
                  title={tool.name}
                />
                <div className="min-w-0">
                  <p className="section-kicker text-xs font-semibold uppercase">
                    Tooling
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">
                    {tool.name}
                  </h3>
                  <p className="mt-3 max-w-[34rem] text-base leading-8 text-[var(--muted)]">
                    {tool.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {Object.entries(tool.downloads).map(([platform, download]) => {
                const isAvailable = Boolean(download.href);

                if (!isAvailable) {
                  return (
                    <div
                      key={platform}
                      className="rounded-2xl border border-[color:var(--line)] bg-white/[0.03] px-4 py-4"
                    >
                      <p className="text-sm font-semibold text-white">
                        {download.label}
                      </p>
                      <p className="mt-1 text-xs text-[var(--muted)]">
                        {download.status}
                      </p>
                    </div>
                  );
                }

                return (
                  <a
                    key={platform}
                    href={download.href}
                    target="_blank"
                    rel="noreferrer"
                    className="download-tile button-secondary flex min-h-[8.75rem] flex-col items-center justify-center rounded-2xl border border-[color:var(--line)] px-4 py-4 text-center transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300"
                  >
                    <PlatformIcon platform={platform} />
                    <span className="text-sm font-semibold text-white">
                      {download.label}
                    </span>
                    <span className="mt-1 text-xs text-sky-100/78">
                      {download.status}
                    </span>
                  </a>
                );
              })}
            </div>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}
