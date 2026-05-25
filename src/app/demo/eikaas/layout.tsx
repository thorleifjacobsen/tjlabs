import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eikaas Ved — Kvalitetsved i Agder",
  description:
    "Tørr bjørkeved og eik levert til deg i østre del av Agder. Kappet i 30 cm lengder, klar for peisen.",
  robots: { index: false, follow: false },
};

export default function EikaasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nb" style={{ scrollBehavior: "smooth" }}>
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
