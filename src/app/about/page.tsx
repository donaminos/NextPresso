import { sortByDate, getLocalArticles } from "@/helpers";
import { ArticleCard } from "@/template";

export const metadata = {
  title: "About | Nextpresso",
  description: "Learn more about the journey of Nextpresso JS",
};

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
