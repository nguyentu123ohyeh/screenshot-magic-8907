import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Mail, Phone, Globe2 } from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Products" },
  { to: "/solutions", label: "Solutions" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="gradient-navy hidden border-b border-white/10 text-white/70 md:block">
        <div className="container-page flex h-10 items-center justify-between text-xs">
          <span className="inline-flex items-center gap-2">
            <Globe2 className="text-accent size-3.5" />
            International B2B supplier &middot; Fashion, Technology & Global Sourcing &middot; Mansfield, Texas, USA
          </span>
          <div className="flex items-center gap-6">
            <a
              href="mailto:payment@hyperagencys.com"
              className="hover:text-accent inline-flex items-center gap-2 transition-colors"
            >
              <Mail className="size-3.5" /> payment@hyperagencys.com
            </a>
            <a
              href="tel:+17706094444"
              className="hover:text-accent inline-flex items-center gap-2 transition-colors"
            >
              <Phone className="size-3.5" /> +1-770-609-4444
            </a>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "transition-all duration-300",
          scrolled
            ? "bg-background/95 border-border border-b shadow-[0_10px_30px_-24px_rgba(7,26,51,0.9)] backdrop-blur"
            : "bg-primary/95 border-b border-white/10 backdrop-blur md:bg-transparent",
        )}
      >
        <div className="container-page flex h-18 items-center justify-between py-3">
          <Link to="/" className="group flex items-center gap-3">
            <span className="gradient-gold text-accent-foreground flex size-10 items-center justify-center rounded-md text-sm font-bold tracking-tight">
              HF
            </span>
            <span className="leading-tight">
              <span
                className={cn(
                  "block text-sm font-bold tracking-[0.12em] transition-colors",
                  scrolled ? "text-foreground" : "text-white",
                )}
              >
                HYPER FASHION BASE
              </span>
              <span className="text-gold block text-[10px] font-semibold tracking-[0.32em]">
                LLC &middot; USA
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className={cn(
                  "relative rounded-md px-4 py-2 text-sm font-medium transition-colors",
                  scrolled
                    ? "text-muted-foreground hover:text-foreground"
                    : "text-white/80 hover:text-white",
                )}
                activeProps={{
                  className: cn(
                    "after:bg-accent after:absolute after:bottom-0.5 after:left-4 after:h-0.5 after:w-[calc(100%-2rem)] after:rounded-full",
                    scrolled ? "text-foreground" : "text-white",
                  ),
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/contact" className="btn-base btn-gold hidden text-sm lg:inline-flex">
              Request Quote
            </Link>
            <button
              type="button"
              aria-label="Toggle navigation menu"
              onClick={() => setOpen((v) => !v)}
              className={cn(
                "flex size-10 items-center justify-center rounded-md border transition-colors lg:hidden",
                scrolled ? "border-border text-foreground" : "border-white/30 text-white",
              )}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "bg-background border-border overflow-hidden border-b shadow-lg transition-all duration-300 lg:hidden",
          open ? "max-h-[28rem] opacity-100" : "pointer-events-none max-h-0 opacity-0",
        )}
      >
        <nav className="container-page flex flex-col gap-1 py-4">
          {nav.map((item, i) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              style={{ transitionDelay: `${i * 40}ms` }}
              className="text-foreground hover:bg-surface rounded-md px-3 py-3 text-sm font-medium transition-colors"
              activeProps={{ className: "text-accent bg-surface" }}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/contact" className="btn-base btn-navy mt-2">
            Request Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
