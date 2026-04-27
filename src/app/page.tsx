import { Hero } from "@/components/Hero";
import { Thesis } from "@/components/Thesis";
import { SelectedWork } from "@/components/SelectedWork";
import { Credentials } from "@/components/Credentials";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Thesis />
      <SelectedWork />
      <Credentials />
      <Contact />
    </>
  );
}
