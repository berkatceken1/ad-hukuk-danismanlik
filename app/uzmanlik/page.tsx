import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Çalışma Alanları - Av. Ali Deniz | Hukuk Danışmanlığı',
    description: 'Ticaret hukuku, iş hukuku, aile hukuku, ceza hukuku, gayrimenkul hukuku ve daha fazlası. Av. Ali Deniz\'in uzmanlık alanlarını keşfedin. Profesyonel hukuki danışmanlık hizmetleri.',
    keywords: [
        'uzmanlık alanları',
        'Ali Deniz avukat',
        'Ali Deniz hukuk',
        'AD hukuk danışmanlık',
        'boşanma avukatı',
        'ceza avukatı',
        'miras avukatı',
        'ticaret avukatı',
        'iş avukatı',
        'gayrimenkul avukatı',
        'ticaret hukuku',
        'iş hukuku',
        'aile hukuku',
        'ceza hukuku',
        'gayrimenkul hukuku',
        'miras hukuku',
        'icra iflas',
        'hukuk danışmanlığı',
        'avukat uzmanlık',
        'hukuki hizmetler',
        'Kayseri avukat',
        'Kayseri boşanma avukatı',
        'Kayseri ceza avukatı',
        'Kayseri miras avukatı',
        'Kayseri ticaret avukatı',
        'Kayseri iş avukatı',
        'Kayseri gayrimenkul avukatı',
        'iyi boşanma avukatı Kayseri',
        'en iyi ceza avukatı Kayseri',
        'en iyi miras avukatı Kayseri',
        'iyi ticaret avukatı Kayseri',
        'en iyi iş avukatı Kayseri',
        'güvenilir avukat Kayseri',
        'deneyimli avukat Kayseri'
    ],
    openGraph: {
        title: 'Çalışma Alanları - Av. Ali Deniz',
        description: 'Ticaret hukuku, iş hukuku, aile hukuku ve daha fazlası. Av. Ali Deniz\'in uzmanlık alanlarını keşfedin.',
        type: 'website',
        locale: 'tr_TR',
        url: 'https://adhukukvedanismanlik.com/uzmanlik/',
    },
    alternates: {
        canonical: 'https://adhukukvedanismanlik.com/uzmanlik/',
    },
};

export default function UzmanlikPage() {
    const expertiseAreas = [
        {
            title: 'Ticaret Hukuku',
            slug: 'ticaret-hukuku',
            description: 'Şirket kuruluşundan sözleşme yönetimine, ticari süreçlerde kurumsal ve sonuç odaklı danışmanlık.',
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            ),
        },
        {
            title: 'İş Hukuku',
            slug: 'is-hukuku',
            description: 'Çalışan ve işverenler için uyuşmazlıkların önlenmesi ve çözümünde stratejik destek.',
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
        },
        {
            title: 'Aile Hukuku',
            slug: 'aile-hukuku',
            description: 'Boşanma ve aile uyuşmazlıklarında hassas, çözüm odaklı ve hak temelli yaklaşım.',
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            ),
        },
        {
            title: 'Ceza Hukuku',
            slug: 'ceza-hukuku',
            description: 'Soruşturma ve kovuşturma aşamalarında etkin savunma ve hakların korunması.',
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
            ),
        },
        {
            title: 'Gayrimenkul Hukuku',
            slug: 'gayrimenkul-hukuku',
            description: 'Proje gelişimi, tapu ve kira süreçlerinde hızlı ve güvenli çözümler.',
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            ),
        },
        {
            title: 'İcra İflas Hukuku',
            slug: 'icra-iflas',
            description: 'Alacak yönetimi, icra takipleri ve iflas süreçlerinde etkin ve hızlı sonuç.',
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        },
        {
            title: 'Tüketici Hukuku',
            slug: 'tuketici-hukuku',
            description: 'Ayıplı mal/hizmet, mesafeli sözleşmeler ve hakem heyeti başvurularında etkin çözümler.',
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18v6H3V3zm0 8h18v10H3V11zm5 2v6m4-6v6m4-6v6" />
                </svg>
            ),
        },
        {
            title: 'Vergi Hukuku',
            slug: 'vergi-hukuku',
            description: 'Vergi tarhiyatları, uzlaşma ve dava süreçlerinde stratejik temsil.',
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-3.866 0-7 1.79-7 4v6h14v-6c0-2.21-3.134-4-7-4zm0 0V4m0 0l-2 2m2-2l2 2" />
                </svg>
            ),
        },
        {
            title: 'Sigorta Hukuku',
            slug: 'sigorta-hukuku',
            description: 'Tazminat talepleri, poliçe yorumları ve rücu davalarında profesyonel destek.',
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l7 4v6c0 5-3.5 9.74-7 10-3.5-.26-7-5-7-10V6l7-4z" />
                </svg>
            ),
        },
        {
            title: 'Miras Hukuku',
            slug: 'miras-hukuku',
            description: 'Tereke, paylaşım, saklı pay ve vasiyet süreçlerinde kapsamlı danışmanlık.',
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4l4 4-4 4-4-4 4-4zm-6 10h12v6H6v-6z" />
                </svg>
            ),
        },
        {
            title: 'Borçlar Hukuku',
            slug: 'borclar-hukuku',
            description: 'Sözleşmeler, haksız fiil ve sebepsiz zenginleşme kaynaklı uyuşmazlıklar.',
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h10M7 12h10M7 17h10" />
                </svg>
            ),
        },
        {
            title: 'İdare Hukuku',
            slug: 'idare-hukuku',
            description: 'İptal/tam yargı davaları, ihale ve ruhsat süreçlerinde temsil.',
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M5 7v10h14V7M9 7V4h6v3" />
                </svg>
            ),
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Çalışma Alanları */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {expertiseAreas.map((area) => (
                        <div key={area.slug} className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100/50 relative overflow-hidden h-full flex flex-col">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl flex items-center justify-center text-primary mb-6">
                                {area.icon}
                            </div>
                            <h3 className="relative z-10 text-xl font-bold text-gray-900 mb-4 font-playfair group-hover:text-primary transition-colors duration-300">{area.title}</h3>
                            <p className="relative z-10 text-gray-600 leading-relaxed font-source-sans flex-1">{area.description}</p>

                            <div className="relative z-10 mt-8 pt-5 border-t border-gray-100">
                                <Link href={`/uzmanlik/${area.slug}`} prefetch={false} className="inline-flex items-center text-primary hover:text-primary-dark font-semibold text-sm sm:text-base transition-all duration-300 group-hover:translate-x-1">
                                    Detaylı Bilgi
                                    <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
