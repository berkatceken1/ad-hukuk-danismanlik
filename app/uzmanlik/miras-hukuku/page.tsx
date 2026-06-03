'use client';

export default function MirasHukukuPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <section className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair tracking-tight">Miras Hukuku</h1>
                    <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-100 max-w-3xl font-source-sans">
                        Tereke, saklı pay, vasiyet ve paylaşım süreçlerinde haklarınızı koruyarak süreci etkin yönetiyoruz.
                    </p>
                </div>
            </section>

            <section className="py-12 sm:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-6">
                        <p className="text-gray-700 leading-relaxed text-base sm:text-lg font-source-sans">
                            Veraset ilamı ve tereke tespitinden başlayarak mirasın reddi/kabulü, paylaşım, tenkis ve iptal davaları
                            dahil tüm aşamalarda kapsamlı danışmanlık ve temsil sunuyoruz.
                        </p>
                        <ul className="space-y-3 text-gray-700 text-base sm:text-lg font-source-sans">
                            <li className="flex items-start"><span className="mt-2 mr-3 h-2 w-2 rounded-full bg-primary" />Mirasın reddi/kabulü ve tereke tespiti</li>
                            <li className="flex items-start"><span className="mt-2 mr-3 h-2 w-2 rounded-full bg-primary" />Miras paylaşımı ve izale‑i şuyu</li>
                            <li className="flex items-start"><span className="mt-2 mr-3 h-2 w-2 rounded-full bg-primary" />Tenkis/iptal davaları, saklı pay</li>
                            <li className="flex items-start"><span className="mt-2 mr-3 h-2 w-2 rounded-full bg-primary" />Vasiyetname düzenleme, iptal ve tenfiz</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}

