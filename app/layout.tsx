import type { Metadata } from "next";
import { Inter, Poppins, Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import StructuredData from "./components/StructuredData";
import GoogleAnalytics from "./components/GoogleAnalytics";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://adhukukvedanismanlik.com";
const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "";
const gaMeasurementId = process.env.NEXT_PUBLIC_GA_ID || "";

export const metadata: Metadata = {
  title: {
    default: "Avukat Ali Deniz - AD Hukuk ve Danışmanlık",
    template: "%s | Avukat Ali Deniz - AD Hukuk ve Danışmanlık"
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16 32x32 48x48', type: 'image/x-icon' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/favicon.ico', sizes: '180x180' }
    ]
  },
  description: "Avukat Ali Deniz ile profesyonel hukuki danışmanlık hizmetleri. Ticaret hukuku, iş hukuku, aile hukuku, ceza hukuku ve daha fazlası için uzman avukat. Kayseri merkezli hukuk bürosu.",
  keywords: [
    "Ali Deniz avukat",
    "Ali Deniz hukuk",
    "Ali Deniz hukuk danışmanlık",
    "AD hukuk danışmanlık",
    "boşanma avukatı",
    "ceza avukatı",
    "miras avukatı",
    "ticaret avukatı",
    "iş avukatı",
    "gayrimenkul avukatı",
    "hukuk danışmanlığı",
    "ticaret hukuku",
    "iş hukuku",
    "aile hukuku",
    "ceza hukuku",
    "gayrimenkul hukuku",
    "miras hukuku",
    "icra iflas",
    "Kayseri avukat",
    "Kayseri boşanma avukatı",
    "Kayseri ceza avukatı",
    "Kayseri miras avukatı",
    "Kayseri ticaret avukatı",
    "Kayseri iş avukatı",
    "Kayseri gayrimenkul avukatı",
    "iyi boşanma avukatı Kayseri",
    "en iyi ceza avukatı Kayseri",
    "en iyi miras avukatı Kayseri",
    "iyi ticaret avukatı Kayseri",
    "en iyi iş avukatı Kayseri",
    "güvenilir avukat Kayseri",
    "deneyimli avukat Kayseri",
    "uzman avukat",
    "hukuk bürosu",
    "avukat danışmanlık",
    "hukuki danışmanlık",
    "dava takibi",
    "hukuk ofisi"
  ],
  authors: [{ name: "Avukat Ali Deniz" }],
  creator: "Avukat Ali Deniz",
  publisher: "AD Hukuk ve Danışmanlık",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Avukat Ali Deniz - AD Hukuk ve Danışmanlık",
    description: "Profesyonel hukuki danışmanlık hizmetleri. Ticaret hukuku, iş hukuku, aile hukuku ve daha fazlası için uzman avukat.",
    type: "website",
    locale: "tr_TR",
    siteName: "AD Hukuk ve Danışmanlık",
    url: siteUrl,
    images: [
      {
        url: "/images/alideniz1.jpg",
        width: 1200,
        height: 630,
        alt: "Av. Ali Deniz - Profesyonel Avukat Fotoğrafı",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Avukat Ali Deniz - AD Hukuk ve Danışmanlık",
    description: "Profesyonel hukuki danışmanlık hizmetleri. Kayseri merkezli uzman avukat.",
    images: ["/images/alideniz1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: googleVerification || undefined,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <StructuredData type="Organization" data={{}} />
        <StructuredData type="Person" data={{}} />
        {gaMeasurementId ? (
          <GoogleAnalytics measurementId={gaMeasurementId} />
        ) : null}
        {googleVerification && (
          <meta name="google-site-verification" content={googleVerification} />
        )}
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} ${playfair.variable} ${sourceSans.variable} font-sans antialiased`}
        suppressHydrationWarning={true}
      >
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
