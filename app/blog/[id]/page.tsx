import { notFound } from 'next/navigation';
import { blogPosts } from '../posts';

type Params = { params: Promise<{ id: string }> };

export function generateStaticParams() {
    return blogPosts.map(post => ({ id: String(post.id) }));
}

export default async function BlogDetailPage({ params }: Params) {
    const { id } = await params;
    const numericId = Number(id);
    const post = blogPosts.find(p => p.id === numericId);
    if (!post) return notFound();

    return (
        <div className="min-h-screen bg-gray-50">
            <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <header className="mb-8">
                    <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                        {post.category}
                    </span>
                    <h1 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900">{post.title}</h1>
                    <p className="mt-3 text-gray-600 text-lg leading-relaxed">{post.lead}</p>
                </header>

                <div className="prose prose-lg max-w-none text-gray-800">
                    {post.content.split('\n\n').map((para, i) => (
                        <p key={i}>{para}</p>
                    ))}
                </div>
            </article>
        </div>
    );
}


