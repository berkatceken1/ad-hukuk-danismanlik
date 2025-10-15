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
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Sol taraf - İçerik */}
                        <div className="space-y-6">
                            {/* Başlık */}
                            <div className="mb-6">
                                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-playfair tracking-tight">
                                    Av. Ali Deniz
                                </h1>
                                <p className="text-base sm:text-lg md:text-xl text-gray-200 font-source-sans font-medium mt-2">
                                    AD Hukuk ve Danışmanlık
                                </p>
                            </div>

                            {/* Ana Başlık */}
                            <div className="mb-6">
                                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] font-playfair tracking-tight mb-4">
                                    Hukuki Sorunlarınıza
                                    <span className="block text-accent mt-2">Profesyonel Çözüm</span>
                                </h2>
                                <p className="text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl font-source-sans font-light">
                                    Hukuki sorunlarınıza güvenilir çözümler sunuyoruz.
                                    Adaletin tecelli etmesi için yanınızdayız.
                                </p>
                            </div>


                            {/* CTA Butonları */}
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                                <Link
                                    href="/iletisim"
                                    className="inline-flex items-center justify-center bg-accent text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-accent/90 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base font-source-sans"
                                >
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    Danışmanlık
                                </Link>
                                <Link
                                    href="/hakkimda"
                                    className="inline-flex items-center justify-center border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300 backdrop-blur-sm text-sm sm:text-base font-source-sans"
                                >
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    Hakkımızda
                                </Link>
                            </div>
                        </div>

                        {/* Sağ taraf - Profesyonel Fotoğraf */}
                        <div className="lg:text-right mt-8 lg:mt-0">
                            <div className="relative group">
                                {/* Ana Fotoğraf Container */}
                                <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[500px] overflow-hidden rounded-3xl shadow-2xl transform transition-all duration-700 group-hover:scale-[1.02] group-hover:shadow-3xl">
                                    {/* Fotoğraf */}
                                    <Image
                                        src="/images/alideniz1.jpg"
                                        alt="Av. Ali Deniz - Profesyonel Fotoğraf"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        style={{ objectPosition: 'center 30%' }}
                                        priority
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                                    />

                                    {/* Subtle Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/10 via-transparent to-primary-light/15"></div>

                                    {/* Border Gradient Effect */}
                                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/20 via-transparent to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>

                                {/* Floating Info Card */}
                                <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white/98 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-xl border border-gray-100/50 max-w-xs transform transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
                                    <div className="flex items-start space-x-3">
                                        {/* Profile Icon */}
                                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center shadow-lg">
                                            <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-base sm:text-lg font-bold text-gray-900 font-playfair mb-1">
                                                Av. Ali Deniz
                                            </h3>
                                            <p className="text-xs sm:text-sm text-gray-600 font-source-sans font-medium mb-2">
                                                Uzman Avukat
                                            </p>
                                            <div className="flex items-center">
                                                <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                                                <span className="text-xs text-gray-500 font-source-sans">
                                                    Profesyonel Hukuki Danışmanlık
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Decorative Elements */}
                                <div className="absolute top-6 right-6 w-3 h-3 bg-accent/40 rounded-full animate-pulse"></div>
                                <div className="absolute top-12 right-12 w-2 h-2 bg-primary-light/40 rounded-full"></div>
                                <div className="absolute bottom-20 left-8 w-4 h-4 bg-accent/20 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Uzmanlık Alanları */}
            <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%235d0c0c' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-full mb-6 shadow-lg">
                            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-playfair tracking-tight">
                            Uzmanlık Alanlarımız
                        </h2>
                        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-source-sans font-light leading-relaxed">
                            Hukukun farklı dallarında uzmanlığımızla, her türlü hukuki sorununuza
                            profesyonel çözümler sunuyoruz.
                        </p>
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
                                title: 'İcra İflas',
                                slug: 'icra-iflas',
                                description: 'Alacak takibi, icra takipleri ve iflas süreçleri',
                                icon: (
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                )
                            }
                        ].map((area, index) => (
                            <div key={index} className="group bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100/50 relative overflow-hidden">
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                                        {area.icon}
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 font-playfair group-hover:text-primary transition-colors duration-300">{area.title}</h3>
                                    <p className="text-gray-600 mb-6 text-sm sm:text-base font-source-sans leading-relaxed">{area.description}</p>
                                    <Link
                                        href={`/uzmanlik/${area.slug}`}
                                        className="inline-flex items-center text-primary hover:text-primary-dark font-semibold text-sm sm:text-base font-source-sans transition-all duration-300 group-hover:translate-x-1"
                                    >
                                        Detaylı Bilgi
                                        <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Tüm Uzmanlık Alanları Butonu */}
                    <div className="text-center mt-12">
                        <Link
                            href="/uzmanlik"
                            className="inline-flex items-center bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-4 rounded-xl font-semibold hover:from-primary-light hover:to-primary transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                            Tüm Uzmanlık Alanları
                            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Hizmet Alanları */}
            <section className="py-20 bg-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%235d0c0c' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Sol taraf - Profesyonel Hukuk Fotoğrafı */}
                        <div ref={imageRef} className="order-2 lg:order-1 animate-slide-in-left w-full">
                            <div className="relative group">
                                <div className="w-full h-[400px] sm:h-[500px] relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-700 group-hover:scale-[1.02] group-hover:shadow-3xl">
                                    <Image
                                        src="/images/hukukgorsel.png"
                                        alt="Profesyonel Hukuk Ofisi - Adalet Terazisi ve Hukuk Kitapları"
                                        fill
                                        className="object-cover object-left transition-transform duration-700 group-hover:scale-105"
                                        priority
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                                    />

                                    {/* Soldan Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-transparent"></div>

                                    {/* Hover Border Effect */}
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>

                                {/* Floating Badge */}
                                <div ref={badgeRef} className="absolute -bottom-4 -right-4 bg-white/98 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-gray-100/50 max-w-xs transform transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl animate-fade-in-up" style={{ transitionDelay: '0.5s' }}>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center shadow-lg">
                                            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-gray-900 font-playfair">Profesyonel</div>
                                            <div className="text-xs text-gray-600 font-source-sans">Hukuki Hizmet</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Decorative Elements */}
                                <div className="absolute top-6 right-6 w-3 h-3 bg-accent/40 rounded-full animate-pulse"></div>
                                <div className="absolute top-12 right-12 w-2 h-2 bg-primary/30 rounded-full"></div>
                                <div className="absolute bottom-20 left-8 w-4 h-4 bg-accent/20 rounded-full"></div>
                            </div>
                        </div>

                        {/* Sağ taraf - İçerik */}
                        <div ref={contentRef} className="order-1 lg:order-2 animate-fade-in-up">
                            <div className="space-y-8">
                                {/* Başlık Bölümü */}
                                <div>
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-full mb-6 shadow-lg">
                                        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-playfair tracking-tight">
                                        Hukukun Her Alanında
                                        <span className="block text-primary mt-2">Profesyonel Hizmet</span>
                                    </h2>
                                </div>

                                {/* İçerik */}
                                <div className="space-y-6">
                                    <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-source-sans">
                                        AD HUKUK ve DANIŞMANLIK olarak; ceza hukuku, aile hukuku, iş ve sosyal güvenlik hukuku,
                                        ticaret hukuku, icra-iflas hukuku, gayrimenkul ve kira hukuku başta olmak üzere
                                        hukukun birçok alanında müvekkillerimize profesyonel destek sunmaktayız.
                                    </p>

                                    <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-source-sans">
                                        Her bir dava ve danışmanlık sürecinde, uzman deneyimimizle müvekkillerimizin
                                        ihtiyaçlarına özel çözümler geliştiriyor; haklarını en etkin şekilde korumayı amaçlıyoruz.
                                    </p>
                                </div>

                                {/* CTA Button */}
                                <div className="pt-4">
                                    <Link
                                        href="/iletisim"
                                        className="inline-flex items-center bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-4 rounded-xl font-semibold hover:from-primary-light hover:to-primary transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg"
                                    >
                                        <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        BİZE ULAŞIN
                                        <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
