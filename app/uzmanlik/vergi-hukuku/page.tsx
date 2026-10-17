import type { Metadata } from "next";
import PracticeDetail from "../../components/PracticeDetail";
import { practiceDetails } from "../../lib/practice-details";

export const metadata: Metadata = {
  title: "Vergi Hukuku",
  description: practiceDetails["vergi-hukuku"].intro,
  alternates: { canonical: "/uzmanlik/vergi-hukuku/" },
};

export default function Page() {
  return <PracticeDetail slug="vergi-hukuku" />;
}
