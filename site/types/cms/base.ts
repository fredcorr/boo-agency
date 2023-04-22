import { Components } from "./components"
import { Image } from "./base-schemas"
import { AppProps } from "next/app"

export interface CMSSettings {
  navigation?: NavItem[]
  email?: string
}

export interface NavItem {
  anchorLink?: string
  linkLabel?:string 
  link: CMSPage
}

export interface SlugType {
  current: string
}

export interface CMSPage {
  settings: CMSSettings,
  components?: Components[]
  theme: CMSPageTheme
  _createdAt: string
  _updatedAt: string
  footer: FooterType
  seo?: SeoType
  title: string
  _type: string
  _id: string
  slug: SlugType;
  pageSlug?: string[],
  preview?: boolean
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
  includeNavigation?: boolean
  footerTheme?: FooterTheme
  includeFooter?: boolean
  footerCopy?: string
}

export interface SeoType {
  hideFromSearchEngine?: boolean
  featureImage?: Image
  description?: string
  keywords?: string[]
  title?: string
}
