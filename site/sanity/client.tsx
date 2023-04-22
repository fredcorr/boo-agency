import { createClient } from 'next-sanity'

export const sanityConfig = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT as string,
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: 'v1',
}

export const sanityClient = createClient(sanityConfig)

export const previewClient = createClient({
  ...sanityConfig,
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
})

export const getClient = (preview?: boolean) =>
  preview ? previewClient : sanityClient
