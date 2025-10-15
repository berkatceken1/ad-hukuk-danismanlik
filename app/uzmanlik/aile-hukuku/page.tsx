'use client';

export default function AileHukukuPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <section className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair tracking-tight">Aile Hukuku</h1>
                    <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-100 max-w-3xl font-source-sans">
                        Boşanma, velayet, nafaka ve mal rejimi konularında hassas, çözüm odaklı ve hak temelli yaklaşım.
                    </p>
                </div>
            </section>

            <section className="py-12 sm:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-6">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 font-playfair">Uzmanlık Özeti</h2>
                        <p className="text-gray-700 leading-relaxed text-base sm:text-lg font-source-sans">
                            Aile içi uyuşmazlıklarda süreci gereksiz biçimde uzatmadan, müvekkil lehine sürdürülebilir çözümler
                            üretmeye ve hak kayıplarını önlemeye odaklanırız. Çocuk üstün yararı ilkesini merkeze alırız.
                        </p>
                        <ul className="space-y-3 text-gray-700 text-base sm:text-lg font-source-sans">
                            <li className="flex items-start"><span className="mt-2 mr-3 h-2 w-2 rounded-full bg-primary" />Anlaşmalı/çekişmeli boşanma ve protokol hazırlığı</li>
                            <li className="flex items-start"><span className="mt-2 mr-3 h-2 w-2 rounded-full bg-primary" />Velayet, kişisel ilişki ve nafaka talepleri</li>
                            <li className="flex items-start"><span className="mt-2 mr-3 h-2 w-2 rounded-full bg-primary" />Mal rejimi tasfiyesi ve katkı payı alacağı</li>
                            <li className="flex items-start"><span className="mt-2 mr-3 h-2 w-2 rounded-full bg-primary" />6284 kapsamında koruyucu tedbirler</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}


