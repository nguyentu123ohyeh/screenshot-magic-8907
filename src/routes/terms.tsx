import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | HYPER FASHION BASE LLC" },
      { name: "description", content: "Review the general terms governing use of this website and business communications with HYPER FASHION BASE LLC." },
    ],
  }),
  component: PolicyPage,
});

function PolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal Information"
        title="Terms & Conditions"
        description="Review the general terms governing use of this website and business communications with HYPER FASHION BASE LLC."
      />
      <Section>
        <div className="grid gap-6">
            <Reveal delay={0} className="card-premium p-7">
              <h2 className="text-xl font-semibold">General Use</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">This website is provided for general information about our B2B products, services and sourcing capabilities. Product availability, specifications and commercial terms may change without prior notice.</p>
            </Reveal>
            <Reveal delay={70} className="card-premium p-7">
              <h2 className="text-xl font-semibold">Quotations & Orders</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Any quotation, sample arrangement or order discussion is subject to separate confirmation, commercial review and mutually agreed transaction terms.</p>
            </Reveal>
            <Reveal delay={140} className="card-premium p-7">
              <h2 className="text-xl font-semibold">Product Information</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Descriptions, categories and placeholder visuals on this website are for presentation purposes. Final product details, specifications and packaging are subject to the specific quotation or order confirmation.</p>
            </Reveal>
            <Reveal delay={210} className="card-premium p-7">
              <h2 className="text-xl font-semibold">Intellectual Property</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Text, layout and branding elements on this website may not be copied or redistributed without permission, except where permitted by applicable law.</p>
            </Reveal>
            <Reveal delay={280} className="card-premium p-7">
              <h2 className="text-xl font-semibold">Limitation</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Use of this website does not by itself create a contractual relationship. Business transactions are formed only when expressly agreed in writing by both parties.</p>
            </Reveal>
        </div>
      </Section>
    </>
  );
}
