import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudies } from "./caseStudies";

type Params = { params: Promise<{ slug: string }> };

/* Every case study is known at build time, so anything else is a routing-layer
   404 rather than an on-demand render. */
export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies[slug];
  if (!study) return {};

  const url = `/work/${slug}`;
  const images = [
    {
      url: "/og-image-v2.png",
      width: 1200,
      height: 630,
      /* The generic site card, so the alt describes the card, not the case study.
         Goes back to being per-study if a bespoke per-case-study image lands. */
      alt: "Edwin Collings-Wells — Product Design Leadership for AI",
    },
  ];

  return {
    title: study.metaTitle,
    description: study.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: study.metaTitle,
      description: study.description,
      siteName: "Edwin Collings-Wells",
      locale: "en_GB",
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: study.metaTitle,
      description: study.description,
      images: ["/og-image-v2.png"],
    },
  };
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const study = caseStudies[slug];
  if (!study) notFound();

  const { Content } = study;
  return <Content />;
}
