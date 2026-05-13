"use client";

import { Container } from "./Container";
import { Section } from "./Section";
import { useScrollReveal } from "./useScrollReveal";

const cells = [
  { label: "Current role", value: "Director of UX, Harri" },
  { label: "Cross-functional influence", value: "Design · Product · Engineering · Executive" },
  { label: "Sectors", value: "Enterprise SaaS · High-stakes software · AI" },
  { label: "Team", value: "6 designers, globally distributed · 50+ cross-functional" },
];

function Cell({
  label,
  value,
  index,
}: {
  label: string;
  value: string;
  index: number;
}) {
  const { ref, isRevealed } = useScrollReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      data-reveal
      data-revealed={isRevealed}
      style={{ ["--reveal-index" as string]: index }}
    >
      <p className="text-eyebrow text-[var(--color-muted)] mb-2">{label}</p>
      <p className="text-h2 text-[var(--color-foreground)]">{value}</p>
    </div>
  );
}

export function Credentials() {
  return (
    <Section>
      <Container>
        <h2 className="sr-only">Credentials</h2>
        <div className="border-t border-b border-[var(--color-border)] py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {cells.map((cell, i) => (
              <Cell
                key={cell.label}
                label={cell.label}
                value={cell.value}
                index={i}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
