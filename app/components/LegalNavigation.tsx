import Link from "next/link";
import Icon from "./ui/Icon";

export default function LegalNavigation({ active }: { active: string }) {
  return (
    <aside className="legal-navigation" aria-label="Yasal bilgiler">
      <p className="eyebrow">BİLGİLENDİRME</p>
      <h2>Yasal bilgiler</h2>
      <nav aria-label="Yasal belgeler">
        {[
          { href: "/gizlilik/", title: "Gizlilik ve KVKK" },
          { href: "/kullanim-kosullari/", title: "Kullanım Koşulları" },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active === item.href ? "page" : undefined}
          >
            {item.title}
            <Icon name="arrow" />
          </Link>
        ))}
      </nav>
    </aside>
  );
}
