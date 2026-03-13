type AifxMarkProps = {
  className?: string;
  compact?: boolean;
  emphasis?: "default" | "hero";
};

export function AifxMark({
  className = "",
  compact = false,
  emphasis = "default",
}: AifxMarkProps) {
  const size = compact ? "h-10 w-10" : "h-20 w-20 sm:h-24 sm:w-24";
  const emphasisClass =
    emphasis === "hero"
      ? "bg-[radial-gradient(circle_at_50%_34%,rgba(152,178,255,0.18),rgba(255,255,255,0.04)_40%,transparent_76%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_0_0_1px_rgba(173,189,255,0.08),0_0_70px_rgba(99,131,255,0.22)]"
      : "bg-white/[0.03] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_36px_rgba(108,136,255,0.22)]";

  return (
    <div
      className={[
        "relative inline-flex items-center justify-center rounded-[28%] border border-white/12",
        emphasisClass,
        size,
        className,
      ].join(" ")}
      aria-hidden="true"
    >
      {emphasis === "hero" ? (
        <>
          <span className="absolute inset-[8%] rounded-[30%] border border-white/8" />
          <span className="absolute inset-[-8%] rounded-[34%] border border-sky-200/8" />
        </>
      ) : null}
      <svg
        viewBox="0 0 100 100"
        className="h-[78%] w-[78%] overflow-visible"
        fill="none"
      >
        <defs>
          <radialGradient id="aifx-globe-fill" cx="0" cy="0" r="1" gradientTransform="translate(50 42) rotate(90) scale(44)">
            <stop stopColor="rgba(201,220,255,0.26)" />
            <stop offset="0.52" stopColor="rgba(86,122,225,0.18)" />
            <stop offset="1" stopColor="rgba(19,32,71,0.02)" />
          </radialGradient>
          <linearGradient id="aifx-gradient" x1="24" x2="76" y1="19" y2="82">
            <stop stopColor="#dce6ff" />
            <stop offset="0.45" stopColor="#8cb6ff" />
            <stop offset="1" stopColor="#ac8bff" />
          </linearGradient>
          <clipPath id="aifx-globe-clip">
            <circle cx="50" cy="50" r="28" />
          </clipPath>
        </defs>
        <circle cx="50" cy="50" r="28" fill="url(#aifx-globe-fill)" />
        <g clipPath="url(#aifx-globe-clip)" opacity="0.92">
          <path
            d="M29 48c7-9 14-12 21-12 7.4 0 14.1 3.2 21 12"
            stroke="rgba(226,236,255,0.22)"
            strokeWidth="1.15"
            strokeLinecap="round"
          />
          <path
            d="M24 58c8.8-6.2 17.6-9.4 26-9.4 8.4 0 17 3.2 26 9.4"
            stroke="rgba(226,236,255,0.18)"
            strokeWidth="1.05"
            strokeLinecap="round"
          />
          <path
            d="M50 22c-6.2 7.6-9.4 16.8-9.4 27.6 0 10.8 3.2 20 9.4 27.6"
            stroke="rgba(139,218,255,0.22)"
            strokeWidth="1.05"
            strokeLinecap="round"
          />
          <path
            d="M50 22c6.2 7.6 9.4 16.8 9.4 27.6 0 10.8-3.2 20-9.4 27.6"
            stroke="rgba(170,148,255,0.2)"
            strokeWidth="1.05"
            strokeLinecap="round"
          />
          <path
            d="M36 35c-3.8 4.2-6.4 8.8-7.6 13.8 2.8 2.2 6.1 3.2 9.8 3 4.8-.2 8.6-1.8 11.6-4.8 2.8-2.9 6-4.4 9.6-4.4 3.4 0 6.6 1 9.6 3"
            stroke="rgba(220,231,255,0.16)"
            strokeWidth="1.05"
            strokeLinecap="round"
          />
        </g>
        <circle
          cx="50"
          cy="50"
          r="28.5"
          className="hero-globe"
          stroke="rgba(172, 197, 255, 0.68)"
          strokeWidth="1.6"
          strokeDasharray="6 5"
        />
        <ellipse
          cx="50"
          cy="50"
          rx="17"
          ry="29"
          className="hero-globe"
          stroke="rgba(123, 216, 255, 0.42)"
          strokeWidth="1.4"
        />
        <ellipse
          cx="50"
          cy="50"
          rx="29"
          ry="11"
          className="hero-globe"
          stroke="rgba(170, 148, 255, 0.38)"
          strokeWidth="1.4"
        />
        <path
          d="M32 50c5.5-8.6 13.2-13 18-13s12.7 4.4 18 13"
          stroke="rgba(222,234,255,0.24)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M50 16 23 84h13.5l5.5-14h16l5.6 14H77L50 16Zm-2.5 22.4 5.8 16H41.6l5.9-16Z"
          fill="url(#aifx-gradient)"
        />
        <circle cx="50" cy="50" r="3.5" fill="rgba(214,232,255,0.9)" />
      </svg>
    </div>
  );
}
