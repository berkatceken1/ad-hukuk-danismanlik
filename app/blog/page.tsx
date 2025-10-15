"use client";
import { useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from './posts';

// Metadata export is omitted because this is a client component.

export default function BlogPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>('Tümü');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const perPage = 6;

    const categories = useMemo(() => {
        const set = new Set<string>(blogPosts.map(p => p.category));
        return ['Tümü', ...Array.from(set)];
    }, []);

    const filteredPosts = useMemo(() => {
        if (selectedCategory !== 'Tümü') {
            return blogPosts.filter(p => p.category === selectedCategory);
        }
        const priority: Record<number, number> = { 6: 0, 7: 1, 2: 2, 8: 3, 1: 4 };
        return [...blogPosts]
            .map((p, idx) => ({ post: p, order: priority[p.id] ?? 100 + idx }))
            .sort((a, b) => a.order - b.order)
            .map(x => x.post);
    }, [selectedCategory]);

    const totalPages = Math.ceil(filteredPosts.length / perPage) || 1;
    const paginatedPosts = useMemo(() => {
        const start = (currentPage - 1) * perPage;
        return filteredPosts.slice(start, start + perPage);
    }, [filteredPosts, currentPage]);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-primary text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Hukuk Blogu</h1>
                        <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                            Hukuk alanındaki güncel gelişmeler, yasal değişiklikler ve uzman görüşlerimizi
                            blog yazılarımızda bulabilirsiniz.
                        </p>
                    </div>
                </div>
            </div>

            {/* Ana İçerik */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Kategori Filtreleri */}
                <div className="mb-12">
                    <div className="flex flex-wrap gap-3 justify-center">
                        {categories.map((category) => {
                            const active = selectedCategory === category;
                            return (
                                <button
                                    key={category}
                                    onClick={() => { setSelectedCategory(category); setCurrentPage(1); }}
                                    className={`px-6 py-2 rounded-full font-medium transition-colors ${active ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-primary hover:text-white shadow-md'}`}
                                >
                                    {category}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Blog Yazıları */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {paginatedPosts.map((post) => (
                        <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            {/* Blog Görseli */}
                            <div className="relative h-48 bg-gray-200">
                                {post.image ? (
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover"
                                        priority={post.id === 6}
                                    />
                                ) : (
                                    <div className="h-full w-full flex items-center justify-center text-center">
                                        <div>
                                            <svg className="w-16 h-16 text-gray-400 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                            </svg>
                                            <p className="text-gray-500 text-sm">Blog Görseli</p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* İçerik */}
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                                        {post.category}
                                    </span>
                                </div>

                                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                                    {post.title}
                                </h2>

                                <p className="text-gray-600 mb-4 line-clamp-3">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center justify-end">
                                    <Link href={`/blog/${post.id}`} className="inline-flex items-center text-primary hover:text-primary-dark font-medium">
                                        Devamını Oku
                                        <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Sayfalama */}
                <div className="mt-12 flex justify-center">
                    <nav className="flex items-center space-x-2">
                        <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1} className="px-3 py-2 text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        {Array.from({ length: totalPages }).map((_, i) => {
                            const page = i + 1;
                            const active = page === currentPage;
                            return (
                                <button key={page} onClick={() => setCurrentPage(page)} className={`px-4 py-2 rounded-md ${active ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100'}`}>{page}</button>
                            );
                        })}
                        <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages} className="px-3 py-2 text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    );
}
