import { createFileRoute, Link } from "@tanstack/react-router";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PageHero, Section, SectionHeading } from "@/components/site/Section";
import { PlaceholderMedia } from "@/components/site/Placeholder";
import { Reveal } from "@/components/site/Reveal";
import { ArrowRight, Boxes, Factory, PackageCheck, SearchCheck, ShieldCheck, Truck } from "lucide-react";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions | HYPER FASHION BASE LLC" },
      {
        name: "description",
        content:
          "Explore OEM manufacturing, sourcing, wholesale and logistics solutions from HYPER FASHION BASE LLC.",
      },
    ],
  }),
  component: SolutionsPage,
});

const services = [
  {
    icon: Factory,
    title: "OEM Manufacturing",
    text: "Private label and OEM production support for buyers who need tailored product development, branding and packaging execution.",
  },
  {
    icon: SearchCheck,
    title: "Custom Product Development",
    text: "Material selection, sample review and product refinement for projects requiring specific commercial positioning.",
  },
  {
    icon: Boxes,
    title: "Wholesale Supply",
    text: "Ready-to-source product programs for distributors, importers and resellers seeking stable commercial supply.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Control",
    text: "Structured product review and inspection coordination to improve quality consistency before shipment.",
  },
  {
    icon: Truck,
    title: "Global Logistics Support",
    text: "Export coordination, packaging planning and shipment preparation for international deliveries.",
  },
  {
    icon: PackageCheck,
    title: "Business Sourcing Service",
    text: "Integrated sourcing support combining category knowledge, supplier screening and quotation preparation.",
  },
];

function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Business Solutions"
        title="Practical Supply Services For Global Buyers"
        description="We support business customers with sourcing, manufacturing coordination, quality management and international delivery planning."
      />

      <Section>
        <SectionHeading
          eyebrow="What We Offer"
          title="End-To-End B2B Support"
          description="Choose a sourcing model that fits your product requirements, budget and market positioning."
          align="center"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 70}>
              <article className="card-premium h-full p-8">
                <div className="bg-primary text-accent flex size-12 items-center justify-center rounded-lg">
                  <service.icon className="size-6" />
                </div>
                <h3 className="mt-6 text-lg font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal className="zoom-media aspect-[5/4] overflow-hidden rounded-2xl shadow-card">
            <img
              src="/images/solution.png"
              alt="Solutions overview"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="How We Work"
              title="Flexible Support Across Different Business Models"
              description="Our team can support standardized wholesale programs as well as custom projects that require specification review and production follow-up."
            />
            <div className="mt-8 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                For fashion projects, we can support private label production, material planning, fit review
                and packaging options. For technology products, we focus on dependable sourcing, commercial packaging
                and practical distributor-ready supply.
              </p>
              <p>
                We do not position ourselves as a retail seller. Our website and process are built around B2B needs,
                especially larger inquiries, repeat ordering and supply-chain continuity.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          title="Common Buyer Questions"
          description="Key information often requested before quotation or order confirmation."
          align="center"
        />
        <Reveal className="mx-auto mt-12 max-w-4xl">
          <div className="card-premium p-4 md:p-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Do you support OEM or private label orders?</AccordionTrigger>
                <AccordionContent>
                  Yes. We support OEM / ODM development depending on the product category, quantity requirements
                  and branding scope of the project.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Can you handle both fashion and technology products?</AccordionTrigger>
                <AccordionContent>
                  Yes. Our catalogue covers both fashion apparel and technology products. We can also support
                  mixed sourcing inquiries when buyers need multiple categories.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>How do you manage quality control?</AccordionTrigger>
                <AccordionContent>
                  We coordinate specification checks, sample confirmation and pre-shipment review based on the
                  product type and the buyer's requirements.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Do you work with importers and distributors?</AccordionTrigger>
                <AccordionContent>
                  Yes. Our target customers include importers, distributors, resellers, retail companies and
                  corporate procurement teams.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </Reveal>
      </Section>

      <Section tone="navy">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Ready To Start"
              title="Tell Us What You Need To Source"
              description="Send your target product, quantity and destination market. We can recommend a suitable supply path and quotation structure."
              invert
            />
          </div>
          <div className="flex flex-wrap gap-4 lg:justify-end">
            <Link to="/products" className="btn-base btn-outline-light">
              Browse Products
            </Link>
            <Link to="/contact" className="btn-base btn-gold">
              Contact Our Team <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
