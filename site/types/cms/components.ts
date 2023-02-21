import { Image, RichText } from './base-schemas'
import { CMSPage } from './base'

export enum ComponentsTypeName {
  HOME_PAGE_HERO = 'HomePageHero',
  HERO_CONTACT = 'HeroContact',
  QUICK_LINKS = 'QuickLinks',
  SERVICES = 'Services',
  FOOTER = 'Footer',
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

export interface HeroContactType extends ComponentBase {
  _type: ComponentsTypeName.HERO_CONTACT
  bodyText?: RichText
  phoneNumber?: string
  buttonLabel?: string
  linkedin?: string
  headline?: string
  email?: string
}

export interface ServicesCardType extends ComponentBase {
  title: string
  body: RichText
}

export interface ServicesType extends ComponentBase {
  _type: ComponentsTypeName.SERVICES
  headline?: string
  cards?: ServicesCardType[]
}

export type Components =
  | HomePageHeroType
  | QuickLinksType
  | HeroContactType
  | ServicesType
