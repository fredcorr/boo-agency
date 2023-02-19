import { Image } from "./base-schemas"
import { Components } from "./components"

export interface CMSPage {
  components?: Components[]
  theme: CMSPageTheme
  _createdAt: string
  _updatedAt: string
  seo?: Seo
  title: string
  _type: string
  _id: string
  slug: {
    current: string
  };
}

export enum CMSPageTheme {
  DARK = 'dark',
  ORANGE = 'orange',
  GRADIENT = 'gradient',
}

export interface Seo {
  hideFromSearchEngine?: boolean
  description?: string
  keywords?: string[]
  featureImage?: Image
  title?: string
}
