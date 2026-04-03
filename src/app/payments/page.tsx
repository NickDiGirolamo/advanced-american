import { CarrierDirectory } from "@/components/carrier-directory";
import { ClosingCta } from "@/components/page-sections";
import { PageHero } from "@/components/ui";
import { carriers, siteSettings } from "@/lib/content";

export default function PaymentsPage() {
  return (
    <div>
      <PageHero
        eyebrow="Payment Center"
        title="A cleaner, faster payment experience with searchable carrier information."
        description="The current site includes carrier payment information. This redesign turns that into a more useful billing directory that is easier to scan on desktop and mobile."
      />
      <section className="section-space">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="space-y-6">
            <div className="card-surface rounded-[1.75rem] p-6">
              <h2 className="text-2xl font-semibold text-[var(--navy-deep)]">How to use the payment center</h2>
              <ul className="mt-4 space-y-4 text-sm leading-6 text-[var(--muted)]">
                <li>Search for your carrier name to find the billing phone number or online payment path.</li>
                <li>Use the office contact option if you are unsure which carrier bills your policy.</li>
                <li>For policy changes that may affect billing, use the service center too.</li>
              </ul>
            </div>
            <div className="card-surface rounded-[1.75rem] p-6">
              <h2 className="text-2xl font-semibold text-[var(--navy-deep)]">Need billing help?</h2>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                The fastest path is often direct carrier billing, but the office can still help you
                confirm the right contact information or route you to the right team. Call{" "}
                <a href={siteSettings.phoneHref} className="font-semibold text-blue-700">
                  {siteSettings.phoneDisplay}
                </a>.
              </p>
            </div>
          </div>
          <CarrierDirectory carriers={carriers} mode="payments" />
        </div>
      </section>
      <ClosingCta
        title="Need a policy change as well?"
        body="Billing questions and policy updates often overlap. The redesigned site keeps both pathways easy to find."
        primaryHref="/service-center"
        primaryLabel="Open Service Center"
        secondaryHref="/contact"
        secondaryLabel="Contact the Office"
      />
    </div>
  );
}
