import { createFileRoute } from "@tanstack/react-router";
import { Clock3, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { PageHero, Section, SectionHeading } from "@/components/site/Section";
import { PlaceholderMedia } from "@/components/site/Placeholder";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | HYPER FASHION BASE LLC" },
      {
        name: "description",
        content:
          "Contact HYPER FASHION BASE LLC for product inquiries, quotation requests and B2B sourcing support.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Request A Quote Or Send Us Your Product Requirements"
        description="Share your target items, quantity and destination market. We will respond with suitable sourcing information and quotation guidance."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            <Reveal>
              <SectionHeading
                eyebrow="Company Information"
                title="HYPER FASHION BASE LLC"
                description="An international B2B supplier focused on wholesale fashion and technology products."
              />
            </Reveal>

            <Reveal delay={80} className="card-premium p-6">
              <div className="space-y-5 text-sm">
                <div className="flex gap-3">
                  <MapPin className="text-accent mt-0.5 size-5 shrink-0" />
                  <div>
                    <div className="font-semibold">Address</div>
                    <div className="mt-1 text-muted-foreground">
                      5 FERN OAK CT,<br />
                      MANSFIELD, TX 76063,<br />
                      United States of America
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Mail className="text-accent mt-0.5 size-5 shrink-0" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <a href="mailto:payment@hyperagencys.com" className="mt-1 inline-block text-muted-foreground hover:text-accent">
                      payment@hyperagencys.com
                    </a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Phone className="text-accent mt-0.5 size-5 shrink-0" />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <a href="tel:+17706094444" className="mt-1 inline-block text-muted-foreground hover:text-accent">
                      +1-7706094444
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={140} className="card-premium p-6">
              <div className="space-y-4 text-sm">
                <div className="flex gap-3">
                  <Clock3 className="text-accent mt-0.5 size-5 shrink-0" />
                  <div>
                    <div className="font-semibold">Business Response</div>
                    <div className="mt-1 text-muted-foreground">
                      Quotations and general inquiries are typically responded to within 1–2 business days.
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <ShieldCheck className="text-accent mt-0.5 size-5 shrink-0" />
                  <div>
                    <div className="font-semibold">Inquiry Scope</div>
                    <div className="mt-1 text-muted-foreground">
                      We support wholesale, distributor, OEM / ODM and sourcing inquiries.
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal
              delay={180}
              className="overflow-hidden rounded-2xl border border-border shadow-card"
            >
              <iframe
                title="HYPER FASHION BASE LLC Location"
                src="https://www.google.com/maps?q=5+FERN+OAK+CT,+MANSFIELD,+TX+76063&output=embed"
                className="h-80 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Reveal>
          </div>

          <Reveal delay={60} className="card-premium p-7 md:p-8">
            <SectionHeading
              eyebrow="Inquiry Form"
              title="Tell Us About Your Project"
              description="The more information you provide, the easier it is for us to suggest product options and quotation structure."
            />

            <form className="mt-8 grid gap-4 sm:grid-cols-2">
              <input className="border-border h-12 rounded-md border bg-background px-4 text-sm outline-none focus:ring-2 focus:ring-accent" placeholder="Company Name" />
              <input className="border-border h-12 rounded-md border bg-background px-4 text-sm outline-none focus:ring-2 focus:ring-accent" placeholder="Contact Person" />
              <input className="border-border h-12 rounded-md border bg-background px-4 text-sm outline-none focus:ring-2 focus:ring-accent" placeholder="Email Address" />
              <input className="border-border h-12 rounded-md border bg-background px-4 text-sm outline-none focus:ring-2 focus:ring-accent" placeholder="Phone Number" />
              <input className="border-border h-12 rounded-md border bg-background px-4 text-sm outline-none focus:ring-2 focus:ring-accent sm:col-span-2" placeholder="Product Interest" />
              <input className="border-border h-12 rounded-md border bg-background px-4 text-sm outline-none focus:ring-2 focus:ring-accent" placeholder="Quantity Requirement" />
              <input className="border-border h-12 rounded-md border bg-background px-4 text-sm outline-none focus:ring-2 focus:ring-accent" placeholder="Destination Country" />
              <textarea className="border-border min-h-36 rounded-md border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent sm:col-span-2" placeholder="Please include target specifications, product category, branding needs or packaging details..." />
              <div className="sm:col-span-2">
                <button type="button" className="btn-base btn-gold">Request Quote</button>
              </div>
            </form>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
