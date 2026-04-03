import { ClosingCta } from "@/components/page-sections";
import { PageHero } from "@/components/ui";

const advantages = [
  {
    title: "Choice",
    body: "Independent agencies can compare represented carriers and help match fit, pricing, and service style more thoughtfully.",
  },
  {
    title: "Comparison shopping",
    body: "You do not need to start from scratch with one carrier at a time. We help streamline that process.",
  },
  {
    title: "Personalized support",
    body: "The relationship does not end at purchase. Service requests, claim guidance, and policy reviews stay part of the experience.",
  },
  {
    title: "Advocacy",
    body: "While the carrier handles billing and claims formally, your agency still helps you navigate questions and next steps.",
  },
];

export default function IndependentAgentPage() {
  return (
    <div>
      <PageHero
        eyebrow="Why Independent Agent"
        title="Independent guidance means more choice, more context, and a more human insurance experience."
        description="This page modernizes one of the current site’s key trust-building messages: why working with an independent agency can be more helpful than relying on a single-carrier model."
      />
      <section className="section-space">
        <div className="container-shell grid gap-5 md:grid-cols-2">
          {advantages.map((item) => (
            <div key={item.title} className="card-surface rounded-[1.75rem] p-6">
              <h2 className="text-2xl font-semibold text-[var(--navy-deep)]">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{item.body}</p>
            </div>
          ))}
        </div>
      </section>
      <ClosingCta
        title="Put independent guidance to work."
        body="Let us compare options, explain tradeoffs, and help you choose a coverage path that fits your situation."
        primaryHref="/quotes"
        primaryLabel="Get a Quote"
        secondaryHref="/contact"
        secondaryLabel="Talk with the Office"
      />
    </div>
  );
}
