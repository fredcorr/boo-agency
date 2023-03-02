import {DeskToolOptions, deskTool} from 'sanity/desk'
import { DeskStructure } from './desk-structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {defineConfig} from 'sanity'

export default defineConfig({
  name: 'default',
  title: 'Boo agency',
  projectId: '8i0xb1p4',
  dataset: 'production',

  plugins: [deskTool(DeskStructure as DeskToolOptions), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
