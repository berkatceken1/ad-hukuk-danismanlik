import PageIntro from "./components/ui/PageIntro";
import ButtonLink from "./components/ui/ButtonLink";

export default function NotFound() {
  return (
    <>
      <PageIntro
        eyebrow="404"
        title="Aradığınız sayfa bulunamadı."
        description="Sayfa taşınmış olabilir. Ana sayfadan çalışma alanlarına ve iletişim bilgilerimize ulaşabilirsiniz."
      />
      <div className="container section-pad">
        <ButtonLink href="/">Ana sayfaya dön</ButtonLink>
      </div>
    </>
  );
}
