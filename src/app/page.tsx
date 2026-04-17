import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

export default function Home() {
  return (
    <Section>
      <Container>
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-eyebrow text-muted">Under construction</p>
          <h1 className="text-h1 font-serif-italic text-foreground">
            Edwin Collings-Wells
          </h1>
          <p className="text-h2 text-foreground">
            Experience Strategy & Product Leadership
          </p>
        </div>
      </Container>
    </Section>
  );
}
