"use client";

import type { ReactNode } from "react";
import { Container } from "./Container";
import { useScrollReveal } from "./useScrollReveal";

type PullQuoteProps = {
  children: ReactNode;
};

export function PullQuote({ children }: PullQuoteProps) {
  const { ref, isRevealed } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      data-reveal
      data-revealed={isRevealed}
      /* Every pull quote repeats a sentence from the paragraph below it, so it
         is hidden from assistive tech — otherwise each one is announced twice.
         The emphasis is a visual device; the sentence is still read in place. */
      aria-hidden="true"
      className="my-14 md:my-20"
    >
      <Container width="narrow">
        <div className="w-10 h-px bg-[var(--color-primary)] mb-6 md:mb-8" />
        {/* Quotation marks live here rather than in the copy, so every case
            study gets them without each one remembering to type them. */}
        <p className="font-serif-italic text-[var(--color-foreground)] leading-[1.3] tracking-[-0.01em] text-[24px] md:text-[32px]">
          &ldquo;{children}&rdquo;
        </p>
      </Container>
    </div>
  );
}
