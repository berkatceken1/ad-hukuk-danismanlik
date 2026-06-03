'use client';

export default function SigortaHukukuPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <section className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair tracking-tight">Sigorta Hukuku</h1>
                    <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-100 max-w-3xl font-source-sans">
                        Poliçe teminatları, tazminat talepleri ve rücu davalarında profesyonel destek sunuyoruz.
                    </p>
                </div>
            </section>

            <section className="py-12 sm:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-6">
                        <p className="text-gray-700 leading-relaxed text-base sm:text-lg font-source-sans">
                            Zarar tespiti, eksper süreçleri ve teminat dışı itirazların yönetiminde haklarınızı güçlü biçimde savunuruz.
                        </p>
                        <ul className="space-y-3 text-gray-700 text-base sm:text-lg font-source-sans">
                            <li className="flex items-start"><span className="mt-2 mr-3 h-2 w-2 rounded-full bg-primary" />Tazminat talepleri ve hesaplamaları</li>
                            <li className="flex items-start"><span className="mt-2 mr-3 h-2 w-2 rounded-full bg-primary" />Poliçe yorumları ve teminat kapsamı</li>
                            <li className="flex items-start"><span className="mt-2 mr-3 h-2 w-2 rounded-full bg-primary" />Rücu ve halefiyet davaları</li>
                            <li className="flex items-start"><span className="mt-2 mr-3 h-2 w-2 rounded-full bg-primary" />Eksper ve bilirkişi süreç yönetimi</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}

