import type { Metadata } from "next";
import PracticeDetail from "../../components/PracticeDetail";
import { practiceDetails } from "../../lib/practice-details";

export const metadata: Metadata = {
  title: "Tüketici Hukuku",
  description: practiceDetails["tuketici-hukuku"].intro,
  alternates: { canonical: "/uzmanlik/tuketici-hukuku/" },
};

export default function Page() {
  return <PracticeDetail slug="tuketici-hukuku" />;
}
