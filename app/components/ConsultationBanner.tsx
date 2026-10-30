import ButtonLink from "./ui/ButtonLink";

export default function ConsultationBanner() {
  return (
    <section
      className="container consultation-banner"
      aria-label="Görüşme planlayın"
    >
      <div>
        <p className="eyebrow">İLETİŞİM</p>
        <h2>Hukuki sürecinizi birlikte değerlendirelim.</h2>
        <p>
          Görüşme planlamak ve hukuki danışmanlık hakkında bilgi almak için
          bizimle iletişime geçebilirsiniz.
        </p>
      </div>
      <ButtonLink href="/iletisim" variant="outline">
        İletişime geçin
      </ButtonLink>
    </section>
  );
}
