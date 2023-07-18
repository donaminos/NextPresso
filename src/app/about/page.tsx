import { sortByDate, getLocalArticles } from "@/helpers";
import { ArticleCard } from "@/template";

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
