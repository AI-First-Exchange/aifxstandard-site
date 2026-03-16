"use client";

import { useEffect, useState } from "react";
import { SectionShell } from "@/components/layout/section-shell";
import { Card } from "@/components/ui/card";

function CopyableCommandBlock({ command }: { command: string }) {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (!isCopied) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setIsCopied(false);
    }, 1500);

    return () => window.clearTimeout(timeoutId);
  }, [isCopied]);

  async function handleCopy() {
    await navigator.clipboard.writeText(command);
    setIsCopied(true);
  }

  return (
    <div className="relative mt-3">
      <button
        type="button"
        onClick={() => void handleCopy()}
        className="button-secondary absolute top-3 right-3 rounded-full border border-[color:var(--line)] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/80 transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300"
      >
        {isCopied ? "Copied" : "Copy"}
      </button>
      <pre className="overflow-x-auto rounded-2xl border border-white/8 bg-[var(--background-strong)] px-4 py-3 pr-20 text-xs leading-6 text-sky-100 sm:text-sm">
        <code>{command}</code>
      </pre>
    </div>
  );
}

const installGuides = [
  {
    platform: "macOS",
    body: (
      <div className="space-y-5">
        <ol className="space-y-3 text-sm leading-7 text-[var(--muted)] sm:text-[0.98rem]">
          <li>1. Download the AIFX Desktop DMG file.</li>
          <li>
            2. Open the DMG and drag <strong className="text-white">AIFX Desktop</strong> to your{" "}
            <strong className="text-white">Applications</strong> folder.
          </li>
          <li>3. If macOS prevents the app from opening, use one of these options:</li>
        </ol>

        <div className="space-y-4">
          <div className="rounded-2xl border border-[color:var(--line)] bg-white/[0.03] p-4">
            <p className="section-kicker text-[0.68rem] font-semibold uppercase">
              Option A
            </p>
            <p className="mt-2 text-sm font-semibold text-white">
              Right-click and open
            </p>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-[var(--muted)] sm:text-[0.98rem]">
              <li>
                Right-click the <strong className="text-white">AIFX Desktop</strong> application in the Applications
                folder
              </li>
              <li>
                Click <strong className="text-white">Open</strong>
              </li>
              <li>
                Click <strong className="text-white">Open</strong> again when prompted
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-[color:var(--line)] bg-white/[0.03] p-4">
            <p className="section-kicker text-[0.68rem] font-semibold uppercase">
              Option B
            </p>
            <p className="mt-2 text-sm font-semibold text-white">
              Terminal method
            </p>
            <ol className="mt-3 space-y-2 text-sm leading-7 text-[var(--muted)] sm:text-[0.98rem]">
              <li>
                1. Open <strong className="text-white">Terminal</strong> (Applications → Utilities → Terminal)
              </li>
              <li>2. Run the following command:</li>
            </ol>
            <CopyableCommandBlock command={'xattr -d com.apple.quarantine "/Applications/AIFX Desktop.app"'} />
            <p className="mt-3 text-sm leading-7 text-[var(--muted)] sm:text-[0.98rem]">
              3. Launch the application again.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    platform: "Windows",
    body: (
      <div className="space-y-5">
        <p className="text-sm leading-7 text-[var(--muted)] sm:text-[0.98rem]">
          Windows SmartScreen may appear for new open-source applications.
        </p>
        <div className="rounded-2xl border border-[color:var(--line)] bg-white/[0.03] p-4">
          <p className="text-sm font-semibold text-white">If you see a warning:</p>
          <ol className="mt-3 space-y-2 text-sm leading-7 text-[var(--muted)] sm:text-[0.98rem]">
            <li>1. Right-click the downloaded installer.</li>
            <li>
              2. Select <strong className="text-white">Open</strong>.
            </li>
            <li>
              3. If SmartScreen appears, click <strong className="text-white">More info</strong>.
            </li>
            <li>
              4. Click <strong className="text-white">Run anyway</strong>.
            </li>
          </ol>
        </div>
        <p className="text-sm leading-7 text-[var(--muted)] sm:text-[0.98rem]">
          This happens because the application is newly published and not yet widely recognized by Windows.
        </p>
      </div>
    ),
  },
  {
    platform: "Linux",
    body: (
      <div className="space-y-5">
        <p className="text-sm leading-7 text-[var(--muted)] sm:text-[0.98rem]">
          AIFX Desktop and Player are distributed as <strong className="text-white">AppImage</strong> files.
        </p>
        <div className="rounded-2xl border border-[color:var(--line)] bg-white/[0.03] p-4">
          <p className="text-sm font-semibold text-white">File manager method</p>
          <ol className="mt-3 space-y-2 text-sm leading-7 text-[var(--muted)] sm:text-[0.98rem]">
            <li>1. Download the AppImage file.</li>
            <li>2. Right-click the file and open Properties.</li>
            <li>3. Enable Allow executing file as program.</li>
          </ol>
        </div>
        <div className="rounded-2xl border border-[color:var(--line)] bg-white/[0.03] p-4">
          <p className="text-sm font-semibold text-white">Terminal method</p>
          <ol className="mt-3 space-y-2 text-sm leading-7 text-[var(--muted)] sm:text-[0.98rem]">
            <li>1. Open Terminal.</li>
            <li>2. Navigate to the download folder.</li>
            <li>3. Run:</li>
          </ol>
          <CopyableCommandBlock
            command={`chmod +x AIFXDesktop.AppImage
./AIFXDesktop.AppImage`}
          />
        </div>
      </div>
    ),
  },
];

export function InstallingToolsSection() {
  return (
    <SectionShell
      title="Installing AIFX Tools"
      description="If your operating system blocks the application the first time you open it, follow the instructions below. These steps resolve the most common installation warnings on macOS, Windows, and Linux."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {installGuides.map((guide) => (
          <Card key={guide.platform} className="h-full p-6 sm:p-7">
            <div className="space-y-4">
              <p className="section-kicker text-xs font-semibold uppercase">
                {guide.platform}
              </p>
              {guide.body}
            </div>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}
