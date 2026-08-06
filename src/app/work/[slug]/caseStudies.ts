import type { ComponentType } from "react";
import { RepositioningProductDesignContent } from "./RepositioningProductDesignContent";
import { SalliAgenticAiContent } from "./SalliAgenticAiContent";

export type CaseStudy = {
  /** <title>, plus the OpenGraph and Twitter title. */
  metaTitle: string;
  /** Meta description, shared with OpenGraph and Twitter. */
  description: string;
  Content: ComponentType;
};

/* Each case study owns its own on-page eyebrow, title and standfirst inside its
   content component. This registry holds only what the route needs: the
   metadata strings and the component to render. A new case study is one entry
   here plus one content file. */
export const caseStudies: Record<string, CaseStudy> = {
  "repositioning-product-design": {
    metaTitle: "The bottleneck was us — Edwin Collings-Wells",
    description:
      "How Product Design at Harri traded execution on bounded work for an upstream position on structural decisions, after agentic development routed the team.",
    Content: RepositioningProductDesignContent,
  },
  "salli-agentic-ai": {
    metaTitle: "Capability is not the product — Edwin Collings-Wells",
    description:
      "How Salli's agentic AI companion at Harri failed twice on adoption, and why the design problem turned out to be who starts the conversation, and when.",
    Content: SalliAgenticAiContent,
  },
};
