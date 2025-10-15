import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Hakkımızda - Av. Ali Deniz | AD Hukuk ve Danışmanlık',
    description: 'AD Hukuk ve Danışmanlık: 2022\'den beri Kayseri\'de kurumsal ve sonuç odaklı hukuk hizmetleri. Av. Ali Deniz hakkında detaylı bilgi.',
    keywords: [
        'Ali Deniz hakkında',
        'Ali Deniz avukat',
        'Ali Deniz hukuk',
        'Ali Deniz hukuk danışmanlık',
        'AD hukuk danışmanlık',
        'hukuk bürosu hakkında',
        'Kayseri avukat',
        'Kayseri boşanma avukatı',
        'Kayseri ceza avukatı',
        'Kayseri miras avukatı',
        'Kayseri ticaret avukatı',
        'Kayseri iş avukatı',
        'iyi boşanma avukatı Kayseri',
        'en iyi ceza avukatı Kayseri',
        'en iyi miras avukatı Kayseri',
        'iyi ticaret avukatı Kayseri',
        'en iyi iş avukatı Kayseri',
        'güvenilir avukat Kayseri',
        'deneyimli avukat Kayseri',
        'AD hukuk',
        'avukat deneyim',
        'hukuk ofisi',
        'Doğu Akdeniz Üniversitesi'
    ],
    openGraph: {
        title: 'Hakkımızda - Av. Ali Deniz | AD Hukuk ve Danışmanlık',
        description: 'AD Hukuk ve Danışmanlık: 2022\'den beri Kayseri\'de kurumsal ve sonuç odaklı hukuk hizmetleri.',
        type: 'website',
        locale: 'tr_TR',
        url: 'https://adhukukvedanismanlik.com/hakkimda/',
    },
    alternates: {
        canonical: 'https://adhukukvedanismanlik.com/hakkimda/',
    },
};

export default function HakkimdaPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Ana İçerik */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Profil Fotoğrafı */}
                    <div className="order-2 lg:order-1">
                        <div className="relative">
                            <div className="w-full h-[620px] sm:h-[680px] md:h-[720px] relative rounded-2xl shadow-2xl overflow-hidden">
                                <Image
                                    src="/images/alideniz2.jpg"
                                    alt="Av. Ali Deniz - Profesyonel Portre"
                                    fill
                                    priority
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                                    className="object-cover object-top"
                                    style={{ objectPosition: 'center 35%' }}
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent rounded-full flex items-center justify-center shadow-lg">
                                <svg className="w-12 h-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Kurumsal Bilgiler */}
                    <div className="order-1 lg:order-2">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">AD Hukuk ve Danışmanlık</h2>
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Kuruluş</h3>
                                    <p className="text-gray-600">
                                        2022 yılında Kayseri’de faaliyete başlayan ofisimiz, hukuki süreçlerde hız, doğruluk ve
                                        şeffaflığı esas alarak müvekkil memnuniyetini en üst seviyede tutmayı amaçlar.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Yaklaşım</h3>
                                    <p className="text-gray-600">
                                        Kaliteli hizmetin yanında, müvekkillerimizin sektörel ve özel ihtiyaçlarına özgü yenilikçi
                                        çözümler üretir; doktrinsel ve güncel içtihat araştırmalarını titizlikle yürütürüz.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Hizmet Kapsamı</h3>
                                    <p className="text-gray-600">
                                        Uzman kadromuz ile dava, sözleşme ve danışmanlık başta olmak üzere ulusal ve
                                        uluslararası ölçekte tüm hukuki taleplere yanıt verir; süreçleri şeffaf ve
                                        etkin biçimde yönetiriz.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422A12.083 12.083 0 0112 21.5 12.083 12.083 0 013.84 10.578L10 14" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Eğitim ve Kariyer</h3>
                                    <p className="text-gray-600">
                                        Avukat Ali Deniz, 1999 yılında İzmir Bornova’da dünyaya gelmiştir. Aslen Nevşehir Kapadokyalıdır. Ortaöğrenimini Kayseri Lisesi’nde, lisans eğitimini ise Doğu Akdeniz Üniversitesi Hukuk Fakültesi’nde tamamlamıştır. AD Hukuk ve Danışmanlık bürosunun kurucu avukatı olan Ali Deniz, hâlen Kayseri'de mesleğini icra etmektedir.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Misyon ve Vizyon */}
                <div className="mt-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-lg shadow-lg p-8">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Misyonumuz</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Hızlı, doğru ve kalıcı hukuki çözümler üretmek; müvekkillerimizin haklarını etkin biçimde
                                korumak ve her aşamada şeffaf iletişimle güven tesis etmek. Sonuç odaklı ve titiz çalışma
                                disiplinini standart hâline getirmek.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8">
                            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Vizyonumuz</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Ulusal ve uluslararası alanda, etik ilkelere bağlı kalarak yenilikçi ve vizyoner yaklaşımıyla
                                sektöründe öncü bir hukuk ofisi olmak; teknolojiyi ve güncel içtihatları etkin kullanarak
                                hizmet kalitesini sürekli yükseltmek.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
