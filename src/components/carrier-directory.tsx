"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ExternalLink, Phone, Search } from "lucide-react";
import type { CarrierEntry } from "@/lib/content";

export function CarrierDirectory({
  carriers,
  mode,
}: {
  carriers: CarrierEntry[];
  mode: "claims" | "payments";
}) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(
    () =>
      carriers.filter((carrier) =>
        carrier.name.toLowerCase().includes(query.toLowerCase()),
      ),
    [carriers, query],
  );

  return (
    <div className="space-y-5">
      <label className="card-surface flex items-center gap-3 rounded-full px-5 py-3">
        <Search className="h-4 w-4 text-[var(--muted)]" />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={`Search carriers for ${mode} help`}
          className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
        />
      </label>
      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((carrier) => {
          const phone = mode === "claims" ? carrier.phoneClaims : carrier.phonePayments;
          const url = mode === "claims" ? carrier.claimsUrl : carrier.paymentUrl;

          return (
            <div key={carrier.slug} className="card-surface rounded-[1.5rem] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                {carrier.category}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-[var(--navy-deep)]">
                {carrier.name}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{carrier.notes}</p>
              <div className="mt-5 space-y-3 text-sm">
                {phone ? (
                  <a
                    href={`tel:${phone.replace(/[^0-9]/g, "")}`}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-[var(--navy)] transition hover:border-blue-200 hover:bg-blue-50"
                  >
                    <Phone className="h-4 w-4 text-blue-600" />
                    <span>{phone}</span>
                  </a>
                ) : null}
                {url ? (
                  <Link
                    href={url}
                    className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 text-[var(--navy)] transition hover:border-blue-200 hover:bg-blue-50"
                  >
                    <span>{mode === "claims" ? "Visit claims portal" : "Visit payment portal"}</span>
                    <ExternalLink className="h-4 w-4 text-blue-600" />
                  </Link>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
