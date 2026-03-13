import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={[
        "glass-panel section-card-hover rounded-[1.75rem] border border-[color:var(--line)]",
        "bg-[var(--panel)] p-6 text-white/90 shadow-[0_24px_80px_rgba(4,8,20,0.28)]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
