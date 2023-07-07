import { compareDesc } from "date-fns";
import { Article } from "contentlayer/generated";

export const generateStaticParams = async ({ articles = [] }) =>
  articles.map(({ _raw }) => ({ slug: _raw.flattenedPath }));

export const findBySlug = ({ articles = [], slug }): Article => {
  return slug === "index"
    ? articles.find(({ _raw }) => _raw.flattenedPath === "")
    : articles.find(({ _raw }) => _raw.flattenedPath === slug);
};

export const sortByDate = ({ articles }: { articles: Article[] }) =>
  articles.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
