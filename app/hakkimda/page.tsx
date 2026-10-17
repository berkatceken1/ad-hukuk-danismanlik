import type { Metadata } from "next";
import AttorneyPortrait from "../components/AttorneyPortrait";
import PageIntro from "../components/ui/PageIntro";
import ButtonLink from "../components/ui/ButtonLink";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "2022 yılında Kayseri’de kurulan AD Hukuk ve Danışmanlık bürosunu ve kurucu avukat Ali Deniz’i tanıyın.",
  alternates: { canonical: "/hakkimda/" },
};

export default function AboutPage() {
  return (
    <>
      <PageIntro eyebrow="Hakkımızda" title="Hakkımızda" />
      <section className="container section-pad about-story">
        <AttorneyPortrait />
        <div>
          <p className="eyebrow">KAYSERİ BAROSU</p>
          <h2>Av. Ali Deniz</h2>
          <p>
            Avukat Ali Deniz, 1999 yılında İzmir Bornova’da dünyaya gelmiştir.
            Aslen Nevşehir Kapadokyalıdır. Ortaöğrenimini Kayseri Lisesi’nde,
            lisans eğitimini Doğu Akdeniz Üniversitesi Hukuk Fakültesi’nde
            tamamlamıştır.
          </p>
          <p>
            AD Hukuk ve Danışmanlık bürosunun kurucu avukatı olan Ali Deniz,
            Kayseri’de avukatlık ve hukuki danışmanlık faaliyetlerini
            sürdürmektedir.
          </p>
          <ButtonLink href="/iletisim" variant="outline">
            İletişime geçin
          </ButtonLink>
        </div>
      </section>
      <section className="about-details section-pad">
        <div className="container about-details-layout">
          <div>
            <div className="about-office-image">
              <Image
                src="/images/hukuki-calisma-masasi.webp"
                alt="Kitap, kalem ve adalet terazisinden oluşan temsili hukuk çalışma masası"
                fill
                sizes="(max-width: 760px) 90vw, 40vw"
              />
            </div>
          </div>
          <div className="information-rows">
            <div>
              <h3>Kuruluş</h3>
              <p>
                2022 yılında Kayseri merkezli olarak faaliyete başlayan
                ofisimiz, hukuki süreçlerde doğruluk ve şeffaflığı esas alır.
              </p>
            </div>
            <div>
              <h3>Çalışma anlayışımız</h3>
              <p>
                Müvekkillerimizin sektörel ve kişisel ihtiyaçlarını dikkate
                alır; doktrin ve güncel içtihat araştırmalarıyla hukuki
                seçenekleri değerlendiririz.
              </p>
            </div>
            <div>
              <h3>Hizmetler</h3>
              <p>
                Türkiye genelinde hukuki uyuşmazlıkların çözümüne yönelik
                avukatlık ve danışmanlık hizmetleri sunulmaktadır.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
