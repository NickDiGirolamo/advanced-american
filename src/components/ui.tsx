import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}) {
  const styles = {
    primary:
      "bg-[linear-gradient(135deg,var(--navy),var(--blue))] !text-white visited:!text-white shadow-lg shadow-blue-950/20 hover:-translate-y-0.5 hover:brightness-105 [&_svg]:!text-white",
    secondary:
      "border border-slate-300 bg-white text-[var(--navy-deep)] shadow-sm shadow-slate-900/5 hover:-translate-y-0.5 hover:border-blue-300 hover:bg-[var(--surface-accent)]",
    ghost: "text-[var(--navy-deep)] hover:bg-blue-50",
  };

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 [&_svg]:text-current",
        styles[variant],
        className,
      )}
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "default",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "default" | "light";
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <span
          className={cn(
            "eyebrow",
            tone === "light" &&
              "border-white/20 bg-white/10 text-white shadow-sm shadow-slate-950/10",
          )}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={cn(
          "mt-4 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl",
          tone === "light" ? "text-white" : "text-[var(--navy-deep)]",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-7 sm:text-lg",
            tone === "light" ? "text-white/82" : "text-[var(--muted)]",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
}: {
  eyebrow: string;
  title: string;
  description: string;
  actions?: Array<{ label: string; href: string; variant?: "primary" | "secondary" }>;
}) {
  return (
    <section className="relative pt-12 sm:pt-16">
      <div className="container-shell">
        <div className="card-surface relative overflow-hidden rounded-[2rem] px-6 py-12 sm:px-10 sm:py-16">
          <div className="absolute inset-y-0 right-0 hidden w-1/3 bg-[radial-gradient(circle_at_top,rgba(217,71,76,0.12),transparent_56%),radial-gradient(circle_at_bottom,rgba(43,103,209,0.18),transparent_52%)] lg:block" />
          <div className="relative max-w-3xl">
            <span className="eyebrow">{eyebrow}</span>
            <h1 className="mt-5 text-balance font-display text-4xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-5xl">
              {title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              {description}
            </p>
            {actions ? (
              <div className="mt-8 flex flex-wrap gap-3">
                {actions.map((action) => (
                  <ButtonLink
                    key={action.href}
                    href={action.href}
                    variant={action.variant ?? "primary"}
                  >
                    {action.label}
                  </ButtonLink>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
