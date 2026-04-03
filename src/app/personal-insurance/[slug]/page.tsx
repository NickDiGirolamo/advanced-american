import { notFound } from "next/navigation";
import { QuoteForm } from "@/components/forms";
import { ClosingCta } from "@/components/page-sections";
import { PageHero } from "@/components/ui";
import { personalProducts } from "@/lib/content";

export function generateStaticParams() {
  return personalProducts.map((product) => ({ slug: product.slug }));
}

export default async function PersonalProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = personalProducts.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div>
      <PageHero
        eyebrow="Personal Insurance Detail"
        title={product.name}
        description={product.hero}
        actions={[
          { label: "Get a Quote", href: `/quotes?type=${encodeURIComponent(product.shortName)}` },
          { label: "Contact the Office", href: "/contact", variant: "secondary" },
        ]}
      />
      <section className="section-space">
        <div className="container-shell grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="space-y-6">
            <div className="card-surface rounded-[1.75rem] p-6">
              <h2 className="text-2xl font-semibold text-[var(--navy-deep)]">Who this coverage is for</h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-[var(--muted)]">
                {product.audience.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="card-surface rounded-[1.75rem] p-6">
              <h2 className="text-2xl font-semibold text-[var(--navy-deep)]">What it may cover</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {product.coverage.map((item) => (
                  <li key={item} className="rounded-2xl bg-white px-4 py-3 text-sm text-[var(--navy)]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-surface rounded-[1.75rem] p-6">
              <h2 className="text-2xl font-semibold text-[var(--navy-deep)]">Why work with an independent agency</h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-[var(--muted)]">
                {product.advantages.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="card-surface rounded-[1.75rem] p-6">
              <h2 className="text-2xl font-semibold text-[var(--navy-deep)]">FAQ</h2>
              <div className="mt-4 space-y-4">
                {product.faq.map((item) => (
                  <div key={item.question} className="rounded-2xl bg-white px-4 py-4">
                    <h3 className="font-semibold text-[var(--navy)]">{item.question}</h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <QuoteForm
              preselectedType={product.shortName}
              title={`Request a ${product.shortName} quote`}
              description={product.summary}
            />
          </div>
        </div>
      </section>
      <ClosingCta
        title="Want help comparing your options?"
        body="We can review your current policy, explain tradeoffs clearly, and help you decide what level of protection feels right."
        primaryHref="/quotes"
        primaryLabel="Start a Quote"
        secondaryHref="/contact"
        secondaryLabel="Ask an Agent"
      />
    </div>
  );
}
