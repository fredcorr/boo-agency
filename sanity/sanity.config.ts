import { defaultDocumentNode } from './default-document-node'
import { defineConfig, definePlugin } from 'sanity'
import { DeskStructure } from './desk-structure'
import { visionTool } from '@sanity/vision'
import { DataSets } from './types/base'
import { schemaTypes } from './schemas'
import { deskTool } from 'sanity/desk'

const sharedConfig = definePlugin({
  name: 'shareConfig',
  plugins: [
    deskTool({
      structure: DeskStructure,
      defaultDocumentNode,
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
})

export default defineConfig([
  {
    name: 'default',
    title: 'Boo agency',
    projectId: process.env.SANITY_STUDIO_PROJECT_ID as string,
    basePath: '/prod',
    dataset: DataSets.PROD,
    plugins: [sharedConfig()],
  },
  {
    name: 'staging',
    title: 'Stage - Boo agency',
    projectId: process.env.SANITY_STUDIO_PROJECT_ID as string,
    basePath: '/stage',
    dataset: DataSets.STAGE,
    plugins: [sharedConfig()],
  },
  {
    name: 'test',
    title: 'Test - Boo agency',
    projectId: process.env.SANITY_STUDIO_PROJECT_ID as string,
    basePath: '/test',
    dataset: DataSets.TEST,
    plugins: [sharedConfig()],
  },
])
