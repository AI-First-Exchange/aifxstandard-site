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
      className={`section-divider px-6 py-18 sm:px-8 sm:py-24 lg:px-10 lg:py-28 ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl">
        {(eyebrow || title || description) && (
          <div className="mb-12 max-w-3xl space-y-5 sm:mb-14">
            {eyebrow ? (
              <p className="section-kicker text-xs font-semibold uppercase">
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.85rem]">
                {title}
              </h2>
            ) : null}
            {description ? (
              <p className="max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
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
