type FormatIconKind = "music" | "image" | "video" | "project";

type FormatIconProps = {
  kind: FormatIconKind;
  className?: string;
};

export function FormatIcon({ kind, className = "" }: FormatIconProps) {
  return (
    <div
      className={`format-icon flex items-center justify-center ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-[1.55rem] w-[1.55rem]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {kind === "music" ? (
          <>
            <path d="M9 17.8V7.1l8.5-1.7v9.8" />
            <circle cx="7.4" cy="18.1" r="2.35" />
            <circle cx="15.9" cy="16.6" r="2.35" />
          </>
        ) : null}

        {kind === "image" ? (
          <>
            <rect x="4.2" y="5.1" width="15.6" height="13.8" rx="2.4" />
            <circle cx="9" cy="10" r="1.25" />
            <path d="m7.2 16 3.4-3.3a1.4 1.4 0 0 1 2 0l4.2 4.3" />
          </>
        ) : null}

        {kind === "video" ? (
          <>
            <rect x="4.2" y="6" width="11.8" height="12" rx="2.3" />
            <path d="m16 10 3.8-2.1v8.2L16 14" />
            <path
              d="m9.4 10.15 3.75 1.85-3.75 1.85v-3.7Z"
              fill="currentColor"
              stroke="none"
            />
          </>
        ) : null}

        {kind === "project" ? (
          <>
            <rect x="4.4" y="5.2" width="6.8" height="6.3" rx="1.45" />
            <rect x="12.8" y="5.2" width="6.8" height="6.3" rx="1.45" />
            <rect x="4.4" y="12.5" width="6.8" height="6.3" rx="1.45" />
            <rect x="12.8" y="12.5" width="6.8" height="6.3" rx="1.45" />
          </>
        ) : null}
      </svg>
    </div>
  );
}
