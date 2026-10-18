import ReferenceLinks from "@/components/molecules/ReferenceLinks";
import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import {
  getMateriBySlug,
  getMateriNavigation,
} from "@/lib/strapi";

function LoadingMateri() {
  return (
    <main className="page">
      <p>Memuat materi pembelajaran...</p>
    </main>
  );
}

async function MateriContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const [materi, navigation] = await Promise.all([
    getMateriBySlug(slug),
    getMateriNavigation(slug),
  ]);

  if (!materi) {
    notFound();
  }

  return (
    <main className="page">
      <article className="article-detail">
        <Link href="/" className="read-more">
          ← Kembali ke Beranda
        </Link>

        <p className="eyebrow">{materi.category}</p>

        <h1>{materi.title}</h1>

        <p className="article-date">
          Minggu {materi.week}–{materi.week + 1}
        </p>

        <p className="hero-description">
          {materi.description}
        </p>

        {materi.learningObjectives && (
          <section className="learning-objectives">
            <h2>Tujuan Pembelajaran</h2>
            <p className="article-detail-content">
              {materi.learningObjectives}
            </p>
          </section>
        )}

        <section className="article-detail-content">
          <h2>Isi Materi</h2>

          {materi.content && materi.content.length > 0 ? (
            <BlocksRenderer content={materi.content} />
          ) : (
            <p>Belum ada isi materi.</p>
          )}
        </section>

        {materi.codeExample && (
          <section className="code-example">
            <h2>Contoh Kode</h2>
            <pre>
              <code>{materi.codeExample}</code>
            </pre>
          </section>
        )}

       {materi.references && (
  <section className="article-references">
    <h2>Referensi</h2>
    <ReferenceLinks references={materi.references} />
  </section>
)}

        <nav className="materi-navigation" aria-label="Navigasi materi">
          <div className="materi-navigation-item">
            {navigation.previous ? (
              <>
                <span className="materi-navigation-label">
                  ← Materi Sebelumnya
                </span>
                <Link
                  href={`/articles/${navigation.previous.slug}`}
                  className="materi-navigation-link"
                >
                  {navigation.previous.title}
                </Link>
              </>
            ) : (
              <span className="materi-navigation-muted">
                Ini materi pertama
              </span>
            )}
          </div>

          <div className="materi-navigation-item next">
            {navigation.next ? (
              <>
                <span className="materi-navigation-label">
                  Materi Selanjutnya →
                </span>
                <Link
                  href={`/articles/${navigation.next.slug}`}
                  className="materi-navigation-link"
                >
                  {navigation.next.title}
                </Link>
              </>
            ) : (
              <span className="materi-navigation-muted">
                Kamu sudah di materi terakhir!
              </span>
            )}
          </div>
        </nav>
      </article>
    </main>
  );
}

export default function ArticleDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense fallback={<LoadingMateri />}>
      <MateriContent params={params} />
    </Suspense>
  );
}
