import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { siteSettings } from "@/lib/content";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${siteSettings.name} | Modern Independent Insurance Support`,
    template: `%s | ${siteSettings.name}`,
  },
  description:
    "Premium independent insurance agency website for quotes, service requests, claims help, payments, coverage education, and local support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[var(--background)] font-sans text-slate-900 antialiased">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
