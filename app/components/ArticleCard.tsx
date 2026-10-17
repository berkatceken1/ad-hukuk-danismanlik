import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "../blog/posts";
import Icon from "./ui/Icon";
import { articleImage } from "../lib/presentation";

export default function ArticleCard({
  post,
  compact = false,
}: {
  post: BlogPost;
  compact?: boolean;
}) {
  return (
    <article className="article-card">
      <Link
        href={`/blog/${post.id}`}
        className="article-card-image"
        tabIndex={-1}
        aria-hidden="true"
      >
        <Image
          src={articleImage(post.category, post.image)}
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 33vw"
        />
      </Link>
      <div className="article-card-body">
        <span className="eyebrow">{post.category}</span>
        <h3>
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </h3>
        {!compact && <p>{post.excerpt}</p>}
        <Link href={`/blog/${post.id}`} className="article-read">
          Makaleyi okuyun
          <Icon name="external" />
          <span className="sr-only">: {post.title}</span>
        </Link>
      </div>
    </article>
  );
}
