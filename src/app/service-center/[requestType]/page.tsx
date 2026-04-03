import { notFound } from "next/navigation";
import { ServiceRequestForm } from "@/components/forms";
import { ClosingCta } from "@/components/page-sections";
import { PageHero } from "@/components/ui";
import { serviceRequests } from "@/lib/content";

export function generateStaticParams() {
  return serviceRequests.map((item) => ({ requestType: item.slug }));
}

export default async function ServiceRequestPage({
  params,
}: {
  params: Promise<{ requestType: string }>;
}) {
  const { requestType } = await params;
  const request = serviceRequests.find((item) => item.slug === requestType);

  if (!request) {
    notFound();
  }

  return (
    <div>
      <PageHero
        eyebrow="Service Request"
        title={request.name}
        description={request.description}
        actions={[
          { label: "Back to Service Center", href: "/service-center", variant: "secondary" },
        ]}
      />
      <section className="section-space">
        <div className="container-shell">
          <ServiceRequestForm requestSlug={request.slug} />
        </div>
      </section>
      <ClosingCta
        title="Need a different service path?"
        body="The service center keeps major self-service workflows visible, but you can always move back to the full hub or contact the office directly."
        primaryHref="/service-center"
        primaryLabel="View All Service Requests"
        secondaryHref="/contact"
        secondaryLabel="Contact the Office"
      />
    </div>
  );
}
