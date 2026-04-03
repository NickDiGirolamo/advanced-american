import { ClosingCta, StaffGrid } from "@/components/page-sections";
import { PageHero } from "@/components/ui";
import { companyNames, siteSettings, staffMembers } from "@/lib/content";

export default function AboutPage() {
  return (
    <div>
      <PageHero
        eyebrow="About"
        title="A modern independent insurance agency experience built around trust, responsiveness, and choice."
        description={`${siteSettings.name} serves personal and business insurance clients with a local office, multiple carrier relationships, and real support after the sale.`}
      />
      <section className="section-space">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="card-surface rounded-[1.75rem] p-6">
            <h2 className="text-2xl font-semibold text-[var(--navy-deep)]">Why clients choose us</h2>
            <div className="mt-5 space-y-4 text-sm leading-6 text-[var(--muted)]">
              <p>We are independent, which means we can help clients compare options across represented carriers instead of forcing every need into a single carrier box.</p>
              <p>We keep practical workflows front and center: quotes, service requests, payments, claims help, and direct staff access.</p>
              <p>The redesigned experience brings a better digital front end to the same core value proposition: thoughtful advice and responsive local support.</p>
            </div>
          </div>
          <div className="card-surface rounded-[1.75rem] p-6">
            <h2 className="text-2xl font-semibold text-[var(--navy-deep)]">Companies represented</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {companyNames.slice(0, 12).map((company) => (
                <span key={company} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-[var(--navy)]">
                  {company}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section-space pt-0">
        <div className="container-shell">
          <StaffGrid people={staffMembers} />
        </div>
      </section>
      <ClosingCta
        title="Want to learn more about how an independent agent helps?"
        body="Explore the independent-agent page, browse companies represented, or reach out to the team directly."
        primaryHref="/about/independent-agent"
        primaryLabel="Why Independent Agent"
        secondaryHref="/about/companies"
        secondaryLabel="View Companies"
      />
    </div>
  );
}
