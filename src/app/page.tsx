import {
  ArrowRight,
  BadgeHelp,
  CreditCard,
  FileCheck2,
  ShieldCheck,
  Star,
} from "lucide-react";
import { QuoteForm } from "@/components/forms";
import { Reveal } from "@/components/reveal";
import { CompanyLogoGrid } from "@/components/company-logo-grid";
import { BlogGrid, ClosingCta, ProductGrid, ServiceCardGrid, StaffGrid } from "@/components/page-sections";
import { ButtonLink, SectionHeading } from "@/components/ui";
import {
  blogPosts,
  companyEntries,
  featuredCompanyNames,
  homeActions,
  personalProducts,
  serviceRequests,
  siteSettings,
  staffMembers,
  testimonials,
  trustStats,
} from "@/lib/content";

const heroActions = [
  { label: "Get a Quote", href: "/quotes" },
  { label: "Service Center", href: "/service-center", variant: "secondary" as const },
  { label: "File a Claim", href: "/claims", variant: "secondary" as const },
  { label: "Make a Payment", href: "/payments", variant: "secondary" as const },
];

const heroHighlights = [
  "Family-owned service",
  "Local team",
  "Fast follow-up",
];

const statTints = [
  "bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(244,239,232,0.96))]",
  "bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(250,240,235,0.96))]",
  "bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(239,243,249,0.96))]",
  "bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(247,239,230,0.96))]",
];

const actionTints = [
  "bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(245,239,231,0.9))]",
  "bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(249,241,234,0.92))]",
  "bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(241,245,250,0.88))]",
  "bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(247,239,231,0.9))]",
];

const featuredCompanies = featuredCompanyNames
  .map((name) => companyEntries.find((company) => company.name === name))
  .filter((company): company is NonNullable<typeof company> => Boolean(company));

