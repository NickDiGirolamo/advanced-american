"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BadgeInfo,
  Bike,
  BriefcaseBusiness,
  CarFront,
  CircleDollarSign,
  FileBadge2,
  HeartHandshake,
  Home,
  Landmark,
  Menu,
  Phone,
  ShieldCheck,
  Shield,
  Users,
  Umbrella,
  Waves,
  X,
} from "lucide-react";
import { useState } from "react";
import { navigation, siteSettings } from "@/lib/content";
import { ButtonLink } from "@/components/ui";
import { cn } from "@/lib/utils";

const personalMenuIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "/personal-insurance/auto": CarFront,
  "/personal-insurance/home": Home,
  "/personal-insurance/life": HeartHandshake,
  "/personal-insurance/umbrella": Umbrella,
  "/personal-insurance/boat": Waves,
  "/personal-insurance/motorcycle": Bike,
};

const businessMenuIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "/business-insurance/general-business": BriefcaseBusiness,
  "/business-insurance/business-operations": ShieldCheck,
  "/business-insurance/workers-comp-benefits-health": FileBadge2,
};

const aboutMenuIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "/about": BadgeInfo,
  "/about/independent-agent": Landmark,
  "/about/companies": CircleDollarSign,
  "/about/staff": Users,
};

function getChildIcon(
  parentHref: string,
  childHref: string,
): React.ComponentType<{ className?: string }> | null {
  if (parentHref === "/personal-insurance") {
    return personalMenuIcons[childHref] ?? Shield;
  }

  if (parentHref === "/business-insurance") {
    return businessMenuIcons[childHref] ?? BriefcaseBusiness;
  }

  if (parentHref === "/about") {
    return aboutMenuIcons[childHref] ?? BadgeInfo;
  }

  return null;
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-white/70 bg-[rgba(9,26,53,0.95)] text-white backdrop-blur">
        <div className="container-shell flex min-h-11 items-center justify-between gap-4 text-xs sm:text-sm">
          <div className="flex flex-wrap items-center gap-4 py-2">
            <span className="hidden rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80 sm:inline-flex">
              Family-owned and local
            </span>
            <a href={siteSettings.phoneHref} className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 font-semibold !text-white visited:!text-white transition hover:bg-white/16">
              <Phone className="h-3.5 w-3.5" />
              Call {siteSettings.phoneDisplay}
            </a>
            <span className="hidden text-white/70 sm:inline">{siteSettings.hours}</span>
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/claims"
              className="inline-flex rounded-full border border-white/12 bg-white/8 px-3 py-1.5 text-white/82 transition hover:bg-white/14 hover:text-white"
            >
              Urgent claim help
            </Link>
            <Link
              href="/payments"
              className="inline-flex rounded-full border border-white/12 bg-white/8 px-3 py-1.5 text-white/82 transition hover:bg-white/14 hover:text-white"
            >
              Payment options
            </Link>
          </div>
        </div>
      </div>
      <div className="border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
        <div className="container-shell flex min-h-20 items-center justify-between gap-6">
          <Link
            href="/"
            aria-label="Go to the Advanced American homepage"
            title="Go to homepage"
            className="group -mx-2 inline-flex items-center gap-3 rounded-[1.75rem] px-3 py-2.5 transition hover:bg-slate-50"
            onClick={() => setOpen(false)}
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/80 bg-white shadow-lg shadow-blue-950/15">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://media.istockphoto.com/id/1197211554/vector/eagle-head-american-flag-circle-abstract.jpg?s=612x612&w=0&k=20&c=ZRvjbFggeueKFEvuVOROgZEGsKmMf_HI8DNNzLbl9oE="
                alt="Advanced American eagle logo"
                className="h-full w-full object-cover"
                loading="eager"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col justify-center text-center">
              <div className="text-[0.78rem] font-semibold tracking-[0.22em] transition group-hover:text-[var(--navy)]">
                <span className="text-[var(--navy)]">ADVANCED </span>
                <span className="text-[var(--red)]">AMERICAN</span>
              </div>
            </div>
          </Link>
          <nav className="hidden items-center gap-1 lg:flex">
            {navigation.map((item, index) => (
              <div key={item.href} className="relative flex items-center">
                {index > 0 ? (
                  <span
                    aria-hidden="true"
                    className="mx-1.5 h-5 w-px rounded-full bg-slate-500/70"
                  />
                ) : null}
                <Link
                  href={item.href}
                  className={cn(
                    "peer inline-flex rounded-full px-4 py-2 text-sm font-medium text-[var(--navy)] transition hover:bg-blue-50",
                    pathname === item.href && "bg-[rgba(201,79,69,0.09)] text-[var(--red)]",
                  )}
                >
                  {item.label}
                </Link>
                {item.children ? (
                  <div className="pointer-events-none absolute left-0 top-full z-30 w-80 pt-2 opacity-0 transition duration-200 peer-hover:pointer-events-auto peer-hover:opacity-100 peer-focus-visible:pointer-events-auto peer-focus-visible:opacity-100 hover:pointer-events-auto hover:opacity-100 focus-within:pointer-events-auto focus-within:opacity-100">
                    <div className="rounded-[1.5rem] border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-900/8">
                      {item.children.map((child) => (
                        (() => {
                          const Icon = getChildIcon(item.href, child.href);

                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block rounded-2xl px-4 py-3 transition hover:bg-[var(--surface-accent)] focus:bg-[var(--surface-accent)]"
                            >
                              <div className="flex items-start gap-3">
                                {Icon ? (
                                  <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                                    <Icon className="h-4 w-4" />
                                  </div>
                                ) : null}
                                <div>
                                  <div className="font-medium text-[var(--navy-deep)]">
                                    {child.label}
                                  </div>
                                  {child.description ? (
                                    <div className="mt-1 text-sm leading-6 text-[var(--muted)]">
                                      {child.description}
                                    </div>
                                  ) : null}
                                </div>
                              </div>
                            </Link>
                          );
                        })()
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            ))}
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <a
              href={siteSettings.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-[var(--navy-deep)] shadow-sm shadow-slate-900/5 transition hover:-translate-y-0.5 hover:border-blue-300 hover:bg-[var(--surface-accent)]"
            >
              <Phone className="h-4 w-4" />
              Call Us
            </a>
            <ButtonLink href="/service-center" variant="secondary">
              Service Center
            </ButtonLink>
            <ButtonLink href="/quotes">Get a Quote</ButtonLink>
          </div>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex rounded-2xl border border-slate-200 p-3 text-[var(--navy)] lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open ? (
          <div className="border-t border-slate-200 bg-white lg:hidden">
            <div className="container-shell grid gap-3 py-5">
              <a
                href={siteSettings.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-[var(--surface-accent)] px-4 py-3 text-sm font-semibold text-[var(--navy-deep)]"
              >
                <Phone className="h-4 w-4" />
                Call the Office
              </a>
              {navigation.map((item) => (
                <div key={item.href} className="rounded-[1.5rem] border border-slate-200 p-4">
                  <Link
                    href={item.href}
                    className="text-base font-semibold text-[var(--navy-deep)]"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children ? (
                    <div className="mt-3 grid gap-2">
                      {item.children.map((child) => (
                        (() => {
                          const Icon = getChildIcon(item.href, child.href);

                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setOpen(false)}
                              className="rounded-2xl bg-slate-50 px-3 py-3 text-sm text-[var(--muted)]"
                            >
                              <div className="flex items-center gap-3">
                                {Icon ? (
                                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white text-blue-700">
                                    <Icon className="h-4 w-4" />
                                  </div>
                                ) : null}
                                <span>{child.label}</span>
                              </div>
                            </Link>
                          );
                        })()
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
              <ButtonLink href="/quotes">Get a Quote</ButtonLink>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
