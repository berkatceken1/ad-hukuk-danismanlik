'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function HomePage() {
    const imageRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const badgeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                    } else {
                        entry.target.classList.remove('animate');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (imageRef.current) observer.observe(imageRef.current);
        if (contentRef.current) observer.observe(contentRef.current);
        if (badgeRef.current) observer.observe(badgeRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.06]">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-18">
                    <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-14 items-center">
                        {/* Sol taraf - İçerik */}
                        <div className="max-w-xl mx-auto text-center lg:mx-0 lg:text-left">
                            {/* Başlık */}
                            <div>
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-playfair tracking-tight">
                                    Av. Ali Deniz
                                </h1>
                                <p className="mt-3 text-base sm:text-lg text-accent/90 font-source-sans font-medium">
                                    AD Hukuk ve Danışmanlık
                                </p>
                            </div>

                            {/* Açıklama */}
                            <div className="mt-6">
                                <p className="text-base sm:text-lg lg:text-xl text-white/85 leading-relaxed font-source-sans font-light">
                                    Hukuki süreçlerinizde profesyonel temsil ve danışmanlık hizmeti sunulmaktadır.
                                </p>
                            </div>


                            {/* CTA Butonları */}
                            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                                <Link
                                    href="/iletisim"
                                    prefetch={false}
                                    className="inline-flex min-h-12 items-center justify-center rounded-md bg-accent px-6 text-sm sm:text-base font-semibold text-primary shadow-md transition-[background-color,box-shadow,transform] duration-300 hover:bg-accent/90 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark motion-safe:hover:-translate-y-0.5 active:translate-y-0 font-source-sans"
                                >
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    Danışmanlık
                                </Link>
                                <Link
                                    href="/hakkimda"
                                    prefetch={false}
                                    className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/70 px-6 text-sm sm:text-base font-semibold text-white transition-[background-color,color,border-color,box-shadow,transform] duration-300 hover:border-white hover:bg-white hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark motion-safe:hover:-translate-y-0.5 active:translate-y-0 font-source-sans"
                                >
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    Hakkımızda
                                </Link>
                            </div>
                        </div>

                        {/* Sağ taraf - Profesyonel Fotoğraf */}
                        <div className="mt-6 lg:mt-0">
                            <div className="relative group mx-auto max-w-[520px] lg:ml-auto">
                                {/* Ana Fotoğraf Container */}
                                <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[460px] overflow-hidden rounded-xl shadow-xl ring-1 ring-white/15 transition-shadow duration-500 group-hover:shadow-2xl">
                                    {/* Fotoğraf */}
                                    <Image
                                        src="/images/alideniz1.jpg"
                                        alt="Av. Ali Deniz - Profesyonel Fotoğraf"
                                        fill
                                        className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-[1.025]"
                                        style={{ objectPosition: 'center 30%' }}
                                        priority
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                                    />

                                    {/* Subtle Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/10 via-transparent to-primary-light/15"></div>

                                    {/* Border Gradient Effect */}
                                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent/15 via-transparent to-primary/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>

                                {/* Floating Info Card */}
                                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md rounded-lg p-3 shadow-lg border border-gray-100/70 sm:right-auto sm:min-w-[260px]">
                                    <div className="flex items-center space-x-3">
                                        {/* Profile Icon */}
                                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-md">
                                            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-sm sm:text-base font-bold text-gray-900 font-playfair">
                                                Av. Ali Deniz
                                            </h3>
                                            <p className="text-xs sm:text-sm text-gray-600 font-source-sans font-medium">
                                                Avukat
                                            </p>
                                            <div className="mt-1 flex items-center">
                                                <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                                                <span className="text-xs text-gray-500 font-source-sans">
                                                    Temsil ve danışmanlık
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Decorative Elements */}
                                <div className="absolute top-5 right-5 w-2.5 h-2.5 bg-accent/50 rounded-full"></div>
                                <div className="absolute top-10 right-10 w-2 h-2 bg-white/30 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Çalışma Alanları */}
            <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%235d0c0c' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-full mb-6 shadow-lg">
                            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 font-playfair tracking-tight">
                            Çalışma Alanlarımız
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Ticaret Hukuku',
                                slug: 'ticaret-hukuku',
                                description: 'Şirket kuruluşu, birleşme, devir ve ticari sözleşmeler',
                                icon: (
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                )
                            },
                            {
                                title: 'İş Hukuku',
                                slug: 'is-hukuku',
                                description: 'İşçi-işveren ilişkileri ve iş mahkemeleri davaları',
                                icon: (
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                )
                            },
                            {
                                title: 'Aile Hukuku',
                                slug: 'aile-hukuku',
                                description: 'Boşanma, velayet ve aile içi şiddet konuları',
                                icon: (
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                )
                            },
                            {
                                title: 'Ceza Hukuku',
                                slug: 'ceza-hukuku',
                                description: 'Ceza davalarında savunma ve suç duyurusu',
                                icon: (
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                )
                            },
                            {
                                title: 'Gayrimenkul Hukuku',
                                slug: 'gayrimenkul-hukuku',
                                description: 'Tapu işlemleri, kira sözleşmeleri ve emlak alım-satım',
                                icon: (
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                )
                            },
                            {
                                title: 'İcra İflas Hukuku',
                                slug: 'icra-iflas',
                                description: 'Alacak takibi, icra takipleri ve iflas süreçleri',
                                icon: (
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                )
                            }
                        ].map((area, index) => (
                            <div key={index} className="group bg-white rounded-2xl shadow-lg p-6 sm:p-8 transition-[box-shadow,transform,border-color] duration-300 hover:border-primary/10 hover:shadow-xl motion-safe:hover:-translate-y-1 border border-gray-100/50 relative overflow-hidden">
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl flex items-center justify-center text-primary mb-6 transition-transform duration-300 motion-safe:group-hover:scale-[1.04]">
                                        {area.icon}
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 font-playfair group-hover:text-primary transition-colors duration-300">{area.title}</h3>
                                    <p className="text-gray-600 mb-6 text-sm sm:text-base font-source-sans leading-relaxed">{area.description}</p>
                                    <Link
                                        href={`/uzmanlik/${area.slug}`}
                                        prefetch={false}
                                        className="inline-flex items-center rounded-sm text-primary hover:text-primary-dark font-semibold text-sm sm:text-base font-source-sans transition-[color,transform] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 motion-safe:group-hover:translate-x-0.5"
                                    >
                                        Detaylı Bilgi
                                        <svg className="w-4 h-4 ml-1 transition-transform duration-300 motion-safe:group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Tüm Çalışma Alanları Butonu */}
                    <div className="text-center mt-12">
                        <Link
                            href="/uzmanlik"
                            prefetch={false}
                            className="inline-flex items-center bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition-[background-image,box-shadow,transform] duration-300 hover:from-primary-light hover:to-primary hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 motion-safe:hover:-translate-y-0.5 active:translate-y-0"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                            Tüm Çalışma Alanları
                            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Hizmet Alanları */}
            <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%235d0c0c' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                        {/* Sol taraf - Profesyonel Hukuk Fotoğrafı */}
                        <div ref={imageRef} className="order-1 animate-slide-in-left w-full">
                            <div className="relative group">
                                <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[500px] relative overflow-hidden rounded-2xl shadow-2xl transition-shadow duration-500 group-hover:shadow-2xl">
                                    <Image
                                        src="/images/hukukgorsel.png"
                                        alt="Profesyonel Hukuk Ofisi - Adalet Terazisi ve Hukuk Kitapları"
                                        fill
                                        className="object-cover object-left transition-transform duration-700 motion-safe:group-hover:scale-[1.025]"
                                        priority
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                                    />

                                    {/* Soldan Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-transparent"></div>

                                    {/* Hover Border Effect */}
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>

                                {/* Floating Badge */}
                                <div ref={badgeRef} className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-white/98 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-xl border border-gray-100/50 max-w-xs transition-[box-shadow,transform] duration-300 motion-safe:group-hover:-translate-y-1 group-hover:shadow-2xl animate-fade-in-up" style={{ transitionDelay: '0.5s' }}>
                                    <div className="flex items-center space-x-2 sm:space-x-3">
                                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center shadow-lg">
                                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="text-xs sm:text-sm font-bold text-gray-900 font-playfair">Profesyonel</div>
                                            <div className="text-xs text-gray-600 font-source-sans">Hukuki Hizmet</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Decorative Elements */}
                                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-2 h-2 sm:w-3 sm:h-3 bg-accent/40 rounded-full animate-pulse"></div>
                                <div className="absolute top-8 right-8 sm:top-12 sm:right-12 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary/30 rounded-full"></div>
                                <div className="absolute bottom-16 left-6 sm:bottom-20 sm:left-8 w-3 h-3 sm:w-4 sm:h-4 bg-accent/20 rounded-full"></div>
                            </div>
                        </div>

                        {/* Sağ taraf - İçerik */}
                        <div ref={contentRef} className="order-2 animate-fade-in-up">
                            <div className="space-y-4 md:space-y-6 lg:space-y-8">
                                {/* Başlık Bölümü */}
                                <div>
                                    <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-br from-primary to-primary-dark rounded-full mb-3 sm:mb-4 md:mb-6 shadow-lg">
                                        <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 font-playfair tracking-tight">
                                        Danışmanlık ve Dava Takibinde
                                        <span className="block text-primary mt-1 sm:mt-2">Deneyimli Destek</span>
                                    </h2>
                                </div>

                                {/* İçerik */}
                                <div className="space-y-3 sm:space-y-4 md:space-y-6">
                                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed font-source-sans">
                                        Hukukun farklı alanlarında bireysel ve kurumsal müvekkillerimize danışmanlık ve temsil hizmeti veriyoruz.
                                    </p>

                                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed font-source-sans">
                                        Dava veya danışmanlık sürecinizin her aşamasında sizi bilgilendiriyor; doğru strateji ve zamanında adım atmanız için yanınızda oluyoruz.
                                    </p>
                                </div>

                                {/* CTA Button */}
                                <div className="pt-2 sm:pt-3 md:pt-4">
                                    <Link
                                        href="/iletisim"
                                        prefetch={false}
                                        className="inline-flex items-center justify-center w-full sm:w-auto bg-gradient-to-r from-primary to-primary-dark text-white px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-xl font-semibold shadow-lg transition-[background-image,box-shadow,transform] duration-300 hover:from-primary-light hover:to-primary hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 motion-safe:hover:-translate-y-0.5 active:translate-y-0 text-sm sm:text-base md:text-lg"
                                    >
                                        <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        BİZE ULAŞIN
                                        <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
