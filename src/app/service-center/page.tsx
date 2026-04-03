import { ServiceCardGrid, ClosingCta } from "@/components/page-sections";
import { PageHero, SectionHeading } from "@/components/ui";
import { serviceRequests, siteSettings } from "@/lib/content";

export default function ServiceCenterPage() {
  return (
    <div>
      <PageHero
        eyebrow="Service Center"
        title="Everything clients need after the policy is in place, rebuilt into a cleaner service experience."
        description="The service center is a major functional area on the current site. This redesign turns it into a clearer, friendlier workflow hub for policy changes, ID cards, certificates, and general support."
      />
      <section className="section-space">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="card-surface rounded-[1.75rem] p-6">
            <SectionHeading
              eyebrow="How it works"
              title="Structured request paths with real guidance."
              description="Each request type has its own form and success state. The form architecture is intentionally ready for backend submission handling later."
            />
            <div className="mt-6 rounded-[1.5rem] bg-white p-5 text-sm leading-7 text-[var(--muted)]">
              If your request is urgent or you are unsure which form fits, call{" "}
              <a href={siteSettings.phoneHref} className="font-semibold text-blue-700">
                {siteSettings.phoneDisplay}
              </a>{" "}
              and the office will help route you quickly.
            </div>
          </div>
          <ServiceCardGrid items={serviceRequests} />
        </div>
      </section>
      <ClosingCta
        title="Need hands-on help from the office?"
        body="Not every service request fits neatly into one category. When that happens, a direct call or general service form is the fastest path."
        primaryHref="/service-center/general-service"
        primaryLabel="General Service Request"
        secondaryHref="/contact"
        secondaryLabel="Contact the Office"
      />
    </div>
  );
}
