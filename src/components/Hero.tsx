import { Container } from "./Container";
import { Section } from "./Section";
import { HeroDiagram } from "./HeroDiagram";

export function Hero() {
  return (
    <Section className="!pt-24 md:!pt-40 !pb-16 md:!pb-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-[55fr_45fr] gap-12 items-start">
          <div>
            <p className="font-serif-italic text-[20px] text-[var(--color-primary)] mb-4">
              Edwin Collings-Wells
            </p>
            <h1 className="text-display text-[var(--color-foreground)]">
              Experience Strategy &amp; Product Leadership
            </h1>
            <p className="text-subtitle text-[var(--color-body)] mt-6 md:mt-8 max-w-[540px]">
              Designing intelligent product experiences that drive growth,
              adoption and trust.
            </p>
          </div>
          <div className="mt-0 md:mt-20">
            <HeroDiagram />
          </div>
        </div>
      </Container>
    </Section>
  );
}
