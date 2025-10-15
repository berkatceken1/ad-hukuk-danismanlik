'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navigation = [
        { name: 'Ana Sayfa', href: '/' },
        { name: 'Hakkımızda', href: '/hakkimda' },
        { name: 'Uzmanlık Alanları', href: '/uzmanlik' },
        { name: 'Blog', href: '/blog' },
        { name: 'İletişim', href: '/iletisim' },
    ];

    return (
        <nav className="bg-gradient-to-r from-primary-dark via-primary to-primary-light backdrop-blur-md shadow-xl sticky top-0 z-50 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Desktop Header */}
                <div className="hidden md:flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center group">
                            <div className="w-16 h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                                <Image
                                    src="/logo/ad-hukuk-logo.png"
                                    alt="AD Hukuk ve Danışmanlık Logo"
                                    width={60}
                                    height={60}
                                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-white/90 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative group"
                                >
                                    <span className="relative z-10">{item.name}</span>
                                    <div className="absolute inset-0 bg-white/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <a
                            href="tel:+905451569613"
                            className="bg-accent text-primary px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                            +90 545 156 96 13
                        </a>
                    </div>
                </div>

                {/* Mobile Header */}
                <div className="flex md:hidden items-center h-16">
                    {/* Logo - Left */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center group">
                            <div className="w-14 h-14 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                                <Image
                                    src="/logo/ad-hukuk-logo.png"
                                    alt="AD Hukuk ve Danışmanlık Logo"
                                    width={56}
                                    height={56}
                                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>
                        </Link>
                    </div>

                    {/* Phone Number - Center */}
                    <div className="flex-1 flex justify-center">
                        <a
                            href="tel:+905451569613"
                            className="bg-accent text-primary px-4 py-2 rounded-lg text-sm font-semibold hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                            +90 545 156 96 13
                        </a>
                    </div>

                    {/* Mobile menu button - Right */}
                    <div className="flex-shrink-0">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white hover:text-accent focus:outline-none focus:text-accent transition-colors duration-300 p-2 rounded-lg hover:bg-white/10"
                            aria-label="Menüyü Aç/Kapat"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-primary-dark/95 backdrop-blur-md rounded-xl mt-2 border border-white/10 shadow-xl">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-white hover:text-accent block px-3 py-2 rounded-md text-base font-medium"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <a
                                href="tel:+905451569613"
                                className="bg-accent text-primary block px-4 py-3 rounded-lg text-base font-semibold hover:bg-accent/90 mt-4 shadow-lg transition-all duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                +90 545 156 96 13
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
