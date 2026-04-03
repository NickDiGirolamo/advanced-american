import { AlertTriangle, ShieldCheck } from "lucide-react";
import { CarrierDirectory } from "@/components/carrier-directory";
import { ClosingCta } from "@/components/page-sections";
import { PageHero } from "@/components/ui";
import { carriers, siteSettings } from "@/lib/content";

export default function ClaimsPage() {
  return (
    <div>
      <PageHero
        eyebrow="Claims Center"
        title="Help clients take the right next step quickly after an accident, loss, or incident."
        description="The current site includes a claims support area with carrier information. This redesign preserves that function, then improves the emergency guidance, carrier lookup, and mobile usability."
      />
      <section className="section-space">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="space-y-6">
            <div className="rounded-[1.75rem] border border-[rgba(217,71,76,0.18)] bg-[rgba(255,245,246,0.92)] p-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="mt-1 h-5 w-5 text-[var(--red)]" />
                <div>
                  <h2 className="text-2xl font-semibold text-[var(--navy-deep)]">Immediate action</h2>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    Protect people first, contact emergency services when needed, document the
                    scene if safe, and then begin the claim with your carrier. Our office can help
                    you understand what comes next.
                  </p>
                </div>
              </div>
            </div>
            <div className="card-surface rounded-[1.75rem] p-6">
              <h2 className="text-2xl font-semibold text-[var(--navy-deep)]">What to do after an incident</h2>
              <ul className="mt-4 space-y-4 text-sm leading-6 text-[var(--muted)]">
                <li>Move to a safe location if possible and check for injuries.</li>
                <li>Call emergency services when appropriate.</li>
                <li>Gather names, phone numbers, policy details, and photos if safe.</li>
                <li>Contact your carrier directly using the directory, then contact our office.</li>
              </ul>
            </div>
            <div className="card-surface rounded-[1.75rem] p-6">
              <div className="flex items-start gap-4">
                <ShieldCheck className="mt-1 h-5 w-5 text-blue-600" />
                <div>
                  <h2 className="text-2xl font-semibold text-[var(--navy-deep)]">Need office support?</h2>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    Call <a href={siteSettings.phoneHref} className="font-semibold text-blue-700">{siteSettings.phoneDisplay}</a> for guidance if you are unsure how to start, what information matters, or how to follow up after the carrier opens the claim.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <CarrierDirectory carriers={carriers} mode="claims" />
        </div>
      </section>
      <ClosingCta
        title="Prefer to talk with the office first?"
        body="We are still part of the support path even when the carrier formally handles the claim."
        primaryHref="/contact"
        primaryLabel="Contact the Office"
        secondaryHref="/payments"
        secondaryLabel="Payment Help"
      />
    </div>
  );
}
