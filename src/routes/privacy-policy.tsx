import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | HYPER FASHION BASE LLC" },
      { name: "description", content: "Review how HYPER FASHION BASE LLC handles basic business inquiry data and website communication." },
    ],
  }),
  component: PolicyPage,
});

function PolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal Information"
        title="Privacy Policy"
        description="Review how HYPER FASHION BASE LLC handles basic business inquiry data and website communication."
      />
      <Section>
        <div className="grid gap-6">
            <Reveal delay={0} className="card-premium p-7">
              <h2 className="text-xl font-semibold">Information We Collect</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">We may collect business contact information such as company name, contact person, email address, phone number, country and inquiry details when you voluntarily submit a form or contact us directly.</p>
            </Reveal>
            <Reveal delay={70} className="card-premium p-7">
              <h2 className="text-xl font-semibold">How We Use Information</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">The information submitted to us is used to respond to inquiries, prepare quotations, discuss product options and maintain business communication related to wholesale supply or sourcing support.</p>
            </Reveal>
            <Reveal delay={140} className="card-premium p-7">
              <h2 className="text-xl font-semibold">Data Protection</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">We take reasonable steps to protect submitted business information and limit access to relevant personnel involved in quotation, sourcing or customer communication activities.</p>
            </Reveal>
            <Reveal delay={210} className="card-premium p-7">
              <h2 className="text-xl font-semibold">Third-Party Sharing</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">We do not sell submitted inquiry information. Information may be shared with relevant supply-chain parties only when necessary to evaluate product availability, specifications or commercial feasibility.</p>
            </Reveal>
            <Reveal delay={280} className="card-premium p-7">
              <h2 className="text-xl font-semibold">Updates To This Policy</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">This website content may be updated from time to time to reflect operational changes, legal updates or improved communication practices.</p>
            </Reveal>
        </div>
      </Section>
    </>
  );
}
