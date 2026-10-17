import type { Metadata } from "next";
import PageIntro from "../components/ui/PageIntro";
import BlogIndex from "../components/BlogIndex";

export const metadata: Metadata = {
  title: "Makaleler",
  description:
    "Hukuki süreçler hakkında AD Hukuk ve Danışmanlık bilgilendirme yazıları.",
  alternates: { canonical: "/blog/" },
};

export default function BlogPage() {
  return (
    <>
      <PageIntro
        eyebrow="Makaleler"
        title="Makaleler"
        description="Hukuki konular ve süreçler hakkında bilgilendirme yazıları."
      />
      <BlogIndex />
    </>
  );
}
