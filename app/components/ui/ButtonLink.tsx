import Link from "next/link";
import Icon from "./Icon";

export default function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "light" | "text";
  external?: boolean;
}) {
  const className = `button button-${variant}`;
  const content = (
    <>
      {children}
      <Icon name={external ? "external" : "arrow"} />
    </>
  );
  return external ? (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {content}
    </a>
  ) : (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}
