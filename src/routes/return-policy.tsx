import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/return-policy")({
  head: () => ({
    meta: [
      { title: "Return Policy | HYPER FASHION BASE LLC" },
      { name: "description", content: "General guidance on product issues, claims and post-shipment communication." },
    ],
  }),
  component: PolicyPage,
});

function PolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Operational Information"
        title="Return Policy"
        description="General guidance on product issues, claims and post-shipment communication."
      />
      <Section>
        <div className="grid gap-6">
            <Reveal delay={0} className="card-premium p-7">
              <h2 className="text-xl font-semibold">B2B Order Basis</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Our supply model is designed for business-to-business transactions. Returns are not treated the same as consumer retail purchases and are handled according to the specific commercial arrangement.</p>
            </Reveal>
            <Reveal delay={70} className="card-premium p-7">
              <h2 className="text-xl font-semibold">Product Concerns</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">If there is a concern relating to specifications, quality or shipment condition, buyers should contact us promptly with relevant photos, quantities and supporting details.</p>
            </Reveal>
            <Reveal delay={140} className="card-premium p-7">
              <h2 className="text-xl font-semibold">Review Process</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Claims are reviewed based on the confirmed specifications, shipment details and any applicable quality documentation or inspection records.</p>
            </Reveal>
            <Reveal delay={210} className="card-premium p-7">
              <h2 className="text-xl font-semibold">Resolution Options</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Where a valid issue is confirmed, the solution may include replacement planning, credit discussion, future order adjustment or another mutually agreed commercial remedy.</p>
            </Reveal>
            <Reveal delay={280} className="card-premium p-7">
              <h2 className="text-xl font-semibold">Communication</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">For the fastest support, please contact us with your company name, invoice or shipment reference and a clear description of the issue.</p>
            </Reveal>
        </div>
      </Section>
    </>
  );
}
