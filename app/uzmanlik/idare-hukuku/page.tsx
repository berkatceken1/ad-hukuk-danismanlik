'use client';

export default function IdareHukukuPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <section className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair tracking-tight">İdare Hukuku</h1>
                    <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-100 max-w-3xl font-source-sans">
                        İdari işlemlere karşı iptal/tam yargı davaları ve ihale-ruhsat süreçlerinde temsil sağlıyoruz.
                    </p>
                </div>
            </section>

            <section className="py-12 sm:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-6">
                        <p className="text-gray-700 leading-relaxed text-base sm:text-lg font-source-sans">
                            İdari işlemlerin hukuka uygunluk denetiminde, süre ve usul güvenceleri çerçevesinde etkili başvuru ve dava
                            stratejileri geliştiriyoruz.
                        </p>
                        <ul className="space-y-3 text-gray-700 text-base sm:text-lg font-source-sans">
                            <li className="flex items-start"><span className="mt-2 mr-3 h-2 w-2 rounded-full bg-primary" />İptal ve tam yargı davaları</li>
                            <li className="flex items-start"><span className="mt-2 mr-3 h-2 w-2 rounded-full bg-primary" />İhale ve kamu sözleşmeleri</li>
                            <li className="flex items-start"><span className="mt-2 mr-3 h-2 w-2 rounded-full bg-primary" />Ruhsat/izin işlemleri ve itirazlar</li>
                            <li className="flex items-start"><span className="mt-2 mr-3 h-2 w-2 rounded-full bg-primary" />Disiplin ve memur işlemleri</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}

