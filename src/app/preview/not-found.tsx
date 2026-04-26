import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Návrh nedostupný",
  robots: { index: false, follow: false },
};

export default function PreviewNotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "2rem",
        fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif',
        background: "#F5F6F8",
        color: "#0F1F3D",
      }}
    >
      <div
        style={{
          maxWidth: "480px",
          background: "#fff",
          padding: "3rem 2rem",
          borderRadius: "12px",
          boxShadow: "0 2px 12px rgba(15,31,61,0.08)",
        }}
      >
        <h1
          style={{
            fontSize: "2rem",
            marginBottom: "1rem",
            fontWeight: 800,
          }}
        >
          Tento návrh už není dostupný
        </h1>
        <p
          style={{
            marginBottom: "2rem",
            color: "#5B6678",
            fontSize: "16px",
            lineHeight: 1.5,
          }}
        >
          Návrh mohl být přesunut nebo vypršela jeho platnost. Kontaktujte
          nás pro nový návrh nebo informace.
        </p>
        <a
          href="mailto:sebastian@autosmartweb.cz?subject=Dotaz%20na%20n%C3%A1vrh%20webu"
          style={{
            display: "inline-block",
            padding: "14px 28px",
            background: "#36E2A3",
            color: "#0A1629",
            fontWeight: 700,
            borderRadius: "8px",
            textDecoration: "none",
            fontSize: "15px",
          }}
        >
          Kontaktovat Autosmartweb
        </a>
      </div>
    </div>
  );
}
