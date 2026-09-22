import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/shipping-policy")({
  head: () => ({
    meta: [
      { title: "Shipping Policy | HYPER FASHION BASE LLC" },
      { name: "description", content: "General guidance on shipping coordination and international order handling." },
    ],
  }),
  component: PolicyPage,
});

function PolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Operational Information"
        title="Shipping Policy"
        description="General guidance on shipping coordination and international order handling."
      />
      <Section>
        <div className="grid gap-6">
            <Reveal delay={0} className="card-premium p-7">
              <h2 className="text-xl font-semibold">Shipping Scope</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">We support international B2B shipping coordination for wholesale orders. Shipping methods may include express, air freight, sea freight or consolidated cargo depending on product type and volume.</p>
            </Reveal>
            <Reveal delay={70} className="card-premium p-7">
              <h2 className="text-xl font-semibold">Lead Time</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Production lead time and shipping lead time depend on the item, quantity, packaging requirements and destination market. Estimated schedules are normally confirmed during quotation or order review.</p>
            </Reveal>
            <Reveal delay={140} className="card-premium p-7">
              <h2 className="text-xl font-semibold">Documentation</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Commercial invoices, packing details and shipment-related documents can be prepared in accordance with the agreed transaction structure and the shipping method used.</p>
            </Reveal>
            <Reveal delay={210} className="card-premium p-7">
              <h2 className="text-xl font-semibold">Freight Coordination</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Where needed, we can coordinate with freight partners or work alongside the buyer's nominated forwarder to support timely shipment processing.</p>
            </Reveal>
            <Reveal delay={280} className="card-premium p-7">
              <h2 className="text-xl font-semibold">Delivery Responsibility</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Final delivery terms, incoterms and risk transfer arrangements are determined by the applicable commercial agreement between the parties.</p>
            </Reveal>
        </div>
      </Section>
    </>
  );
}
