import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  CircuitBoard,
  Cpu,
  Factory,
  Globe2,
  Handshake,
  PackageSearch,
  ShieldCheck,
  Ship,
  Shirt,
  Truck,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";
import { PlaceholderMedia } from "@/components/site/Placeholder";
import { Counter } from "@/components/site/Counter";
import { products } from "@/data/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HYPER FASHION BASE LLC | Global Fashion & Technology Supplier" },
      {
        name: "description",
        content:
          "Reliable wholesale sourcing solutions for apparel, consumer electronics and customized business requirements worldwide.",
      },
      {
        property: "og:title",
        content: "HYPER FASHION BASE LLC | Global Fashion & Technology Supplier",
      },
      {
        property: "og:description",
        content:
          "Wholesale sourcing, OEM & ODM manufacturing and global logistics support for importers and distributors.",
      },
    ],
  }),
  component: HomePage,
});

const advantages = [
  {
    icon: Globe2,
    title: "Global Supply Network",
    text: "Access to international suppliers and business partners.",
  },
  {
    icon: Factory,
    title: "OEM & ODM Capability",
    text: "Customized product development and manufacturing support.",
  },
  {
    icon: Boxes,
    title: "Wholesale Pricing",
    text: "Competitive solutions for bulk business orders.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Management",
    text: "Reliable inspection and quality control processes.",
  },
  {
    icon: Ship,
    title: "Global Logistics",
    text: "Support for international shipping and supply chain coordination.",
  },
  {
    icon: CircuitBoard,
    title: "Technology Solutions",
    text: "Modern consumer electronics and digital accessories.",
  },
];

const stats = [
  { value: "B2B", label: "Business Model" },
  { value: "OEM", label: "Custom Manufacturing Support" },
  { value: "Global", label: "Sourcing Capability" },
  { value: "End-to-End", label: "Supply Solutions" },
];

const process = [
  { step: "01", title: "Product Research", text: "Market analysis, specification and costing." },
  { step: "02", title: "Supplier Matching", text: "Vetted factory selection and sampling." },
  { step: "03", title: "Quality Inspection", text: "In-line and pre-shipment inspection." },
  { step: "04", title: "Global Delivery", text: "Consolidation, documentation and shipping." },
];

