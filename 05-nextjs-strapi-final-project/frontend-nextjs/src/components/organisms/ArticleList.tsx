
import ArticleCard from "@/components/molecules/ArticleCard";

export type Article = {
  category: string;
  title: string;
  description: string;
  date: string;
};

type ArticleListProps = {
  articles: Article[];
};

export default function ArticleList({ articles }: ArticleListProps) {
  return (
    <div className="article-grid">
      {articles.map((article, index) => (
        <ArticleCard
          key={article.title}
          {...article}
          index={index}
        />
      ))}
    </div>
  );
}
