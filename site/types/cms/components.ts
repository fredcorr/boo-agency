import { Image, RichText } from './base-schemas'
import { CMSPage } from './base'

export enum ComponentsTypeName {
  HOME_PAGE_HERO = 'HomePageHero',
  QUICK_LINKS = 'QuickLinks',
}

export interface ComponentBase {
  _key: string
}

export interface HomePageHeroType extends ComponentBase {
  _type: ComponentsTypeName.HOME_PAGE_HERO
  subHeadline?: string
  headline?: string
  number?: number
  body?: RichText
  video?: Image
}

export interface QuickLinksType extends ComponentBase {
  _type: ComponentsTypeName.QUICK_LINKS
  headline?: string
  links?: CMSPage[]
}

export type Components = HomePageHeroType | QuickLinksType
