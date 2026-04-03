import Link from "next/link";
import { companyNames, navigation, siteSettings } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[var(--navy-deep)] text-white">
      <div className="container-shell grid gap-12 py-14 lg:grid-cols-[1.2fr_0.8fr_1fr]">
        <div>
          <h2 className="font-display text-3xl font-semibold">
            Insurance guidance that feels modern, human, and dependable.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/70">
            Built around the real workflows clients need most: quotes, service requests,
            claims help, payments, coverage education, and a direct path to a responsive
            local team.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {companyNames.slice(0, 8).map((company) => (
              <span key={company} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/75">
                {company}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-white/60">
            Navigation
          </h3>
          <div className="mt-4 grid gap-3 text-sm">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="text-white/80 transition hover:text-white">
                {item.label}
              </Link>
            ))}
            <Link href="/referrals" className="text-white/80 transition hover:text-white">
              Referrals
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-white/60">
            Contact
          </h3>
          <div className="mt-4 space-y-3 text-sm text-white/80">
            <a href={siteSettings.phoneHref} className="block transition hover:text-white">
              {siteSettings.phoneDisplay}
            </a>
            <a href={`mailto:${siteSettings.email}`} className="block transition hover:text-white">
              {siteSettings.email}
            </a>
            <div>{siteSettings.address[0]}</div>
            <div>{siteSettings.address[1]}</div>
            <div>{siteSettings.hours}</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
