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
          <div className="space-y-6">
            <div>
              <p className="text-eyebrow text-[var(--color-muted)] mb-2">
                Email
              </p>
              <p className="text-body">
                <a href="mailto:ed.collings.wells@gmail.com" className="link">
                  ed.collings.wells@gmail.com
                </a>
              </p>
            </div>
            <div>
              <p className="text-eyebrow text-[var(--color-muted)] mb-2">
                LinkedIn
              </p>
              <p className="text-body">
                <a
                  href="https://linkedin.com/in/edwincw/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  linkedin.com/in/edwincw/
                </a>
              </p>
            </div>
            <div>
              <p className="text-eyebrow text-[var(--color-muted)] mb-2">
                Location
              </p>
              <p className="text-body">
                <span className="text-[var(--color-muted)]">
                  Bournemouth &amp; London
                </span>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
