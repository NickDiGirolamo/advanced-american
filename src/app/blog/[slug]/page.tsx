import { notFound } from "next/navigation";
import { ClosingCta } from "@/components/page-sections";
import { PageHero } from "@/components/ui";
import { blogPosts } from "@/lib/content";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        description={`${post.date} • ${post.readTime}`}
      />
      <section className="section-space">
        <div className="container-shell">
          <article className="card-surface mx-auto max-w-3xl rounded-[2rem] p-6 sm:p-10">
            <p className="text-lg leading-8 text-[var(--muted)]">{post.excerpt}</p>
            <div className="mt-8 space-y-6 text-base leading-8 text-[var(--navy)]">
              {post.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
        </div>
      </section>
      <ClosingCta
        title="Want help applying this to your own coverage?"
        body="Educational content works best when it leads to a practical next step. Reach out if you want to review your policy or explore options."
        primaryHref="/quotes"
        primaryLabel="Request a Quote"
        secondaryHref="/contact"
        secondaryLabel="Contact the Office"
      />
    </div>
  );
}
