"use client";

import { useEffect, useId, useRef, useState } from "react";

type InfoChipProps = {
  label: string;
  description: string;
};

export function InfoChip({ label, description }: InfoChipProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHoverDevice, setIsHoverDevice] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const panelId = useId();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const syncHoverDevice = () => {
      setIsHoverDevice(mediaQuery.matches);
      if (mediaQuery.matches) {
        setIsOpen(false);
      }
    };

    syncHoverDevice();
    mediaQuery.addEventListener("change", syncHoverDevice);

    return () => {
      mediaQuery.removeEventListener("change", syncHoverDevice);
    };
  }, []);

  useEffect(() => {
    if (!isOpen || isHoverDevice) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isHoverDevice, isOpen]);

  return (
    <div
      ref={rootRef}
      className="group/info relative"
      onMouseEnter={() => {
        if (isHoverDevice) {
          setIsOpen(true);
        }
      }}
      onMouseLeave={() => {
        if (isHoverDevice) {
          setIsOpen(false);
        }
      }}
    >
      <button
        type="button"
        className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-white/68 transition duration-200 hover:border-sky-300/28 hover:bg-sky-300/[0.08] hover:text-sky-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300"
        aria-describedby={panelId}
        aria-expanded={isHoverDevice ? undefined : isOpen}
        onClick={() => {
          if (!isHoverDevice) {
            setIsOpen((current) => !current);
          }
        }}
        onFocus={() => setIsOpen(true)}
        onBlur={(event) => {
          if (!rootRef.current?.contains(event.relatedTarget as Node | null)) {
            setIsOpen(false);
          }
        }}
      >
        {label}
      </button>

      <div
        id={panelId}
        role="tooltip"
        className={[
          "pointer-events-none absolute bottom-[calc(100%+0.75rem)] left-0 z-20 w-64 max-w-[calc(100vw-3rem)] rounded-2xl border border-sky-200/12",
          "bg-[linear-gradient(180deg,rgba(14,23,43,0.96),rgba(8,14,28,0.98))] px-3.5 py-3 text-left shadow-[0_18px_48px_rgba(1,6,18,0.46)]",
          "backdrop-blur-xl transition duration-200 ease-out",
          isOpen
            ? "translate-y-0 opacity-100"
            : "translate-y-1 opacity-0 group-focus-within/info:translate-y-0 group-focus-within/info:opacity-100",
        ].join(" ")}
      >
        <p className="mb-1 text-[0.68rem] font-semibold tracking-[0.24em] text-sky-100/78 uppercase">
          {label}
        </p>
        <p className="text-sm leading-6 text-slate-200/88">{description}</p>
      </div>
    </div>
  );
}
