import HomePagehero from '_organism/HomePageHero/HomePageHero'
import HeroContact from '_molecules/HeroContact/HeroContact'
import { Components, ComponentsTypeName } from '_types/cms'
import QuickLinks from '_organism/QuickLinks/QuickLinks'
import Services from '_organism/Services/Services'
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

const RenderComponet = (data: Components) => {
  switch (data._type) {
    case ComponentsTypeName.HERO_CONTACT:
      return <DynamicHeroContact {...data} />
    case ComponentsTypeName.HOME_PAGE_HERO:
      return <DynamicHomePagehero {...data} />
    case ComponentsTypeName.QUICK_LINKS:
      return <DynamicQuickLinks {...data} />
    case ComponentsTypeName.SERVICES:
      return <DynamicServices {...data} />
    default:
      return null
  }
}

export default RenderComponet
