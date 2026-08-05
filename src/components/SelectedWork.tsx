import { Container } from "./Container";
import { Section } from "./Section";
import { WorkRow } from "./WorkRow";
import { DeliveryModelPair } from "./diagrams/DeliveryModelPair";

export function SelectedWork() {
  return (
    <Section id="selected-work">
      <Container>
        <p className="text-eyebrow text-[var(--color-primary)] mb-4">
          Selected work
        </p>
        <h2 className="text-h1 text-[var(--color-foreground)] mb-16 md:mb-24">
          Recent projects
        </h2>
        {/* Image side alternates down the section. Inserting the leadership
            study at position one flipped `reverse` on all four below it. */}
        <div className="space-y-24 md:space-y-32">
          {/* The only internal entry, and the only one whose visual is
              rendered rather than exported — see ConvergenceMark. */}
          <WorkRow
            visual={<DeliveryModelPair />}
            eyebrow="Leadership case study"
            title="The bottleneck was us"
            description="Repositioning Product Design for agentic engineering"
            linkText="Read the case study"
            linkAriaLabel="Read the leadership case study"
            linkHref="/work/repositioning-product-design"
            revealIndex={0}
          />
          <WorkRow
            imageSrc="/work/salli.webp"
            imageSrcDark="/work/salli-dark.webp"
            imageAlt="Salli — agentic AI workforce management interface"
            eyebrow="Case study 01"
            title="Reimagining Workforce Management Through Agentic AI"
            description="Designing a proactive intelligence layer to guide frontline decision-making at scale"
            linkText="Read the case study"
            linkAriaLabel="Read the Salli case study"
            linkHref="https://portfolio.edwincw.com/slide/2"
            linkExternal
            reverse
            revealIndex={1}
          />
          <WorkRow
            imageSrc="/work/seedbank-design.webp"
            imageSrcDark="/work/seedbank-design-dark.webp"
            imageAlt="seedbank.design — a cloneable HTML + CSS design system for communities"
            eyebrow="Design System Project"
            title="seedbank.design – A Design System for Communities."
            description="A cloneable HTML + CSS design system for self-organising groups of all kinds. Built to be adapted, not followed."
            linkText="Visit seedbank.design"
            linkAriaLabel="Visit seedbank.design"
            linkHref="https://seedbank.design/"
            linkExternal
            revealIndex={2}
          />
          <WorkRow
            imageSrc="/work/rewards-recognition.webp"
            imageSrcDark="/work/rewards-recognition-dark.webp"
            imageAlt="Rewards & Recognition — employee engagement platform"
            eyebrow="Case study 02"
            title="Designing Employee Engagement as a Platform Growth Lever"
            description="How Rewards & Recognition became a platform growth lever – and a commercial differentiator"
            linkText="Read the case study"
            linkAriaLabel="Read the Rewards & Recognition case study"
            linkHref="https://portfolio.edwincw.com/slide/14"
            linkExternal
            reverse
            revealIndex={3}
          />
          <WorkRow
            imageSrc="/work/fluxux.webp"
            imageSrcDark="/work/fluxux-dark.webp"
            imageAlt="FluxUX — AI-powered experiment generator"
            eyebrow="Product innovation project"
            title="FluxUX: An AI-powered experiment generator for UX practitioners"
            description="An early experiment in prompt-driven development"
            linkText="Explore the app"
            linkAriaLabel="Explore the FluxUX app"
            linkHref="https://fluxux.vercel.app/"
            linkExternal
            revealIndex={4}
          />
        </div>
      </Container>
    </Section>
  );
}
