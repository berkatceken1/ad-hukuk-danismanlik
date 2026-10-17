import { office } from "../lib/site";
import Icon from "./ui/Icon";
import ButtonLink from "./ui/ButtonLink";

export default function ContactSection() {
  return (
    <section
      className="contact-section section-pad"
      aria-labelledby="contact-heading"
    >
      <div className="container contact-layout">
        <div>
          <p className="eyebrow">İLETİŞİM</p>
          <h2 id="contact-heading">
            Hukuki sürecinizi
            <br />
            <em>birlikte değerlendirelim.</em>
          </h2>
          <p className="section-description">
            Görüşme planlamak ve hukuki danışmanlık hakkında bilgi almak için
            bizimle iletişime geçebilirsiniz.
          </p>
          <ButtonLink href="/iletisim">İletişim bilgileri</ButtonLink>
        </div>
        <div className="contact-links">
          <a href={office.phoneHref}>
            <Icon name="phone" />
            <span>
              <small>TELEFON</small>
              <strong>{office.phone}</strong>
            </span>
            <Icon name="external" />
          </a>
          <a href={`mailto:${office.email}`}>
            <Icon name="mail" />
            <span>
              <small>E-POSTA</small>
              <strong>{office.email}</strong>
            </span>
            <Icon name="external" />
          </a>
          <a href={office.mapHref} target="_blank" rel="noopener noreferrer">
            <Icon name="pin" />
            <span>
              <small>OFİSİMİZ</small>
              <strong>
                {office.address}
                <br />
                {office.city}
              </strong>
            </span>
            <Icon name="external" />
          </a>
        </div>
      </div>
    </section>
  );
}
