import type { Metadata } from "next";
import PageIntro from "../components/ui/PageIntro";
import Icon from "../components/ui/Icon";
import ButtonLink from "../components/ui/ButtonLink";
import { office } from "../lib/site";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "AD Hukuk ve Danışmanlık Kayseri ofisi. Telefon, e-posta, çalışma saatleri ve konum bilgileri.",
  alternates: { canonical: "/iletisim/" },
};

export default function ContactPage() {
  return (
    <>
      <PageIntro eyebrow="İletişim" title="İletişim" />
      <section
        className="container section-pad contact-page"
        aria-label="Ofis iletişim bilgileri"
      >
        <div className="contact-page-grid">
          <div>
            <h2>İletişim bilgileri</h2>
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
              <a
                href={office.mapHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="pin" />
                <span>
                  <small>OFİS ADRESİ</small>
                  <strong>
                    {office.address}
                    <br />
                    {office.city}
                  </strong>
                </span>
                <Icon name="external" />
              </a>
            </div>
            <p className="contact-info-note">
              Telefon veya e-posta yoluyla iletişime geçmeniz, tek başına
              avukat–müvekkil ilişkisi oluşturmaz.
            </p>
          </div>
          <aside className="office-panel" aria-labelledby="contact-hours-heading">
            <h2 id="contact-hours-heading">Çalışma saatleri</h2>
            <dl className="contact-schedule">
              {[office.hours, office.saturday, "Pazar: Kapalı"].map((entry) => {
                const [day, hours] = entry.split(": ");
                return (
                  <div key={day}>
                    <dt>{day}</dt>
                    <dd>{hours}</dd>
                  </div>
                );
              })}
            </dl>
            <ButtonLink href={office.phoneHref} variant="outline">
              Telefonla ulaşın
            </ButtonLink>
          </aside>
        </div>
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3521.5694691033714!2d35.474183587833224!3d38.734494083495534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152b1300590a8f07%3A0x11365ae3555ce09e!2zQUQgSHVrdWsgdmUgRGFuxLHFn21hbmzEsWs!5e1!3m2!1str!2str!4v1760449581561!5m2!1str!2str"
            title="AD Hukuk ve Danışmanlık ofis konumu"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <div className="map-caption">
            <span>
              {office.address} · {office.city}
            </span>
            <a href={office.mapHref} target="_blank" rel="noopener noreferrer">
              Yol tarifi alın
              <Icon name="external" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
