import { Image, RichText } from './base-schemas'
import { CMSPage, SlugType } from './base'

export enum ComponentsTypeName {
  HOME_PAGE_HERO = 'HomePageHero',
  HERO_CONTACT = 'HeroContact',
  QUICK_LINKS = 'QuickLinks',
  SERVICES = 'Services',
  WHYBOO = 'WhyBoo',
  FOOTER = 'Footer',
  LOGOS = 'Logos'
}

export enum PositionNextButton {
  RIGHT = 'right',
  LEFT = 'left'
}

export interface ComponentBase {
  anchorName?: SlugType
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
  content?: RichText
  links?: CMSPage[]
}

export interface HeroContactType extends ComponentBase {
  _type: ComponentsTypeName.HERO_CONTACT
  bodyText?: RichText
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
  cards?: ServicesCardType[]
  headline?: string
}

export interface StatType {
  statLabel?: string
  statValue?: string
}

export interface WhyBooType extends ComponentBase {
  _type: ComponentsTypeName.WHYBOO
  slideStats?: StatType[]
  body?: RichText
  title?: string
  number: number
  label?: string
}

export interface LogosType extends ComponentBase {
  _type: ComponentsTypeName.LOGOS
  clientLogos?: Image[]
  anchorName?: SlugType
  logosCopy?: RichText
  addKeyline?: boolean
}

export type Components =
  | HomePageHeroType
  | QuickLinksType
  | HeroContactType
  | ServicesType
  | WhyBooType
  | LogosType
