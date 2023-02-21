import HomePagehero from '_organism/HomePageHero/HomePageHero'
import HeroContact from '_molecules/HeroContact/HeroContact'
import { Components, ComponentsTypeName } from '_types/cms'
import QuickLinks from '_organism/QuickLinks/QuickLinks'
import Services from '_organism/Services/Services'
import Slider from '_organism/Slider/Slider'
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

const DynamicSlider = dynamic(
  () => import('_organism/Slider/Slider')
) as typeof Slider

const RenderComponet = (data: Components) => {
  switch (data._type) {
    case ComponentsTypeName.HERO_CONTACT:
      return <DynamicHeroContact {...data} key={data._key}/>
    case ComponentsTypeName.HOME_PAGE_HERO:
      return <DynamicHomePagehero {...data} key={data._key} />
    case ComponentsTypeName.QUICK_LINKS:
      return <DynamicQuickLinks {...data} key={data._key} />
    case ComponentsTypeName.SERVICES:
      return <DynamicServices {...data} key={data._key} />
    case ComponentsTypeName.SLIDER:
      return <DynamicSlider {...data} key={data._key} />
    default:
      return null
  }
}

export default RenderComponet
