import Image from "next/image";
import { blogPosts } from "../blog/posts";
import Icon from "./ui/Icon";
import ButtonLink from "./ui/ButtonLink";
import PracticeGrid from "./PracticeGrid";
import ArticleCard from "./ArticleCard";
import ScrollReveal from "./ScrollReveal";
import ContactSection from "./ContactSection";
import portrait from "../../public/images/alideniz.png";

export default function HomePage() {
  const featuredPosts = [2, 6, 3].map((id) =>
    blogPosts.find((post) => post.id === id)!,
  );

  return (
    <div className="home-page">
      <ScrollReveal />
      <section className="home-hero" aria-labelledby="hero-heading">
        <div className="container hero-layout">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-line" />
              AD HUKUK VE DANIŞMANLIK
            </p>
            <h1 id="hero-heading">
              Bireyler ve kurumlar için avukatlık ve hukuki danışmanlık.
            </h1>
            <div className="hero-actions">
              <ButtonLink href="/iletisim">Bizimle iletişime geçin</ButtonLink>
            </div>
          </div>
          <div className="hero-visual hero-visual-portrait">
            <div className="hero-image">
              <Image
                src={portrait}
                alt="Av. Ali Deniz"
                fill
                quality={85}
                sizes="(max-width: 472px) calc(100vw - 52px), 420px"
                priority
                fetchPriority="high"
              />
              <span className="image-corner" />
            </div>
            <div className="hero-image-caption">
              <Icon name="scale" />
              <span>
                <strong>Av. Ali Deniz</strong>
                <br />
                Kayseri Barosu
              </span>
            </div>
          </div>
        </div>
        <div className="container hero-bottom">
          <span>AD HUKUK VE DANIŞMANLIK</span>
          <a href="#calisma-alanlari">
            Büromuzu keşfedin
            <Icon name="down" />
          </a>
        </div>
      </section>

      <section
        id="calisma-alanlari"
        className="section-pad practices-section"
        aria-labelledby="practices-heading"
      >
        <div className="container">
          <div className="section-heading practice-section-header">
            <div>
              <h2 id="practices-heading">Çalışma alanlarımız</h2>
            </div>
            <ButtonLink href="/calisma-alanlari" variant="text">
              Tüm çalışma alanları
            </ButtonLink>
          </div>
          <PracticeGrid limit={6} compact />
        </div>
      </section>

      <section
        id="buromuz-hakkinda"
        className="home-about section-pad"
        aria-labelledby="about-heading"
      >
        <div className="container">
          <div className="office-introduction">
            <div className="office-introduction-image" data-scroll-reveal>
              <Image
                src="/images/hukuki-calisma-masasi.webp"
                alt="Açık kitap, dolma kalem ve adalet terazisinden oluşan temsili hukuk çalışma masası"
                fill
                sizes="(max-width: 760px) 90vw, 45vw"
              />
            </div>
            <div className="office-introduction-copy">
              <p className="eyebrow">BÜROMUZ HAKKINDA</p>
              <h2 id="about-heading">AD Hukuk ve Danışmanlık</h2>
              <div className="office-introduction-bottom">
                <p>
                  Kayseri Barosu’na kayıtlı Av. Ali Deniz tarafından kurulan
                  büromuz; dava takibi, sözleşmeler ve hukuki danışmanlık
                  alanlarında hizmet verir.
                </p>
                <ButtonLink href="/hakkimda" variant="outline">
                  Hakkımızda
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section-pad articles-section"
        aria-labelledby="articles-heading"
      >
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">HUKUKA DAİR</p>
              <h2 id="articles-heading">Güncel yazılar.</h2>
            </div>
            <ButtonLink href="/blog" variant="text">
              Tüm makaleler
            </ButtonLink>
          </div>
          <div className="articles-grid">
            {featuredPosts.map((post) => (
              <ArticleCard key={post.id} post={post} compact />
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
