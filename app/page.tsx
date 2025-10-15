import { Metadata } from 'next';
import HomePage from './components/HomePage';

export const metadata: Metadata = {
  title: "Av. Ali Deniz - AD Hukuk ve Danışmanlık | Kayseri Avukat",
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
    "hukuk bürosu"
  ],
  openGraph: {
    title: "Av. Ali Deniz - AD Hukuk ve Danışmanlık | Kayseri Avukat",
    description: "Profesyonel hukuki danışmanlık hizmetleri. Ticaret hukuku, iş hukuku, aile hukuku ve daha fazlası için uzman avukat.",
    type: "website",
    locale: "tr_TR",
    url: "https://adhukukvedanismanlik.com",
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
    title: "Av. Ali Deniz - AD Hukuk ve Danışmanlık",
    description: "Profesyonel hukuki danışmanlık hizmetleri. Kayseri merkezli uzman avukat.",
    images: ["/images/alideniz1.jpg"],
  },
  alternates: {
    canonical: "https://adhukukvedanismanlik.com/",
  },
};

export default function Home() {
  return <HomePage />;
}