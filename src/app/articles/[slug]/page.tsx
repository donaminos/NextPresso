import { findBySlug, generateStaticParams, getLocalArticles } from "@/helpers";
import { format, parseISO } from "date-fns";

export { generateStaticParams };

const allArticles = getLocalArticles();

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const article = findBySlug({
    articles: allArticles,
    slug: params.slug,
  });

  return {
    title: article?.title || "Nextpresso",
    description:
      article?.title ||
      `Nextpresso article published on: ${format(
        parseISO(article.date),
        "LLLL d, yyyy"
      )}`,
  };
};

const ArticleLayout = ({ params }: { params: { slug: string } }) => {
  const article = findBySlug({
    articles: allArticles,
    slug: params.slug,
  });

  if (!article) throw new Error(`Article not found for slug: ${params.slug}`);

  return (
    <article className="mx-auto max-w-xl py-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold">{article.title}</h1>
        {article.date ? (
          <time dateTime={article.date} className="mb-1 text-xs text-gray-600">
            {format(parseISO(article.date), "LLLL d, yyyy")}
          </time>
        ) : null}
      </div>
      <div
        className="[&>*]:mb-3 [&>*:last-child]:mb-0"
        dangerouslySetInnerHTML={{ __html: article.body.html }}
      />
    </article>
  );
};

export default ArticleLayout;
