import type { Metadata } from "next";
import PracticeDetail from "../../components/PracticeDetail";
import { practiceDetails } from "../../lib/practice-details";

export const metadata: Metadata = {
  title: "Borçlar Hukuku",
  description: practiceDetails["borclar-hukuku"].intro,
  alternates: { canonical: "/uzmanlik/borclar-hukuku/" },
};

export default function Page() {
  return <PracticeDetail slug="borclar-hukuku" />;
}
