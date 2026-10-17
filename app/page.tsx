import type { Metadata } from "next";
import HomePage from "./components/HomePage";

export const metadata: Metadata = {
  title: { absolute: "Av. Ali Deniz | AD Hukuk ve Danışmanlık — Kayseri" },
  description:
    "Bireyler ve kurumlar için özenli hukuki temsil ve danışmanlık. AD Hukuk ve Danışmanlık, Av. Ali Deniz, Kayseri.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return <HomePage />;
}
