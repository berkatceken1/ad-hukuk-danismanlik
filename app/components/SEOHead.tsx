import Head from 'next/head';

interface SEOHeadProps {
    title?: string;
    description?: string;
    canonical?: string;
    ogImage?: string;
    noindex?: boolean;
}

export default function SEOHead({
    title,
    description,
    canonical,
    ogImage = '/images/alideniz1.jpg',
    noindex = false
}: SEOHeadProps) {
    const siteTitle = 'AD Hukuk ve Danışmanlık';
    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const fullDescription = description || 'Avukat Ali Deniz ile profesyonel hukuki danışmanlık hizmetleri. Ticaret hukuku, iş hukuku, aile hukuku ve daha fazlası için uzman avukat.';

    return (
        <Head>
            <title>{fullTitle}</title>
            <meta name="description" content={fullDescription} />
            <meta name="robots" content={noindex ? 'noindex,nofollow' : 'index,follow'} />

            {canonical && <link rel="canonical" href={canonical} />}

            {/* Open Graph */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={fullDescription} />
            <meta property="og:type" content="website" />
            <meta property="og:locale" content="tr_TR" />
            <meta property="og:site_name" content={siteTitle} />
            <meta property="og:image" content={`https://adhukukvedanismanlik.com${ogImage}`} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={fullDescription} />
            <meta name="twitter:image" content={`https://adhukukvedanismanlik.com${ogImage}`} />

            {/* Additional SEO */}
            <meta name="author" content="Av. Ali Deniz" />
            <meta name="publisher" content="AD Hukuk ve Danışmanlık" />
            <meta name="copyright" content="AD Hukuk ve Danışmanlık" />
            <meta name="language" content="tr" />
            <meta name="geo.region" content="TR-38" />
            <meta name="geo.placename" content="Kayseri" />
            <meta name="geo.position" content="38.7312;35.4787" />
            <meta name="ICBM" content="38.7312, 35.4787" />

            {/* Mobile optimization */}
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="theme-color" content="#5d0c0c" />

            {/* Preconnect to external domains */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link rel="preconnect" href="https://www.google-analytics.com" />
        </Head>
    );
}
