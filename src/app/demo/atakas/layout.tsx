import { Roboto, Playfair_Display } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
  variable: "--font-playfair",
});

export default function AtakasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="no" className={`${roboto.className} ${playfair.variable}`}>
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
