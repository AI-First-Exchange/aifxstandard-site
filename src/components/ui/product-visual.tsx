import Image from "next/image";

type ProductVisualProps = {
  src: string;
  alt: string;
  title: string;
};

export function ProductVisual({ src, alt, title }: ProductVisualProps) {
  return (
    <div className="relative mx-auto w-full max-w-[11rem] shrink-0 overflow-hidden rounded-[1.4rem] border border-[color:var(--line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-4 sm:mx-0 sm:max-w-[10.5rem]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(104,133,255,0.14),transparent_54%)]" />
      <div className="relative aspect-square min-h-[8.5rem]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 176px, 168px"
          className="object-contain"
        />
      </div>
      <p className="sr-only">{title}</p>
    </div>
  );
}
