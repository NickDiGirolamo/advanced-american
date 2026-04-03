import { CompanyLogoGrid } from "@/components/company-logo-grid";
import { ClosingCta } from "@/components/page-sections";
import { PageHero } from "@/components/ui";
import { companyEntries } from "@/lib/content";

export default function CompaniesPage() {
  return (
    <div>
      <PageHero
        eyebrow="Companies We Represent"
        title="Carrier relationships presented in a cleaner, more scalable format."
        description="The current site includes company pages for claims and payment information. This redesign keeps that represented-carrier trust signal while making the overview easier to maintain and expand."
      />
      <section className="section-space">
        <div className="container-shell grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="sm:col-span-2 lg:col-span-3">
            <CompanyLogoGrid companies={companyEntries} />
          </div>
        </div>
      </section>
      <ClosingCta
        title="Need claim or payment information for a specific carrier?"
        body="Use the claims and payments centers for searchable support tools instead of scanning a long old-style carrier list."
        primaryHref="/claims"
        primaryLabel="Claims Center"
        secondaryHref="/payments"
        secondaryLabel="Payment Center"
      />
    </div>
  );
}
