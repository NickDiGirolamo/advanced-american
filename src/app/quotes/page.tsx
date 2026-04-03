import { QuoteForm } from "@/components/forms";
import { ClosingCta } from "@/components/page-sections";
import { PageHero } from "@/components/ui";

export default async function QuotesPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const { type } = await searchParams;

  return (
    <div>
      <PageHero
        eyebrow="Quotes"
        title="A quote experience that feels simple, polished, and ready for future backend integration."
        description="The current site uses a quick quote form prominently. This redesign keeps that workflow front and center, improves validation-ready structure, and makes product-specific quoting easier."
      />
      <section className="section-space">
        <div className="container-shell">
          <QuoteForm
            preselectedType={type}
            title="Request your personalized quote"
            description="Use this full quote form for personal or business insurance. Product pages can preselect coverage, and this structure is ready to connect to a CRM, email service, or server action later."
          />
        </div>
      </section>
      <ClosingCta
        title="Prefer to talk through options first?"
        body="If you have questions about coverage type, bundling, or timing, the office can help you narrow the right next step before you submit."
        primaryHref="/contact"
        primaryLabel="Contact the Office"
        secondaryHref="/personal-insurance"
        secondaryLabel="Browse Personal Coverage"
      />
    </div>
  );
}
