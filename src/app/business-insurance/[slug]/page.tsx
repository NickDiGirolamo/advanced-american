import { notFound } from "next/navigation";
import { QuoteForm } from "@/components/forms";
import { ClosingCta } from "@/components/page-sections";
import { PageHero } from "@/components/ui";
import { businessProducts } from "@/lib/content";

export function generateStaticParams() {
  return businessProducts.map((product) => ({ slug: product.slug }));
}

export default async function BusinessProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = businessProducts.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div>
      <PageHero
        eyebrow="Business Insurance Detail"
        title={product.name}
        description={product.hero}
        actions={[
          { label: "Request a Quote", href: `/quotes?type=${encodeURIComponent(product.shortName)}` },
          { label: "Speak with an Agent", href: "/contact", variant: "secondary" },
        ]}
      />
      <section className="section-space">
        <div className="container-shell grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="space-y-6">
            <div className="card-surface rounded-[1.75rem] p-6">
              <h2 className="text-2xl font-semibold text-[var(--navy-deep)]">Who this coverage supports</h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-[var(--muted)]">
                {product.audience.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="card-surface rounded-[1.75rem] p-6">
              <h2 className="text-2xl font-semibold text-[var(--navy-deep)]">Coverage considerations</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {product.coverage.map((item) => (
                  <li key={item} className="rounded-2xl bg-white px-4 py-3 text-sm text-[var(--navy)]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-surface rounded-[1.75rem] p-6">
              <h2 className="text-2xl font-semibold text-[var(--navy-deep)]">Why businesses work with us</h2>
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
        title="Planning for a growth milestone or contract requirement?"
        body="Use the quote form to start the conversation, then we can fine-tune the right commercial coverage structure with you."
        primaryHref="/quotes"
        primaryLabel="Get a Business Quote"
        secondaryHref="/service-center/certificates"
        secondaryLabel="Request a Certificate"
      />
    </div>
  );
}
