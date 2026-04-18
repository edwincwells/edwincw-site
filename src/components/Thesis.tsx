import { Container } from "./Container";
import { Section } from "./Section";

export function Thesis() {
  return (
    <Section>
      <Container width="narrow">
        <p className="text-eyebrow text-[var(--color-primary)] mb-4">
          On designing trust
        </p>
        <h2 className="text-h1 text-[var(--color-foreground)] mb-8 md:mb-10">
          What experience strategy means when the product can think back
        </h2>
        <p className="text-body text-[var(--color-body)]">
          [Thesis body — 150–250 words — Edwin to write]
        </p>
      </Container>
    </Section>
  );
}
