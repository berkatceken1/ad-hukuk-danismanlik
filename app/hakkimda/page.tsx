import { Metadata } from 'next';

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
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Ana İçerik */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <section className="max-w-5xl mx-auto">
                    <div className="mb-10 border-l-4 border-accent pl-5">
                        <p className="text-sm font-semibold text-primary mb-2">Hakkımızda</p>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">AD Hukuk ve Danışmanlık</h1>
                    </div>

                    {/* Kurumsal Bilgiler */}
                    <div className="divide-y divide-gray-200 border-y border-gray-200">
                        <div className="grid grid-cols-1 gap-3 py-6 sm:grid-cols-[220px_1fr] sm:gap-8">
                            <h3 className="text-lg font-semibold text-gray-900">Kuruluş</h3>
                            <p className="text-gray-600 leading-relaxed">
                                2022 yılında Kayseri merkezli olarak faaliyete başlayan ofisimiz, hukuki süreçlerde
                                hız, doğruluk ve şeffaflığı esas alarak müvekkil memnuniyetini en üst seviyede tutmayı amaçlar.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-3 py-6 sm:grid-cols-[220px_1fr] sm:gap-8">
                            <h3 className="text-lg font-semibold text-gray-900">Yaklaşım</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Kaliteli hizmetin yanında, müvekkillerimizin sektörel ve özel ihtiyaçlarına özgü yenilikçi
                                çözümler üretir; doktrinsel ve güncel içtihat araştırmalarını titizlikle yürütürüz.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-3 py-6 sm:grid-cols-[220px_1fr] sm:gap-8">
                            <h3 className="text-lg font-semibold text-gray-900">Hizmet Kapsamı</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Dava, sözleşme ve danışmanlık başta olmak üzere Türkiye genelindeki hukuki taleplere
                                yanıt verir; süreçleri şeffaf ve etkin biçimde yönetiriz.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-3 py-6 sm:grid-cols-[220px_1fr] sm:gap-8">
                            <h3 className="text-lg font-semibold text-gray-900">Eğitim ve Kariyer</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Avukat Ali Deniz, 1999 yılında İzmir Bornova’da dünyaya gelmiştir. Aslen Nevşehir Kapadokyalıdır. Ortaöğrenimini Kayseri Lisesi’nde, lisans eğitimini ise Doğu Akdeniz Üniversitesi Hukuk Fakültesi’nde tamamlamıştır. AD Hukuk ve Danışmanlık bürosunun kurucu avukatı olan Ali Deniz, hâlen Kayseri'de mesleğini icra etmektedir.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
