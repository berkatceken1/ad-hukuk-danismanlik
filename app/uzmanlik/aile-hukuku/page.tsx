import type { Metadata } from "next";
import PracticeDetail from "../../components/PracticeDetail";
import { practiceDetails } from "../../lib/practice-details";

export const metadata: Metadata = {
  title: "Aile Hukuku",
  description: practiceDetails["aile-hukuku"].intro,
  alternates: { canonical: "/uzmanlik/aile-hukuku/" },
};

export default function Page() {
  return <PracticeDetail slug="aile-hukuku" />;
}
