import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

const pages = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/solutions", label: "Solutions" },
  { to: "/contact", label: "Contact" },
] as const;

const policies = [
  { to: "/privacy-policy", label: "Privacy Policy" },
  { to: "/terms", label: "Terms & Conditions" },
  { to: "/shipping-policy", label: "Shipping Policy" },
  { to: "/return-policy", label: "Return Policy" },
] as const;

export function Footer() {
  return (
    <footer className="gradient-navy text-white/70">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="gradient-gold text-accent-foreground flex size-10 items-center justify-center rounded-md text-sm font-bold">
              HF
            </span>
            <span className="text-sm font-bold tracking-[0.12em] text-white">
              HYPER FASHION BASE LLC
            </span>
          </div>
          <p className="mt-5 text-sm leading-relaxed">
            An international B2B supplier and trading company delivering fashion apparel, lifestyle
            products and consumer technology to importers, distributors and corporate buyers
            worldwide.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-[0.18em] text-white uppercase">Company</h4>
          <span className="gold-rule mt-4" />
          <ul className="mt-5 space-y-3 text-sm">
            {pages.map((p) => (
              <li key={p.to}>
                <Link to={p.to} className="hover:text-accent transition-colors">
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-[0.18em] text-white uppercase">Policies</h4>
          <span className="gold-rule mt-4" />
          <ul className="mt-5 space-y-3 text-sm">
            {policies.map((p) => (
              <li key={p.to}>
                <Link to={p.to} className="hover:text-accent transition-colors">
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-[0.18em] text-white uppercase">Contact</h4>
          <span className="gold-rule mt-4" />
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="text-accent mt-0.5 size-4 shrink-0" />
              <span>
                5 Fern Oak Ct,
                <br />
                Mansfield, TX 76063,
                <br />
                United States of America
              </span>
            </li>
            <li className="flex gap-3">
              <Mail className="text-accent mt-0.5 size-4 shrink-0" />
              <a href="mailto:payment@hyperagencys.com" className="hover:text-accent">
                payment@hyperagencys.com
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="text-accent mt-0.5 size-4 shrink-0" />
              <a href="tel:+17706094444" className="hover:text-accent">
                +1-7706094444
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs md:flex-row">
          <span>
            &copy; {new Date().getFullYear()} HYPER FASHION BASE LLC. All rights reserved.
          </span>
          <span>Registered in Texas, United States of America</span>
        </div>
      </div>
    </footer>
  );
}
