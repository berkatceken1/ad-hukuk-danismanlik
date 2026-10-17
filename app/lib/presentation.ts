type PracticePresentation = { image: string; summary: string };

export const practicePresentation: Record<string, PracticePresentation> = {
  "ticaret-hukuku": {
    image: "/images/alan-ticaret-hukuku-v2.webp",
    summary: "Şirketler, ticari sözleşmeler ve ortaklık uyuşmazlıkları.",
  },
  "is-hukuku": {
    image: "/images/alan-is-hukuku-v2.webp",
    summary: "İşçi ve işveren hakları, tazminat ve işe iade süreçleri.",
  },
  "aile-hukuku": {
    image: "/images/alan-aile-hukuku-v2.webp",
    summary: "Boşanma, velayet, nafaka ve mal paylaşımı.",
  },
  "ceza-hukuku": {
    image: "/images/alan-ceza-hukuku-v2.webp",
    summary: "Soruşturma ve kovuşturmada hukuki temsil.",
  },
  "gayrimenkul-hukuku": {
    image: "/images/alan-gayrimenkul-hukuku-v2.webp",
    summary: "Tapu, kira ve taşınmaz uyuşmazlıkları.",
  },
  "icra-iflas": {
    image: "/images/alan-icra-iflas-v2.webp",
    summary: "Alacak takibi, icra işlemleri ve borca itiraz.",
  },
  "miras-hukuku": {
    image: "/images/alan-miras-hukuku-v2.webp",
    summary: "Vasiyetname, miras paylaşımı ve miras uyuşmazlıkları.",
  },
  "sigorta-hukuku": {
    image: "/images/hukuki-calisma-masasi.webp",
    summary: "Sigorta tazminatları ve poliçeden doğan uyuşmazlıklar.",
  },
  "borclar-hukuku": {
    image: "/images/alan-icra-iflas-v2.webp",
    summary: "Sözleşmeler, alacaklar ve tazminat talepleri.",
  },
  "tuketici-hukuku": {
    image: "/images/alan-is-hukuku-v2.webp",
    summary: "Tüketici sözleşmeleri ve ayıplı mal veya hizmetler.",
  },
  "idare-hukuku": {
    image: "/images/alan-ticaret-hukuku-v2.webp",
    summary: "İdari işlemler, iptal ve tam yargı davaları.",
  },
  "vergi-hukuku": {
    image: "/images/alan-icra-iflas-v2.webp",
    summary: "Vergi işlemleri ve vergi uyuşmazlıkları.",
  },
};

const articleCategories: Record<string, string> = {
  "İş Hukuku": "is-hukuku",
  "Aile Hukuku": "aile-hukuku",
  "Ticaret Hukuku": "ticaret-hukuku",
  "İcra İflas Hukuku": "icra-iflas",
  "Gayrimenkul Hukuku": "gayrimenkul-hukuku",
  "Ceza Hukuku": "ceza-hukuku",
  "Miras Hukuku": "miras-hukuku",
  "Sigorta Hukuku": "sigorta-hukuku",
};

export function articleImage(category: string, fallback: string) {
  return practicePresentation[articleCategories[category]]?.image || fallback;
}
