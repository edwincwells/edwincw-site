"use client";

import { Container } from "./Container";
import { Section } from "./Section";
import { useScrollReveal } from "./useScrollReveal";

export function Thesis() {
  const { ref, isRevealed } = useScrollReveal<HTMLDivElement>();

  return (
    <Section>
      <Container width="narrow">
        <div ref={ref} data-reveal data-revealed={isRevealed}>
          <p className="text-eyebrow text-[var(--color-primary)] mb-4">
            On designing trust
          </p>
          <h2 className="text-h1 text-[var(--color-foreground)] mb-8 md:mb-10">
            What experience strategy means when the product can think back
          </h2>
          <div className="space-y-6 text-[var(--color-body)]">
            <p className="text-prose">
              Until recently, trust in enterprise software was someone else’s
              job. Sales vouched for the product. Customer Success absorbed
              the failures. Data and Security teams handled the technical
              integrity. The buyer trusted the people; the end user tolerated
              the software.
            </p>
            <p className="text-prose">
              That model breaks when the product itself starts making
              judgment calls.
            </p>
            <p className="text-prose">
              Agentic workflows and chat interfaces have changed the
              relationship. A frontline manager acting on an AI recommendation
              isn’t trusting a brand or an account team. They’re trusting the
              product, in real time, on a decision that affects their work,
              their team, their numbers. There’s no human between them and
              the model. Trust has become a UX problem, and an urgent one.
            </p>
            <p className="text-prose">
              In practice, this means three moves. Understand user intent
              more precisely than before, not just what they asked for, but
              what they’d accept if the product got it wrong. Pattern
              transparency and feedback into the interface itself, so users
              can read the product’s reasoning without having to ask for it.
              And surface ROI in-product, so trust compounds into adoption
              rather than stalling at tolerance.
            </p>
            <p className="text-prose">
              <span className="font-semibold">
                Intent → Transparency → Trust → Adoption → Growth
              </span>
              . This is the loop. It’s how software earns its place in
              workflows that can’t afford to be wrong.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
