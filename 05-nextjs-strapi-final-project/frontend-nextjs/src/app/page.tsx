
import ArticleList, {
  type Article,
} from "@/components/organisms/ArticleList";
import Button from "@/components/atoms/Button";

const articles: Article[] = [
  {
    category: "Teknologi",
    title: "Mengenal Next.js App Router",
    description:
      "Memahami routing, page, dan layout untuk membangun aplikasi web yang terstruktur.",
    date: "Materi 01",
  },
  {
    category: "Web Development",
    title: "Memahami Atomic Design",
    description:
      "Menyusun komponen UI menjadi atoms, molecules, dan organisms.",
    date: "Materi 02",
  },
  {
    category: "Fullstack",
    title: "Integrasi Next.js dan Strapi",
    description:
      "Mengenal REST API untuk mengambil data artikel dari CMS.",
    date: "Materi 03",
  },
];

export default function Home() {
  return (
    <main className="page">
      <header className="header">
        <a href="/" className="logo">
          article<span>space.</span>
        </a>

        <nav>
          <a href="/">Beranda</a>
          <a href="#articles">Artikel</a>
        </nav>
      </header>

      <section className="hero">
        <p className="eyebrow">YOUR DAILY KNOWLEDGE</p>

        <h1>
          Cerita, ide, dan wawasan
          <br />
          <span>dalam satu ruang.</span>
        </h1>

        <p className="hero-description">
          Temukan artikel menarik seputar teknologi,
          pengembangan web, dan perjalanan belajar.
        </p>

        <Button>Jelajahi Artikel →</Button>
        
      </section>

      <section id="articles" className="articles-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">EXPLORE & LEARN</p>
            <h2>Artikel Terbaru</h2>
          </div>

          <span className="article-count">
            {articles.length} Artikel
          </span>
        </div>

        <ArticleList articles={articles} />
      </section>

      <footer className="footer">
        <p>article space.</p>
        <span>Belajar dan berkembang bersama.</span>
      </footer>
    </main>
  );
}
