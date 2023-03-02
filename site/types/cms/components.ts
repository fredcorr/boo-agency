import { Image, RichText } from './base-schemas'
import { CMSPage } from './base'

export enum ComponentsTypeName {
  HOME_PAGE_HERO = 'HomePageHero',
  HERO_CONTACT = 'HeroContact',
  QUICK_LINKS = 'QuickLinks',
  SERVICES = 'Services',
  WHYBOO = 'WhyBoo',
  FOOTER = 'Footer',
}

export enum PositionNextButton {
  RIGHT = 'right',
  LEFT = 'left'
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

export interface ServicesCardType {
  title: string
  body: RichText
}

export interface ServicesType extends ComponentBase {
  _type: ComponentsTypeName.SERVICES
  headline?: string
  cards?: ServicesCardType[]
}

export interface StatType {
  statLabel?: string
  statValue?: string
}

export interface WhyBooType extends ComponentBase {
  _type: ComponentsTypeName.WHYBOO
  slideStats?: StatType[]
  clientLogos?: Image[]
  label?: string
  body?: RichText
  title?: string
  number: number
}

export type Components =
  | HomePageHeroType
  | QuickLinksType
  | HeroContactType
  | ServicesType
  | WhyBooType
