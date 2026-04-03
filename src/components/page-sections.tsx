import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import type { BlogPost, Product, ServiceRequestType, StaffMember } from "@/lib/content";
import { ButtonLink, SectionHeading } from "@/components/ui";

export function ProductGrid({
  title,
  eyebrow,
  description,
  products,
  tone = "default",
}: {
  title: string;
  eyebrow: string;
  description: string;
  products: Product[];
  tone?: "default" | "light";
}) {
  return (
    <section className="section-space">
      <div className="container-shell">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} tone={tone} />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {products.map((product) => (
            <article key={product.slug} className="card-surface rounded-[1.75rem] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">
                {product.shortName}
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-[var(--navy-deep)]">
                {product.name}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{product.summary}</p>
              <ul className="mt-5 space-y-3 text-sm text-[var(--navy)]">
                {product.coverage.slice(0, 3).map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <ButtonLink href={product.href} className="mt-6">
                Explore coverage
              </ButtonLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceCardGrid({ items }: { items: ServiceRequestType[] }) {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {items.map((item) => (
        <article key={item.slug} className="card-surface rounded-[1.35rem] p-4">
          <h3 className="text-base font-semibold leading-5 text-[var(--navy-deep)]">{item.name}</h3>
          <p className="mt-1.5 text-xs leading-5 text-[var(--muted)]">{item.description}</p>
          <Link
            href={`/service-center/${item.slug}`}
            className="mt-3 inline-flex rounded-full bg-[var(--blue)] px-3.5 py-1.5 text-xs font-semibold !text-white visited:!text-white transition hover:bg-[var(--navy)]"
          >
            Open request
          </Link>
        </article>
      ))}
    </div>
  );
}

export function StaffGrid({ people }: { people: StaffMember[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {people.map((person) => (
        <article key={person.email} className="card-surface flex h-full flex-col rounded-[1.75rem] p-6">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#dce9ff,#ffffff)] text-lg font-bold text-[var(--navy)]">
            {person.name
              .split(" ")
              .map((part) => part[0])
              .slice(0, 2)
              .join("")}
          </div>
          <h3 className="mt-5 text-xl font-semibold text-[var(--navy-deep)]">{person.name}</h3>
          <p className="mt-1 text-sm font-medium text-blue-600">{person.role}</p>
          <p className="mt-1 text-sm text-[var(--muted)]">{person.specialty}</p>
          <p className="mt-3 inline-flex w-fit rounded-full bg-[var(--surface-accent)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-700">
            Direct contact
          </p>
          <p className="mt-4 text-sm leading-6 text-[var(--muted)]">{person.bio}</p>
          <div className="mt-5 grid gap-2 text-sm text-[var(--navy)]">
            <a
              href={`tel:${person.phone.replace(/[^0-9]/g, "")}`}
              className="block w-full rounded-2xl border border-blue-200 bg-[var(--surface-accent)] px-4 py-3 font-semibold transition hover:border-blue-300 hover:bg-blue-50"
            >
              Call {person.phone}
            </a>
            <a
              href={`mailto:${person.email}`}
              className="block w-full overflow-hidden rounded-2xl border border-slate-200 bg-white px-4 py-3 font-medium text-blue-700 transition hover:border-blue-200 hover:bg-blue-50 break-all"
            >
              {person.email}
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}

export function BlogGrid({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {posts.map((post) => (
        <article key={post.slug} className="card-surface rounded-[1.75rem] p-6">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
            <span>{post.category}</span>
            <span className="h-1 w-1 rounded-full bg-blue-300" />
            <span>{post.readTime}</span>
          </div>
          <h3 className="mt-4 text-2xl font-semibold text-[var(--navy-deep)]">
            {post.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{post.excerpt}</p>
          <div className="mt-5 text-sm text-[var(--muted)]">{post.date}</div>
          <ButtonLink href={`/blog/${post.slug}`} className="mt-6">
            Read article
          </ButtonLink>
        </article>
      ))}
    </div>
  );
}

export function ClosingCta({
  title,
  body,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: {
  title: string;
  body: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
}) {
  return (
    <section className="section-space pt-8">
      <div className="container-shell">
        <div className="card-surface rounded-[2rem] px-6 py-10 text-center sm:px-10">
          <SectionHeading title={title} description={body} align="center" />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href={primaryHref}>{primaryLabel}</ButtonLink>
            <ButtonLink href={secondaryHref} variant="secondary">
              {secondaryLabel}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
