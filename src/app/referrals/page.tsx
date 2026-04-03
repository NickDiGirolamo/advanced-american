import { ContactForm } from "@/components/forms";
import { ClosingCta } from "@/components/page-sections";
import { PageHero } from "@/components/ui";
import { referralProgram } from "@/lib/content";

export default function ReferralsPage() {
  return (
    <div>
      <PageHero
        eyebrow="Referral Program"
        title={referralProgram.title}
        description={referralProgram.body}
      />
      <section className="section-space">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="card-surface rounded-[1.75rem] p-6">
            <h2 className="text-2xl font-semibold text-[var(--navy-deep)]">Why this page matters</h2>
            <ul className="mt-5 space-y-4 text-sm leading-6 text-[var(--muted)]">
              {referralProgram.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
          <ContactForm
            title="Send a referral"
            description="Use this polished referral form as the MVP version of a future dedicated referral workflow."
          />
        </div>
      </section>
      <ClosingCta
        title="Need a quote for yourself too?"
        body="The redesigned site keeps self-service quote requests and referral workflows distinct, but equally easy to find."
        primaryHref="/quotes"
        primaryLabel="Get Your Own Quote"
        secondaryHref="/contact"
        secondaryLabel="Contact the Office"
      />
    </div>
  );
}
