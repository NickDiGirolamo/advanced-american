import { ClosingCta, ProductGrid } from "@/components/page-sections";
import { PageHero } from "@/components/ui";
import { personalProducts } from "@/lib/content";

export default function PersonalInsurancePage() {
  return (
    <div>
      <PageHero
        eyebrow="Personal Insurance"
        title="Coverage that protects your home life, your finances, and the way you move through everyday risk."
        description="Use this hub to explore the personal insurance categories most clients rely on, then jump into a quote request that is already designed for expansion later."
        actions={[
          { label: "Get a Personal Quote", href: "/quotes" },
          { label: "Contact an Agent", href: "/contact", variant: "secondary" },
        ]}
      />
      <ProductGrid
        eyebrow="Coverage options"
        title="Personal insurance pages redesigned for clarity and conversion."
        description="Each page explains who the coverage is for, what it can include, why independent guidance matters, and how to take the next step."
        products={personalProducts}
      />
      <ClosingCta
        title="Not sure which personal policy fits?"
        body="Tell us what you are trying to protect and we will guide you to the right place."
        primaryHref="/quotes"
        primaryLabel="Start a Quote"
        secondaryHref="/contact"
        secondaryLabel="Ask a Question"
      />
    </div>
  );
}
