import Link from "next/link";
import { CreditCard, FileText, Phone, ShieldAlert } from "lucide-react";

const actions = [
  { href: "/quotes", label: "Quote", icon: FileText },
  { href: "/claims", label: "Claim", icon: ShieldAlert },
  { href: "/payments", label: "Pay", icon: CreditCard },
  { href: "tel:2039491712", label: "Call", icon: Phone },
];

export function MobileDock() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/92 px-4 py-3 backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-4 gap-2">
        {actions.map((action) => {
          const Icon = action.icon;
          const content = (
            <>
              <Icon className="h-4 w-4" />
              <span className="text-[11px] font-medium">{action.label}</span>
            </>
          );

          return action.href.startsWith("tel:") ? (
            <a
              key={action.label}
              href={action.href}
              className="flex flex-col items-center gap-1 rounded-2xl bg-slate-50 px-3 py-2 text-[var(--navy)]"
            >
              {content}
            </a>
          ) : (
            <Link
              key={action.label}
              href={action.href}
              className="flex flex-col items-center gap-1 rounded-2xl bg-slate-50 px-3 py-2 text-[var(--navy)]"
            >
              {content}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
