import type { Metadata } from "next";
import PracticeDetail from "../../components/PracticeDetail";
import { practiceDetails } from "../../lib/practice-details";

export const metadata: Metadata = {
  title: "İdare Hukuku",
  description: practiceDetails["idare-hukuku"].intro,
  alternates: { canonical: "/uzmanlik/idare-hukuku/" },
};

export default function Page() {
  return <PracticeDetail slug="idare-hukuku" />;
}
