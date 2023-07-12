import { ArticleCard } from "@/template";
import { sortByDate, getLocalArticles } from "@/helpers";

const About = () => {
  const articles = sortByDate({ articles: getLocalArticles() });
  return (
    <section>
      <ol>
        {articles.map((article) => (
          <li key={article._id}>
            <ArticleCard {...article} />
          </li>
        ))}
      </ol>
    </section>
  );
};

export default About;
