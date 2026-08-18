import { useEffect, useState } from "react";
import { cn } from "../utils/cn";

const links = [
  { href: "#overview", label: "Overview" },
  { href: "#opportunities", label: "Sectors" },
  { href: "#problems", label: "Bugs" },
  { href: "#mindset", label: "Mindset" },
  { href: "#pricing", label: "Pricing" },
  { href: "#outreach", label: "Playbook" },
  { href: "#scripts", label: "Scripts" },
  { href: "#action-plan", label: "Action Plan" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b backdrop-blur transition",
        scrolled ? "border-white/10 bg-slate-950/90" : "border-transparent bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="#overview" className="flex items-center gap-2 text-sm font-bold text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500 text-base font-extrabold text-slate-950">
            ৳
          </span>
          <span className="hidden sm:inline">BD Web Sales Playbook</span>
        </a>
        <div className="flex items-center gap-1 overflow-x-auto">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="whitespace-nowrap rounded-md px-2.5 py-1.5 text-xs font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
