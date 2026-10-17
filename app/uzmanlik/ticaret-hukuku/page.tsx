import type { Metadata } from "next";
import PracticeDetail from "../../components/PracticeDetail";
import { practiceDetails } from "../../lib/practice-details";

export const metadata: Metadata = {
  title: "Ticaret Hukuku",
  description: practiceDetails["ticaret-hukuku"].intro,
  alternates: { canonical: "/uzmanlik/ticaret-hukuku/" },
};

export default function Page() {
  return <PracticeDetail slug="ticaret-hukuku" />;
}
