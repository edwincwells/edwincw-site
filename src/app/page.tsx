export default function Home() {
  return (
    <main className="flex flex-col flex-1 min-h-screen items-center justify-center px-6">
      <p
        style={{
          fontFamily: "system-ui, sans-serif",
          fontSize: "12px",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "#8A8A8A",
          marginBottom: "24px",
        }}
      >
        Under construction
      </p>
      <h1
        style={{
          fontFamily: "var(--font-serif)",
          fontStyle: "italic",
          fontWeight: 400,
          fontSize: "48px",
          lineHeight: 1.1,
          color: "#111214",
          margin: 0,
        }}
      >
        Edwin Collings-Wells
      </h1>
      <p
        style={{
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          fontSize: "24px",
          lineHeight: 1.3,
          color: "#111214",
          marginTop: "16px",
        }}
      >
        Experience Strategy & Product Leadership
      </p>
    </main>
  );
}
