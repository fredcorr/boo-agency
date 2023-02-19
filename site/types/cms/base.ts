export interface CMSPage {
  _createdAt: string
  _updatedAt: string
  seo_details: Seo
  theme: CMSPageTheme
  _type: string
  _id: string
  title: string
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
  description: string
  keywords?: string[]
  hideFromSearchEngine?: boolean
}
