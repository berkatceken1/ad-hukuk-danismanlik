import type { Metadata } from "next";
import PracticeDetail from "../../components/PracticeDetail";
import { practiceDetails } from "../../lib/practice-details";

export const metadata: Metadata = {
  title: "Gayrimenkul Hukuku",
  description: practiceDetails["gayrimenkul-hukuku"].intro,
  alternates: { canonical: "/uzmanlik/gayrimenkul-hukuku/" },
};

export default function Page() {
  return <PracticeDetail slug="gayrimenkul-hukuku" />;
}
