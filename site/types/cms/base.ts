import { Components } from "./components"
import { Image } from "./base-schemas"

export interface CMSPage {
  components?: Components[]
  theme: CMSPageTheme
  _createdAt: string
  _updatedAt: string
  footer: FooterType
  seo?: SeoType
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

export enum FooterTheme {
  LIGHT = 'light',
  DARK = 'dark',
}

export interface FooterType {
  footerTheme?: FooterTheme
  includeFooter?: boolean
  footerCopy?: string
}

export interface SeoType {
  hideFromSearchEngine?: boolean
  description?: string
  keywords?: string[]
  featureImage?: Image
  title?: string
}
