'use client';

export default function IcraIflasPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <section className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair tracking-tight">İcra ve İflas</h1>
                    <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-100 max-w-3xl font-source-sans">
                        Alacak yönetimi, icra takipleri ve iflas süreçlerinde hızlı, etkin ve sonuç odaklı hizmet.
                    </p>
                </div>
            </section>

            <section className="py-12 sm:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-6">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 font-playfair">Uzmanlık Özeti</h2>
                        <p className="text-gray-700 leading-relaxed text-base sm:text-lg font-source-sans">
                            İlamsız ve ilamlı icra takipleri, itirazın iptali/kaldırılması, haciz ve satış süreçlerinde
                            hızlı aksiyon ve etkin tahsilat stratejileri geliştiriyoruz.
                        </p>
                        <ul className="space-y-3 text-gray-700 text-base sm:text-lg font-source-sans">
                            <li className="flex items-start"><span className="mt-2 mr-3 h-2 w-2 rounded-full bg-primary" />Ödeme emri, itiraz ve şikayet süreçleri</li>
                            <li className="flex items-start"><span className="mt-2 mr-3 h-2 w-2 rounded-full bg-primary" />Haciz, sıra cetveli ve satış işlemleri</li>
                            <li className="flex items-start"><span className="mt-2 mr-3 h-2 w-2 rounded-full bg-primary" />İflas erteleme ve konkordato danışmanlığı</li>
                            <li className="flex items-start"><span className="mt-2 mr-3 h-2 w-2 rounded-full bg-primary" />Çek, senet ve fatura alacakları takibi</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}


