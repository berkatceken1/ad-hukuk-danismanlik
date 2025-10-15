'use client';

import Link from 'next/link';

export default function IsHukukuPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <section className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair tracking-tight">İş Hukuku</h1>
                    <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-100 max-w-3xl font-source-sans">
                        İşçi-işveren ilişkilerinden doğan uyuşmazlıkların önlenmesi ve çözümünde stratejik danışmanlık;
                        dava ve arabuluculuk süreçlerinde etkin temsil.
                    </p>
                </div>
            </section>

            <section className="py-12 sm:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-6">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 font-playfair">Uzmanlık Özeti</h2>
                        <p className="text-gray-700 leading-relaxed text-base sm:text-lg font-source-sans">
                            Kıdem/ihbar tazminatları, fazla mesai, işe iade, iş kazası ve mobbing iddiaları
                            gibi başlıklarda hak kaybı yaşanmaması için proaktif değerlendirme ve dava stratejisi oluşturuyoruz.
                        </p>
                        <ul className="space-y-3 text-gray-700 text-base sm:text-lg font-source-sans">
                            <li className="flex items-start"><span className="mt-2 mr-3 h-2 w-2 rounded-full bg-primary" />Arabuluculuk başvurusu ve süreç yönetimi</li>
                            <li className="flex items-start"><span className="mt-2 mr-3 h-2 w-2 rounded-full bg-primary" />Tazminat ve alacak davaları</li>
                            <li className="flex items-start"><span className="mt-2 mr-3 h-2 w-2 rounded-full bg-primary" />İşe iade davaları ve icrası</li>
                            <li className="flex items-start"><span className="mt-2 mr-3 h-2 w-2 rounded-full bg-primary" />İç yönerge ve sözleşme revizyonları</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}


