import { Container } from "./Container";
import { Section } from "./Section";

const cells = [
  { label: "Current role", value: "Director of UX, Harri" },
  { label: "Cross-functional influence", value: "50+" },
  { label: "Sectors", value: "Enterprise HCM & Workforce Platforms" },
  { label: "Team", value: "Globally distributed team of 6" },
];

export function Credentials() {
  return (
    <Section>
      <Container>
        <div className="border-t border-b border-[var(--color-border)] py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {cells.map((cell) => (
              <div key={cell.label}>
                <p className="text-eyebrow text-[var(--color-muted)] mb-2">
                  {cell.label}
                </p>
                <p className="text-h2 text-[var(--color-foreground)]">
                  {cell.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
