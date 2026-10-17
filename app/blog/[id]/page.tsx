import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "../posts";
import Icon from "../../components/ui/Icon";
import ButtonLink from "../../components/ui/ButtonLink";
import { articleImage } from "../../lib/presentation";

type Params = { params: Promise<{ id: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ id: String(post.id) }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { id } = await params;
  const post = blogPosts.find((item) => String(item.id) === id);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.id}/` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      images: [{ url: articleImage(post.category, post.image) }],
      locale: "tr_TR",
    },
  };
}

export default async function BlogDetailPage({ params }: Params) {
  const { id } = await params;
  const post = blogPosts.find((item) => String(item.id) === id);
  if (!post) notFound();
  return (
    <article className="container section-pad blog-detail">
      <Link href="/blog" className="blog-back">
        <Icon name="previous" />
        Tüm makalelere dön
      </Link>
      <header>
        <p className="eyebrow">{post.category}</p>
        <h1>{post.title}</h1>
        <p className="blog-detail-lead">{post.lead}</p>
      </header>
      <div className="blog-detail-image">
        <Image
          src={articleImage(post.category, post.image)}
          alt=""
          fill
          sizes="(max-width: 900px) 100vw, 850px"
          priority
        />
      </div>
      <div className="article-body">
        {post.content.split("\n\n").map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <div className="article-author">
        <Image
          className="article-author-logo"
          src="/logo/ad-hukuk-logo.png"
          alt=""
          width={48}
          height={45}
        />
        <div>
          <strong>Av. Ali Deniz</strong>
          <span>AD Hukuk ve Danışmanlık</span>
        </div>
      </div>
      <div className="article-note">
        <Icon name="document" />
        <p>
          Bu yazı genel bilgilendirme amacı taşır. Somut olayınıza ilişkin
          hukuki değerlendirme için doğrudan görüşme planlayabilirsiniz.
        </p>
      </div>
      <ButtonLink href="/iletisim" variant="outline">
        İletişime geçin
      </ButtonLink>
    </article>
  );
}
