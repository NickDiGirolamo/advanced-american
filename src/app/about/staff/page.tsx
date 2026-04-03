import { ClosingCta, StaffGrid } from "@/components/page-sections";
import { PageHero } from "@/components/ui";
import { staffMembers } from "@/lib/content";

export default function StaffPage() {
  return (
    <div>
      <PageHero
        eyebrow="Staff Directory"
        title="A friendlier, more modern staff directory with clear roles and contact pathways."
        description="The current site includes a detailed staff directory. This redesign preserves that function and makes the team easier to browse on desktop and mobile."
      />
      <section className="section-space">
        <div className="container-shell">
          <StaffGrid people={staffMembers} />
        </div>
      </section>
      <ClosingCta
        title="Not sure who to contact?"
        body="Reach out through the main office contact path and we will route you to the right person."
        primaryHref="/contact"
        primaryLabel="Contact the Office"
        secondaryHref="/service-center"
        secondaryLabel="Service Center"
      />
    </div>
  );
}
