import type { Metadata } from "next";
import PracticeDetail from "../../components/PracticeDetail";
import { practiceDetails } from "../../lib/practice-details";

export const metadata: Metadata = {
  title: "Miras Hukuku",
  description: practiceDetails["miras-hukuku"].intro,
  alternates: { canonical: "/uzmanlik/miras-hukuku/" },
};

export default function Page() {
  return <PracticeDetail slug="miras-hukuku" />;
}
