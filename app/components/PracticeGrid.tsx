import Link from "next/link";
import Image from "next/image";
import areas from "../lib/practice-areas.json";
import Icon from "./ui/Icon";
import { practicePresentation } from "../lib/presentation";

export default function PracticeGrid({
  limit,
  compact = false,
  items = areas,
}: {
  limit?: number;
  compact?: boolean;
  items?: typeof areas;
}) {
  const featuredAreas = compact
    ? items
        .slice(0, limit)
        .map((area) =>
          area.slug === "gayrimenkul-hukuku"
            ? items.find((candidate) => candidate.slug === "miras-hukuku")!
            : area,
        )
    : items.slice(0, limit);
  return (
    <div className="practice-overview">
      {featuredAreas.map((area) => (
        <Link
          className="practice-overview-item"
          key={area.slug}
          href={`/uzmanlik/${area.slug}`}
        >
          <div className="practice-overview-photo">
            <Image
              src={practicePresentation[area.slug].image}
              alt=""
              fill
              sizes="(max-width: 760px) 80px, 112px"
            />
          </div>
          <div className="practice-overview-copy">
            <h3>{area.title}</h3>
            <p>{practicePresentation[area.slug]?.summary || area.summary}</p>
          </div>
          <span className="practice-overview-arrow">
            <Icon name="external" />
          </span>
        </Link>
      ))}
    </div>
  );
}
