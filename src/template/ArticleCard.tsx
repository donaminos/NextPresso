import Link from "next/link";
import { format, parseISO } from "date-fns";
import { Article } from "contentlayer/generated";

export function ArticleCard(article: Article) {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link
          href={article.url}
          className="text-blue-700 hover:text-blue-900 dark:text-blue-400"
        >
          {article.title}
        </Link>
      </h2>
      {article.date ? (
        <time
          dateTime={article.date}
          className="mb-2 block text-xs text-gray-600"
        >
          {format(parseISO(article.date), "LLLL d, yyyy")}
        </time>
      ) : null}
    </div>
  );
}
