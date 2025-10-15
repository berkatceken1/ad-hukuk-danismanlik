import Script from 'next/script';

interface StructuredDataProps {
    type: 'Organization' | 'Person' | 'LegalService' | 'BreadcrumbList' | 'WebPage';
    data: any;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
    const getStructuredData = () => {
        switch (type) {
            case 'Organization':
                return {
                    "@context": "https://schema.org",
                    "@type": "LegalService",
                    "name": "AD Hukuk ve Danışmanlık",
                    "alternateName": "AD Hukuk",
                    "description": "Profesyonel hukuki danışmanlık hizmetleri sunan hukuk bürosu",
                    "url": "https://adhukukvedanismanlik.com",
                    "logo": "https://adhukukvedanismanlik.com/logo/ad-hukuk-logo.png",
                    "image": "https://adhukukvedanismanlik.com/images/alideniz1.jpg",
                    "telephone": "+90-545-156-96-13",
                    "email": "info@adhukukvedanismanlik.com",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "Kayseri Merkez", // Gerçek adres bilgisi eklenebilir
                        "addressLocality": "Kayseri",
                        "addressRegion": "Kayseri",
                        "addressCountry": "TR",
                        "postalCode": "38000"
                    },
                    "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": "38.7312",
                        "longitude": "35.4787"
                    },
                    "openingHours": "Mo-Fr 09:00-18:00",
                    "priceRange": "$$",
                    "serviceArea": {
                        "@type": "GeoCircle",
                        "geoMidpoint": {
                            "@type": "GeoCoordinates",
                            "latitude": "38.7312",
                            "longitude": "35.4787"
                        },
                        "geoRadius": "100000"
                    },
                    "areaServed": "Türkiye",
                    "hasOfferCatalog": {
                        "@type": "OfferCatalog",
                        "name": "Hukuki Hizmetler",
                        "itemListElement": [
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Ticaret Hukuku",
                                    "description": "Şirket kuruluşu, birleşme, devir ve ticari sözleşmeler"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "İş Hukuku",
                                    "description": "İşçi-işveren ilişkileri ve iş mahkemeleri davaları"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Aile Hukuku",
                                    "description": "Boşanma, velayet ve aile içi şiddet konuları"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Ceza Hukuku",
                                    "description": "Ceza davalarında savunma ve suç duyurusu"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Gayrimenkul Hukuku",
                                    "description": "Tapu işlemleri, kira sözleşmeleri ve emlak alım-satım"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "İcra İflas",
                                    "description": "Alacak takibi, icra takipleri ve iflas süreçleri"
                                }
                            }
                        ]
                    },
                    "founder": {
                        "@type": "Person",
                        "name": "Av. Ali Deniz",
                        "jobTitle": "Kurucu Avukat",
                        "description": "Deneyimli ve uzman avukat",
                        "image": "https://adhukukvedanismanlik.com/images/alideniz1.jpg"
                    },
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "5.0",
                        "reviewCount": "50"
                    }
                };

            case 'Person':
                return {
                    "@context": "https://schema.org",
                    "@type": "Person",
                    "name": "Av. Ali Deniz",
                    "alternateName": "Ali Deniz",
                    "description": "Deneyimli ve uzman avukat",
                    "jobTitle": "Avukat",
                    "worksFor": {
                        "@type": "LegalService",
                        "name": "AD Hukuk ve Danışmanlık"
                    },
                    "image": "https://adhukukvedanismanlik.com/images/alideniz1.jpg",
                    "url": "https://adhukukvedanismanlik.com",
                    "sameAs": [
                        // Gerçek sosyal medya profilleri buraya eklenebilir
                        // "https://www.linkedin.com/in/ali-deniz-avukat",
                        // "https://www.instagram.com/ali_deniz_avukat"
                    ],
                    "knowsAbout": [
                        "Boşanma Avukatı",
                        "Ceza Avukatı",
                        "Miras Avukatı",
                        "Ticaret Avukatı",
                        "İş Avukatı",
                        "Gayrimenkul Avukatı",
                        "Kayseri Boşanma Avukatı",
                        "Kayseri Ceza Avukatı",
                        "Kayseri Miras Avukatı",
                        "Kayseri Ticaret Avukatı",
                        "Kayseri İş Avukatı",
                        "İyi Boşanma Avukatı Kayseri",
                        "En İyi Ceza Avukatı Kayseri",
                        "Ticaret Hukuku",
                        "İş Hukuku",
                        "Aile Hukuku",
                        "Ceza Hukuku",
                        "Gayrimenkul Hukuku",
                        "Miras Hukuku",
                        "İcra İflas Hukuku",
                        "Tüketici Hukuku",
                        "Vergi Hukuku",
                        "Sigorta Hukuku",
                        "Borçlar Hukuku",
                        "İdare Hukuku"
                    ],
                    "alumniOf": "Doğu Akdeniz Üniversitesi Hukuk Fakültesi",
                    "award": "Baro Üyeliği",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Kayseri",
                        "addressCountry": "TR"
                    }
                };

            case 'WebPage':
                return {
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "name": data.title,
                    "description": data.description,
                    "url": data.url,
                    "mainEntity": {
                        "@type": "LegalService",
                        "name": "AD Hukuk ve Danışmanlık"
                    },
                    "breadcrumb": data.breadcrumb,
                    "isPartOf": {
                        "@type": "WebSite",
                        "name": "AD Hukuk ve Danışmanlık",
                        "url": "https://adhukukvedanismanlik.com"
                    }
                };

            case 'BreadcrumbList':
                return {
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": data.breadcrumbs.map((item: any, index: number) => ({
                        "@type": "ListItem",
                        "position": index + 1,
                        "name": item.name,
                        "item": item.url
                    }))
                };

            default:
                return {};
        }
    };

    const structuredData = getStructuredData();

    return (
        <Script
            id={`structured-data-${type.toLowerCase()}`}
            type="application/ld+json"
            strategy="beforeInteractive"
        >
            {JSON.stringify(structuredData)}
        </Script>
    );
}
