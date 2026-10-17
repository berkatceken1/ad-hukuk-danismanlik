import Link from "next/link";
import Image from "next/image";
import { navigation, office } from "../lib/site";
import Icon from "./ui/Icon";

export default function Footer() {
  return (
    <footer id="altbilgi" className="site-footer">
      <div className="container">
        <div className="footer-information">
          <Link
            className="footer-logo-link"
            href="/"
            aria-label="AD Hukuk — Ana sayfa"
          >
            <Image
              src="/logo/ad-hukuk-logo.png"
              alt="AD Hukuk ve Danışmanlık — Avukat Ali Deniz"
              width={291}
              height={275}
              sizes="96px"
              className="footer-logo"
            />
          </Link>
          <section
            className="footer-contact-group"
            aria-labelledby="footer-contact-title"
          >
            <h2 id="footer-contact-title">İletişim</h2>
            <a href={office.phoneHref}>
              <Icon name="phone" />
              {office.phone}
            </a>
            <a href={`mailto:${office.email}`}>
              <Icon name="mail" />
              {office.email}
            </a>
          </section>
          <section
            className="footer-office-group"
            aria-labelledby="footer-office-title"
          >
            <h2 id="footer-office-title">Ofis</h2>
            <address>
              {office.address}
              <br />
              {office.city}
            </address>
            <a
              className="footer-directions"
              href={office.mapHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              Yol tarifi alın
              <Icon name="external" />
            </a>
          </section>
        </div>
        <div className="footer-navigation-row">
          <nav className="footer-page-links" aria-label="Alt menü">
            {navigation.slice(1).map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <nav className="footer-policy-links" aria-label="Yasal bilgiler">
            <Link href="/gizlilik">Gizlilik ve KVKK</Link>
            <Link href="/kullanim-kosullari">Kullanım Koşulları</Link>
          </nav>
        </div>
        <p className="footer-disclaimer">
          Bu sitedeki bilgiler genel niteliktedir; hukuki görüş veya danışmanlık
          yerine geçmez.
        </p>
        <p className="footer-copyright">
          © {new Date().getFullYear()} AD Hukuk ve Danışmanlık
        </p>
      </div>
    </footer>
  );
}
