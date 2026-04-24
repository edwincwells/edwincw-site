"use client";

import Image from "next/image";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { useScrollReveal } from "@/components/useScrollReveal";

export function AboutContent() {
  const { ref, isRevealed } = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={ref} data-reveal data-revealed={isRevealed}>
      <Section>
        <Container width="narrow">
          <p className="text-eyebrow text-[var(--color-primary)] mb-4">
            About
          </p>
          <h1 className="text-h1 text-[var(--color-foreground)] mb-8 md:mb-10">
            Edwin Collings-Wells
          </h1>
          <Image
            src="/about/edwin-portrait.webp"
            alt="Edwin Collings-Wells"
            width={1200}
            height={800}
            sizes="(max-width: 768px) 100vw, 480px"
            className="w-full max-w-[480px] h-auto rounded-[var(--radius-md)] mb-8 md:mb-10"
          />
          <div className="space-y-6">
            <p className="text-prose text-[var(--color-body)]">
              I&apos;m Director of UX at Harri, a global enterprise HCM
              platform used by two million frontline workers each month. I
              lead a globally distributed design team of six, working across
              product, engineering, and commercial functions.
            </p>
            <p className="text-prose text-[var(--color-body)]">
              Before I worked in software, I spent years in hospitality
              operations, running high-volume bars and restaurants. In my
              last role before moving into design, I led a team of 80. I was
              on the other side of the users I now design for, and that
              perspective still shapes how I think about software built for
              work that can&apos;t afford to be wrong.
            </p>
            <p className="text-prose text-[var(--color-body)]">
              The problem I find most compelling is multi-product platform
              coherence: making a complex suite of tools feel like a single,
              considered experience rather than a collection of features.
              It&apos;s harder than it looks, and it&apos;s where I do my
              best work.
            </p>
            <p className="text-prose text-[var(--color-body)]">
              Right now I&apos;m especially focused on what AI changes about
              this. Designing Salli, an agentic AI companion for frontline
              decision-making at scale, and building FluxUX, a small
              independent experiment in AI-powered tools for designers, has
              convinced me that the design teams who learn to build trust
              into these systems will shape the next era of enterprise
              software.
            </p>
            <p className="text-prose text-[var(--color-body)]">
              I&apos;m based between Bournemouth and London. Always happy to
              talk about work, AI in enterprise, or the smallholding I&apos;m
              quietly planning on the side.
            </p>
          </div>
        </Container>
      </Section>
      <Section>
        <Container width="narrow">
          <div className="text-center">
            <p className="text-eyebrow text-[var(--color-primary)] mb-4">
              Get in touch
            </p>
            <p className="text-prose text-[var(--color-body)]">
              Reach me by{" "}
              <a href="mailto:ed.collings.wells@gmail.com" className="link">
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
          </div>
        </Container>
      </Section>
    </div>
  );
}