function HomePage() {
  const featured = products.slice(0, 6);

  return (
    <>
      <section className="gradient-navy relative overflow-hidden pt-36 pb-24 text-white md:pt-48 md:pb-32">
        <div className="bg-accent/15 absolute -top-40 -right-32 size-[30rem] rounded-full blur-3xl" />
        <div className="absolute -bottom-48 -left-24 size-[28rem] rounded-full bg-white/5 blur-3xl" />
        <div className="container-page relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <span className="eyebrow">International B2B Supplier &middot; Est. in the USA</span>
            <h1 className="mt-5 text-4xl leading-[1.08] font-bold tracking-tight md:text-6xl">
              Global Fashion &amp; <span className="text-gold">Technology</span> Supplier
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
              Reliable wholesale sourcing solutions for apparel, consumer electronics and customized
              business requirements worldwide.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-base btn-gold">
                Request Quote <ArrowRight className="size-4" />
              </Link>
              <Link to="/products" className="btn-base btn-outline-light">
                Explore Products
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 text-sm text-white/60">
              <span className="inline-flex items-center gap-2">
                <BadgeCheck className="text-accent size-4" /> Verified US-registered company
              </span>
              <span className="inline-flex items-center gap-2">
                <Handshake className="text-accent size-4" /> Long-term supply partnerships
              </span>
            </div>
          </Reveal>

          <Reveal delay={150} className="relative">
            <div className="zoom-media relative w-[90%] aspect-[15/9] overflow-hidden rounded-2xl border border-white/15 shadow-2xl">
              <img
                src="/images/hero.png"
                alt="HYPER FASHION BASE LLC corporate sourcing and global trade"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="animate-float absolute -top-6 -left-6 hidden rounded-xl border border-white/15 bg-white/10 p-4 backdrop-blur md:block">
              <Truck className="text-accent size-4" />
              <p className="mt-1 text-xs font-semibold tracking-wide text-white">Supply Chain</p>
            </div>
            <div
              className="animate-float absolute -right-4 bottom-10 hidden rounded-xl border border-white/15 bg-white/10 p-4 backdrop-blur md:block"
              style={{ animationDelay: "1.4s" }}
            >
              <Globe2 className="text-accent size-6" />
              <p className="mt-2 text-xs font-semibold tracking-wide text-white">Global Business</p>
            </div>
            <div
              className="animate-float absolute -bottom-8 left-10 hidden rounded-xl border border-white/15 bg-white/10 p-4 backdrop-blur md:block"
              style={{ animationDelay: "0.7s" }}
            >
              <Cpu className="text-accent size-6" />
              <p className="mt-2 text-xs font-semibold tracking-wide text-white">Technology</p>
            </div>
          </Reveal>
        </div>
      </section>

      <Section>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="zoom-media aspect-[5/4] overflow-hidden rounded-2xl shadow-card">
            <img
              src="/images/index.png"
              alt="Solutions overview"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Company Introduction"
              title="Your Trusted Global Sourcing Partner"
              description="HYPER FASHION BASE LLC provides reliable sourcing solutions for international businesses, combining fashion expertise, technology products and global supply capabilities."
            />
            <Reveal delay={120} className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Dedicated account management for every buyer",
                "Factory-direct pricing with transparent terms",
                "Pre-shipment inspection on every order",
                "Export documentation handled end to end",
              ].map((item) => (
                <div key={item} className="flex gap-3 text-sm">
                  <BadgeCheck className="text-accent mt-0.5 size-5 shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </Reveal>
            <Reveal delay={200} className="mt-9">
              <Link to="/about" className="btn-base btn-navy">
                About Our Company <ArrowRight className="size-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Built For International Business Buyers"
          description="Six core capabilities that make us a dependable supply partner for importers, distributors and retail chains."
          align="center"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <article className="card-premium h-full p-8">
                <span className="bg-primary text-accent flex size-12 items-center justify-center rounded-lg">
                  <item.icon className="size-6" />
                </span>
                <h3 className="text-foreground mt-6 text-lg font-semibold">{item.title}</h3>
                <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <section className="gradient-navy py-20">
        <div className="container-page grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100}>
              <Counter value={s.value} label={s.label} />
            </Reveal>
          ))}
        </div>
      </section>

      <Section>
        <SectionHeading
          eyebrow="Main Product Categories"
          title="Two Core Supply Divisions"
          description="From apparel programs to consumer technology, we manage sourcing across both categories under one commercial workflow."
          align="center"
        />
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {[
            {
              title: "FASHION APPAREL",
              image: "/images/fabric.png",
              items: ["T-Shirts", "Hoodies", "Jackets", "Sportswear", "Accessories"],
            },
            {
              title: "TECHNOLOGY PRODUCTS",
              image: "/images/tech.png",
              items: [
                  "Smart Devices",
                  "Computer Accessories",
                  "Mobile Accessories",
                  "Electronics",
                ],
              },
          ].map((cat, i) => (
            <Reveal key={cat.title} delay={i * 120}>
              <article className="card-premium zoom-media h-full overflow-hidden">
                <div className="h-84 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="h-full w-full object-contain bg-white transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-foreground text-xl font-bold tracking-[0.06em]">
                    {cat.title}
                  </h3>
                  <span className="gold-rule mt-4" />
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {cat.items.map((item) => (
                      <li key={item} className="text-muted-foreground flex items-center gap-2 text-sm">
                        <span className="bg-accent size-1.5 rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link to="/products" className="btn-base btn-outline-navy mt-8">
                    View Catalogue <ArrowRight className="size-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Featured Products"
          title="Selected Product Lines"
          description="A snapshot of current catalogue items requested by wholesale buyers."
          align="center"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((product, index) => (
            <Reveal key={product.slug} delay={(index % 6) * 60}>
              <article className="card-premium h-full overflow-hidden">
                <div className="h-56 overflow-hidden bg-background">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="h-full w-full object-contain transition-transform duration-500 hover:scale-105"
                    />
                  ) : (
                    <PlaceholderMedia
                      label={`${product.name} placeholder`}
                      icon={product.category === "Fashion" ? Shirt : Cpu}
                    />
                  )}
                </div>

                <div className="p-7">
                  <span className="eyebrow">{product.category}</span>

                  <h3 className="mt-3 text-xl font-semibold tracking-tight line-clamp-2">
                    {product.name}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                    {product.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <Link
                      to="/products/$slug"
                      params={{ slug: product.slug }}
                      className="btn-base btn-navy"
                    >
                      View Details
                    </Link>

                    <Link
                      to="/contact"
                      className="btn-base btn-outline-navy"
                    >
                      Request Quote
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Business Process"
          title="From Enquiry To Global Delivery"
          description="A structured four-stage workflow that keeps every order transparent and on schedule."
          align="center"
        />
        <div className="relative mt-16">
          <div className="via-accent/50 absolute top-8 right-0 left-0 hidden h-px bg-gradient-to-r from-transparent to-transparent lg:block" />
          <div className="grid gap-10 lg:grid-cols-4">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 140} className="relative text-center lg:text-left">
                <span className="gradient-gold text-accent-foreground relative z-10 inline-flex size-16 items-center justify-center rounded-full text-lg font-bold shadow-lg">
                  {p.step}
                </span>
                <h3 className="text-foreground mt-6 text-lg font-semibold">{p.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <section className="gradient-navy relative overflow-hidden py-20">
        <div className="bg-accent/15 absolute -top-24 left-1/3 size-80 rounded-full blur-3xl" />
        <div className="container-page relative flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
          <Reveal>
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-white md:text-4xl">
              Looking For A Reliable Business Supplier?
            </h2>
            <p className="mt-4 max-w-xl text-white/70">
              Share your specifications and target quantities — our sourcing team will respond with
              a detailed quotation.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <Link to="/contact" className="btn-base btn-gold text-base">
              Request A Quote <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
