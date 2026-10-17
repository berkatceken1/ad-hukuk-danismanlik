import type { Metadata } from "next";
import PracticeDetail from "../../components/PracticeDetail";
import { practiceDetails } from "../../lib/practice-details";

export const metadata: Metadata = {
  title: "İş Hukuku",
  description: practiceDetails["is-hukuku"].intro,
  alternates: { canonical: "/uzmanlik/is-hukuku/" },
};

export default function Page() {
  return <PracticeDetail slug="is-hukuku" />;
}
