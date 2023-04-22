// ./src/lib/sanity.preview.ts
import { definePreview } from 'next-sanity/preview'
import { sanityConfig } from '_sanity/client'

const onPublicAccessOnly = () => {
  throw new Error(`Unable to load preview as you're not logged in`)
}

export const usePreview = definePreview({
  projectId: sanityConfig.projectId,
  dataset: sanityConfig.dataset,
  onPublicAccessOnly,
})
