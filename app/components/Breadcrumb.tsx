import Link from 'next/link';
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/outline';

interface BreadcrumbItem {
    name: string;
    href: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
    const allItems = [
        { name: 'Ana Sayfa', href: '/' },
        ...items
    ];

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": allItems.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": `https://adhukukvedanismanlik.com${item.href}`
        }))
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <nav className="flex" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                    {allItems.map((item, index) => (
                        <li key={item.href} className="inline-flex items-center">
                            {index > 0 && (
                                <ChevronRightIcon className="w-4 h-4 text-gray-400 mx-1" />
                            )}
                            {index === 0 ? (
                                <Link
                                    href={item.href}
                                    className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary transition-colors"
                                >
                                    <HomeIcon className="w-4 h-4 mr-1" />
                                    {item.name}
                                </Link>
                            ) : index === allItems.length - 1 ? (
                                <span className="text-sm font-medium text-gray-500" aria-current="page">
                                    {item.name}
                                </span>
                            ) : (
                                <Link
                                    href={item.href}
                                    className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
                                >
                                    {item.name}
                                </Link>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
        </>
    );
}
