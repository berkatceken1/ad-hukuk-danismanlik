import type { Metadata } from "next";
import PracticeDetail from "../../components/PracticeDetail";
import { practiceDetails } from "../../lib/practice-details";

export const metadata: Metadata = {
  title: "İcra ve İflas",
  description: practiceDetails["icra-iflas"].intro,
  alternates: { canonical: "/uzmanlik/icra-iflas/" },
};

export default function Page() {
  return <PracticeDetail slug="icra-iflas" />;
}
