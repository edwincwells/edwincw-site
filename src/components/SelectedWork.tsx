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
            in the middle has to be repaired by hand. Three times now: inserting
            the leadership study at position one flipped it on all four below,
            removing Rewards & Recognition from position three flipped it back
            on everything after, and inserting the employee app study at
            position three flipped seedbank and FluxUX again. Renumber
            `revealIndex` contiguously at the same time; the two always move
            together. */}
        <div className="space-y-24 md:space-y-32">
          {/* All three case study rows link internally. This one is still the
              only visual rendered rather than exported — see DeliveryModelRow. */}
          <WorkRow
            visual={<DeliveryModelRow />}
            eyebrow="Leadership case study"
            title="The bottleneck was us"
            description="Repositioning Product Design for agentic engineering"
            linkText="Read the case study"
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
            linkHref="/work/salli-agentic-ai"
            reverse
            revealIndex={1}
          />
          <WorkRow
            imageSrc="/work/employee-app-adoption.webp"
            imageSrcDark="/work/employee-app-adoption-dark.webp"
            imageAlt="Three phone screens from Harri’s employee app, showing Rewards, Home and Schedule, each opening with a blue header and a summary card."
            eyebrow="Product case study"
            title="Nobody opens an app because they’re told to"
            description="Making a frontline workforce app worth opening, and turning that into an operating lever for the businesses running on it"
            linkText="Read the case study"
            linkHref="/work/employee-app-adoption"
            revealIndex={2}
          />
          <WorkRow
            imageSrc="/work/seedbank-design.webp"
            imageSrcDark="/work/seedbank-design-dark.webp"
            imageAlt="seedbank.design — a cloneable HTML + CSS design system for communities"
            eyebrow="Design System Project"
            title="seedbank.design – A Design System for Communities."
            description="A cloneable HTML + CSS design system for self-organising groups of all kinds. Built to be adapted, not followed."
            linkText="Visit seedbank.design"
            linkHref="https://seedbank.design/"
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
            linkHref="https://fluxux.vercel.app/"
            linkExternal
            revealIndex={4}
          />
        </div>
      </Container>
    </Section>
  );
}
