import type { Metadata } from "next";
import PracticeDetail from "../../components/PracticeDetail";
import { practiceDetails } from "../../lib/practice-details";

export const metadata: Metadata = {
  title: "Sigorta Hukuku",
  description: practiceDetails["sigorta-hukuku"].intro,
  alternates: { canonical: "/uzmanlik/sigorta-hukuku/" },
};

export default function Page() {
  return <PracticeDetail slug="sigorta-hukuku" />;
}
