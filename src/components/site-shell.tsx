import { Footer } from "@/components/site-shell-footer";
import { Header } from "@/components/site-shell-header";
import { MobileDock } from "@/components/site-shell-mobile-dock";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pb-24 md:pb-0">{children}</main>
      <Footer />
      <MobileDock />
    </div>
  );
}
