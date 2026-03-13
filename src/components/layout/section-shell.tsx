import type { ReactNode } from "react";

type SectionShellProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  className?: string;
  children: ReactNode;
};

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  className = "",
  children,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={`section-divider px-5 py-14 sm:px-7 sm:py-18 lg:px-8 lg:py-20 ${className}`}
    >
      <div className="mx-auto w-full max-w-[var(--content-max-width)]">
        {(eyebrow || title || description) && (
          <div className="mb-10 max-w-[46rem] space-y-4 sm:mb-11">
            {eyebrow ? (
              <p className="section-kicker text-xs font-semibold uppercase">
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2 className="text-[clamp(1.9rem,3.3vw,2.55rem)] font-semibold tracking-tight text-white">
                {title}
              </h2>
            ) : null}
            {description ? (
              <p className="max-w-2xl text-[0.98rem] leading-7 text-[var(--muted)] sm:text-[1.02rem]">
                {description}
              </p>
            ) : null}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
