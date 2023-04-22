import {defaultDocumentNode} from './default-document-node'
import {defineConfig, definePlugin} from 'sanity'
import {DeskStructure} from './desk-structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {deskTool} from 'sanity/desk'

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
    projectId: '8i0xb1p4',
    basePath: '/prod',
    dataset: 'production',
    plugins: [sharedConfig()],
  },
  {
    name: 'staging',
    title: 'Stage - Boo agency',
    projectId: '8i0xb1p4',
    basePath: '/stage',
    dataset: 'stage',
    plugins: [sharedConfig()],
  },
  {
    name: 'test',
    title: 'Test - Boo agency',
    projectId: '8i0xb1p4',
    basePath: '/test',
    dataset: 'test',
    plugins: [sharedConfig()],
  }
])
