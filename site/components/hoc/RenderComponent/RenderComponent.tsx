import HomePagehero from '_organism/HomePageHero/HomePageHero'
import HeroContact from '_molecules/HeroContact/HeroContact'
import { Components, ComponentsTypeName } from '_types/cms'
import QuickLinks from '_organism/QuickLinks/QuickLinks'
import Services from '_organism/Services/Services'
import Slider from '_organism/WhyBoo/WhyBoo'
import Logos from '_organism/Logos/Logos'
import dynamic from 'next/dynamic'

const DynamicQuickLinks = dynamic(
  () => import('_organism/QuickLinks/QuickLinks')
) as typeof QuickLinks

const DynamicHomePagehero = dynamic(
  () => import('_organism/HomePageHero/HomePageHero')
) as typeof HomePagehero

const DynamicHeroContact = dynamic(
  () => import('_molecules/HeroContact/HeroContact')
) as typeof HeroContact

const DynamicServices = dynamic(
  () => import('_organism/Services/Services')
) as typeof Services

const DynamicWhyBoo = dynamic(
  () => import('_organism/WhyBoo/WhyBoo')
) as typeof Slider

const DynamicLogos = dynamic(
  () => import('_organism/Logos/Logos')
) as typeof Logos

const RenderComponet = (data: Components, key: number ) => {
  switch (data._type) {
    case ComponentsTypeName.HERO_CONTACT:
      return <DynamicHeroContact {...data} key={key}/>
    case ComponentsTypeName.HOME_PAGE_HERO:
      return <DynamicHomePagehero {...data} key={key} />
    case ComponentsTypeName.QUICK_LINKS:
      return <DynamicQuickLinks {...data} key={key} />
    case ComponentsTypeName.SERVICES:
      return <DynamicServices {...data} key={key} />
    case ComponentsTypeName.WHYBOO:
      return <DynamicWhyBoo {...data} number={key} key={key} />
    case ComponentsTypeName.LOGOS:
      return <DynamicLogos {...data} key={key} />
    default:
      return null
  }
}

export default RenderComponet
