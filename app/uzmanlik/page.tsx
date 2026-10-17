import type { Metadata } from "next";
import PageIntro from "../components/ui/PageIntro";
import PracticeGrid from "../components/PracticeGrid";
import areas from "../lib/practice-areas.json";

const pageOrder: Record<string, string> = {
  "ticaret-hukuku": "ceza-hukuku",
  "ceza-hukuku": "icra-iflas",
  "icra-iflas": "ticaret-hukuku",
  "gayrimenkul-hukuku": "miras-hukuku",
  "miras-hukuku": "borclar-hukuku",
  "borclar-hukuku": "gayrimenkul-hukuku",
};
const pageAreas = areas.map(
  (area) => areas.find((item) => item.slug === pageOrder[area.slug]) || area,
);

export const metadata: Metadata = {
  title: "Çalışma Alanları",
  description:
    "AD Hukuk ve Danışmanlık çalışma alanları: ticaret, iş, aile, ceza, gayrimenkul, icra, miras ve diğer hukuki süreçler.",
  alternates: { canonical: "/uzmanlik/" },
};

export default function PracticePage() {
  return (
    <>
      <PageIntro eyebrow="Çalışma Alanları" title="Çalışma Alanları" />
      <section
        className="container section-pad practice-index-list"
        aria-label="Hukuki çalışma alanları"
      >
        <PracticeGrid items={pageAreas} />
      </section>
    </>
  );
}
