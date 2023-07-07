import { allArticles } from "contentlayer/generated";

import { PostCard } from "../template/PostCard";
import { sortByDate } from "../helpers";

export default function Home() {
  const articles = sortByDate({ articles: allArticles });

  return (
    <div className="mx-auto max-w-xl py-8">
      <header className="mb-8">
        <h1 className="text-center text-2xl font-bold">
          NextPresso<span className="text-sm font-semibold">.js</span>
        </h1>
        <p className="text-center text-lg text-black">
          The Next blog for indie hackers
        </p>
      </header>
      <section>
        {articles.map((article, idx) => (
          <PostCard key={idx} {...article} />
        ))}
      </section>
    </div>
  );
}
