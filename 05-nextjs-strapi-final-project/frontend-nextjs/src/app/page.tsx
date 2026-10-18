
import { Suspense } from "react";
import ArticleList, {
  type Article,
} from "@/components/organisms/ArticleList";
import Button from "@/components/atoms/Button";
import { getMateri } from "@/lib/strapi";

function LoadingMateri() {
  return (
    <section id="articles" className="articles-section">
      <p>Memuat materi pembelajaran...</p>
    </section>
  );
}

async function MateriSection() {
  const materi = await getMateri();

  const articles: Article[] = materi.map((item) => ({
    slug: item.slug,
    category: item.category,
    title: item.title,
    description: item.description,
    date: `Minggu ${item.week}–${item.week + 1}`,
  }));

  return (
    <section id="articles" className="articles-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">EXPLORE & LEARN</p>
          <h2>Materi Pembelajaran</h2>
        </div>

        <span className="article-count">
          {articles.length} Materi
        </span>
      </div>

      <ArticleList articles={articles} />
    </section>
  );
}

export default function Home() {
  return (
    <main className="page">
      <header className="header">
        <a href="/" className="logo">
          Sawala <span>Learning Hub.</span>
        </a>

        <nav>
          <a href="/">Beranda</a>
          <a href="#articles">Materi</a>
        </nav>
      </header>

      <section className="hero">
        <p className="eyebrow">YOUR LEARNING JOURNEY</p>

        <h1>
          Belajar, berkembang,
          <br />
          <span>dan membangun masa depan.</span>
        </h1>

        <p className="hero-description">
          Pelajari materi pengembangan web secara bertahap
          melalui perjalanan belajar bersama Sawala.
        </p>

        <Button>Jelajahi Materi →</Button>
      </section>

      <Suspense fallback={<LoadingMateri />}>
        <MateriSection />
      </Suspense>

      <footer className="footer">
        <p>Sawala Learning Hub.</p>
        <span>Belajar dan berkembang bersama.</span>
      </footer>
    </main>
  );
}
