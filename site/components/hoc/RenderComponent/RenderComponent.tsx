import HomePagehero from '_organism/HomePageHero/HomePageHero'
import { Components, ComponentsTypeName } from '_types/cms'
import QuickLinks from '_organism/QuickLinks/QuickLinks'
import dynamic from 'next/dynamic'

const DynamicQuickLinks = dynamic(
  () => import('_organism/QuickLinks/QuickLinks')
) as typeof QuickLinks

const DynamicHomePagehero = dynamic(
  () => import('_organism/HomePageHero/HomePageHero')
) as typeof HomePagehero

const RenderComponet = (data: Components) => {
  switch (data._type) {
    case ComponentsTypeName.HOME_PAGE_HERO:
      return <DynamicHomePagehero {...data} />
    case ComponentsTypeName.QUICK_LINKS:
      return <DynamicQuickLinks {...data} />
    default:
      return null
  }
}

export default RenderComponet
