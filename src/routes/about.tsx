import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, Boxes, Factory, Globe2, Handshake, ShieldCheck, Sparkles, Truck } from "lucide-react";
import { PageHero, Section, SectionHeading } from "@/components/site/Section";
import { PlaceholderMedia } from "@/components/site/Placeholder";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | HYPER FASHION BASE LLC" },
      {
        name: "description",
        content:
          "Learn about HYPER FASHION BASE LLC, our sourcing capabilities, business values and supply support for global wholesale buyers.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: ShieldCheck,
    title: "Reliability",
    text: "We prioritize stable communication, consistent execution and dependable delivery planning.",
  },
  {
    icon: Sparkles,
    title: "Quality",
    text: "We focus on product consistency, materials control and inspection before shipment.",
  },
  {
    icon: Boxes,
    title: "Efficiency",
    text: "From sampling to order management, our process is designed to save buyers time and cost.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    text: "We value long-term relationships and support importers, distributors and corporate buyers.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A B2B Supply Partner Focused On Trust, Quality And Execution"
        description="HYPER FASHION BASE LLC is an international supplier serving global business buyers through fashion sourcing, technology product supply and practical wholesale solutions."
      />

      <Section>
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <Reveal className="zoom-media aspect-[5/4] overflow-hidden rounded-2xl shadow-card">
              <img
                src="/images/about.png"
                alt="Solutions overview"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </Reveal>
          <div>
            <SectionHeading
              eyebrow="Company Overview"
              title="Built For Real Business Purchasing Needs"
              description="We support buyers who need practical sourcing, scalable product programs and a supplier that understands quality standards, timelines and wholesale execution."
            />
            <Reveal delay={120} className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                HYPER FASHION BASE LLC is an international B2B supplier providing fashion apparel,
                consumer goods and technology solutions to importers, distributors, chain stores and
                corporate buyers.
              </p>
              <p>
                Our business model is centered on sourcing coordination, private label support, OEM / ODM
                development and efficient export supply. We help buyers simplify purchasing by combining
                product sourcing, production support, quality management and logistics coordination in one process.
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal className="card-premium p-8">
            <span className="eyebrow">Mission</span>
            <h2 className="mt-3 text-2xl font-bold">Deliver Reliable Sourcing Solutions</h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Our mission is to provide dependable product sourcing and wholesale support that helps
              businesses buy more efficiently, reduce supply risk and build consistent retail or distribution programs.
            </p>
          </Reveal>
          <Reveal delay={120} className="card-premium p-8">
            <span className="eyebrow">Vision</span>
            <h2 className="mt-3 text-2xl font-bold">Become A Trusted Global Business Partner</h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              We aim to become a trusted long-term partner for companies seeking a supplier that can
              support quality products, responsive service and scalable sourcing solutions.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Core Values"
          title="What Guides Our Work"
          description="Four operating principles that shape how we support our business customers."
          align="center"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={index * 90}>
              <article className="card-premium h-full p-8">
                <div className="bg-primary text-accent flex size-12 items-center justify-center rounded-lg">
                  <value.icon className="size-6" />
                </div>
                <h3 className="mt-6 text-lg font-semibold">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{value.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Supply Capability"
          title="End-To-End Business Support"
          description="We help buyers across the full purchasing cycle — from sourcing to shipment."
          align="center"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {[
            {
              icon: Factory,
              title: "Product Sourcing",
              text: "Supplier matching, cost analysis and tailored product recommendations based on project requirements.",
            },
            {
              icon: ShieldCheck,
              title: "Quality Control",
              text: "Sampling review, specification checks and pre-shipment inspections to improve consistency.",
            },
            {
              icon: Boxes,
              title: "Packaging Support",
              text: "Retail-ready packing options, export carton planning and basic branding customization.",
            },
            {
              icon: Truck,
              title: "International Logistics",
              text: "Shipment preparation, document support and coordination for global delivery requirements.",
            },
          ].map((item, index) => (
            <Reveal key={item.title} delay={index * 100}>
              <article className="card-premium flex h-full gap-5 p-8">
                <div className="bg-primary text-accent flex size-12 shrink-0 items-center justify-center rounded-lg">
                  <item.icon className="size-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="card-premium gradient-navy overflow-hidden p-10 text-white">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <span className="eyebrow">Next Step</span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
                Discuss Your Sourcing Requirements With Our Team
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/75">
                Whether you are developing a private label clothing line or sourcing consumer electronics
                for wholesale distribution, we are ready to support your project.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <Link to="/products" className="btn-base btn-outline-light">
                View Products
              </Link>
              <Link to="/contact" className="btn-base btn-gold">
                Request Quote <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
