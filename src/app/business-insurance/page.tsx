import { ClosingCta, ProductGrid } from "@/components/page-sections";
import { PageHero } from "@/components/ui";
import { businessProducts } from "@/lib/content";

export default function BusinessInsurancePage() {
  return (
    <div>
      <PageHero
        eyebrow="Business Insurance"
        title="Commercial insurance support that feels more strategic, less overwhelming."
        description="This business hub keeps the current site’s commercial focus while restructuring it into clearer categories for general business, operations-heavy risk, and workforce-related coverage."
        actions={[
          { label: "Request a Business Quote", href: "/quotes" },
          { label: "Talk with the Office", href: "/contact", variant: "secondary" },
        ]}
      />
      <ProductGrid
        eyebrow="Commercial categories"
        title="Business coverage organized around the way companies actually operate."
        description="Instead of a long list of dated pages, the redesign groups coverage into clearer commercial pathways while keeping room to add industry-specific pages later."
        products={businessProducts}
      />
      <ClosingCta
        title="Need help matching coverage to your operations?"
        body="We can help review your current program, upcoming contracts, staffing changes, and certificate needs."
        primaryHref="/quotes"
        primaryLabel="Get a Business Quote"
        secondaryHref="/service-center/certificates"
        secondaryLabel="Request a Certificate"
      />
    </div>
  );
}
