import type { Metadata } from "next";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "About — Edwin Collings-Wells",
  description:
    "Director of UX at Harri. Leading design for an AI-enabled enterprise HCM platform used by two million frontline workers each month.",
};

export default function AboutPage() {
  return <AboutContent />;
}
