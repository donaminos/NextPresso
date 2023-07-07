import { format, parseISO } from "date-fns";
import { allArticles } from "contentlayer/generated";
import { findBySlug } from "../../../helpers";

export const generateStaticParams = async () =>
  allArticles.map(({ _raw }) => ({ slug: _raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const article = findBySlug({
    articles: allArticles,
    slug: params.slug,
  });

  if (!article) throw new Error(`Article not found for slug: ${params.slug}`);

  return { title: article.title };
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
        {article.date ? (
          <time dateTime={article.date} className="mb-1 text-xs text-gray-600">
            {format(parseISO(article.date), "LLLL d, yyyy")}
          </time>
        ) : null}

        <h1 className="text-3xl font-bold">{article.title}</h1>
      </div>
      <div
        className="[&>*]:mb-3 [&>*:last-child]:mb-0"
        dangerouslySetInnerHTML={{ __html: article.body.html }}
      />
    </article>
  );
};

export default ArticleLayout;
