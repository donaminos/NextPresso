import { compareDesc } from "date-fns";
import { Article } from "contentlayer/generated";

const INDEX_PAGE = "index";

export const generateStaticParams = async ({ articles = [] }) =>
  articles.map(({ _raw }) => ({ slug: _raw.flattenedPath || INDEX_PAGE }));

export const findBySlug = ({ articles = [], slug }): Article => {
  const slugWithoutExtension = slug.replace(".md", "");

  return slugWithoutExtension === INDEX_PAGE
    ? articles.find(({ _raw }) => _raw.flattenedPath === "")
    : articles.find(({ _raw }) => _raw.flattenedPath === slugWithoutExtension);
};

export const sortByDate = ({ articles }: { articles: Article[] }) =>
  articles.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
