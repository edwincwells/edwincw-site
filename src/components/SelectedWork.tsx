import { Container } from "./Container";
import { Section } from "./Section";
import { WorkRow } from "./WorkRow";
import { DeliveryModelRow } from "./diagrams/DeliveryModelRow";

export function SelectedWork() {
  return (
    <Section id="selected-work" className="scroll-mt-[80px]">
      <Container>
        <p className="text-eyebrow text-[var(--color-primary)] mb-4">
          Selected work
        </p>
        <h2 className="text-h1 text-[var(--color-foreground)] mb-16 md:mb-24">
          Recent projects
        </h2>
        {/* Image side alternates down the section, and `reverse` is written per
            row rather than derived from position — so every insertion or removal
            in the middle has to be repaired by hand. Twice now: inserting the
            leadership study at position one flipped it on all four below, and
            removing Rewards & Recognition from position three flipped it back on
            everything after. Renumber `revealIndex` contiguously at the same
            time; the two always move together. */}
        <div className="space-y-24 md:space-y-32">
          {/* Both case study rows link internally now. This one is still the
              only visual rendered rather than exported — see DeliveryModelRow. */}
          <WorkRow
            visual={<DeliveryModelRow />}
            eyebrow="Leadership case study"
            title="The bottleneck was us"
            description="Repositioning Product Design for agentic engineering"
            linkText="Read the case study"
            linkAriaLabel="Read the leadership case study"
            linkHref="/work/repositioning-product-design"
            revealIndex={0}
          />
          <WorkRow
            imageSrc="/work/salli-light.webp"
            imageSrcDark="/work/salli-dark.webp"
            imageAlt="Salli Focus open on a manager’s ranked to-do list, with the assistant’s reasoning shown."
            eyebrow="Product case study"
            title="Capability is not the product"
            description="Designing agentic AI around the moment a frontline manager decides what to do next"
            linkText="Read the case study"
            linkAriaLabel="Read the Salli case study"
            linkHref="/work/salli-agentic-ai"
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
            reverse
            revealIndex={3}
          />
        </div>
      </Container>
    </Section>
  );
}
