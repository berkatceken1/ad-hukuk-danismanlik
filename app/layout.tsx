import type { Metadata } from "next";
import { Lora, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import StructuredData from "./components/StructuredData";
import RouteTransitionLoader from "./components/RouteTransitionLoader";

const editorial = Lora({
  style: ["normal", "italic"],
  variable: "--font-editorial",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  display: "swap",
});
const interfaceFont = Manrope({
  variable: "--font-interface",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  display: "swap",
});
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://adhukukvedanismanlik.com";
const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Av. Ali Deniz | AD Hukuk ve Danışmanlık",
    template: "%s | AD Hukuk ve Danışmanlık",
  },
  description:
    "Kayseri merkezli AD Hukuk ve Danışmanlık. Av. Ali Deniz ile bireyler ve kurumlar için avukatlık, dava takibi ve hukuki danışmanlık hizmetleri.",
  authors: [{ name: "Av. Ali Deniz" }],
  creator: "AD Hukuk ve Danışmanlık",
  icons: { icon: "/favicon.ico", shortcut: "/favicon.ico" },
  openGraph: {
    title: "Av. Ali Deniz | AD Hukuk ve Danışmanlık",
    description:
      "Bireyler ve kurumlar için hukuki temsil ve danışmanlık. Kayseri, Türkiye.",
    type: "website",
    locale: "tr_TR",
    siteName: "AD Hukuk ve Danışmanlık",
    url: siteUrl,
    images: [
      {
        url: "/images/hukukgorsel.png",
        width: 1024,
        height: 1024,
        alt: "AD Hukuk ve Danışmanlık",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AD Hukuk ve Danışmanlık",
    description:
      "Av. Ali Deniz — Kayseri merkezli avukatlık ve hukuki danışmanlık.",
    images: ["/images/hukukgorsel.png"],
  },
  robots: { index: true, follow: true },
  verification: { google: googleVerification },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" data-scroll-behavior="smooth">
      <head>
        <StructuredData type="Organization" data={{}} />
        <StructuredData type="Person" data={{}} />
      </head>
      <body
        className={`${editorial.variable} ${interfaceFont.variable}`}
        suppressHydrationWarning
      >
        <a className="skip-link" href="#icerik">
          İçeriğe geç
        </a>
        <Navbar />
        <RouteTransitionLoader />
        <main id="icerik" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
