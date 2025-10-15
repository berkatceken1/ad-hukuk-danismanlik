'use client';

import Link from 'next/link';

export default function TuketiciHukukuPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <section className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair tracking-tight">Tüketici Hukuku</h1>
                    <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-100 max-w-3xl font-source-sans">
                        Ayıplı mal/hizmet, mesafeli sözleşmeler ve abonelik işlemlerinde tüketici haklarınızı koruyoruz.
                    </p>
                </div>
            </section>

            <section className="py-12 sm:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-6">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 font-playfair">Uzmanlık Özeti</h2>
                        <p className="text-gray-700 leading-relaxed text-base sm:text-lg font-source-sans">
                            Ayıplı mal ve hizmetlerden doğan iade/bedel iadesi süreçleri, hakem heyeti başvuruları ve
                            tüketici mahkemesi davalarında hızlı ve etkin temsil sağlıyoruz.
                        </p>
                        <ul className="space-y-3 text-gray-700 text-base sm:text-lg font-source-sans">
                            <li className="flex items-start"><span className="mt-2 mr-3 h-2 w-2 rounded-full bg-primary" />Ayıplı mal/hizmet uyuşmazlıkları</li>
                            <li className="flex items-start"><span className="mt-2 mr-3 h-2 w-2 rounded-full bg-primary" />Tüketici hakem heyeti başvuruları</li>
                            <li className="flex items-start"><span className="mt-2 mr-3 h-2 w-2 rounded-full bg-primary" />Mesafeli sözleşme ve iade süreçleri</li>
                            <li className="flex items-start"><span className="mt-2 mr-3 h-2 w-2 rounded-full bg-primary" />Abonelik ve haksız şart itirazları</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}


