// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/")
  }
};
var Marketing = defineDocumentType(() => ({
  name: "Marketing",
  filePathPattern: `marketing/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string"
    },
    category: {
      type: "string"
    }
  },
  computedFields
}));
var Application = defineDocumentType(() => ({
  name: "Application",
  filePathPattern: `application/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string"
    },
    category: {
      type: "string"
    }
  },
  computedFields
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "./content",
  documentTypes: [Marketing, Application],
  disableImportAliasWarning: true
});
export {
  Application,
  Marketing,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-W4ZYWGVX.mjs.map
