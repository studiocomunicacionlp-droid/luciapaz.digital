import type { Metadata } from "next";
import { Poppins, Caveat } from "next/font/google";
import "./globals.css";
import { CUPOS_DISPONIBLES } from "@/lib/launch";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://studiocomunicacionlp-droid.github.io/luciapaz.digital/"),
  title: "Lucía Paz | Soltá el celular y vendé en automático",
  description: `Diseño tiendas online y landings a medida para emprendedoras que ya venden, pero están cansadas de que todo dependa de ellas. Método Libre e Impacto. ${CUPOS_DISPONIBLES} cupos de lanzamiento.`,
  keywords:
    "tienda online, landing page, emprendedoras, Tiendanube, diseño web, Lucía Paz, luciapaz.digital",
  openGraph: {
    title: "Lucía Paz | Soltá el celular y vendé en automático",
    description:
      "Tiendas online y landings a medida para emprendedoras que ya venden, pero están cansadas de que todo dependa de ellas.",
    type: "website",
    locale: "es_AR",
    images: [
      {
        url: "images/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Lucía Paz | Soltá el celular y vendé en automático",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucía Paz | Soltá el celular y vendé en automático",
    description:
      "Tiendas online y landings a medida para emprendedoras que ya venden, pero están cansadas de que todo dependa de ellas.",
    images: ["images/og-cover.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${poppins.variable} ${caveat.variable} scroll-smooth`}>
      <body className="antialiased font-heading bg-cream text-ink">{children}</body>
    </html>
  );
}
