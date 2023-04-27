import { defineDocumentType, makeSource } from 'contentlayer/source-files'

const computedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/'),
  },
}

export const Marketing = defineDocumentType(() => ({
  name: 'Marketing',
  filePathPattern: `marketing/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
    },
    category: {
      type: 'string',
    },
  },
  computedFields,
}))

export const Application = defineDocumentType(() => ({
  name: 'Application',
  filePathPattern: `application/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
    },
    category: {
      type: 'string',
    },
  },
  computedFields,
}))

export default makeSource({
  contentDirPath: './content',
  documentTypes: [Marketing, Application],
  disableImportAliasWarning: true,
})
