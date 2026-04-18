import { Container } from "./Container";
import { Section } from "./Section";

export function Contact() {
  return (
    <Section id="contact">
      <Container width="narrow">
        <div className="text-center">
          <p className="text-eyebrow text-[var(--color-primary)] mb-4">
            Get in touch
          </p>
          <h2 className="text-h1 text-[var(--color-foreground)] mb-8">
            Let&apos;s talk
          </h2>
          <div className="space-y-2">
            <p className="text-prose text-[var(--color-body)]">
              Reach me by{" "}
              <a
                href="mailto:ed.collings.wells@gmail.com"
                className="link"
              >
                email
              </a>
              , or connect on{" "}
              <a
                href="https://linkedin.com/in/edwincw/"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                LinkedIn
              </a>
              .
            </p>
            <p className="text-prose text-[var(--color-muted)]">
              Based in the UK, working globally.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
