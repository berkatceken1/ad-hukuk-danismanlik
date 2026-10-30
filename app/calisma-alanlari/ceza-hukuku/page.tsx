import type { Metadata } from "next";
import PracticeDetail from "../../components/PracticeDetail";
import { practiceDetails } from "../../lib/practice-details";

export const metadata: Metadata = {
  title: "Ceza Hukuku",
  description: practiceDetails["ceza-hukuku"].intro,
  alternates: { canonical: "/calisma-alanlari/ceza-hukuku/" },
};

export default function Page() {
  return <PracticeDetail slug="ceza-hukuku" />;
}
