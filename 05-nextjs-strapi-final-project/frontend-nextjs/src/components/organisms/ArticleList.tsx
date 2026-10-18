
"use client";

import { useState } from "react";
import ArticleCard from "@/components/molecules/ArticleCard";

export type Article = {
  slug: string;
  category: string;
  title: string;
  description: string;
  date: string;
};

type ArticleListProps = {
  articles: Article[];
};

export default function ArticleList({ articles }: ArticleListProps) {
  // Menyimpan teks yang diketik pengguna
  const [search, setSearch] = useState("");

  // Menyaring artikel berdasarkan judul
  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="articles">
      <div className="article-search">
        <input
          type="text"
          placeholder="Cari artikel berdasarkan judul..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          aria-label="Cari artikel berdasarkan judul"
        />
      </div>

      {filteredArticles.length > 0 ? (
        <div className="article-grid">
          {filteredArticles.map((article) => {
            // Mencari posisi artikel pada daftar awal
            const index = articles.findIndex(
              (item) => item.slug === article.slug
            );

            return (
              <ArticleCard
                key={article.slug}
                {...article}
                index={index}
              />
            );
          })}
        </div>
      ) : (
        <p className="search-empty">
          Artikel tidak ditemukan. Coba kata kunci lain, ya!
        </p>
      )}
    </section>
  );
}
