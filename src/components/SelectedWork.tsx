import { Container } from "./Container";
import { Section } from "./Section";
import { WorkRow } from "./WorkRow";

export function SelectedWork() {
  return (
    <Section>
      <Container>
        <p className="text-eyebrow text-[var(--color-primary)] mb-4">
          Selected work
        </p>
        <h2 className="text-h1 text-[var(--color-foreground)] mb-16 md:mb-24">
          Recent projects
        </h2>
        <div className="space-y-24 md:space-y-32">
          <WorkRow
            imageSrc="/work/salli.webp"
            imageAlt="Salli — agentic AI workforce management interface"
            eyebrow="Case study 01"
            title="Reimagining Workforce Management Through Agentic AI"
            description="Designing a proactive intelligence layer to guide frontline decision-making at scale"
            linkText="Read the case study"
            linkAriaLabel="Read the Salli case study"
            linkHref="https://portfolio.edwincw.com/slide/2"
            linkExternal
            revealIndex={0}
          />
          <WorkRow
            imageSrc="/work/rewards-recognition.webp"
            imageAlt="Rewards & Recognition — employee engagement platform"
            eyebrow="Case study 02"
            title="Designing Employee Engagement as a Platform Growth Lever"
            description="How Rewards & Recognition became a platform growth lever – and a commercial differentiator"
            linkText="Read the case study"
            linkAriaLabel="Read the Rewards & Recognition case study"
            linkHref="https://portfolio.edwincw.com/slide/14"
            linkExternal
            reverse
            revealIndex={1}
          />
          <WorkRow
            imageSrc="/work/fluxux.webp"
            imageAlt="FluxUX — AI-powered experiment generator"
            eyebrow="Project"
            title="FluxUX: An AI-powered experiment generator for UX practitioners"
            description="An early experiment in prompt-driven development"
            linkText="Explore the app"
            linkAriaLabel="Explore the FluxUX app"
            linkHref="https://fluxux.vercel.app/"
            linkExternal
            revealIndex={2}
          />
        </div>
      </Container>
    </Section>
  );
}
