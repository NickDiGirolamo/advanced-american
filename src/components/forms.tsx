"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { personalProducts, serviceRequests } from "@/lib/content";
import { cn } from "@/lib/utils";

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-2 text-sm font-medium text-[var(--navy)]">
      <span>{label}</span>
      {children}
    </label>
  );
}

function inputClassName() {
  return "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-100";
}

export function QuoteForm({
  compact = false,
  preselectedType,
  title = "Request a quote",
  description = "Tell us what you need and our team will follow up with personalized next steps.",
}: {
  compact?: boolean;
  preselectedType?: string;
  title?: string;
  description?: string;
}) {
  const [submitted, setSubmitted] = useState(false);
  const insuranceTypes = useMemo(
    () => [
      "Business Insurance",
      ...personalProducts.map((product) => product.shortName),
      "Other Personal Coverage",
    ],
    [],
  );

  if (submitted) {
    return (
      <div className="card-surface rounded-[1.75rem] p-6">
        <div className="flex items-start gap-4">
          <CheckCircle2 className="mt-1 h-6 w-6 text-emerald-600" />
          <div>
            <h3 className="text-xl font-semibold text-[var(--navy-deep)]">
              Quote request received
            </h3>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
              We will review your request and reach out using your preferred contact details.
              Backend delivery is ready to connect to your future form handler.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card-surface rounded-[1.75rem] p-6 sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl font-semibold text-[var(--navy-deep)]">{title}</h3>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--muted)]">{description}</p>
        </div>
        <div className="hidden rounded-full bg-blue-50 p-3 text-blue-600 sm:block">
          <ShieldCheck className="h-5 w-5" />
        </div>
      </div>
      <form
        className={cn("mt-6 grid gap-4", compact ? "md:grid-cols-2" : "md:grid-cols-2")}
        onSubmit={(event) => {
          event.preventDefault();
          setSubmitted(true);
        }}
      >
        <Field label="Full name">
          <input required className={inputClassName()} placeholder="Jane Smith" />
        </Field>
        <Field label="Phone">
          <input required type="tel" className={inputClassName()} placeholder="(203) 555-0123" />
        </Field>
        <Field label="Email">
          <input required type="email" className={inputClassName()} placeholder="jane@example.com" />
        </Field>
        <Field label="Insurance type">
          <select defaultValue={preselectedType} className={inputClassName()}>
            <option value="">Select coverage</option>
            {insuranceTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Best time to contact">
          <input className={inputClassName()} placeholder="Morning, afternoon, or evening" />
        </Field>
        <Field label="Spam protection placeholder">
          <input className={inputClassName()} placeholder="Future captcha / server validation hook" />
        </Field>
        <Field label="Notes">
          <textarea
            className={cn(inputClassName(), "min-h-28")}
            placeholder="Tell us about your current coverage, timing, or any special details."
          />
        </Field>
        <div className="flex items-end">
          <button
            type="submit"
            className="w-full rounded-2xl bg-[var(--navy)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--navy-deep)]"
          >
            Submit quote request
          </button>
        </div>
      </form>
    </div>
  );
}

export function ServiceRequestForm({ requestSlug }: { requestSlug: string }) {
  const request = serviceRequests.find((item) => item.slug === requestSlug);
  const [submitted, setSubmitted] = useState(false);

  if (!request) {
    return null;
  }

  if (submitted) {
    return (
      <div className="card-surface rounded-[1.75rem] p-6">
        <h3 className="text-xl font-semibold text-[var(--navy-deep)]">Request received</h3>
        <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
          We have captured your {request.name.toLowerCase()} request. A team member will review the details and follow up if anything else is needed.
        </p>
      </div>
    );
  }

  return (
    <div className="card-surface rounded-[1.75rem] p-6 sm:p-7">
      <h3 className="text-2xl font-semibold text-[var(--navy-deep)]">{request.name}</h3>
      <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{request.guidance}</p>
      <form
        className="mt-6 grid gap-4 md:grid-cols-2"
        onSubmit={(event) => {
          event.preventDefault();
          setSubmitted(true);
        }}
      >
        <Field label="Name">
          <input required className={inputClassName()} placeholder="Policyholder name" />
        </Field>
        <Field label="Email">
          <input required type="email" className={inputClassName()} placeholder="name@example.com" />
        </Field>
        <Field label="Phone">
          <input required type="tel" className={inputClassName()} placeholder="Best callback number" />
        </Field>
        {request.fields.includes("policyNumber") ? (
          <Field label="Policy number">
            <input className={inputClassName()} placeholder="If available" />
          </Field>
        ) : null}
        {request.fields.includes("effectiveDate") ? (
          <Field label="Requested effective date">
            <input type="date" className={inputClassName()} />
          </Field>
        ) : null}
        {request.fields.includes("vehicleInfo") ? (
          <Field label="Vehicle details">
            <textarea className={cn(inputClassName(), "min-h-28")} placeholder="Year, make, model, VIN, purchase date, lienholder, and any other details." />
          </Field>
        ) : null}
        {request.fields.includes("driverInfo") ? (
          <Field label="Driver details">
            <textarea className={cn(inputClassName(), "min-h-28")} placeholder="Driver name, date of birth, license status, relationship to household, and any relevant notes." />
          </Field>
        ) : null}
        {request.fields.includes("businessName") ? (
          <Field label="Business or certificate holder">
            <input className={inputClassName()} placeholder="Company or certificate holder name" />
          </Field>
        ) : null}
        {request.fields.includes("contactMethod") ? (
          <Field label="Preferred contact method">
            <select className={inputClassName()} defaultValue="email">
              <option value="email">Email</option>
              <option value="phone">Phone</option>
              <option value="text">Text</option>
            </select>
          </Field>
        ) : null}
        {request.fields.includes("notes") ? (
          <Field label="Request details">
            <textarea className={cn(inputClassName(), "min-h-32")} placeholder="Share any instructions, deadlines, certificate wording, or policy details that will help us move quickly." />
          </Field>
        ) : null}
        <div className="flex items-end">
          <button
            type="submit"
            className="w-full rounded-2xl bg-[var(--navy)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--navy-deep)]"
          >
            Send request
          </button>
        </div>
      </form>
    </div>
  );
}

export function ContactForm({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="card-surface rounded-[1.75rem] p-6 sm:p-7">
      {submitted ? (
        <>
          <h3 className="text-2xl font-semibold text-[var(--navy-deep)]">Message sent</h3>
          <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
            Thanks for reaching out. This form is ready to connect to a backend endpoint later, and the UI already supports a polished success state.
          </p>
        </>
      ) : (
        <>
          <h3 className="text-2xl font-semibold text-[var(--navy-deep)]">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{description}</p>
          <form
            className="mt-6 grid gap-4"
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
            }}
          >
            <Field label="Name">
              <input required className={inputClassName()} placeholder="Your name" />
            </Field>
            <Field label="Email">
              <input required type="email" className={inputClassName()} placeholder="you@example.com" />
            </Field>
            <Field label="Phone">
              <input type="tel" className={inputClassName()} placeholder="Optional" />
            </Field>
            <Field label="How can we help?">
              <textarea className={cn(inputClassName(), "min-h-32")} placeholder="Share what you need, and we will guide you to the right next step." />
            </Field>
            <button
              type="submit"
              className="rounded-2xl bg-[var(--navy)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--navy-deep)]"
            >
              Send message
            </button>
          </form>
        </>
      )}
    </div>
  );
}
