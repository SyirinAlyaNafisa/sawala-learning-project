
import Link from "next/link";

type ArticleCardProps = {
  slug: string;
  category: string;
  title: string;
  description: string;
  date: string;
  index: number;
};

export default function ArticleCard({
  slug,
  category,
  title,
  description,
  date,
  index,
}: ArticleCardProps) {
  return (
    <article className="article-card">
      <div className={`article-cover cover-${(index % 3) + 1}`}>
        <span>{category}</span>

        <div className="cover-decoration">
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>

      <div className="article-content">
        <p className="article-date">{date}</p>
        <h3>{title}</h3>
        <p className="article-description">{description}</p>

        <Link
          href={`/articles/${slug}`}
          className="read-more"
        >
          Baca selengkapnya ↗
        </Link>
      </div>
    </article>
  );
}
