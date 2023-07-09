import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Article = defineDocumentType(() => ({
  name: "Article",
  filePathPattern: "**/*.md",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: false },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: ({ _raw, _id }) => {
        if (_id.includes("index")) {
          return `/articles/index`;
        }

        return `/articles/${_raw.flattenedPath}`;
      },
    },
  },
}));

export default makeSource({
  contentDirPath: "docs/Backstage",
  documentTypes: [Article],
});
