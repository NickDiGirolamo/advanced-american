"use client";

import { useState } from "react";
import type { CompanyEntry } from "@/lib/content";

function LogoTile({ company }: { company: CompanyEntry }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="rounded-[1.5rem] border border-slate-200 bg-white/92 p-4 shadow-sm shadow-slate-900/5">
      <div className="relative flex min-h-20 items-center justify-center overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 px-3 py-4">
        {!failed ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={company.logoUrl ?? `https://logo.clearbit.com/${company.domain}`}
            alt={`${company.name} logo`}
            className="relative z-10 max-h-12 w-auto max-w-[82%] object-contain"
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={() => setFailed(true)}
          />
        ) : (
          <div className="h-10 w-full rounded-xl bg-white/80" />
        )}
      </div>
      <p className="mt-3 text-center text-sm font-medium text-[var(--navy)]">
        {company.name}
      </p>
    </div>
  );
}

export function CompanyLogoGrid({
  companies,
  limit,
}: {
  companies: CompanyEntry[];
  limit?: number;
}) {
  const items = typeof limit === "number" ? companies.slice(0, limit) : companies;

  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
      {items.map((company) => (
        <LogoTile key={company.name} company={company} />
      ))}
    </div>
  );
}
