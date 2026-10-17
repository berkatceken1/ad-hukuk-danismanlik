import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";

export default function PageIntro({
  eyebrow,
  title,
  description,
  parent,
  image,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  parent?: { href: string; label: string };
  image?: string;
}) {
  return (
    <header className="page-intro">
      <div className="container">
        <nav className="breadcrumbs" aria-label="Sayfa konumu">
          <Link href="/">Ana Sayfa</Link>
          <Icon name="next" />
          {parent && (
            <>
              <Link href={parent.href}>{parent.label}</Link>
              <Icon name="next" />
            </>
          )}
          <span aria-current="page">{eyebrow}</span>
        </nav>
        <div
          className={`page-intro-content${image ? " page-intro-with-image" : ""}`}
        >
          <div>
            <h1>{title}</h1>
            {description && (
              <p className="page-intro-description">{description}</p>
            )}
          </div>
          {image && (
            <div className="page-intro-image">
              <Image
                src={image}
                alt=""
                fill
                sizes="(max-width: 760px) 90vw, 320px"
              />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
