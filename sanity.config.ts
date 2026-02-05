import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schema } from './sanity/schemas'
import { apiVersion, dataset, projectId } from './sanity/env'
import { codeInput } from '@sanity/code-input'

export default defineConfig({
  name: 'diamond-works',
  title: 'Diamond Works CMS',

  projectId,
  dataset,

  plugins: [structureTool(), visionTool({ defaultApiVersion: apiVersion }), codeInput()],

  schema,
})
