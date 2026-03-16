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
      <div className="mb-2 flex justify-end">
        <button
          type="button"
          onClick={() => void handleCopy()}
          className="button-secondary rounded-full border border-[color:var(--line)] bg-white/[0.04] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/80 transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300"
        >
          {isCopied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto rounded-xl border border-white/8 bg-[var(--background-strong)] px-4 py-3 font-mono text-xs leading-6 text-sky-100 sm:text-sm">
        <code>{command}</code>
      </pre>
    </div>
  );
}

const installGuides = [
  {
    platform: "macOS",
    summary: "DMG install and Terminal quarantine fix",
    body: (
      <div className="space-y-5">
        <ol className="space-y-3 text-sm leading-7 text-[var(--muted)] sm:text-[0.98rem]">
          <li>
            1. Download the DMG file for <strong className="text-white">AIFX Desktop</strong> (
            <strong className="text-white">AIFX-Desktop-macOS-universal.dmg</strong>) or{" "}
            <strong className="text-white">AIFX Player</strong> (
            <strong className="text-white">AIFX.Player.dmg</strong>).
          </li>
          <li>
            2. Open the DMG and drag the application to the{" "}
            <strong className="text-white">Applications</strong> folder.
          </li>
          <li>
            3. macOS may block newly published apps. If it prevents the app from opening, open{" "}
            <strong className="text-white">Terminal</strong> and run the appropriate command below.
          </li>
          <li>4. Launch the application again.</li>
        </ol>

        <div className="space-y-4">
          <div className="rounded-2xl border border-[color:var(--line)] bg-white/[0.03] p-4">
            <p className="section-kicker text-[0.68rem] font-semibold uppercase">
              AIFX Desktop
            </p>
            <p className="mt-2 text-sm font-semibold text-white">Terminal command</p>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)] sm:text-[0.98rem]">
              Use this after installing <strong className="text-white">AIFX-Desktop-macOS-universal.dmg</strong>.
            </p>
            <CopyableCommandBlock command={'xattr -d com.apple.quarantine "/Applications/AIFX Desktop.app"'} />
          </div>

          <div className="rounded-2xl border border-[color:var(--line)] bg-white/[0.03] p-4">
            <p className="section-kicker text-[0.68rem] font-semibold uppercase">
              AIFX Player
            </p>
            <p className="mt-2 text-sm font-semibold text-white">Terminal command</p>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)] sm:text-[0.98rem]">
              Use this after installing <strong className="text-white">AIFX.Player.dmg</strong>.
            </p>
            <CopyableCommandBlock command={'xattr -d com.apple.quarantine "/Applications/AIFX Player.app"'} />
          </div>
        </div>
      </div>
    ),
  },
  {
    platform: "Windows",
    summary: "Installer guidance and SmartScreen steps",
    body: (
      <div className="space-y-5">
        <p className="text-sm leading-7 text-[var(--muted)] sm:text-[0.98rem]">
          Download <strong className="text-white">AIFX-Desktop-Windows-x64.exe</strong> for AIFX Desktop or{" "}
          <strong className="text-white">AIFX-Player-Setup.exe</strong> for AIFX Player. Windows SmartScreen may
          appear for new open-source applications.
        </p>
        <div className="rounded-2xl border border-[color:var(--line)] bg-white/[0.03] p-4">
          <p className="text-sm font-semibold text-white">If you see a warning:</p>
          <ol className="mt-3 space-y-2 text-sm leading-7 text-[var(--muted)] sm:text-[0.98rem]">
            <li>1. Download the installer.</li>
            <li>
              2. Run the installer.
            </li>
            <li>
              3. If Windows SmartScreen appears, click <strong className="text-white">More info</strong>.
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
    summary: "AppImage commands for Desktop and Player",
    body: (
      <div className="space-y-5">
        <div className="rounded-2xl border border-[color:var(--line)] bg-white/[0.03] p-4">
          <p className="text-sm font-semibold text-white">AIFX Desktop</p>
          <ol className="mt-3 space-y-2 text-sm leading-7 text-[var(--muted)] sm:text-[0.98rem]">
            <li>
              1. Download the AppImage file for <strong className="text-white">AIFX Desktop</strong> (
              <strong className="text-white">AIFX-Desktop-Linux-x86_64.AppImage</strong>).
            </li>
            <li>2. Open Terminal.</li>
            <li>3. Run the appropriate command below.</li>
          </ol>
          <CopyableCommandBlock
            command={`chmod +x AIFX-Desktop-Linux-x86_64.AppImage
./AIFX-Desktop-Linux-x86_64.AppImage`}
          />
        </div>
        <div className="rounded-2xl border border-[color:var(--line)] bg-white/[0.03] p-4">
          <p className="text-sm font-semibold text-white">AIFX Player</p>
          <ol className="mt-3 space-y-2 text-sm leading-7 text-[var(--muted)] sm:text-[0.98rem]">
            <li>
              1. Download the AppImage file for <strong className="text-white">AIFX Player</strong> (
              <strong className="text-white">AIFX.Player-0.3.0-x86_64.AppImage</strong>).
            </li>
            <li>2. Open Terminal.</li>
            <li>3. Run the appropriate command below.</li>
          </ol>
          <CopyableCommandBlock
            command={`chmod +x AIFX.Player-0.3.0-x86_64.AppImage
./AIFX.Player-0.3.0-x86_64.AppImage`}
          />
        </div>
      </div>
    ),
  },
];

export function InstallingToolsSection() {
  const [openPlatform, setOpenPlatform] = useState<string | null>(null);

  return (
    <SectionShell
      title="Installing AIFX Tools"
      description="If your operating system blocks the application the first time you open it, follow the instructions below. These steps resolve the most common installation warnings on macOS, Windows, and Linux."
    >
      <div className="space-y-4">
        {installGuides.map((guide) => (
          <Card key={guide.platform} className="overflow-hidden p-0">
            <button
              type="button"
              onClick={() =>
                setOpenPlatform((current) =>
                  current === guide.platform ? null : guide.platform,
                )
              }
              aria-expanded={openPlatform === guide.platform}
              className="flex w-full items-start justify-between gap-4 p-6 text-left transition hover:bg-white/[0.03] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-sky-300 sm:p-7"
            >
              <div className="space-y-2">
                <p className="section-kicker text-xs font-semibold uppercase">
                  {guide.platform}
                </p>
                <p className="text-sm leading-7 text-[var(--muted)] sm:text-[0.98rem]">
                  {guide.summary}
                </p>
              </div>
              <span
                aria-hidden="true"
                className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[color:var(--line)] bg-white/[0.03] text-lg text-white/75 transition"
              >
                {openPlatform === guide.platform ? "−" : "+"}
              </span>
            </button>
            {openPlatform === guide.platform ? (
              <div className="border-t border-[color:var(--line)] px-6 pb-6 pt-5 sm:px-7 sm:pb-7">
                {guide.body}
              </div>
            ) : null}
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}
