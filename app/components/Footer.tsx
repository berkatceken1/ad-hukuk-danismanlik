import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-12">
                    <div className="lg:col-span-3">
                        <div className="flex flex-col items-center justify-center text-center gap-4 lg:min-h-full">
                            <Link
                                href="/"
                                className="w-20 h-20 flex items-center justify-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark"
                                aria-label="Ana sayfaya git"
                            >
                                <Image
                                    src="/logo/ad-hukuk-logo.png"
                                    alt="AD Hukuk ve Danışmanlık Logo"
                                    width={76}
                                    height={76}
                                    className="object-contain"
                                    style={{ width: 'auto', height: 'auto' }}
                                />
                            </Link>
                            <h3 className="max-w-48 text-lg sm:text-xl font-bold leading-tight font-playfair text-accent">AD Hukuk ve Danışmanlık</h3>
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <div className="flex items-center mb-6">
                            <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center mr-3">
                                <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold font-playfair">Site Haritası</h3>
                        </div>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/hakkimda" className="text-gray-200 hover:text-accent transition-colors duration-300 flex items-center group rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark">
                                    <svg className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                    Hakkımızda
                                </Link>
                            </li>
                            <li>
                                <Link href="/uzmanlik" className="text-gray-200 hover:text-accent transition-colors duration-300 flex items-center group rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark">
                                    <svg className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                    Çalışma Alanları
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-gray-200 hover:text-accent transition-colors duration-300 flex items-center group rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark">
                                    <svg className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/iletisim" className="text-gray-200 hover:text-accent transition-colors duration-300 flex items-center group rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark">
                                    <svg className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                    İletişim
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="lg:col-span-4">
                        <div className="flex items-center mb-6">
                            <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center mr-3">
                                <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold font-playfair">İletişim</h3>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-start group">
                                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                                    <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-gray-200 font-medium text-sm">Barbaros Mh. Ziya Sk. Aykol Ofis No: 13/2</p>
                                    <p className="text-gray-300 text-sm">Kocasinan / KAYSERİ</p>
                                </div>
                            </div>
                            <div className="flex items-center group">
                                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                                    <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <a href="tel:+905451569613" className="text-gray-200 hover:text-accent transition-colors font-medium text-sm rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark">
                                    +90 545 156 96 13
                                </a>
                            </div>
                            <div className="flex items-center group">
                                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                                    <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <a href="mailto:av.alideniz@outlook.com" className="text-gray-200 hover:text-accent transition-colors font-medium text-sm rounded-sm break-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark">
                                    av.alideniz@outlook.com
                                </a>
                            </div>
                            <div className="flex items-center group">
                                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                                    <svg className="h-5 w-5 text-accent" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </div>
                                <a href="https://www.instagram.com/av.alideniz" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-accent transition-colors font-medium text-sm rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark">
                                    Instagram
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-2 lg:col-span-3">
                        <div className="flex items-center mb-6">
                            <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center mr-3">
                                <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold font-playfair">Ofis Konumu</h3>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 shadow-xl">
                            <div className="relative w-full min-h-44 md:min-h-52 lg:min-h-36" style={{ paddingBottom: '62%' }}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3521.5694691033714!2d35.474183587833224!3d38.734494083495534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152b1300590a8f07%3A0x11365ae3555ce09e!2zQUQgSHVrdWsgdmUgRGFuxLHFn21hbmzEsWs!5e1!3m2!1str!2str!4v1760449581561!5m2!1str!2str"
                                    width="100%"
                                    height="100%"
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        border: 0
                                    }}
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

                <div className="border-t border-white/20 mt-16 pt-8">
                    <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                        <div className="flex items-center space-x-2 text-center md:text-left">
                            <div className="w-2 h-2 bg-accent rounded-full"></div>
                            <p className="text-gray-200 text-sm font-medium">
                                © {currentYear} Av. Ali Deniz - AD Hukuk ve Danışmanlık. Tüm hakları saklıdır.
                            </p>
                        </div>
                        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 md:justify-end">
                            <Link href="/gizlilik" className="text-gray-300 hover:text-accent text-sm transition-colors duration-300 hover:underline rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark">
                                Gizlilik Politikası
                            </Link>
                            <Link href="/kullanim-kosullari" className="text-gray-300 hover:text-accent text-sm transition-colors duration-300 hover:underline rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark">
                                Kullanım Koşulları
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
