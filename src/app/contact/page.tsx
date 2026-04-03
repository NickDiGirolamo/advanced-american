import { ContactForm } from "@/components/forms";
import { ClosingCta } from "@/components/page-sections";
import { PageHero } from "@/components/ui";
import { siteSettings } from "@/lib/content";

export default function ContactPage() {
  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title="Reach the office quickly for quotes, service needs, claims guidance, or general support."
        description="The contact page pulls together the office address, phone, hours, form access, and location placeholder into one clean destination."
      />
      <section className="section-space">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-6">
            <div className="card-surface rounded-[1.75rem] p-6">
              <h2 className="text-2xl font-semibold text-[var(--navy-deep)]">Office details</h2>
              <div className="mt-4 space-y-3 text-sm leading-6 text-[var(--muted)]">
                <div>{siteSettings.address[0]}</div>
                <div>{siteSettings.address[1]}</div>
                <a href={siteSettings.phoneHref} className="block font-semibold text-blue-700">
                  {siteSettings.phoneDisplay}
                </a>
                <div>{siteSettings.hours}</div>
              </div>
            </div>
            <div className="card-surface rounded-[1.75rem] p-6">
              <h2 className="text-2xl font-semibold text-[var(--navy-deep)]">Map placeholder</h2>
              <div className="mt-4 flex min-h-64 items-center justify-center rounded-[1.5rem] border border-dashed border-slate-300 bg-slate-50 text-center text-sm text-[var(--muted)]">
                {siteSettings.mapEmbedLabel}
              </div>
            </div>
          </div>
          <ContactForm
            title="Send a message"
            description="Use this form for general contact requests, and connect it later to your preferred backend submission flow."
          />
        </div>
      </section>
      <ClosingCta
        title="Need something more specific?"
        body="If you already know you need a quote, claim, payment, or service request, those dedicated pathways are still the fastest route."
        primaryHref="/quotes"
        primaryLabel="Get a Quote"
        secondaryHref="/service-center"
        secondaryLabel="Service Center"
      />
    </div>
  );
}
