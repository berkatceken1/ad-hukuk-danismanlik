import { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'İletişim - Av. Ali Deniz',
    description: 'Avukat Ali Deniz ile iletişim bilgileri. Hukuki danışmanlık için iletişime geçin.',
};

export default function IletisimPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-primary text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">İletişim</h1>
                        <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                            Hukuki sorularınız için iletişim bilgilerim aşağıda yer almaktadır.
                            Size en kısa sürede dönüş yapacağım.
                        </p>
                    </div>
                </div>
            </div>

            {/* Ana İçerik */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* İletişim Bilgileri */}
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">İletişim Bilgileri</h2>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Adres</h3>
                                    <p className="text-gray-600">
                                        Barbaros Mh. Ziya Sk. Aykol Ofis No: 13/2<br />
                                        Kocasinan / KAYSERİ
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Telefon</h3>
                                    <p className="text-gray-600">
                                        <a href="tel:+905451569613" className="hover:text-primary transition-colors">
                                            +90 545 156 96 13
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">E-posta</h3>
                                    <p className="text-gray-600">
                                        <a href="mailto:av.alideniz@outlook.com" className="hover:text-primary transition-colors">
                                            av.alideniz@outlook.com
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Çalışma Saatleri</h3>
                                    <p className="text-gray-600">
                                        Pazartesi - Cuma: 08:30 - 20:00<br />
                                        Cumartesi: 10:00 - 15:00<br />
                                        Pazar: Kapalı
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Ofis Konumu */}
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Ofis Konumu</h3>
                        <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                            <div className="relative w-full" style={{ paddingBottom: '75%' }}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3521.5694691033714!2d35.474183587833224!3d38.734494083495534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152b1300590a8f07%3A0x11365ae3555ce09e!2zQUQgSHVrdWsgdmUgRGFuxLHFn21hbmzEsWs!5e1!3m2!1str!2str!4v1760449581561!5m2!1str!2str"
                                    width="100%"
                                    height="100%"
                                    style={{ position: 'absolute', top: 0, left: 0, border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="w-full h-full"
                                    title="AD Hukuk ve Danışmanlık Ofis Konumu"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
