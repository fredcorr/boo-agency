import { Image, RichText } from "./base-schemas"

export enum ComponentsTypeName {
  HOME_PAGE_HERO = 'HomePageHero'
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

export type Components = HomePageHeroType