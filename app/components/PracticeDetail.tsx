import Link from "next/link";
import { notFound } from "next/navigation";
import areas from "../lib/practice-areas.json";
import { practiceDetails } from "../lib/practice-details";
import { practicePresentation } from "../lib/presentation";
import PageIntro from "./ui/PageIntro";
import Icon from "./ui/Icon";

export default function PracticeDetail({ slug }: { slug: string }) {
  const area = areas.find((item) => item.slug === slug);
  const content = practiceDetails[slug];
  if (!area || !content) notFound();

  return (
    <div className="practice-detail-page">
      <PageIntro
        eyebrow={area.title}
        title={area.title}
        description={content.intro}
        parent={{ href: "/uzmanlik", label: "Çalışma Alanları" }}
        image={practicePresentation[slug]?.image}
      />
      <div className="container practice-detail-content">
        <section className="practice-related" aria-labelledby="related-heading">
          <div className="practice-related-heading">
            <h2 id="related-heading">Diğer çalışma alanları</h2>
            <Link href="/uzmanlik">
              Tüm alanlar
              <Icon name="arrow" />
            </Link>
          </div>
          <nav
            className="practice-related-links"
            aria-label="Diğer çalışma alanları"
          >
            {areas
              .filter((item) => item.slug !== slug)
              .map((item) => (
                <Link key={item.slug} href={`/uzmanlik/${item.slug}`}>
                  <span className="practice-related-name">{item.title}</span>
                  <span className="practice-related-direction" aria-hidden="true">
                    <Icon name="arrow" />
                  </span>
                </Link>
              ))}
          </nav>
        </section>
      </div>
    </div>
  );
}
