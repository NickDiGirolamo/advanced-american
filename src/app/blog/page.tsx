import { BlogGrid, ClosingCta } from "@/components/page-sections";
import { PageHero } from "@/components/ui";
import { blogPosts } from "@/lib/content";

export default function BlogPage() {
  return (
    <div>
      <PageHero
        eyebrow="Blog / News"
        title="An editorial home for insurance education, practical guidance, and timely updates."
        description="The current site includes blog and news content. This redesign gives it a more intentional publishing structure with reusable cards and article templates."
      />
      <section className="section-space">
        <div className="container-shell">
          <BlogGrid posts={blogPosts} />
        </div>
      </section>
      <ClosingCta
        title="Want to turn readers into leads?"
        body="Each article template is structured to support SEO, trust-building, and stronger quote or contact calls to action."
        primaryHref="/quotes"
        primaryLabel="Get a Quote"
        secondaryHref="/contact"
        secondaryLabel="Contact the Office"
      />
    </div>
  );
}
