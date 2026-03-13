import Image from "next/image";

const chips = [
  {
    label: ".mp3",
    angle: "0deg",
    duration: "16s",
    delay: "-2s",
    radius: "11.25rem",
  },
  {
    label: ".flac",
    angle: "27.69deg",
    duration: "16s",
    delay: "-3s",
    radius: "11.25rem",
  },
  {
    label: ".wav",
    angle: "55.38deg",
    duration: "16s",
    delay: "-5s",
    radius: "11.25rem",
  },
  {
    label: ".mp4",
    angle: "83.07deg",
    duration: "16s",
    delay: "-6s",
    radius: "11.25rem",
  },
  {
    label: ".mov",
    angle: "110.76deg",
    duration: "16s",
    delay: "-7s",
    radius: "11.25rem",
  },
  {
    label: ".png",
    angle: "138.45deg",
    duration: "16s",
    delay: "-8s",
    radius: "11.25rem",
  },
  {
    label: ".jpg",
    angle: "166.14deg",
    duration: "16s",
    delay: "-9s",
    radius: "11.25rem",
  },
  {
    label: ".webp",
    angle: "193.83deg",
    duration: "16s",
    delay: "-11s",
    radius: "11.25rem",
  },
  {
    label: ".svg",
    angle: "221.52deg",
    duration: "16s",
    delay: "-12s",
    radius: "11.25rem",
  },
  {
    label: ".obj",
    angle: "249.21deg",
    duration: "16s",
    delay: "-13s",
    radius: "11.25rem",
  },
  {
    label: ".fbx",
    angle: "276.9deg",
    duration: "16s",
    delay: "-14s",
    radius: "11.25rem",
  },
  {
    label: ".gltf",
    angle: "304.59deg",
    duration: "16s",
    delay: "-15s",
    radius: "11.25rem",
  },
  {
    label: ".off",
    angle: "332.28deg",
    duration: "16s",
    delay: "-16s",
    radius: "11.25rem",
  },
];

export function HeroOrbit() {
  return (
    <div className="hero-orbit-container relative mx-auto flex items-center justify-center">
      <div className="hero-floor absolute inset-x-[12%] bottom-[10%] h-[16%] rounded-full" />
      <div className="absolute inset-[6%] rounded-full bg-[radial-gradient(circle,rgba(84,112,255,0.12),transparent_62%)]" />
      <div className="hero-field absolute inset-[11%] rounded-full" />
      <div className="hero-ring-guide hero-orbit-slow absolute inset-[4%] rounded-full opacity-30" />
      <div className="hero-ring-guide hero-orbit-slower absolute inset-[14%] rounded-full opacity-18" />
      <div className="hero-ring-guide hero-ring-guide-primary absolute inset-[8%] rounded-full opacity-70" />
      <div className="hero-shell absolute inset-[15%] rounded-full" />
      <div className="hero-ring hero-orbit-slow absolute inset-[8%] rounded-full" />
      <div className="hero-core hero-core-pulse absolute inset-[24%] rounded-full" />

      {chips.map((chip) => (
        <div
          key={chip.label}
          className="hero-orbit-chip absolute left-1/2 top-1/2 z-20"
          style={
            {
              ["--angle" as string]: chip.angle,
              ["--duration" as string]: chip.duration,
              ["--delay" as string]: chip.delay,
              ["--radius" as string]: chip.radius,
            } as React.CSSProperties
          }
        >
          <div className="hero-orbit-chip-label">
            <span className="hero-chip-token text-[0.72rem] font-medium uppercase">
              {chip.label}
            </span>
          </div>
        </div>
      ))}

      <div className="relative z-10 flex items-center justify-center">
        <div className="hero-image-shell">
          <div className="hero-image-frame">
            <Image
              src="/images/aifx-hero-core.png"
              alt="AIFX hero core"
              fill
              priority
              sizes="(max-width: 640px) 220px, 260px"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
