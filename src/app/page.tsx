import { ArticleCard } from "@/template/ArticleCard";
import { sortByDate, getLocalArticles } from "@/helpers";

export default function Home() {
  const articles = sortByDate({ articles: getLocalArticles() });

  return (
    <div className="mx-auto max-w-2xl my-24">
      <header className="mb-8 space-y-1 border-b border-gray-200 pb-10 text-center dark:border-gray-700">
        <h1 className="text-center text-5xl font-bold leading-9 ">
          NextPresso<span className="text-sm font-semibold">.js</span>
        </h1>
        <p className="text-center text-xl text-black">
          The Next blog for indie hackers
        </p>
      </header>

      <section>
        <ol>
          {articles.map((article) => (
            <li key={article._id}>
              <ArticleCard {...article} />
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
