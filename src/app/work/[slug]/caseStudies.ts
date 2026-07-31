import type { ComponentType } from "react";
import { RepositioningProductDesignContent } from "./RepositioningProductDesignContent";

export type CaseStudy = {
  /** <title>, plus the OpenGraph and Twitter title. */
  metaTitle: string;
  /** Meta description, shared with OpenGraph and Twitter. */
  description: string;
  Content: ComponentType;
};

/* Each case study owns its own on-page eyebrow, title and standfirst inside its
   content component. This registry holds only what the route needs: the
   metadata strings and the component to render. Salli adds one entry. */
export const caseStudies: Record<string, CaseStudy> = {
  "repositioning-product-design": {
    metaTitle: "The bottleneck was us — Edwin Collings-Wells",
    description:
      "How Product Design at Harri traded execution on bounded work for an upstream position on structural decisions, after agentic development routed the team.",
    Content: RepositioningProductDesignContent,
  },
};
