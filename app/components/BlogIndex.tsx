"use client";

import { useMemo, useRef, useState } from "react";
import { blogPosts } from "../blog/posts";
import ArticleCard from "./ArticleCard";
import Icon from "./ui/Icon";

const perPage = 6;

export default function BlogIndex() {
  const [category, setCategory] = useState("Tümü");
  const [page, setPage] = useState(1);
  const gridRef = useRef<HTMLDivElement>(null);
  const categories = useMemo(
    () => ["Tümü", ...new Set(blogPosts.map((post) => post.category))],
    [],
  );
  const filtered = useMemo(
    () =>
      category === "Tümü"
        ? blogPosts
        : blogPosts.filter((post) => post.category === category),
    [category],
  );
  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const posts = filtered.slice((page - 1) * perPage, page * perPage);
  const changePage = (nextPage: number) => {
    setPage(nextPage);
    gridRef.current?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
      block: "start",
    });
  };

  return (
    <section
      className="container section-pad publication-index"
      aria-label="Makaleler"
    >
      <div className="blog-toolbar">
        <p className="filter-label">KONUYA GÖRE İNCELEYİN</p>
        <div
          className="category-filters"
          role="group"
          aria-label="Makale kategorileri"
        >
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={category === item}
              onClick={() => {
                setCategory(item);
                setPage(1);
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div ref={gridRef} className="blog-grid">
        <p className="blog-results" aria-live="polite">
          {filtered.length} makale · {category} · Sayfa {page} / {totalPages}
        </p>
        <div className="articles-grid">
          {posts.map((post) => (
            <ArticleCard key={post.id} post={post} />
          ))}
        </div>
      </div>
      {totalPages > 1 && (
        <nav className="pagination" aria-label="Makale sayfaları">
          <button
            aria-label="Önceki sayfa"
            disabled={page === 1}
            onClick={() => changePage(page - 1)}
          >
            <Icon name="previous" />
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              aria-label={`${i + 1}. sayfa`}
              aria-current={page === i + 1 ? "page" : undefined}
              onClick={() => changePage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            aria-label="Sonraki sayfa"
            disabled={page === totalPages}
            onClick={() => changePage(page + 1)}
          >
            <Icon name="next" />
          </button>
        </nav>
      )}
    </section>
  );
}
