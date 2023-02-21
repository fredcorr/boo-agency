import { Image, RichText } from './base-schemas'
import { CMSPage } from './base'

export enum ComponentsTypeName {
  HOME_PAGE_HERO = 'HomePageHero',
  HERO_CONTACT = 'HeroContact',
  QUICK_LINKS = 'QuickLinks',
  SERVICES = 'Services',
  SLIDER = 'Slider',
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

export interface SlidesType {
  slideLabel?: string
  isDefaultOpen?: boolean
  slideTitle?: string
  positionNextButton?: PositionNextButton,
  slideBody?: RichText
  slideLogos?: Image[]
  slideStats?: StatType[]
}

export interface SliderType extends ComponentBase {
  _type: ComponentsTypeName.SLIDER
  slides: SlidesType[]
}

export type Components =
  | HomePageHeroType
  | QuickLinksType
  | HeroContactType
  | ServicesType
  | SliderType