export default function Home() {
  return (
    <div>
      <section className="relative pt-8 sm:pt-12">
        <div className="container-shell grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal className="card-surface rounded-[2rem] px-6 py-10 sm:px-10 sm:py-14">
            <span className="relative eyebrow">Independent insurance. Modern experience.</span>
            <h1 className="relative mt-5 max-w-3xl text-balance font-display text-5xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-6xl">
              Local insurance help with white-glove service.
            </h1>
            <p className="relative mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              When clients need help, we want it to feel easy to call, talk to someone
              who knows them, and get a quick answer.
            </p>
            <div className="relative mt-5 flex flex-wrap gap-2.5">
              {heroHighlights.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-full border border-[rgba(201,79,69,0.18)] bg-[rgba(255,248,246,0.92)] px-3 py-1.5 text-xs font-semibold tracking-[0.08em] text-[var(--navy)] shadow-sm shadow-slate-900/5"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="relative mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {heroActions.map((action) => (
                <ButtonLink
                  key={action.href}
                  href={action.href}
                  variant={action.variant}
                  className="w-full"
                >
                  {action.label}
                </ButtonLink>
              ))}
            </div>
            <div className="relative mt-5 flex flex-wrap items-center gap-3 rounded-[1.5rem] border border-white/80 bg-white/80 px-4 py-4 shadow-sm shadow-slate-900/5">
              <a
                href={siteSettings.phoneHref}
                className="inline-flex items-center rounded-full bg-[linear-gradient(135deg,var(--navy),var(--blue))] px-4 py-2.5 text-sm font-semibold !text-white visited:!text-white shadow-lg shadow-blue-950/15 transition hover:brightness-105 [&_svg]:!text-white"
              >
                Call {siteSettings.phoneDisplay}
              </a>
              <div className="text-sm text-[var(--muted)]">
                Prefer to talk first? Our local team is available {siteSettings.hours}.
              </div>
            </div>
            <div className="relative mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {trustStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`flex min-h-[138px] flex-col items-center justify-center rounded-[1.5rem] border border-white/80 px-5 py-6 text-center shadow-sm shadow-slate-900/5 ${statTints[index]}`}
                >
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--red)]">
                    {stat.label}
                  </span>
                  <span className="mt-2 max-w-[16ch] text-balance text-[0.82rem] font-semibold leading-4 text-[var(--navy-deep)] sm:text-[0.84rem]">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <QuoteForm
              compact
              title="Quick quote"
              description="A simple starting point for auto, home, life, business, and more."
            />
          </Reveal>
        </div>
      </section>

      <section className="section-space pb-10">
        <div className="container-shell">
          <div className="card-surface rounded-[1.75rem] px-5 py-5 sm:px-7">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--red)]">
                  Companies represented
                </p>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  Trusted carriers, with local help close by.
                </p>
              </div>
            </div>
            <div className="mt-6">
              <CompanyLogoGrid companies={featuredCompanies} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-space pt-6">
        <div className="container-shell">
          <SectionHeading
            eyebrow="What would you like to do?"
            title="Start with the task you need."
            description="The most common actions are front and center."
            tone="light"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {homeActions.map((action, index) => {
              const icons = [ShieldCheck, FileCheck2, BadgeHelp, CreditCard];
              const Icon = icons[index];
              return (
                <Reveal key={action.href} delay={index * 0.08}>
                  <div className={`card-surface rounded-[1.75rem] p-6 ${actionTints[index]}`}>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[rgba(201,79,69,0.14)] bg-white/90 text-[var(--red)] shadow-sm shadow-slate-900/5">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-[var(--navy-deep)]">
                      {action.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{action.description}</p>
                    <a href={action.href} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--red)]">
                      Open now
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <ProductGrid
        eyebrow="Personal coverage"
        title="Personal insurance, made simpler."
        description="Clear options for auto, home, life, umbrella, and more."
        products={personalProducts}
        tone="light"
      />

      <section className="section-space bg-[linear-gradient(180deg,transparent,rgba(237,243,255,0.7))]">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Service center"
              title="Get help without the runaround."
              description="Common requests are easy to submit and easy to find."
              tone="light"
            />
            <div className="mt-8 grid gap-4">
              {[
                "Add or change vehicles",
                "Add or change drivers",
                "Order ID cards",
                "Update contact info",
                "Request policy changes",
                "Get certificates of insurance",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-[var(--navy)]">
                  <Star className="h-4 w-4 text-[var(--red)]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <ServiceCardGrid items={serviceRequests} />
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell grid gap-6 lg:grid-cols-3">
          <div className="card-surface rounded-[1.75rem] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--red)]">Claims support</p>
            <h3 className="mt-4 text-2xl font-semibold text-[var(--navy-deep)]">Fast help when something goes wrong</h3>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">Find carrier contacts, quick steps, and office support fast.</p>
            <ButtonLink href="/claims" className="mt-6">Open claims center</ButtonLink>
          </div>
          <div className="card-surface rounded-[1.75rem] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--red)]">Payments</p>
            <h3 className="mt-4 text-2xl font-semibold text-[var(--navy-deep)]">Easy payment lookup</h3>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">Find the right payment path in a few clicks.</p>
            <ButtonLink href="/payments" className="mt-6">Open payment center</ButtonLink>
          </div>
          <div className="card-surface rounded-[1.75rem] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--red)]">Referrals</p>
            <h3 className="mt-4 text-2xl font-semibold text-[var(--navy-deep)]">A friendlier referral experience</h3>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">Send someone our way with a quick, simple form.</p>
            <ButtonLink href="/referrals" className="mt-6">Refer someone</ButtonLink>
          </div>
        </div>
      </section>

      <section className="section-space pt-6">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeading
              eyebrow="About the agency"
              title="Local help from people who pick up the phone."
              description="Family-owned service, real relationships, and coverage guidance that feels personal."
              tone="light"
            />
            <div className="mt-8 space-y-4">
              {[
                "Call the office and talk to a real team member",
                "Family-owned service with responsive follow-through",
                "Carrier access without losing personal support",
              ].map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl bg-white p-4">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                  <p className="text-sm leading-6 text-[var(--navy)]">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={siteSettings.phoneHref}
                className="inline-flex items-center rounded-full bg-[linear-gradient(135deg,var(--navy),var(--blue))] px-5 py-3 text-sm font-semibold !text-white visited:!text-white shadow-lg shadow-blue-950/15 transition hover:brightness-105 [&_svg]:!text-white"
              >
                Call the Office
              </a>
              <ButtonLink href="/about/staff" variant="secondary">
                Meet the Team
              </ButtonLink>
            </div>
          </div>
          <StaffGrid people={staffMembers.slice(0, 3)} />
        </div>
      </section>

      <section className="section-space bg-[linear-gradient(180deg,rgba(255,255,255,0),rgba(237,243,255,0.65))]">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Latest insights"
            title="Helpful reads, without the clutter."
            description="Short, practical articles for clients and business owners."
            tone="light"
          />
          <div className="mt-10">
            <BlogGrid posts={blogPosts} />
          </div>
        </div>
      </section>

      <section className="section-space pt-6">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Client experience"
            title="Helpful feels better."
            description="A warmer, easier experience builds trust faster."
            align="center"
            tone="light"
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {testimonials.map((item) => (
              <div key={item.name} className="card-surface rounded-[1.75rem] p-6">
                <p className="text-base leading-7 text-[var(--navy)]">“{item.quote}”</p>
                <p className="mt-5 text-sm font-semibold text-blue-700">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta
        title="Ready when you are."
        body="Start a quote, request service, or contact the office."
        primaryHref="/quotes"
        primaryLabel="Get a Quote"
        secondaryHref="/contact"
        secondaryLabel="Contact the Office"
      />
    </div>
  );
}
