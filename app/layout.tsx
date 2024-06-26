import type { Metadata } from "next";
import {
  Inter,
  Roboto,
  Alex_Brush,
  Montserrat,
  Jost,
  Playfair_Display,
} from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: "400",
});
const alex = Alex_Brush({
  subsets: ["latin"],
  variable: "--font-alex",
  weight: "400",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: "400",
});
const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  weight: "400",
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: "400",
});
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${roboto.variable} ${alex.variable} ${montserrat.variable} ${jost.variable} ${playfair.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
